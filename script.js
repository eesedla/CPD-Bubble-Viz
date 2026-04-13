const DATA = [{"group":"Neglect of Duty","count":697,"pct":21.3,"color":"#004D66","decisions":[{"label":"Termination","count":16,"color":"#D64D4D"},{"label":"Separation","count":23,"color":"#FB8500"},{"label":"Resignation","count":4,"color":"#F4C913"},{"label":"Demotion","count":9,"color":"#6A4FC7"},{"label":"Suspension","count":346,"color":"#004D66"},{"label":"Dismissal","count":195,"color":"#619484"},{"label":"Written Reprimand","count":104,"color":"#4DB3B3"},{"label":"Reinstruction","count":131,"color":"#B8960A"}],"charges":[{"name":"Failure to Report/Notify","count":242,"pct":7.4,"decisions":[{"label":"Termination","count":3,"color":"#D64D4D"},{"label":"Separation","count":12,"color":"#FB8500"},{"label":"Resignation","count":1,"color":"#F4C913"},{"label":"Demotion","count":1,"color":"#6A4FC7"},{"label":"Suspension","count":122,"color":"#004D66"},{"label":"Dismissal","count":64,"color":"#619484"},{"label":"Written Reprimand","count":39,"color":"#4DB3B3"},{"label":"Reinstruction","count":51,"color":"#B8960A"}]},{"name":"Lack of Service","count":226,"pct":6.9,"decisions":[{"label":"Termination","count":5,"color":"#D64D4D"},{"label":"Separation","count":4,"color":"#FB8500"},{"label":"Resignation","count":1,"color":"#F4C913"},{"label":"Demotion","count":3,"color":"#6A4FC7"},{"label":"Suspension","count":109,"color":"#004D66"},{"label":"Dismissal","count":71,"color":"#619484"},{"label":"Written Reprimand","count":33,"color":"#4DB3B3"},{"label":"Reinstruction","count":43,"color":"#B8960A"}]},{"name":"Neglect of Duty","count":104,"pct":3.2,"decisions":[{"label":"Termination","count":7,"color":"#D64D4D"},{"label":"Separation","count":4,"color":"#FB8500"},{"label":"Resignation","count":2,"color":"#F4C913"},{"label":"Demotion","count":3,"color":"#6A4FC7"},{"label":"Suspension","count":47,"color":"#004D66"},{"label":"Dismissal","count":25,"color":"#619484"},{"label":"Written Reprimand","count":16,"color":"#4DB3B3"},{"label":"Reinstruction","count":20,"color":"#B8960A"}]},{"name":"Duty Report Violation","count":46,"pct":1.4,"decisions":[{"label":"Suspension","count":24,"color":"#004D66"},{"label":"Dismissal","count":17,"color":"#619484"},{"label":"Written Reprimand","count":5,"color":"#4DB3B3"},{"label":"Reinstruction","count":6,"color":"#B8960A"}]},{"name":"Failure to Supervise","count":36,"pct":1.1,"decisions":[{"label":"Demotion","count":2,"color":"#6A4FC7"},{"label":"Suspension","count":17,"color":"#004D66"},{"label":"Dismissal","count":11,"color":"#619484"},{"label":"Written Reprimand","count":6,"color":"#4DB3B3"},{"label":"Reinstruction","count":7,"color":"#B8960A"}]},{"name":"Asleep On-Duty","count":25,"pct":0.8,"decisions":[{"label":"Termination","count":1,"color":"#D64D4D"},{"label":"Separation","count":2,"color":"#FB8500"},{"label":"Suspension","count":17,"color":"#004D66"},{"label":"Dismissal","count":5,"color":"#619484"},{"label":"Reinstruction","count":1,"color":"#B8960A"}]},{"name":"Failed to Assist","count":8,"pct":0.2,"decisions":[{"label":"Suspension","count":8,"color":"#004D66"},{"label":"Reinstruction","count":2,"color":"#B8960A"}]},{"name":"Failed to Provide Language Services","count":6,"pct":0.2,"decisions":[{"label":"Suspension","count":1,"color":"#004D66"},{"label":"Dismissal","count":2,"color":"#619484"},{"label":"Written Reprimand","count":3,"color":"#4DB3B3"},{"label":"Reinstruction","count":1,"color":"#B8960A"}]},{"name":"Failed to Take Corrective Action","count":4,"pct":0.1,"decisions":[{"label":"Separation","count":1,"color":"#FB8500"},{"label":"Suspension","count":1,"color":"#004D66"},{"label":"Written Reprimand","count":2,"color":"#4DB3B3"}]}]},{"group":"Unprofessional Behavior","count":500,"pct":15.3,"color":"#FB8500","decisions":[{"label":"Termination","count":35,"color":"#D64D4D"},{"label":"Separation","count":18,"color":"#FB8500"},{"label":"Resignation","count":4,"color":"#F4C913"},{"label":"Demotion","count":6,"color":"#6A4FC7"},{"label":"Suspension","count":239,"color":"#004D66"},{"label":"Dismissal","count":123,"color":"#619484"},{"label":"Written Reprimand","count":75,"color":"#4DB3B3"},{"label":"Reinstruction","count":98,"color":"#B8960A"}],"charges":[{"name":"Unprofessional Conduct","count":157,"pct":4.8,"decisions":[{"label":"Termination","count":3,"color":"#D64D4D"},{"label":"Separation","count":2,"color":"#FB8500"},{"label":"Resignation","count":1,"color":"#F4C913"},{"label":"Suspension","count":75,"color":"#004D66"},{"label":"Dismissal","count":47,"color":"#619484"},{"label":"Written Reprimand","count":29,"color":"#4DB3B3"},{"label":"Reinstruction","count":36,"color":"#B8960A"}]},{"name":"Offensive Remarks","count":137,"pct":4.2,"decisions":[{"label":"Termination","count":5,"color":"#D64D4D"},{"label":"Separation","count":4,"color":"#FB8500"},{"label":"Demotion","count":1,"color":"#6A4FC7"},{"label":"Suspension","count":62,"color":"#004D66"},{"label":"Dismissal","count":39,"color":"#619484"},{"label":"Written Reprimand","count":26,"color":"#4DB3B3"},{"label":"Reinstruction","count":30,"color":"#B8960A"}]},{"name":"Diminished Esteem of CPD","count":130,"pct":4,"decisions":[{"label":"Termination","count":21,"color":"#D64D4D"},{"label":"Separation","count":8,"color":"#FB8500"},{"label":"Resignation","count":2,"color":"#F4C913"},{"label":"Demotion","count":4,"color":"#6A4FC7"},{"label":"Suspension","count":60,"color":"#004D66"},{"label":"Dismissal","count":27,"color":"#619484"},{"label":"Written Reprimand","count":8,"color":"#4DB3B3"},{"label":"Reinstruction","count":11,"color":"#B8960A"}]},{"name":"Uniform Violation","count":27,"pct":0.8,"decisions":[{"label":"Termination","count":1,"color":"#D64D4D"},{"label":"Separation","count":2,"color":"#FB8500"},{"label":"Resignation","count":1,"color":"#F4C913"},{"label":"Suspension","count":13,"color":"#004D66"},{"label":"Dismissal","count":4,"color":"#619484"},{"label":"Written Reprimand","count":6,"color":"#4DB3B3"},{"label":"Reinstruction","count":9,"color":"#B8960A"}]},{"name":"Appearance of Impropriety","count":20,"pct":0.6,"decisions":[{"label":"Termination","count":1,"color":"#D64D4D"},{"label":"Demotion","count":1,"color":"#6A4FC7"},{"label":"Suspension","count":13,"color":"#004D66"},{"label":"Dismissal","count":1,"color":"#619484"},{"label":"Written Reprimand","count":4,"color":"#4DB3B3"},{"label":"Reinstruction","count":5,"color":"#B8960A"}]},{"name":"Telecommunications Violation","count":19,"pct":0.6,"decisions":[{"label":"Termination","count":4,"color":"#D64D4D"},{"label":"Separation","count":1,"color":"#FB8500"},{"label":"Suspension","count":12,"color":"#004D66"},{"label":"Dismissal","count":2,"color":"#619484"},{"label":"Reinstruction","count":2,"color":"#B8960A"}]},{"name":"Failed to Identify","count":10,"pct":0.3,"decisions":[{"label":"Separation","count":1,"color":"#FB8500"},{"label":"Suspension","count":4,"color":"#004D66"},{"label":"Dismissal","count":3,"color":"#619484"},{"label":"Written Reprimand","count":2,"color":"#4DB3B3"},{"label":"Reinstruction","count":5,"color":"#B8960A"}]}]},{"group":"Body Camera Violation","count":384,"pct":11.7,"color":"#6A4FC7","decisions":[{"label":"Termination","count":3,"color":"#D64D4D"},{"label":"Separation","count":9,"color":"#FB8500"},{"label":"Resignation","count":2,"color":"#F4C913"},{"label":"Demotion","count":2,"color":"#6A4FC7"},{"label":"Suspension","count":209,"color":"#004D66"},{"label":"Dismissal","count":98,"color":"#619484"},{"label":"Written Reprimand","count":59,"color":"#4DB3B3"},{"label":"Reinstruction","count":120,"color":"#B8960A"},{"label":"Warning","count":2,"color":"#C45B8A"}],"charges":[{"name":"Body Camera Violation","count":384,"pct":11.7,"decisions":[{"label":"Termination","count":3,"color":"#D64D4D"},{"label":"Separation","count":9,"color":"#FB8500"},{"label":"Resignation","count":2,"color":"#F4C913"},{"label":"Demotion","count":2,"color":"#6A4FC7"},{"label":"Suspension","count":209,"color":"#004D66"},{"label":"Dismissal","count":98,"color":"#619484"},{"label":"Written Reprimand","count":59,"color":"#4DB3B3"},{"label":"Reinstruction","count":120,"color":"#B8960A"},{"label":"Warning","count":2,"color":"#C45B8A"}]}]},{"group":"Attendance","count":304,"pct":9.3,"color":"#F4C913","decisions":[{"label":"Termination","count":12,"color":"#D64D4D"},{"label":"Separation","count":31,"color":"#FB8500"},{"label":"Resignation","count":17,"color":"#F4C913"},{"label":"Suspension","count":124,"color":"#004D66"},{"label":"Dismissal","count":83,"color":"#619484"},{"label":"Written Reprimand","count":33,"color":"#4DB3B3"},{"label":"Reinstruction","count":143,"color":"#B8960A"},{"label":"Warning","count":4,"color":"#C45B8A"}],"charges":[{"name":"Sick Leave Abuse","count":113,"pct":3.5,"decisions":[{"label":"Termination","count":5,"color":"#D64D4D"},{"label":"Separation","count":11,"color":"#FB8500"},{"label":"Resignation","count":5,"color":"#F4C913"},{"label":"Suspension","count":43,"color":"#004D66"},{"label":"Dismissal","count":44,"color":"#619484"},{"label":"Written Reprimand","count":3,"color":"#4DB3B3"},{"label":"Reinstruction","count":122,"color":"#B8960A"},{"label":"Warning","count":2,"color":"#C45B8A"}]},{"name":"Absent Without Leave (AWOL)","count":56,"pct":1.7,"decisions":[{"label":"Termination","count":3,"color":"#D64D4D"},{"label":"Separation","count":11,"color":"#FB8500"},{"label":"Resignation","count":9,"color":"#F4C913"},{"label":"Suspension","count":24,"color":"#004D66"},{"label":"Dismissal","count":7,"color":"#619484"},{"label":"Written Reprimand","count":2,"color":"#4DB3B3"},{"label":"Reinstruction","count":4,"color":"#B8960A"}]},{"name":"Refusal of Mandatory Overtime","count":47,"pct":1.4,"decisions":[{"label":"Termination","count":1,"color":"#D64D4D"},{"label":"Separation","count":4,"color":"#FB8500"},{"label":"Resignation","count":1,"color":"#F4C913"},
  {"label":"Suspension","count":19,"color":"#004D66"},{"label":"Dismissal","count":11,"color":"#619484"},{"label":"Written Reprimand","count":11,"color":"#4DB3B3"},{"label":"Reinstruction","count":3,"color":"#B8960A"}]},{"name":"Tardiness","count":45,"pct":1.4,"decisions":[{"label":"Termination","count":1,"color":"#D64D4D"},{"label":"Separation","count":2,"color":"#FB8500"},{"label":"Resignation","count":1,"color":"#F4C913"},{"label":"Suspension","count":22,"color":"#004D66"},{"label":"Dismissal","count":8,"color":"#619484"},{"label":"Written Reprimand","count":9,"color":"#4DB3B3"},{"label":"Reinstruction","count":8,"color":"#B8960A"},{"label":"Warning","count":2,"color":"#C45B8A"}]},{"name":"Attendance and Overtime Violations","count":43,"pct":1.3,"decisions":[{"label":"Termination","count":2,"color":"#D64D4D"},{"label":"Separation","count":3,"color":"#FB8500"},{"label":"Resignation","count":1,"color":"#F4C913"},{"label":"Suspension","count":16,"color":"#004D66"},{"label":"Dismissal","count":13,"color":"#619484"},{"label":"Written Reprimand","count":8,"color":"#4DB3B3"},{"label":"Reinstruction","count":6,"color":"#B8960A"}]}]},{"group":"Use of Force","count":268,"pct":8.2,"color":"#619484","decisions":[{"label":"Termination","count":16,"color":"#D64D4D"},{"label":"Separation","count":5,"color":"#FB8500"},{"label":"Resignation","count":1,"color":"#F4C913"},{"label":"Demotion","count":5,"color":"#6A4FC7"},{"label":"Suspension","count":130,"color":"#004D66"},{"label":"Dismissal","count":73,"color":"#619484"},{"label":"Written Reprimand","count":38,"color":"#4DB3B3"},{"label":"Reinstruction","count":74,"color":"#B8960A"}],"charges":[{"name":"Use of Force Violation","count":70,"pct":2.1,"decisions":[{"label":"Termination","count":6,"color":"#D64D4D"},{"label":"Separation","count":2,"color":"#FB8500"},{"label":"Demotion","count":1,"color":"#6A4FC7"},{"label":"Suspension","count":35,"color":"#004D66"},{"label":"Dismissal","count":20,"color":"#619484"},{"label":"Written Reprimand","count":6,"color":"#4DB3B3"},{"label":"Reinstruction","count":15,"color":"#B8960A"}]},{"name":"Failed to Report/Intervene","count":64,"pct":2,"decisions":[{"label":"Termination","count":3,"color":"#D64D4D"},{"label":"Separation","count":1,"color":"#FB8500"},{"label":"Demotion","count":2,"color":"#6A4FC7"},{"label":"Suspension","count":35,"color":"#004D66"},{"label":"Dismissal","count":13,"color":"#619484"},{"label":"Written Reprimand","count":10,"color":"#4DB3B3"},{"label":"Reinstruction","count":19,"color":"#B8960A"}]},{"name":"Failed to De-escalate","count":53,"pct":1.6,"decisions":[{"label":"Termination","count":3,"color":"#D64D4D"},{"label":"Separation","count":1,"color":"#FB8500"},{"label":"Demotion","count":1,"color":"#6A4FC7"},{"label":"Suspension","count":26,"color":"#004D66"},{"label":"Dismissal","count":15,"color":"#619484"},{"label":"Written Reprimand","count":7,"color":"#4DB3B3"},{"label":"Reinstruction","count":16,"color":"#B8960A"}]},{"name":"Failed to Request Medical Attention","count":46,"pct":1.4,"decisions":[{"label":"Termination","count":3,"color":"#D64D4D"},{"label":"Demotion","count":1,"color":"#6A4FC7"},{"label":"Suspension","count":19,"color":"#004D66"},{"label":"Dismissal","count":17,"color":"#619484"},{"label":"Written Reprimand","count":6,"color":"#4DB3B3"},{"label":"Reinstruction","count":12,"color":"#B8960A"}]},{"name":"Improperly Handled a Firearm","count":33,"pct":1,"decisions":[{"label":"Termination","count":1,"color":"#D64D4D"},{"label":"Separation","count":1,"color":"#FB8500"},{"label":"Suspension","count":14,"color":"#004D66"},{"label":"Dismissal","count":8,"color":"#619484"},{"label":"Written Reprimand","count":9,"color":"#4DB3B3"},{"label":"Reinstruction","count":12,"color":"#B8960A"}]},{"name":"Unauthorized Ammunition/Firearms","count":2,"pct":0.1,"decisions":[{"label":"Resignation","count":1,"color":"#F4C913"},{"label":"Suspension","count":1,"color":"#004D66"}]}]},{"group":"Integrity and Honesty","count":230,"pct":7,"color":"#D64D4D","decisions":[{"label":"Termination","count":70,"color":"#D64D4D"},{"label":"Separation","count":14,"color":"#FB8500"},{"label":"Resignation","count":8,"color":"#F4C913"},{"label":"Demotion","count":4,"color":"#6A4FC7"},{"label":"Suspension","count":65,"color":"#004D66"},{"label":"Dismissal","count":53,"color":"#619484"},{"label":"Written Reprimand","count":16,"color":"#4DB3B3"},{"label":"Reinstruction","count":15,"color":"#B8960A"}],"charges":[{"name":"Untruthfulness","count":141,"pct":4.3,"decisions":[{"label":"Termination","count":38,"color":"#D64D4D"},{"label":"Separation","count":9,"color":"#FB8500"},{"label":"Resignation","count":4,"color":"#F4C913"},{"label":"Demotion","count":3,"color":"#6A4FC7"},{"label":"Suspension","count":44,"color":"#004D66"},{"label":"Dismissal","count":39,"color":"#619484"},{"label":"Written Reprimand","count":4,"color":"#4DB3B3"},{"label":"Reinstruction","count":4,"color":"#B8960A"}]},{"name":"Database Misuse","count":33,"pct":1,"decisions":[{"label":"Termination","count":9,"color":"#D64D4D"},{"label":"Resignation","count":1,"color":"#F4C913"},{"label":"Suspension","count":11,"color":"#004D66"},{"label":"Dismissal","count":4,"color":"#619484"},{"label":"Written Reprimand","count":8,"color":"#4DB3B3"},{"label":"Reinstruction","count":4,"color":"#B8960A"}]},{"name":"Cheating and Plagiarism","count":21,"pct":0.6,"decisions":[{"label":"Termination","count":15,"color":"#D64D4D"},{"label":"Separation","count":3,"color":"#FB8500"},{"label":"Resignation","count":2,"color":"#F4C913"},{"label":"Dismissal","count":1,"color":"#619484"}]},{"name":"Confidential Information Violation","count":18,"pct":0.5,"decisions":[{"label":"Termination","count":4,"color":"#D64D4D"},{"label":"Separation","count":1,"color":"#FB8500"},{"label":"Resignation","count":1,"color":"#F4C913"},{"label":"Suspension","count":6,"color":"#004D66"},{"label":"Dismissal","count":5,"color":"#619484"},{"label":"Written Reprimand","count":1,"color":"#4DB3B3"},{"label":"Reinstruction","count":5,"color":"#B8960A"}]},{"name":"Ethics Violation","count":17,"pct":0.5,"decisions":[{"label":"Termination","count":4,"color":"#D64D4D"},{"label":"Separation","count":1,"color":"#FB8500"},{"label":"Demotion","count":1,"color":"#6A4FC7"},{"label":"Suspension","count":4,"color":"#004D66"},{"label":"Dismissal","count":4,"color":"#619484"},{"label":"Written Reprimand","count":3,"color":"#4DB3B3"},{"label":"Reinstruction","count":2,"color":"#B8960A"}]}]},{"group":"Vehicle and Travel","count":218,"pct":6.7,"color":"#4DB3B3","decisions":[{"label":"Termination","count":1,"color":"#D64D4D"},{"label":"Separation","count":4,"color":"#FB8500"},{"label":"Resignation","count":1,"color":"#F4C913"},{"label":"Suspension","count":77,"color":"#004D66"},{"label":"Dismissal","count":49,"color":"#619484"},{"label":"Written Reprimand","count":86,"color":"#4DB3B3"},{"label":"Reinstruction","count":50,"color":"#B8960A"}],"charges":[{"name":"Vehicle Pursuit Violation","count":89,"pct":2.7,"decisions":[{"label":"Separation","count":1,"color":"#FB8500"},{"label":"Suspension","count":25,"color":"#004D66"},{"label":"Dismissal","count":30,"color":"#619484"},{"label":"Written Reprimand","count":33,"color":"#4DB3B3"},{"label":"Reinstruction","count":26,"color":"#B8960A"}]},{"name":"Preventable Motor Vehicle Accident","count":84,"pct":2.6,"decisions":[{"label":"Termination","count":1,"color":"#D64D4D"},{"label":"Separation","count":1,"color":"#FB8500"},{"label":"Resignation","count":1,"color":"#F4C913"},{"label":"Suspension","count":32,"color":"#004D66"},{"label":"Dismissal","count":5,"color":"#619484"},{"label":"Written Reprimand","count":44,"color":"#4DB3B3"},{"label":"Reinstruction","count":13,"color":"#B8960A"}]},{"name":"Travel Violation","count":45,"pct":1.4,"decisions":[{"label":"Separation","count":2,"color":"#FB8500"},{"label":"Suspension","count":20,"color":"#004D66"},{"label":"Dismissal","count":14,"color":"#619484"},{"label":"Written Reprimand","count":9,"color":"#4DB3B3"},{"label":"Reinstruction","count":11,"color":"#B8960A"}]}]},{"group":"Compliance","count":178,"pct":5.4,"color":"#C45B8A","decisions":[{"label":"Termination","count":3,"color":"#D64D4D"},{"label":"Separation","count":10,"color":"#FB8500"},{"label":"Resignation","count":7,"color":"#F4C913"},{"label":"Suspension","count":96,"color":"#004D66"},{"label":"Dismissal","count":46,"color":"#619484"},{"label":"Written Reprimand","count":16,"color":"#4DB3B3"},{"label":"Reinstruction","count":17,"color":"#B8960A"}],"charges":[{"name":"Insubordination","count":102,"pct":3.1,"decisions":[{"label":"Termination","count":2,"color":"#D64D4D"},{"label":"Separation","count":10,"color":"#FB8500"},{"label":"Resignation","count":5,"color":"#F4C913"},{"label":"Suspension","count":44,"color":"#004D66"},{"label":"Dismissal","count":31,"color":"#619484"},{"label":"Written Reprimand","count":10,"color":"#4DB3B3"},{"label":"Reinstruction","count":11,"color":"#B8960A"}]},{"name":"Unauthorized Secondary Employment","count":63,"pct":1.9,"decisions":[{"label":"Termination","count":1,"color":"#D64D4D"},{"label":"Resignation","count":2,"color":"#F4C913"},{"label":"Suspension","count":45,"color":"#004D66"},{"label":"Dismissal","count":9,"color":"#619484"},{"label":"Written Reprimand","count":6,"color":"#4DB3B3"},{"label":"Reinstruction","count":3,"color":"#B8960A"}]},{"name":"OPS Investigation Violation","count":13,"pct":0.4,"decisions":[{"label":"Suspension","count":7,"color":"#004D66"},{"label":"Dismissal","count":6,"color":"#619484"},{"label":"Reinstruction","count":3,"color":"#B8960A"}]}]},{"group":"Criminal Conduct","count":166,"pct":5.1,"color":"#944A61","decisions":[{"label":"Termination","count":18,"color":"#D64D4D"},{"label":"Separation","count":20,"color":"#FB8500"},{"label":"Resignation","count":3,"color":"#F4C913"},
    {"label":"Demotion","count":3,"color":"#6A4FC7"},{"label":"Suspension","count":93,"color":"#004D66"},{"label":"Dismissal","count":23,"color":"#619484"},{"label":"Written Reprimand","count":6,"color":"#4DB3B3"},{"label":"Reinstruction","count":5,"color":"#B8960A"}],"charges":[{"name":"Arrest or Criminal Charge","count":146,"pct":4.5,"decisions":[{"label":"Termination","count":16,"color":"#D64D4D"},{"label":"Separation","count":18,"color":"#FB8500"},{"label":"Resignation","count":2,"color":"#F4C913"},{"label":"Demotion","count":3,"color":"#6A4FC7"},{"label":"Suspension","count":84,"color":"#004D66"},{"label":"Dismissal","count":18,"color":"#619484"},{"label":"Written Reprimand","count":5,"color":"#4DB3B3"},{"label":"Reinstruction","count":5,"color":"#B8960A"}]},{"name":"Violence in the Workplace","count":20,"pct":0.6,"decisions":[{"label":"Termination","count":2,"color":"#D64D4D"},{"label":"Separation","count":2,"color":"#FB8500"},{"label":"Resignation","count":1,"color":"#F4C913"},{"label":"Suspension","count":9,"color":"#004D66"},{"label":"Dismissal","count":5,"color":"#619484"},{"label":"Written Reprimand","count":1,"color":"#4DB3B3"}]}]},{"group":"Improper Conduct","count":153,"pct":4.7,"color":"#3A6B5E","decisions":[{"label":"Termination","count":4,"color":"#D64D4D"},{"label":"Separation","count":3,"color":"#FB8500"},{"label":"Demotion","count":2,"color":"#6A4FC7"},{"label":"Suspension","count":62,"color":"#004D66"},{"label":"Dismissal","count":54,"color":"#619484"},{"label":"Written Reprimand","count":28,"color":"#4DB3B3"},{"label":"Reinstruction","count":43,"color":"#B8960A"}],"charges":[{"name":"Improper Search/Frisk","count":56,"pct":1.7,"decisions":[{"label":"Termination","count":2,"color":"#D64D4D"},{"label":"Separation","count":3,"color":"#FB8500"},{"label":"Demotion","count":2,"color":"#6A4FC7"},{"label":"Suspension","count":23,"color":"#004D66"},{"label":"Dismissal","count":18,"color":"#619484"},{"label":"Written Reprimand","count":8,"color":"#4DB3B3"},{"label":"Reinstruction","count":20,"color":"#B8960A"}]},{"name":"Improper Arrest/Detainment","count":23,"pct":0.7,"decisions":[{"label":"Suspension","count":15,"color":"#004D66"},{"label":"Dismissal","count":7,"color":"#619484"},{"label":"Written Reprimand","count":1,"color":"#4DB3B3"},{"label":"Reinstruction","count":7,"color":"#B8960A"}]},{"name":"Improper Tow","count":22,"pct":0.7,"decisions":[{"label":"Suspension","count":7,"color":"#004D66"},{"label":"Dismissal","count":9,"color":"#619484"},{"label":"Written Reprimand","count":6,"color":"#4DB3B3"},{"label":"Reinstruction","count":6,"color":"#B8960A"}]},{"name":"Improper Stop","count":18,"pct":0.5,"decisions":[{"label":"Termination","count":1,"color":"#D64D4D"},{"label":"Suspension","count":7,"color":"#004D66"},{"label":"Dismissal","count":7,"color":"#619484"},{"label":"Written Reprimand","count":3,"color":"#4DB3B3"},{"label":"Reinstruction","count":2,"color":"#B8960A"}]},{"name":"Arrestee Handling Violation","count":17,"pct":0.5,"decisions":[{"label":"Suspension","count":5,"color":"#004D66"},{"label":"Dismissal","count":6,"color":"#619484"},{"label":"Written Reprimand","count":6,"color":"#4DB3B3"},{"label":"Reinstruction","count":4,"color":"#B8960A"}]},{"name":"Improper Citation","count":12,"pct":0.4,"decisions":[{"label":"Suspension","count":3,"color":"#004D66"},{"label":"Dismissal","count":5,"color":"#619484"},{"label":"Written Reprimand","count":4,"color":"#4DB3B3"},{"label":"Reinstruction","count":4,"color":"#B8960A"}]},{"name":"Mishandled Juvenile","count":5,"pct":0.2,"decisions":[{"label":"Termination","count":1,"color":"#D64D4D"},{"label":"Suspension","count":2,"color":"#004D66"},{"label":"Dismissal","count":2,"color":"#619484"}]}]},{"group":"Evidence and Property","count":136,"pct":4.2,"color":"#B8960A","decisions":[{"label":"Separation","count":5,"color":"#FB8500"},{"label":"Demotion","count":2,"color":"#6A4FC7"},{"label":"Suspension","count":54,"color":"#004D66"},{"label":"Dismissal","count":33,"color":"#619484"},{"label":"Written Reprimand","count":41,"color":"#4DB3B3"},{"label":"Reinstruction","count":34,"color":"#B8960A"},{"label":"Warning","count":1,"color":"#C45B8A"}],"charges":[{"name":"Failed to Safeguard Equipment","count":66,"pct":2,"decisions":[{"label":"Separation","count":2,"color":"#FB8500"},{"label":"Suspension","count":24,"color":"#004D66"},{"label":"Dismissal","count":12,"color":"#619484"},{"label":"Written Reprimand","count":27,"color":"#4DB3B3"},{"label":"Reinstruction","count":20,"color":"#B8960A"},{"label":"Warning","count":1,"color":"#C45B8A"}]},{"name":"Evidence Collection Violation","count":47,"pct":1.4,"decisions":[{"label":"Separation","count":3,"color":"#FB8500"},{"label":"Demotion","count":2,"color":"#6A4FC7"},{"label":"Suspension","count":21,"color":"#004D66"},{"label":"Dismissal","count":14,"color":"#619484"},{"label":"Written Reprimand","count":7,"color":"#4DB3B3"},{"label":"Reinstruction","count":6,"color":"#B8960A"}]},{"name":"Failed to Safeguard Property","count":23,"pct":0.7,"decisions":[{"label":"Suspension","count":9,"color":"#004D66"},{"label":"Dismissal","count":7,"color":"#619484"},{"label":"Written Reprimand","count":7,"color":"#4DB3B3"},{"label":"Reinstruction","count":8,"color":"#B8960A"}]}]},{"group":"Drugs and Alcohol","count":28,"pct":0.9,"color":"#7A4520","decisions":[{"label":"Termination","count":2,"color":"#D64D4D"},{"label":"Separation","count":3,"color":"#FB8500"},{"label":"Resignation","count":2,"color":"#F4C913"},{"label":"Suspension","count":14,"color":"#004D66"},{"label":"Dismissal","count":3,"color":"#619484"},{"label":"Written Reprimand","count":4,"color":"#4DB3B3"},{"label":"Reinstruction","count":3,"color":"#B8960A"}],"charges":[{"name":"Drug & Alcohol Testing Policy Violation","count":21,"pct":0.6,"decisions":[{"label":"Termination","count":2,"color":"#D64D4D"},{"label":"Separation","count":3,"color":"#FB8500"},{"label":"Resignation","count":1,"color":"#F4C913"},{"label":"Suspension","count":13,"color":"#004D66"},{"label":"Dismissal","count":2,"color":"#619484"},{"label":"Reinstruction","count":2,"color":"#B8960A"}]},{"name":"Consumed Prohibited Substance While On Duty","count":7,"pct":0.2,"decisions":[{"label":"Resignation","count":1,"color":"#F4C913"},{"label":"Suspension","count":1,"color":"#004D66"},{"label":"Dismissal","count":1,"color":"#619484"},{"label":"Written Reprimand","count":4,"color":"#4DB3B3"},{"label":"Reinstruction","count":1,"color":"#B8960A"}]}]},{"group":"Not Fit for Duty","count":13,"pct":0.4,"color":"#D64D4D","decisions":[{"label":"Termination","count":6,"color":"#D64D4D"},{"label":"Separation","count":2,"color":"#FB8500"},{"label":"Resignation","count":1,"color":"#F4C913"},{"label":"Suspension","count":2,"color":"#004D66"},{"label":"Dismissal","count":2,"color":"#619484"}],"charges":[{"name":"Not Fit for Duty","count":13,"pct":0.4,"decisions":[{"label":"Termination","count":6,"color":"#D64D4D"},{"label":"Separation","count":2,"color":"#FB8500"},{"label":"Resignation","count":1,"color":"#F4C913"},{"label":"Suspension","count":2,"color":"#004D66"},{"label":"Dismissal","count":2,"color":"#619484"}]}]}];
 
