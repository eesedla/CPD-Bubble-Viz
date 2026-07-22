let DATA, TOTAL_HEARINGS, DECISION_ORDER, DECISION_COLORS;

const chartArea = document.getElementById('chart-area');
const toggleBar = document.getElementById('toggle-bar');
const backBtn = document.getElementById('back-btn');
const chartHeader = document.getElementById('chart-header');
const chartTitle = document.getElementById('chart-title');
const chartSubtitle = document.getElementById('chart-subtitle');
 
let activeDecisions = new Set();
let tooltip = null;
let mode = 'groups';
let activeGroup = null;
 
backBtn.addEventListener('click', function() {
  showGroups();
});
 
// Create tooltip element
function initTooltip() {
  tooltip = document.createElement('div');
  tooltip.className = 'bar-tooltip';
  chartArea.appendChild(tooltip);
}
 
// --- Toggle bar ---
function buildToggleBar() {
  toggleBar.innerHTML = '<span class="toggle-label">Filter by outcome:</span>';
  DECISION_ORDER.forEach(function(label) {
    var isAll = label === 'All';
    var isActive = isAll ? activeDecisions.size === 0 : activeDecisions.has(label);
    var btn = document.createElement('button');
    btn.className = 'toggle-btn' + (isActive ? ' active' : '');
    btn.dataset.decision = label;
    if (isAll) {
      btn.innerHTML = 'All outcomes';
    } else {
      var color = DECISION_COLORS[label];
      var dotBg = isActive ? 'rgba(255,255,255,0.8)' : color;
      btn.innerHTML = '<span class="dot" style="background:' + dotBg + '"></span>' + label;
    }
    if (isActive) {
      btn.style.background = isAll ? '#404F54' : DECISION_COLORS[label];
    }
    btn.addEventListener('click', function() {
      if (isAll) {
        activeDecisions.clear();
      } else if (activeDecisions.has(label)) {
        activeDecisions.delete(label);
      } else {
        activeDecisions.add(label);
      }
      buildToggleBar();
      renderBars();
    });
    toggleBar.appendChild(btn);
  });
}
 
// --- Filtered count helper ---
function filteredCount(item) {
  if (activeDecisions.size === 0) return item.count;
  var total = 0;
  (item.decisions || []).forEach(function(d) {
    if (activeDecisions.has(d.label)) total += d.count;
  });
  return total;
}
 
// --- Render bars ---
function renderBars() {
  if (mode === 'groups') {
    renderGroupBars();
  } else {
    renderChargeBars();
  }
}
 
