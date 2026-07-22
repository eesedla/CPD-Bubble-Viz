# CPD-Bubble-Viz

Discipline outcomes by type of misconduct — Signal Cleveland.

## Run it

```
python3 build_data.py   # reads cpd_data.csv, writes data.json
python3 -m http.server   # then open http://localhost:8000
```

`index.html` loads the chart via `fetch('./data.json')`, so it needs to be served
over HTTP (not opened as a `file://` URL — browsers block local `fetch` of JSON
under that scheme). Everything the build needs (`cpd_data.csv`) is committed in
this repo; there are no paths outside this folder.

The charge → category mapping and category colors are defined in `build_data.py`
(`TAXONOMY`) — edit there if a charge needs to move categories or a color needs
to change, then re-run the build.