const DECISION_ORDER = ["All","Suspension","Dismissal","Reinstruction","Written Reprimand","Termination","Separation","Resignation","Demotion","Warning"];
const DECISION_COLORS = {"Termination":"#D64D4D","Separation":"#FB8500","Resignation":"#F4C913","Demotion":"#6A4FC7","Suspension":"#004D66","Dismissal":"#619484","Written Reprimand":"#4DB3B3","Warning":"#C45B8A","Reinstruction":"#B8960A"};
 
const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');
const tip = document.getElementById('tip');
const backBtn = document.getElementById('back-btn');
const vizNote = document.getElementById('viz-note');
const toggleBar = document.getElementById('toggle-bar');
 
let W, H, bubbles = [];
let mode = 'groups', activeGroup = null;
let hoveredBubble = null;
let activeDecision = 'All';
let animating = false, animFrame = 0;
const ANIM_FRAMES = 30;
 
function buildToggleBar(sourceItems) {
  const seen = new Set(['All']);
  sourceItems.forEach(function(item) {
    (item.decisions || []).forEach(function(d) { seen.add(d.label); });
  });
  toggleBar.innerHTML = '<span class="toggle-label">Filter by outcome:</span>';
  DECISION_ORDER.filter(function(d) { return seen.has(d); }).forEach(function(label) {
    var btn = document.createElement('button');
    btn.className = 'toggle-btn' + (label === activeDecision ? ' active' : '');
    btn.dataset.decision = label;
    if (label === 'All') {
      btn.innerHTML = 'All outcomes';
    } else {
      var color = DECISION_COLORS[label];
      var dotBg = label === activeDecision ? 'rgba(255,255,255,0.8)' : color;
      btn.innerHTML = '<span class="dot" style="background:' + dotBg + '"></span>' + label;
    }
    if (label === activeDecision) {
      btn.style.background = label === 'All' ? '#1C1916' : DECISION_COLORS[label];
    }
    btn.addEventListener('click', function() {
      activeDecision = label;
      document.querySelectorAll('.toggle-btn').forEach(function(b) {
        b.classList.remove('active');
        b.style.background = '';
        var dot = b.querySelector('.dot');
        if (dot) dot.style.background = DECISION_COLORS[b.dataset.decision];
      });
      btn.classList.add('active');
      btn.style.background = label === 'All' ? '#1C1916' : DECISION_COLORS[label];
      var dot = btn.querySelector('.dot');
      if (dot) dot.style.background = 'rgba(255,255,255,0.8)';
      updateNote();
      if (mode === 'groups') layoutGroups(false);
      else layoutCharges(activeGroup, false);
    });
    toggleBar.appendChild(btn);
  });
}
 