function renderGroupBars() {
  clearBars();
  backBtn.style.display = 'none';
  chartHeader.classList.remove('visible');
  chartTitle.textContent = '';
  chartSubtitle.textContent = '';
 
  var sorted = DATA.slice().sort(function(a, b) { return filteredCount(b) - filteredCount(a); });
 
  var maxCount = sorted.length > 0 ? sorted[0].count : 1;
  sorted.forEach(function(group, i) {
    var fc = filteredCount(group);
    var row = document.createElement('div');
    row.className = 'bar-row clickable';
 
    // Label
    var label = document.createElement('div');
    label.className = 'bar-row-label';
    var countText;
    if (activeDecisions.size === 0) {
      countText = fc.toLocaleString() + ' hearings (' + group.pct + '%)';
    } else {
      countText = fc.toLocaleString() + ' of ' + group.count.toLocaleString() + ' cases';
    }
    label.innerHTML = '<span>' + group.group + '</span><span class="count-label">' + countText + '</span>';
 
    var track = document.createElement('div');
    track.className = 'bar-track';
 
    if (activeDecisions.size === 0) {
      // Total bar length is fixed by group size relative to the largest
      // group; decisions can double-count within a group (a hearing with
      // multiple charges in the same group, or multiple outcomes, gets
      // tallied more than once — see build_data.py), so segment widths are
      // each decision's SHARE of that group's decision total, not its raw
      // count against maxCount. That keeps the bar length honest and
      // guarantees every outcome present gets a visible slice instead of
      // some being pushed past 100% and clipped by the track.
      var barWidthPct = maxCount > 0 ? (group.count / maxCount * 100) : 0;
      var decisionsSum = 0;
      DECISION_ORDER.forEach(function(dlabel) {
        if (dlabel === 'All') return;
        var dec = (group.decisions || []).find(function(d) { return d.label === dlabel; });
        decisionsSum += dec ? dec.count : 0;
      });
      var runningPct = 0;
      DECISION_ORDER.forEach(function(dlabel) {
        if (dlabel === 'All') return;
        var dec = (group.decisions || []).find(function(d) { return d.label === dlabel; });
        var dc = dec ? dec.count : 0;
        if (dc <= 0) return;
        var segWidthPct = decisionsSum > 0 ? (dc / decisionsSum) * barWidthPct : 0;
        if (segWidthPct <= 0) return;
        var seg = document.createElement('div');
        seg.className = 'bar-segment';
        seg.style.left = runningPct + '%';
        seg.style.width = segWidthPct + '%';
        seg.style.background = DECISION_COLORS[dlabel];
        seg.style.opacity = '0.85';
        if (runningPct > 0) {
          seg.style.borderLeft = '1px solid rgba(244,240,230,0.6)';
        }
        track.appendChild(seg);
        runningPct += segWidthPct;
      });
    } else {
      // Selecting multiple outcomes can double-count a hearing (same source
      // quirk as the unfiltered view — see the comment above), so cap the
      // denominator at whichever is bigger, the group's own total or the
      // selected outcomes' raw sum. That keeps the usual single-outcome
      // case reading as "% of this group" while still guaranteeing the
      // segments never exceed 100% and get clipped when several outcomes
      // that share hearings are selected together.
      var rawSum = 0;
      var selectedDc = {};
      DECISION_ORDER.forEach(function(dlabel) {
        if (dlabel === 'All' || !activeDecisions.has(dlabel)) return;
        var dec = (group.decisions || []).find(function(d) { return d.label === dlabel; });
        var dc = dec ? dec.count : 0;
        selectedDc[dlabel] = dc;
        rawSum += dc;
      });
      var denom = Math.max(group.count, rawSum, 1);
      var runningPct = 0;
      DECISION_ORDER.forEach(function(dlabel) {
        if (dlabel === 'All' || !activeDecisions.has(dlabel)) return;
        var dc = selectedDc[dlabel] || 0;
        if (dc <= 0) return;
        var segPct = (dc / denom) * 100;
        var seg = document.createElement('div');
        seg.className = 'bar-segment';
        seg.style.left = runningPct + '%';
        seg.style.width = segPct + '%';
        seg.style.background = DECISION_COLORS[dlabel];
        seg.style.opacity = '0.85';
        if (runningPct > 0) seg.style.borderLeft = '1px solid rgba(244,240,230,0.6)';
        track.appendChild(seg);
        runningPct += segPct;
      });
    }
 
    // Click to drill down
    row.addEventListener('click', function() {
      drillDown(group);
    });
 
    // Hover events for tooltip
    row.addEventListener('mouseenter', function(e) {
      showGroupTooltip(group, e);
    });
    row.addEventListener('mousemove', function(e) {
      positionTooltip(e);
    });
    row.addEventListener('mouseleave', function() {
      tooltip.classList.remove('visible');
    });
 
    row.appendChild(label);
    row.appendChild(track);
    animateRowIn(row, i);
    chartArea.insertBefore(row, tooltip);
  });
}
 