function filteredCount(item) {
  if (activeDecision === 'All') return item.count;
  var dec = (item.decisions || []).find(function(d) { return d.label === activeDecision; });
  return dec ? dec.count : 0;
}
 
function ease(t) { return t < 0.5 ? 2*t*t : -1+(4-2*t)*t; }
 
function resize() {
  var dpr = window.devicePixelRatio || 1;
  var cssW = canvas.parentElement.clientWidth || document.body.clientWidth || 780;
  var cssH = Math.max(320, Math.min(cssW * 0.72, 520));
  canvas.style.width = cssW + 'px';
  canvas.style.height = cssH + 'px';
  canvas.width = cssW * dpr;
  canvas.height = cssH * dpr;
  ctx.scale(dpr, dpr);
  W = cssW; H = cssH;
  if (mode === 'groups') layoutGroups(true);
  else layoutCharges(activeGroup, true);
}
 
function packBubbles(items) {
  var cx = W / 2, cy = H / 2;
  var pad = 16, gap = 3;
  var maxR = Math.min(W, H) * (mode === 'groups' ? 0.21 : 0.25);
  var counts = items.map(function(d) { return filteredCount(d); });
  var maxCount = Math.max.apply(null, counts.concat([1]));
  var scale = maxR / Math.sqrt(maxCount);
 
  items.forEach(function(d) {
    d.targetR = filteredCount(d) > 0 ? Math.max(12, Math.sqrt(filteredCount(d)) * scale) : 0;
  });
 
  var sorted = items.slice().sort(function(a, b) { return b.targetR - a.targetR; });
  sorted.forEach(function(d, i) {
    if (d.x === undefined) {
      var angle = i * 2.39996;
      var dist = Math.sqrt(i + 0.5) * maxR * 0.52;
      d.x = cx + Math.cos(angle) * dist;
      d.y = cy + Math.sin(angle) * dist;
    }
    d.vx = 0; d.vy = 0;
  });
 
  var ITERS = 500;
  for (var iter = 0; iter < ITERS; iter++) {
    var alpha = 1 - iter / ITERS;
    items.forEach(function(a) {
      if (a.targetR === 0) return;
      var gs = 0.018 * alpha + 0.004;
      a.vx += (cx - a.x) * gs;
      a.vy += (cy - a.y) * gs;
      a.vy += (cy - a.y) * 0.003;
      items.forEach(function(b) {
        if (a === b || b.targetR === 0) return;
        var dx = a.x - b.x, dy = a.y - b.y;
        var dist = Math.sqrt(dx * dx + dy * dy) || 0.01;
        var minD = a.targetR + b.targetR + gap;
        if (dist < minD) {
          var strength = ((minD - dist) / dist) * 0.48;
          a.vx += dx * strength; a.vy += dy * strength;
          b.vx -= dx * strength; b.vy -= dy * strength;
        }
      });
    });
    items.forEach(function(d) {
      if (d.targetR === 0) return;
      var damping = 0.78 - alpha * 0.08;
      d.x += d.vx * 0.55; d.y += d.vy * 0.55;
      d.vx *= damping; d.vy *= damping;
      var minX = d.targetR + pad, maxX = W - d.targetR - pad;
      var minY = d.targetR + pad, maxY = H - d.targetR - pad;
      if (d.x < minX) { d.x = minX; d.vx *= -0.3; }
      if (d.x > maxX) { d.x = maxX; d.vx *= -0.3; }
      if (d.y < minY) { d.y = minY; d.vy *= -0.3; }
      if (d.y > maxY) { d.y = maxY; d.vy *= -0.3; }
    });
  }
  return items;
}
 
function layoutGroups(instant) {
  var items = DATA.map(function(d) {
    var existing = bubbles.find(function(b) { return b.group === d.group; });
    return Object.assign({}, d, {
      label: d.group,
      x: existing ? existing.x : undefined,
      y: existing ? existing.y : undefined,
      r: existing ? existing.r : 0
    });
  });
  packBubbles(items);
  buildToggleBar(DATA);
  if (instant) { items.forEach(function(d) { d.r = d.targetR; }); bubbles = items; draw(); return; }
  animateTo(items);
}
 
function layoutCharges(grp, instant) {
  var items = grp.charges.map(function(c) {
    var existing = bubbles.find(function(b) { return b.name === c.name; });
    return Object.assign({}, c, {
      label: c.name,
      color: grp.color,
      x: existing ? existing.x : undefined,
      y: existing ? existing.y : undefined,
      r: existing ? existing.r : 0
    });
  });
  packBubbles(items);
  buildToggleBar(grp.charges);
  if (instant) { items.forEach(function(d) { d.r = d.targetR; }); bubbles = items; draw(); return; }
  animateTo(items);
}
 
function animateTo(newBubbles) {
  if (animating) { newBubbles.forEach(function(nb) { nb.r = nb.targetR; }); bubbles = newBubbles; draw(); return; }
  var old = bubbles.map(function(b) { return Object.assign({}, b); });
  animating = true; animFrame = 0;
  function step() {
    animFrame++;
    var t = ease(Math.min(animFrame / ANIM_FRAMES, 1));
    bubbles = newBubbles.map(function(nb) {
      var ob = old.find(function(b) { return b.label === nb.label; }) || { x: W/2, y: H/2, r: 0 };
      return Object.assign({}, nb, {
        x: ob.x + (nb.x - ob.x) * t,
        y: ob.y + (nb.y - ob.y) * t,
        r: ob.r + (nb.targetR - ob.r) * t
      });
    });
    draw();
    if (animFrame < ANIM_FRAMES) requestAnimationFrame(step);
    else { newBubbles.forEach(function(nb) { nb.r = nb.targetR; }); bubbles = newBubbles; animating = false; draw(); }
  }
  requestAnimationFrame(step);
}
 