function renderChargeBars() {
  clearBars();
 
  if (!activeGroup) return;
  var grp = activeGroup;
 
  backBtn.style.display = 'inline-block';
  chartHeader.classList.add('visible');
  chartTitle.textContent = grp.group;
  chartSubtitle.textContent = grp.count.toLocaleString() + ' cases · ' + grp.pct + '% of all hearings';
 
  var charges = grp.charges.slice().sort(function(a, b) { return filteredCount(b) - filteredCount(a); });
 
  var maxChargeCount = charges.length > 0 ? charges[0].count : 1;
  charges.forEach(function(charge, i) {
    var fc = filteredCount(charge);
    var row = document.createElement('div');
    row.className = 'bar-row';
 
    // Label
    var label = document.createElement('div');
    label.className = 'bar-row-label';
    var countText;
    if (activeDecisions.size === 0) {
      countText = fc.toLocaleString() + ' hearings (' + charge.pct + '% of ' + charge.count.toLocaleString() + ' total charges)';
    } else {
      countText = fc.toLocaleString() + ' of ' + charge.count.toLocaleString() + ' total charges';
    }
    label.innerHTML = '<span>' + charge.name + '</span><span class="count-label">' + countText + '</span>';
 
    var track = document.createElement('div');
    track.className = 'bar-track';
 
    if (activeDecisions.size === 0) {
      // Same fixed-length-then-share approach as the group bars: total
      // width tracks charge.count against the largest charge, and each
      // decision gets its share of that charge's decision total so
      // double-counted outcomes can't push later segments past 100%.
      var barWidthPct = maxChargeCount > 0 ? (charge.count / maxChargeCount * 100) : 0;
      var decisionsSum = 0;
      DECISION_ORDER.forEach(function(dlabel) {
        if (dlabel === 'All') return;
        var dec = (charge.decisions || []).find(function(d) { return d.label === dlabel; });
        decisionsSum += dec ? dec.count : 0;
      });
      var runningPct = 0;
      DECISION_ORDER.forEach(function(dlabel) {
        if (dlabel === 'All') return;
        var dec = (charge.decisions || []).find(function(d) { return d.label === dlabel; });
        var dc = dec ? dec.count : 0;
        if (dc <= 0) return;
        var segWidthPct = decisionsSum > 0 ? (dc / decisionsSum) * barWidthPct : 0;
        if (segWidthPct <= 0) return;
        var seg = document.createElement('div');
        seg.className = 'bar-segment';
        seg.style.left = runningPct + '%';
        seg.style.width = segWidthPct + '%';
        seg.style.background = DECISION_COLORS[dlabel];
        seg.style.opacity = '0.85';
        if (runningPct > 0) {
          seg.style.borderLeft = '1px solid rgba(244,240,230,0.6)';
        }
        track.appendChild(seg);
        runningPct += segWidthPct;
      });
    } else {
      // Same overflow guard as the group bars' filtered branch.
      var rawSum = 0;
      var selectedDc = {};
      DECISION_ORDER.forEach(function(dlabel) {
        if (dlabel === 'All' || !activeDecisions.has(dlabel)) return;
        var dec = (charge.decisions || []).find(function(d) { return d.label === dlabel; });
        var dc = dec ? dec.count : 0;
        selectedDc[dlabel] = dc;
        rawSum += dc;
      });
      var denom = Math.max(charge.count, rawSum, 1);
      var runningPct = 0;
      DECISION_ORDER.forEach(function(dlabel) {
        if (dlabel === 'All' || !activeDecisions.has(dlabel)) return;
        var dc = selectedDc[dlabel] || 0;
        if (dc <= 0) return;
        var segPct = (dc / denom) * 100;
        var seg = document.createElement('div');
        seg.className = 'bar-segment';
        seg.style.left = runningPct + '%';
        seg.style.width = segPct + '%';
        seg.style.background = DECISION_COLORS[dlabel];
        seg.style.opacity = '0.85';
        if (runningPct > 0) seg.style.borderLeft = '1px solid rgba(244,240,230,0.6)';
        track.appendChild(seg);
        runningPct += segPct;
      });
    }
 
    // Hover events for tooltip
    row.addEventListener('mouseenter', function(e) {
      showChargeTooltip(charge, grp, e);
    });
    row.addEventListener('mousemove', function(e) {
      positionTooltip(e);
    });
    row.addEventListener('mouseleave', function() {
      tooltip.classList.remove('visible');
    });
 
    row.appendChild(label);
    row.appendChild(track);
    animateRowIn(row, i);
    chartArea.insertBefore(row, tooltip);
  });
}
 