function drawBubble(b) {
  if (b.r <= 0) return;
  var isHovered = hoveredBubble === b;
  var fillColor = activeDecision !== 'All' ? DECISION_COLORS[activeDecision] : b.color;
  var hex = fillColor.replace('#', '');
  var r = parseInt(hex.slice(0,2), 16), g = parseInt(hex.slice(2,4), 16), bv = parseInt(hex.slice(4,6), 16);
  if (isHovered) { ctx.shadowColor = 'rgba(0,0,0,0.22)'; ctx.shadowBlur = 18; }
  ctx.beginPath();
  ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + bv + ',' + (isHovered ? '0.95' : '0.82') + ')';
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.strokeStyle = 'rgba(' + r + ',' + g + ',' + bv + ',' + (isHovered ? '1' : '0.6') + ')';
  ctx.lineWidth = isHovered ? 2.5 : 1.5;
  ctx.stroke();
}
 
function drawLabel(b) {
  if (b.r < 20) return;
  var isHovered = hoveredBubble === b;
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  var fontSize = Math.max(9, Math.min(13, b.r * 0.28));
  ctx.font = '600 ' + fontSize + 'px Inter, sans-serif';
  var words = b.label.split(' ');
  var lines = [], line = '';
  words.forEach(function(w) {
    var test = line ? line + ' ' + w : w;
    if (ctx.measureText(test).width > b.r * 1.55 && line) { lines.push(line); line = w; }
    else line = test;
  });
  if (line) lines.push(line);
  var fc = filteredCount(b);
  var statLine = mode === 'charges'
    ? (activeDecision === 'All' ? b.count + ' cases' : (fc > 0 ? fc + ' cases' : '--'))
    : (activeDecision === 'All' ? (b.pct + '%') : (fc > 0 ? fc + ' cases' : '--'));
  var allLines = lines.length <= 3 ? lines.concat([statLine]) : lines.slice(0,3).concat([statLine]);
  var lh = fontSize * 1.3;
  var totalH = allLines.length * lh;
  if (totalH > b.r * 1.5) return;
  var maxLineW = Math.max.apply(null, allLines.map(function(l) { return ctx.measureText(l).width; }));
  if (maxLineW > b.r * 2) return;
  allLines.forEach(function(l, i) {
    var ly = b.y - totalH/2 + i*lh + lh/2;
    if (i === allLines.length - 1) {
      ctx.font = '400 ' + (fontSize * 0.88) + 'px Inter, sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
    } else {
      ctx.font = '600 ' + fontSize + 'px Inter, sans-serif';
      ctx.fillStyle = '#fff';
    }
    ctx.fillText(l, b.x, ly);
  });
  if (mode === 'groups' && isHovered && b.r > 30) {
    ctx.font = '500 10px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.fillText('expand', b.x, b.y + b.r - 13);
  }
}
 
function draw() {
  ctx.clearRect(0, 0, W, H);
  bubbles.forEach(function(b) { drawBubble(b); });
  bubbles.forEach(function(b) { drawLabel(b); });
  canvas.style.cursor = (hoveredBubble && mode === 'groups') ? 'pointer' : 'default';
}
 
function getBubbleAt(mx, my) {
  return bubbles.slice().reverse().find(function(b) {
    return b.r > 0 && Math.hypot(b.x - mx, b.y - my) <= b.r;
  }) || null;
}
 
function showTooltip(b, mx, my) {
  if (!b) { tip.classList.remove('visible'); return; }
  var totalCount = b.count;
  var html = '<span class="tt-title">' + b.label + '</span>';
  if (activeDecision === 'All') {
    html += '<span class="tt-total">' + totalCount.toLocaleString() + ' total hearings (' + b.pct + '% of all cases)</span>';
    var decisions = (b.decisions || []).slice().sort(function(a, b) { return b.count - a.count; });
    decisions.forEach(function(d) {
      var pct = Math.round(d.count / totalCount * 100);
      html += '<div class="tt-row"><div class="tt-swatch" style="background:' + d.color + '"></div><span class="tt-label">' + d.label + '</span><span class="tt-count">' + d.count + '</span><span class="tt-pct">(' + pct + '%)</span></div>';
    });
  } else {
    var fc = filteredCount(b);
    var pct = totalCount > 0 ? Math.round(fc / totalCount * 100) : 0;
    html += '<span class="tt-total">' + totalCount.toLocaleString() + ' total hearings</span>';
    html += '<div class="tt-row"><div class="tt-swatch" style="background:' + DECISION_COLORS[activeDecision] + '"></div><span class="tt-label">' + activeDecision + '</span><span class="tt-count">' + fc + '</span><span class="tt-pct">(' + pct + '%)</span></div>';
  }
  tip.innerHTML = html;
  var tipW = 230, tipH = tip.offsetHeight || 160;
  var tx = mx + 16 + tipW > W ? mx - tipW - 10 : mx + 16;
  var ty = Math.max(4, Math.min(my - 10, H - tipH - 4));
  tip.style.left = tx + 'px';
  tip.style.top = ty + 'px';
  tip.classList.add('visible');
}
 