function clearBars() {
  chartArea.querySelectorAll('.bar-row').forEach(function(el) { el.remove(); });
  tooltip.classList.remove('visible');
}
 
function animateRowIn(row, i) {
  row.style.opacity = '0';
  row.style.transform = 'translateX(-8px)';
  row.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
  row.style.transitionDelay = (i * 0.04) + 's';
  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      row.style.opacity = '1';
      row.style.transform = 'translateX(0)';
    });
  });
}
 
// --- Drill down / back ---
function drillDown(group) {
  activeGroup = group;
  mode = 'charges';
  renderBars();
}
 
function showGroups() {
  mode = 'groups';
  activeGroup = null;
  renderBars();
}
 
// --- Tooltips ---
function showGroupTooltip(group, e) {
  var fc = filteredCount(group);
  var html = '<span class="tt-title">' + group.group + '</span>';
 
  if (activeDecisions.size === 0) {
    html += '<span class="tt-total">' + group.count.toLocaleString() + ' hearings (' + group.pct + '% of all cases)</span>';
 
    if (group.charges && group.charges.length > 0) {
      html += '<span class="tt-section-label">Charges in this category</span>';
      var charges = group.charges.slice().sort(function(a, b) { return b.count - a.count; });
      charges.forEach(function(c) {
        var pct = Math.round(c.count / group.count * 100);
        html += '<div class="tt-row">'
          + '<span class="tt-label">' + c.name + '</span>'
          + '<span class="tt-count">' + c.count + '</span>'
          + '<span class="tt-pct">(' + pct + '%)</span></div>';
      });
    }
 
    html += '<hr class="tt-divider">';
    html += '<span class="tt-section-label">Outcomes</span>';
    var decisions = (group.decisions || []).slice().sort(function(a, b) { return b.count - a.count; });
    decisions.forEach(function(d) {
      var pct = Math.round(d.count / group.count * 100);
      html += '<div class="tt-row">'
        + '<div class="tt-swatch" style="background:' + DECISION_COLORS[d.label] + '"></div>'
        + '<span class="tt-label">' + d.label + '</span>'
        + '<span class="tt-count">' + d.count + '</span>'
        + '<span class="tt-pct">(' + pct + '%)</span></div>';
    });
  } else {
    var pctOfGroup = group.count > 0 ? Math.round(fc / group.count * 100) : 0;
    html += '<span class="tt-total">' + fc + ' of ' + group.count.toLocaleString() + ' cases (' + pctOfGroup + '%)</span>';
    var selectedLabels = DECISION_ORDER.filter(function(d) { return d !== 'All' && activeDecisions.has(d); });
    selectedLabels.forEach(function(dlabel) {
      var dec = (group.decisions || []).find(function(d) { return d.label === dlabel; });
      var dc = dec ? dec.count : 0;
      if (dc === 0) return;
      html += '<div class="tt-row">'
        + '<div class="tt-swatch" style="background:' + DECISION_COLORS[dlabel] + '"></div>'
        + '<span class="tt-label">' + dlabel + '</span>'
        + '<span class="tt-count">' + dc + '</span>'
        + '<span class="tt-pct">(' + (group.count > 0 ? Math.round(dc / group.count * 100) : 0) + '%)</span></div>';
    });
 
    if (group.charges && group.charges.length > 1) {
      html += '<hr class="tt-divider">';
      html += '<span class="tt-section-label">By charge</span>';
      var chargesSorted = group.charges.slice().sort(function(a, b) {
        return filteredCount(b) - filteredCount(a);
      });
      chargesSorted.forEach(function(ch) {
        var cfc = filteredCount(ch);
        if (cfc === 0) return;
        html += '<div class="tt-row">'
          + '<div class="tt-bar-swatch" style="background:' + group.color + '"></div>'
          + '<span class="tt-label">' + ch.name + '</span>'
          + '<span class="tt-count">' + cfc + '</span></div>';
      });
    }
  }
 
  html += '<div style="margin-top:8px;font-size:0.65rem;opacity:0.45;text-align:center;">Click to expand</div>';
 
  tooltip.innerHTML = html;
  tooltip.classList.add('visible');
  positionTooltip(e);
}
 