canvas.addEventListener('mousemove', function(e) {
  var rect = canvas.getBoundingClientRect();
  hoveredBubble = getBubbleAt(e.clientX - rect.left, e.clientY - rect.top);
  showTooltip(hoveredBubble, e.clientX - rect.left, e.clientY - rect.top);
  draw();
});
canvas.addEventListener('mouseleave', function() { hoveredBubble = null; tip.classList.remove('visible'); draw(); });
canvas.addEventListener('click', function(e) {
  if (mode !== 'groups' || animating) return;
  var rect = canvas.getBoundingClientRect();
  var hit = getBubbleAt(e.clientX - rect.left, e.clientY - rect.top);
  if (hit) drillDown(hit);
});
canvas.addEventListener('touchend', function(e) {
  e.preventDefault();
  if (mode !== 'groups' || animating) return;
  var rect = canvas.getBoundingClientRect();
  var t = e.changedTouches[0];
  var hit = getBubbleAt(t.clientX - rect.left, t.clientY - rect.top);
  if (hit) drillDown(hit);
});
 
function drillDown(grp) {
  activeGroup = grp;
  mode = 'charges';
  backBtn.classList.add('visible');
  hoveredBubble = null; tip.classList.remove('visible');
  layoutCharges(grp, false);
  updateNote();
}
 
function showGroups() {
  mode = 'groups'; activeGroup = null;
  backBtn.classList.remove('visible');
  hoveredBubble = null; tip.classList.remove('visible');
  layoutGroups(false);
  updateNote();
}
 
 
function updateNote() {
  if (activeDecision === 'All') {
    vizNote.textContent = 'Circle size and percentage reflects share of 1,749 total hearings where that charge appears. Use the outcome filter above to see how decisions vary by charge category. Click any bubble to look further into grouped charges.';
  } else {
    vizNote.textContent = 'Showing only hearings that resulted in "' + activeDecision + '". Bubbles resize to reflect how often that outcome occurred per charge.';
  }
}
 
window.addEventListener('resize', resize);
requestAnimationFrame(function() { requestAnimationFrame(resize); });