function showChargeTooltip(charge, grp, e) {
  var fc = filteredCount(charge);
  var html = '<span class="tt-title">' + charge.name + '</span>';
  html += '<span class="tt-total">' + charge.count.toLocaleString() + ' hearings (' + charge.pct + '% of all cases)</span>';
  if (charge.desc) html += '<span class="tt-desc">' + charge.desc + '</span>';
 
  if (activeDecisions.size === 0) {
    html += '<span class="tt-section-label">Outcomes</span>';
    var decisions = (charge.decisions || []).slice().sort(function(a, b) { return b.count - a.count; });
    decisions.forEach(function(d) {
      var pct = Math.round(d.count / charge.count * 100);
      html += '<div class="tt-row">'
        + '<div class="tt-swatch" style="background:' + DECISION_COLORS[d.label] + '"></div>'
        + '<span class="tt-label">' + d.label + '</span>'
        + '<span class="tt-count">' + d.count + '</span>'
        + '<span class="tt-pct">(' + pct + '%)</span></div>';
    });
  } else {
    var selectedLabels = DECISION_ORDER.filter(function(d) { return d !== 'All' && activeDecisions.has(d); });
    selectedLabels.forEach(function(dlabel) {
      var dec = (charge.decisions || []).find(function(d) { return d.label === dlabel; });
      var dc = dec ? dec.count : 0;
      if (dc === 0) return;
      html += '<div class="tt-row">'
        + '<div class="tt-swatch" style="background:' + DECISION_COLORS[dlabel] + '"></div>'
        + '<span class="tt-label">' + dlabel + '</span>'
        + '<span class="tt-count">' + dc + '</span>'
        + '<span class="tt-pct">(' + (charge.count > 0 ? Math.round(dc / charge.count * 100) : 0) + '%)</span></div>';
    });
  }
 
  tooltip.innerHTML = html;
  tooltip.classList.add('visible');
  positionTooltip(e);
}
 
function positionTooltip(e) {
  var tipW = tooltip.offsetWidth || 260;
  var tipH = tooltip.offsetHeight || 200;
  var viewW = window.innerWidth;
  var viewH = window.innerHeight;

  var tx = e.clientX + 18;
  if (tx + tipW > viewW - 10) tx = e.clientX - tipW - 10;
  var ty = e.clientY - 10;
  if (ty + tipH > viewH - 10) ty = viewH - tipH - 10;
  ty = Math.max(4, ty);

  tooltip.style.left = tx + 'px';
  tooltip.style.top = ty + 'px';
}
 

 
// --- Init ---
fetch('./data.json')
  .then(function(r) { return r.json(); })
  .then(function(payload) {
    DATA = payload.groups;
    TOTAL_HEARINGS = payload.totalHearings;
    DECISION_ORDER = payload.decisionOrder;
    DECISION_COLORS = payload.decisionColors;
    initTooltip();
    buildToggleBar();
    renderBars();
  })
  .catch(function(err) {
    chartArea.textContent = 'Could not load data.json — run build_data.py first.';
    console.error(err);
  });
 