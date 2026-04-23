const DATA = [{"group":"Neglect of Duty","count":635,"pct":36.3,"color":"#004D66","decisions":[{"label":"Suspension","count":346,"color":"#004D66"},{"label":"Charge Dismissed","count":195,"color":"#619484"},{"label":"Reinstruction","count":131,"color":"#B8960A"},{"label":"Written Reprimand","count":104,"color":"#4DB3B3"},{"label":"Separation","count":23,"color":"#FB8500"},{"label":"Termination","count":16,"color":"#D64D4D"},{"label":"Demotion","count":9,"color":"#6A4FC7"},{"label":"Resignation","count":4,"color":"#F4C913"}],"charges":[{"name":"Failure to Report/Notify","count":221,"pct":12.6,"decisions":[{"label":"Suspension","count":122,"color":"#004D66"},{"label":"Charge Dismissed","count":64,"color":"#619484"},{"label":"Reinstruction","count":51,"color":"#B8960A"},{"label":"Written Reprimand","count":39,"color":"#4DB3B3"},{"label":"Separation","count":12,"color":"#FB8500"},{"label":"Termination","count":3,"color":"#D64D4D"},{"label":"Demotion","count":1,"color":"#6A4FC7"},{"label":"Resignation","count":1,"color":"#F4C913"}]},{"name":"Lack of Service","count":208,"pct":11.9,"decisions":[{"label":"Suspension","count":109,"color":"#004D66"},{"label":"Charge Dismissed","count":71,"color":"#619484"},{"label":"Reinstruction","count":43,"color":"#B8960A"},{"label":"Written Reprimand","count":33,"color":"#4DB3B3"},{"label":"Termination","count":5,"color":"#D64D4D"},{"label":"Separation","count":4,"color":"#FB8500"},{"label":"Demotion","count":3,"color":"#6A4FC7"},{"label":"Resignation","count":1,"color":"#F4C913"}]},{"name":"Neglect of Duty","count":101,"pct":5.8,"decisions":[{"label":"Suspension","count":47,"color":"#004D66"},{"label":"Charge Dismissed","count":25,"color":"#619484"},{"label":"Reinstruction","count":20,"color":"#B8960A"},{"label":"Written Reprimand","count":16,"color":"#4DB3B3"},{"label":"Termination","count":7,"color":"#D64D4D"},{"label":"Separation","count":4,"color":"#FB8500"},{"label":"Demotion","count":3,"color":"#6A4FC7"},{"label":"Resignation","count":2,"color":"#F4C913"}]},{"name":"Duty Report Violation","count":33,"pct":1.9,"decisions":[{"label":"Suspension","count":24,"color":"#004D66"},{"label":"Charge Dismissed","count":17,"color":"#619484"},{"label":"Reinstruction","count":6,"color":"#B8960A"},{"label":"Written Reprimand","count":5,"color":"#4DB3B3"}]},{"name":"Failure to Supervise","count":32,"pct":1.8,"decisions":[{"label":"Suspension","count":17,"color":"#004D66"},{"label":"Charge Dismissed","count":11,"color":"#619484"},{"label":"Reinstruction","count":7,"color":"#B8960A"},{"label":"Written Reprimand","count":6,"color":"#4DB3B3"},{"label":"Demotion","count":2,"color":"#6A4FC7"}]},{"name":"Asleep On-Duty","count":23,"pct":1.3,"decisions":[{"label":"Suspension","count":17,"color":"#004D66"},{"label":"Charge Dismissed","count":5,"color":"#619484"},{"label":"Separation","count":2,"color":"#FB8500"},{"label":"Termination","count":1,"color":"#D64D4D"},{"label":"Reinstruction","count":1,"color":"#B8960A"}]},{"name":"Failed to Assist","count":8,"pct":0.5,"decisions":[{"label":"Suspension","count":8,"color":"#004D66"},{"label":"Reinstruction","count":2,"color":"#B8960A"}]},{"name":"Failed to Provide Language Services","count":5,"pct":0.3,"decisions":[{"label":"Written Reprimand","count":3,"color":"#4DB3B3"},{"label":"Charge Dismissed","count":2,"color":"#619484"},{"label":"Reinstruction","count":1,"color":"#B8960A"},{"label":"Suspension","count":1,"color":"#004D66"}]},{"name":"Failed to Take Corrective Action","count":4,"pct":0.2,"decisions":[{"label":"Written Reprimand","count":2,"color":"#4DB3B3"},{"label":"Separation","count":1,"color":"#FB8500"},{"label":"Suspension","count":1,"color":"#004D66"}]}]},{"group":"Unprofessional Behavior","count":448,"pct":25.6,"color":"#FB8500","decisions":[{"label":"Suspension","count":239,"color":"#004D66"},{"label":"Charge Dismissed","count":123,"color":"#619484"},{"label":"Reinstruction","count":98,"color":"#B8960A"},{"label":"Written Reprimand","count":75,"color":"#4DB3B3"},{"label":"Termination","count":35,"color":"#D64D4D"},{"label":"Separation","count":18,"color":"#FB8500"},{"label":"Demotion","count":6,"color":"#6A4FC7"},{"label":"Resignation","count":4,"color":"#F4C913"}],"charges":[{"name":"Unprofessional Conduct","count":140,"pct":8.0,"decisions":[{"label":"Suspension","count":75,"color":"#004D66"},{"label":"Charge Dismissed","count":47,"color":"#619484"},{"label":"Reinstruction","count":36,"color":"#B8960A"},{"label":"Written Reprimand","count":29,"color":"#4DB3B3"},{"label":"Termination","count":3,"color":"#D64D4D"},{"label":"Separation","count":2,"color":"#FB8500"},{"label":"Resignation","count":1,"color":"#F4C913"}]},{"name":"Offensive Remarks","count":124,"pct":7.1,"decisions":[{"label":"Suspension","count":62,"color":"#004D66"},{"label":"Charge Dismissed","count":39,"color":"#619484"},{"label":"Reinstruction","count":30,"color":"#B8960A"},{"label":"Written Reprimand","count":26,"color":"#4DB3B3"},{"label":"Termination","count":5,"color":"#D64D4D"},{"label":"Separation","count":4,"color":"#FB8500"},{"label":"Demotion","count":1,"color":"#6A4FC7"}]},{"name":"Diminished Esteem of CPD","count":109,"pct":6.2,"decisions":[{"label":"Suspension","count":60,"color":"#004D66"},{"label":"Charge Dismissed","count":27,"color":"#619484"},{"label":"Termination","count":21,"color":"#D64D4D"},{"label":"Reinstruction","count":11,"color":"#B8960A"},{"label":"Written Reprimand","count":8,"color":"#4DB3B3"},{"label":"Separation","count":8,"color":"#FB8500"},{"label":"Demotion","count":4,"color":"#6A4FC7"},{"label":"Resignation","count":2,"color":"#F4C913"}]},{"name":"Uniform Violation","count":25,"pct":1.4,"decisions":[{"label":"Suspension","count":13,"color":"#004D66"},{"label":"Reinstruction","count":9,"color":"#B8960A"},{"label":"Written Reprimand","count":6,"color":"#4DB3B3"},{"label":"Charge Dismissed","count":4,"color":"#619484"},{"label":"Separation","count":2,"color":"#FB8500"},{"label":"Termination","count":1,"color":"#D64D4D"},{"label":"Resignation","count":1,"color":"#F4C913"}]},{"name":"Appearance of Impropriety","count":19,"pct":1.1,"decisions":[{"label":"Suspension","count":13,"color":"#004D66"},{"label":"Reinstruction","count":5,"color":"#B8960A"},{"label":"Written Reprimand","count":4,"color":"#4DB3B3"},{"label":"Termination","count":1,"color":"#D64D4D"},{"label":"Demotion","count":1,"color":"#6A4FC7"},{"label":"Charge Dismissed","count":1,"color":"#619484"}]},{"name":"Telecommunications Violation","count":18,"pct":1.0,"decisions":[{"label":"Suspension","count":12,"color":"#004D66"},{"label":"Termination","count":4,"color":"#D64D4D"},{"label":"Charge Dismissed","count":2,"color":"#619484"},{"label":"Reinstruction","count":2,"color":"#B8960A"},{"label":"Separation","count":1,"color":"#FB8500"}]},{"name":"Failed to Identify","count":13,"pct":0.7,"decisions":[{"label":"Reinstruction","count":5,"color":"#B8960A"},{"label":"Suspension","count":4,"color":"#004D66"},{"label":"Charge Dismissed","count":3,"color":"#619484"},{"label":"Written Reprimand","count":2,"color":"#4DB3B3"},{"label":"Separation","count":1,"color":"#FB8500"}]}]},{"group":"Body Camera Violation","count":372,"pct":21.3,"color":"#6A4FC7","decisions":[{"label":"Suspension","count":209,"color":"#004D66"},{"label":"Reinstruction","count":120,"color":"#B8960A"},{"label":"Charge Dismissed","count":98,"color":"#619484"},{"label":"Written Reprimand","count":59,"color":"#4DB3B3"},{"label":"Separation","count":9,"color":"#FB8500"},{"label":"Termination","count":3,"color":"#D64D4D"},{"label":"Demotion","count":2,"color":"#6A4FC7"},{"label":"Resignation","count":2,"color":"#F4C913"},{"label":"Warning","count":2,"color":"#C45B8A"}],"charges":[{"name":"Body Camera Violation","count":372,"pct":21.3,"decisions":[{"label":"Suspension","count":209,"color":"#004D66"},{"label":"Reinstruction","count":120,"color":"#B8960A"},{"label":"Charge Dismissed","count":98,"color":"#619484"},{"label":"Written Reprimand","count":59,"color":"#4DB3B3"},{"label":"Separation","count":9,"color":"#FB8500"},{"label":"Termination","count":3,"color":"#D64D4D"},{"label":"Demotion","count":2,"color":"#6A4FC7"},{"label":"Resignation","count":2,"color":"#F4C913"},{"label":"Warning","count":2,"color":"#C45B8A"}]}]},{"group":"Attendance","count":369,"pct":21.1,"color":"#F4C913","decisions":[{"label":"Reinstruction","count":143,"color":"#B8960A"},{"label":"Suspension","count":124,"color":"#004D66"},{"label":"Charge Dismissed","count":83,"color":"#619484"},{"label":"Written Reprimand","count":33,"color":"#4DB3B3"},{"label":"Separation","count":31,"color":"#FB8500"},{"label":"Resignation","count":17,"color":"#F4C913"},{"label":"Termination","count":12,"color":"#D64D4D"},{"label":"Warning","count":4,"color":"#C45B8A"}],"charges":[{"name":"Sick Leave Abuse","count":196,"pct":11.2,"decisions":[{"label":"Reinstruction","count":122,"color":"#B8960A"},{"label":"Charge Dismissed","count":44,"color":"#619484"},{"label":"Suspension","count":43,"color":"#004D66"},{"label":"Separation","count":11,"color":"#FB8500"},{"label":"Resignation","count":5,"color":"#F4C913"},{"label":"Termination","count":5,"color":"#D64D4D"},{"label":"Written Reprimand","count":3,"color":"#4DB3B3"},{"label":"Warning","count":2,"color":"#C45B8A"}]},{"name":"Absent Without Leave (AWOL)","count":50,"pct":2.9,"decisions":[{"label":"Suspension","count":24,"color":"#004D66"},{"label":"Separation","count":11,"color":"#FB8500"},{"label":"Resignation","count":9,"color":"#F4C913"},{"label":"Charge Dismissed","count":7,"color":"#619484"},{"label":"Reinstruction","count":4,"color":"#B8960A"},{"label":"Termination","count":3,"color":"#D64D4D"},{"label":"Written Reprimand","count":2,"color":"#4DB3B3"}]},{"name":"Refusal of Mandatory Overtime","count":44,"pct":2.5,"decisions":[{"label":"Suspension","count":19,"color":"#004D66"},{"label":"Written Reprimand","count":11,"color":"#4DB3B3"},{"label":"Charge Dismissed","count":11,"color":"#619484"},{"label":"Separation","count":4,"color":"#FB8500"},{"label":"Reinstruction","count":3,"color":"#B8960A"},{"label":"Resignation","count":1,"color":"#F4C913"},{"label":"Termination","count":1,"color":"#D64D4D"}]},{"name":"Tardiness","count":42,"pct":2.4,"decisions":[{"label":"Suspension","count":22,"color":"#004D66"},{"label":"Written Reprimand","count":9,"color":"#4DB3B3"},{"label":"Charge Dismissed","count":8,"color":"#619484"},{"label":"Reinstruction","count":8,"color":"#B8960A"},{"label":"Warning","count":2,"color":"#C45B8A"},{"label":"Separation","count":2,"color":"#FB8500"},{"label":"Resignation","count":1,"color":"#F4C913"},{"label":"Termination","count":1,"color":"#D64D4D"}]},{"name":"Attendance and Overtime Violations","count":37,"pct":2.1,"decisions":[{"label":"Suspension","count":16,"color":"#004D66"},{"label":"Charge Dismissed","count":13,"color":"#619484"},{"label":"Written Reprimand","count":8,"color":"#4DB3B3"},{"label":"Reinstruction","count":6,"color":"#B8960A"},{"label":"Separation","count":3,"color":"#FB8500"},{"label":"Termination","count":2,"color":"#D64D4D"},{"label":"Resignation","count":1,"color":"#F4C913"}]}]},{"group":"Use of Force","count":228,"pct":13.0,"color":"#619484","decisions":[{"label":"Suspension","count":130,"color":"#004D66"},{"label":"Reinstruction","count":74,"color":"#B8960A"},{"label":"Charge Dismissed","count":73,"color":"#619484"},{"label":"Written Reprimand","count":38,"color":"#4DB3B3"},{"label":"Termination","count":16,"color":"#D64D4D"},{"label":"Separation","count":5,"color":"#FB8500"},{"label":"Demotion","count":5,"color":"#6A4FC7"},{"label":"Resignation","count":1,"color":"#F4C913"}],"charges":[{"name":"Use of Force Violation","count":55,"pct":3.1,"decisions":[{"label":"Suspension","count":35,"color":"#004D66"},{"label":"Charge Dismissed","count":20,"color":"#619484"},{"label":"Reinstruction","count":15,"color":"#B8960A"},{"label":"Termination","count":6,"color":"#D64D4D"},{"label":"Written Reprimand","count":6,"color":"#4DB3B3"},{"label":"Separation","count":2,"color":"#FB8500"},{"label":"Demotion","count":1,"color":"#6A4FC7"}]},{"name":"Failed to Report/Intervene","count":59,"pct":3.4,"decisions":[{"label":"Suspension","count":35,"color":"#004D66"},{"label":"Reinstruction","count":19,"color":"#B8960A"},{"label":"Charge Dismissed","count":13,"color":"#619484"},{"label":"Written Reprimand","count":10,"color":"#4DB3B3"},{"label":"Termination","count":3,"color":"#D64D4D"},{"label":"Demotion","count":2,"color":"#6A4FC7"},{"label":"Separation","count":1,"color":"#FB8500"}]},{"name":"Failed to De-escalate","count":48,"pct":2.7,"decisions":[{"label":"Suspension","count":26,"color":"#004D66"},{"label":"Reinstruction","count":16,"color":"#B8960A"},{"label":"Charge Dismissed","count":15,"color":"#619484"},{"label":"Written Reprimand","count":7,"color":"#4DB3B3"},{"label":"Termination","count":3,"color":"#D64D4D"},{"label":"Separation","count":1,"color":"#FB8500"},{"label":"Demotion","count":1,"color":"#6A4FC7"}]},{"name":"Failed to Request Medical Attention","count":38,"pct":2.2,"decisions":[{"label":"Suspension","count":19,"color":"#004D66"},{"label":"Charge Dismissed","count":17,"color":"#619484"},{"label":"Reinstruction","count":12,"color":"#B8960A"},{"label":"Written Reprimand","count":6,"color":"#4DB3B3"},{"label":"Termination","count":3,"color":"#D64D4D"},{"label":"Demotion","count":1,"color":"#6A4FC7"}]},{"name":"Improperly Handled a Firearm","count":26,"pct":1.5,"decisions":[{"label":"Suspension","count":14,"color":"#004D66"},{"label":"Reinstruction","count":12,"color":"#B8960A"},{"label":"Written Reprimand","count":9,"color":"#4DB3B3"},{"label":"Charge Dismissed","count":8,"color":"#619484"},{"label":"Separation","count":1,"color":"#FB8500"},{"label":"Termination","count":1,"color":"#D64D4D"}]},{"name":"Unauthorized Ammunition/Firearms","count":2,"pct":0.1,"decisions":[{"label":"Suspension","count":1,"color":"#004D66"},{"label":"Resignation","count":1,"color":"#F4C913"}]}]},{"group":"Integrity and Honesty","count":195,"pct":11.1,"color":"#D64D4D","decisions":[{"label":"Termination","count":70,"color":"#D64D4D"},{"label":"Suspension","count":65,"color":"#004D66"},{"label":"Charge Dismissed","count":53,"color":"#619484"},{"label":"Written Reprimand","count":16,"color":"#4DB3B3"},{"label":"Reinstruction","count":15,"color":"#B8960A"},{"label":"Separation","count":14,"color":"#FB8500"},{"label":"Resignation","count":8,"color":"#F4C913"},{"label":"Demotion","count":4,"color":"#6A4FC7"}],"charges":[{"name":"Untruthfulness","count":111,"pct":6.3,"decisions":[{"label":"Suspension","count":44,"color":"#004D66"},{"label":"Charge Dismissed","count":39,"color":"#619484"},{"label":"Termination","count":38,"color":"#D64D4D"},{"label":"Separation","count":9,"color":"#FB8500"},{"label":"Reinstruction","count":4,"color":"#B8960A"},{"label":"Written Reprimand","count":4,"color":"#4DB3B3"},{"label":"Resignation","count":4,"color":"#F4C913"},{"label":"Demotion","count":3,"color":"#6A4FC7"}]},{"name":"Database Misuse","count":32,"pct":1.8,"decisions":[{"label":"Suspension","count":11,"color":"#004D66"},{"label":"Termination","count":9,"color":"#D64D4D"},{"label":"Written Reprimand","count":8,"color":"#4DB3B3"},{"label":"Charge Dismissed","count":4,"color":"#619484"},{"label":"Reinstruction","count":4,"color":"#B8960A"},{"label":"Resignation","count":1,"color":"#F4C913"}]},{"name":"Cheating and Plagiarism","count":20,"pct":1.1,"decisions":[{"label":"Termination","count":15,"color":"#D64D4D"},{"label":"Separation","count":3,"color":"#FB8500"},{"label":"Resignation","count":2,"color":"#F4C913"},{"label":"Charge Dismissed","count":1,"color":"#619484"}]},{"name":"Confidential Information Violation","count":17,"pct":1.0,"decisions":[{"label":"Suspension","count":6,"color":"#004D66"},{"label":"Charge Dismissed","count":5,"color":"#619484"},{"label":"Reinstruction","count":5,"color":"#B8960A"},{"label":"Termination","count":4,"color":"#D64D4D"},{"label":"Written Reprimand","count":1,"color":"#4DB3B3"},{"label":"Separation","count":1,"color":"#FB8500"},{"label":"Resignation","count":1,"color":"#F4C913"}]},{"name":"Ethics Violation","count":15,"pct":0.9,"decisions":[{"label":"Suspension","count":4,"color":"#004D66"},{"label":"Charge Dismissed","count":4,"color":"#619484"},{"label":"Termination","count":4,"color":"#D64D4D"},{"label":"Written Reprimand","count":3,"color":"#4DB3B3"},{"label":"Reinstruction","count":2,"color":"#B8960A"},{"label":"Demotion","count":1,"color":"#6A4FC7"},{"label":"Separation","count":1,"color":"#FB8500"}]}]},{"group":"Vehicle and Travel","count":194,"pct":11.1,"color":"#4DB3B3","decisions":[{"label":"Written Reprimand","count":86,"color":"#4DB3B3"},{"label":"Suspension","count":77,"color":"#004D66"},{"label":"Reinstruction","count":50,"color":"#B8960A"},{"label":"Charge Dismissed","count":49,"color":"#619484"},{"label":"Separation","count":4,"color":"#FB8500"},{"label":"Termination","count":1,"color":"#D64D4D"},{"label":"Resignation","count":1,"color":"#F4C913"}],"charges":[{"name":"Vehicle Pursuit Violation","count":76,"pct":4.3,"decisions":[{"label":"Written Reprimand","count":33,"color":"#4DB3B3"},{"label":"Charge Dismissed","count":30,"color":"#619484"},{"label":"Reinstruction","count":26,"color":"#B8960A"},{"label":"Suspension","count":25,"color":"#004D66"},{"label":"Separation","count":1,"color":"#FB8500"}]},{"name":"Preventable Motor Vehicle Accident","count":81,"pct":4.6,"decisions":[{"label":"Written Reprimand","count":44,"color":"#4DB3B3"},{"label":"Suspension","count":32,"color":"#004D66"},{"label":"Reinstruction","count":13,"color":"#B8960A"},{"label":"Charge Dismissed","count":5,"color":"#619484"},{"label":"Termination","count":1,"color":"#D64D4D"},{"label":"Separation","count":1,"color":"#FB8500"},{"label":"Resignation","count":1,"color":"#F4C913"}]},{"name":"Travel Violation","count":37,"pct":2.1,"decisions":[{"label":"Suspension","count":20,"color":"#004D66"},{"label":"Charge Dismissed","count":14,"color":"#619484"},{"label":"Reinstruction","count":11,"color":"#B8960A"},{"label":"Written Reprimand","count":9,"color":"#4DB3B3"},{"label":"Separation","count":2,"color":"#FB8500"}]}]},{"group":"Compliance","count":144,"pct":8.2,"color":"#C45B8A","decisions":[{"label":"Suspension","count":96,"color":"#004D66"},{"label":"Charge Dismissed","count":46,"color":"#619484"},{"label":"Reinstruction","count":17,"color":"#B8960A"},{"label":"Written Reprimand","count":16,"color":"#4DB3B3"},{"label":"Separation","count":10,"color":"#FB8500"},{"label":"Resignation","count":7,"color":"#F4C913"},{"label":"Termination","count":3,"color":"#D64D4D"}],"charges":[{"name":"Insubordination","count":80,"pct":4.6,"decisions":[{"label":"Suspension","count":44,"color":"#004D66"},{"label":"Charge Dismissed","count":31,"color":"#619484"},{"label":"Reinstruction","count":11,"color":"#B8960A"},{"label":"Written Reprimand","count":10,"color":"#4DB3B3"},{"label":"Separation","count":10,"color":"#FB8500"},{"label":"Resignation","count":5,"color":"#F4C913"},{"label":"Termination","count":2,"color":"#D64D4D"}]},{"name":"Unauthorized Secondary Employment","count":54,"pct":3.1,"decisions":[{"label":"Suspension","count":45,"color":"#004D66"},{"label":"Charge Dismissed","count":9,"color":"#619484"},{"label":"Written Reprimand","count":6,"color":"#4DB3B3"},{"label":"Reinstruction","count":3,"color":"#B8960A"},{"label":"Resignation","count":2,"color":"#F4C913"},{"label":"Termination","count":1,"color":"#D64D4D"}]},{"name":"OPS Investigation Violation","count":10,"pct":0.6,"decisions":[{"label":"Suspension","count":7,"color":"#004D66"},{"label":"Charge Dismissed","count":6,"color":"#619484"},{"label":"Reinstruction","count":3,"color":"#B8960A"}]}]},{"group":"Criminal Conduct","count":144,"pct":8.2,"color":"#944A61","decisions":[{"label":"Suspension","count":93,"color":"#004D66"},{"label":"Charge Dismissed","count":23,"color":"#619484"},{"label":"Separation","count":20,"color":"#FB8500"},{"label":"Termination","count":18,"color":"#D64D4D"},{"label":"Written Reprimand","count":6,"color":"#4DB3B3"},{"label":"Reinstruction","count":5,"color":"#B8960A"},{"label":"Demotion","count":3,"color":"#6A4FC7"},{"label":"Resignation","count":3,"color":"#F4C913"}],"charges":[{"name":"Arrest or Criminal Charge","count":129,"pct":7.4,"decisions":[{"label":"Suspension","count":84,"color":"#004D66"},{"label":"Charge Dismissed","count":18,"color":"#619484"},{"label":"Separation","count":18,"color":"#FB8500"},{"label":"Termination","count":16,"color":"#D64D4D"},{"label":"Written Reprimand","count":5,"color":"#4DB3B3"},{"label":"Reinstruction","count":5,"color":"#B8960A"},{"label":"Demotion","count":3,"color":"#6A4FC7"},{"label":"Resignation","count":2,"color":"#F4C913"}]},{"name":"Violence in the Workplace","count":15,"pct":0.9,"decisions":[{"label":"Suspension","count":9,"color":"#004D66"},{"label":"Charge Dismissed","count":5,"color":"#619484"},{"label":"Separation","count":2,"color":"#FB8500"},{"label":"Termination","count":2,"color":"#D64D4D"},{"label":"Resignation","count":1,"color":"#F4C913"},{"label":"Written Reprimand","count":1,"color":"#4DB3B3"}]}]},{"group":"Improper Conduct","count":133,"pct":7.6,"color":"#3A6B5E","decisions":[{"label":"Suspension","count":62,"color":"#004D66"},{"label":"Charge Dismissed","count":54,"color":"#619484"},{"label":"Reinstruction","count":43,"color":"#B8960A"},{"label":"Written Reprimand","count":28,"color":"#4DB3B3"},{"label":"Termination","count":4,"color":"#D64D4D"},{"label":"Separation","count":3,"color":"#FB8500"},{"label":"Demotion","count":2,"color":"#6A4FC7"}],"charges":[{"name":"Improper Search/Frisk","count":50,"pct":2.9,"decisions":[{"label":"Suspension","count":23,"color":"#004D66"},{"label":"Reinstruction","count":20,"color":"#B8960A"},{"label":"Charge Dismissed","count":18,"color":"#619484"},{"label":"Written Reprimand","count":8,"color":"#4DB3B3"},{"label":"Separation","count":3,"color":"#FB8500"},{"label":"Termination","count":2,"color":"#D64D4D"},{"label":"Demotion","count":2,"color":"#6A4FC7"}]},{"name":"Improper Arrest/Detainment","count":21,"pct":1.2,"decisions":[{"label":"Suspension","count":15,"color":"#004D66"},{"label":"Charge Dismissed","count":7,"color":"#619484"},{"label":"Reinstruction","count":7,"color":"#B8960A"},{"label":"Written Reprimand","count":1,"color":"#4DB3B3"}]},{"name":"Improper Tow","count":20,"pct":1.1,"decisions":[{"label":"Charge Dismissed","count":9,"color":"#619484"},{"label":"Suspension","count":7,"color":"#004D66"},{"label":"Written Reprimand","count":6,"color":"#4DB3B3"},{"label":"Reinstruction","count":6,"color":"#B8960A"}]},{"name":"Improper Stop","count":14,"pct":0.8,"decisions":[{"label":"Charge Dismissed","count":7,"color":"#619484"},{"label":"Suspension","count":7,"color":"#004D66"},{"label":"Written Reprimand","count":3,"color":"#4DB3B3"},{"label":"Reinstruction","count":2,"color":"#B8960A"},{"label":"Termination","count":1,"color":"#D64D4D"}]},{"name":"Arrestee Handling Violation","count":14,"pct":0.8,"decisions":[{"label":"Written Reprimand","count":6,"color":"#4DB3B3"},{"label":"Charge Dismissed","count":6,"color":"#619484"},{"label":"Suspension","count":5,"color":"#004D66"},{"label":"Reinstruction","count":4,"color":"#B8960A"}]},{"name":"Improper Citation","count":9,"pct":0.5,"decisions":[{"label":"Charge Dismissed","count":5,"color":"#619484"},{"label":"Written Reprimand","count":4,"color":"#4DB3B3"},{"label":"Reinstruction","count":4,"color":"#B8960A"},{"label":"Suspension","count":3,"color":"#004D66"}]},{"name":"Mishandled Juvenile","count":5,"pct":0.3,"decisions":[{"label":"Suspension","count":2,"color":"#004D66"},{"label":"Charge Dismissed","count":2,"color":"#619484"},{"label":"Termination","count":1,"color":"#D64D4D"}]}]},{"group":"Evidence and Property","count":134,"pct":7.7,"color":"#B8960A","decisions":[{"label":"Suspension","count":54,"color":"#004D66"},{"label":"Written Reprimand","count":41,"color":"#4DB3B3"},{"label":"Reinstruction","count":34,"color":"#B8960A"},{"label":"Charge Dismissed","count":33,"color":"#619484"},{"label":"Separation","count":5,"color":"#FB8500"},{"label":"Demotion","count":2,"color":"#6A4FC7"},{"label":"Warning","count":1,"color":"#C45B8A"}],"charges":[{"name":"Failed to Safeguard Equipment","count":72,"pct":4.1,"decisions":[{"label":"Written Reprimand","count":27,"color":"#4DB3B3"},{"label":"Suspension","count":24,"color":"#004D66"},{"label":"Reinstruction","count":20,"color":"#B8960A"},{"label":"Charge Dismissed","count":12,"color":"#619484"},{"label":"Separation","count":2,"color":"#FB8500"},{"label":"Warning","count":1,"color":"#C45B8A"}]},{"name":"Evidence Collection Violation","count":39,"pct":2.2,"decisions":[{"label":"Suspension","count":21,"color":"#004D66"},{"label":"Charge Dismissed","count":14,"color":"#619484"},{"label":"Written Reprimand","count":7,"color":"#4DB3B3"},{"label":"Reinstruction","count":6,"color":"#B8960A"},{"label":"Separation","count":3,"color":"#FB8500"},{"label":"Demotion","count":2,"color":"#6A4FC7"}]},{"name":"Failed to Safeguard Property","count":23,"pct":1.3,"decisions":[{"label":"Suspension","count":9,"color":"#004D66"},{"label":"Reinstruction","count":8,"color":"#B8960A"},{"label":"Written Reprimand","count":7,"color":"#4DB3B3"},{"label":"Charge Dismissed","count":7,"color":"#619484"}]}]},{"group":"Drugs and Alcohol","count":27,"pct":1.5,"color":"#7A4520","decisions":[{"label":"Suspension","count":14,"color":"#004D66"},{"label":"Written Reprimand","count":4,"color":"#4DB3B3"},{"label":"Separation","count":3,"color":"#FB8500"},{"label":"Charge Dismissed","count":3,"color":"#619484"},{"label":"Reinstruction","count":3,"color":"#B8960A"},{"label":"Termination","count":2,"color":"#D64D4D"},{"label":"Resignation","count":2,"color":"#F4C913"}],"charges":[{"name":"Drug & Alcohol Testing Policy Violation","count":20,"pct":1.1,"decisions":[{"label":"Suspension","count":13,"color":"#004D66"},{"label":"Separation","count":3,"color":"#FB8500"},{"label":"Charge Dismissed","count":2,"color":"#619484"},{"label":"Termination","count":2,"color":"#D64D4D"},{"label":"Reinstruction","count":2,"color":"#B8960A"},{"label":"Resignation","count":1,"color":"#F4C913"}]},{"name":"Consumed Prohibited Substance While On Duty","count":7,"pct":0.4,"decisions":[{"label":"Written Reprimand","count":4,"color":"#4DB3B3"},{"label":"Charge Dismissed","count":1,"color":"#619484"},{"label":"Reinstruction","count":1,"color":"#B8960A"},{"label":"Resignation","count":1,"color":"#F4C913"},{"label":"Suspension","count":1,"color":"#004D66"}]}]},{"group":"Not Fit for Duty","count":11,"pct":0.6,"color":"#D64D4D","decisions":[{"label":"Termination","count":6,"color":"#D64D4D"},{"label":"Suspension","count":2,"color":"#004D66"},{"label":"Charge Dismissed","count":2,"color":"#619484"},{"label":"Separation","count":2,"color":"#FB8500"},{"label":"Resignation","count":1,"color":"#F4C913"}],"charges":[{"name":"Not Fit for Duty","count":11,"pct":0.6,"decisions":[{"label":"Termination","count":6,"color":"#D64D4D"},{"label":"Suspension","count":2,"color":"#004D66"},{"label":"Charge Dismissed","count":2,"color":"#619484"},{"label":"Separation","count":2,"color":"#FB8500"},{"label":"Resignation","count":1,"color":"#F4C913"}]}]}];
 
const TOTAL_HEARINGS = 1749;
const DECISION_ORDER = ["All","Suspension","Charge Dismissed","Reinstruction","Written Reprimand","Termination","Separation","Resignation","Demotion","Warning"];
const DECISION_COLORS = {"Termination":"#D64D4D","Separation":"#FB8500","Resignation":"#F4C913","Demotion":"#6A4FC7","Suspension":"#004D66","Charge Dismissed":"#619484","Written Reprimand":"#4DB3B3","Warning":"#C45B8A","Reinstruction":"#B8960A"};
 
const chartArea = document.getElementById('chart-area');
const vizNote = document.getElementById('viz-note');
const toggleBar = document.getElementById('toggle-bar');
const backBtn = document.getElementById('back-btn');
const chartHeader = document.getElementById('chart-header');
const chartTitle = document.getElementById('chart-title');
const chartSubtitle = document.getElementById('chart-subtitle');
 
let activeDecision = 'All';
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
      renderBars();
    });
    toggleBar.appendChild(btn);
  });
}
 
// --- Filtered count helper ---
function filteredCount(item) {
  if (activeDecision === 'All') return item.count;
  var dec = (item.decisions || []).find(function(d) { return d.label === activeDecision; });
  return dec ? dec.count : 0;
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
    if (activeDecision === 'All') {
      countText = fc.toLocaleString() + ' hearings (' + group.pct + '%)';
    } else {
      var pctOfGroup = group.count > 0 ? Math.round(fc / group.count * 100) : 0;
      countText = fc.toLocaleString() + ' ' + activeDecision.toLowerCase() + (fc !== 1 ? 's' : '') + ' (' + pctOfGroup + '% of ' + group.count.toLocaleString() + ' cases)';
    }
    label.innerHTML = '<span>' + group.group + '</span><span class="count-label">' + countText + '</span>';
 
    var track = document.createElement('div');
    track.className = 'bar-track';
 
    if (activeDecision === 'All') {
      if (group.charges && group.charges.length > 1) {
        var runningPct = 0;
        var charges = group.charges.slice().sort(function(a, b) { return b.count - a.count; });
        charges.forEach(function(charge, ci) {
          var segWidthPct = maxCount > 0 ? (charge.count / maxCount * 100) : 0;
          if (segWidthPct <= 0) return;
          var seg = document.createElement('div');
          seg.className = 'bar-segment';
          seg.style.left = runningPct + '%';
          seg.style.width = segWidthPct + '%';
          seg.style.background = group.color;
          seg.style.opacity = '0.85';
          if (ci > 0) {
            seg.style.borderLeft = '1px solid rgba(244,240,230,0.6)';
          }
          track.appendChild(seg);
          runningPct += segWidthPct;
        });
      } else {
        var fill = document.createElement('div');
        fill.className = 'bar-fill';
        fill.style.width = (fc / maxCount * 100) + '%';
        fill.style.background = group.color;
        fill.style.opacity = '0.85';
        track.appendChild(fill);
      }
    } else {
      var fill = document.createElement('div');
      fill.className = 'bar-fill';
      fill.style.width = fc > 0 ? (fc / group.count * 100) + '%' : '0%';
      fill.style.background = DECISION_COLORS[activeDecision];
      fill.style.opacity = '0.85';
      track.appendChild(fill);
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
    if (activeDecision === 'All') {
      countText = fc.toLocaleString() + ' hearings (' + charge.pct + '%)';
    } else {
      var pctOfCharge = charge.count > 0 ? Math.round(fc / charge.count * 100) : 0;
      countText = fc.toLocaleString() + ' ' + activeDecision.toLowerCase() + (fc !== 1 ? 's' : '') + ' (' + pctOfCharge + '% of ' + charge.count.toLocaleString() + ' cases)';
    }
    label.innerHTML = '<span>' + charge.name + '</span><span class="count-label">' + countText + '</span>';
 
    var track = document.createElement('div');
    track.className = 'bar-track';
 
    if (activeDecision === 'All') {
      var fill = document.createElement('div');
      fill.className = 'bar-fill';
      fill.style.width = maxChargeCount > 0 ? (charge.count / maxChargeCount * 100) + '%' : '0%';
      fill.style.background = grp.color;
      fill.style.opacity = '0.85';
      track.appendChild(fill);
    } else {
      var fill = document.createElement('div');
      fill.className = 'bar-fill';
      fill.style.width = fc > 0 ? (fc / charge.count * 100) + '%' : '0%';
      fill.style.background = DECISION_COLORS[activeDecision];
      fill.style.opacity = '0.85';
      track.appendChild(fill);
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
  updateNote();
}
 
function showGroups() {
  mode = 'groups';
  activeGroup = null;
  renderBars();
  updateNote();
}
 
// --- Tooltips ---
function showGroupTooltip(group, e) {
  var fc = filteredCount(group);
  var html = '<span class="tt-title">' + group.group + '</span>';
 
  if (activeDecision === 'All') {
    html += '<span class="tt-total">' + group.count.toLocaleString() + ' hearings (' + group.pct + '% of all cases)</span>';
 
    if (group.charges && group.charges.length > 0) {
      html += '<span class="tt-section-label">Charges in this category</span>';
      var charges = group.charges.slice().sort(function(a, b) { return b.count - a.count; });
      charges.forEach(function(c) {
        var pct = Math.round(c.count / group.count * 100);
        html += '<div class="tt-row">'
          + '<div class="tt-bar-swatch" style="background:' + group.color + '"></div>'
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
        + '<div class="tt-swatch" style="background:' + d.color + '"></div>'
        + '<span class="tt-label">' + d.label + '</span>'
        + '<span class="tt-count">' + d.count + '</span>'
        + '<span class="tt-pct">(' + pct + '%)</span></div>';
    });
  } else {
    html += '<span class="tt-total">' + group.count.toLocaleString() + ' total hearings</span>';
    html += '<div class="tt-row">'
      + '<div class="tt-swatch" style="background:' + DECISION_COLORS[activeDecision] + '"></div>'
      + '<span class="tt-label">' + activeDecision + '</span>'
      + '<span class="tt-count">' + fc + '</span>'
      + '<span class="tt-pct">(' + (group.count > 0 ? Math.round(fc / group.count * 100) : 0) + '%)</span></div>';
 
    if (group.charges && group.charges.length > 1) {
      html += '<hr class="tt-divider">';
      html += '<span class="tt-section-label">By charge</span>';
      var charges = group.charges.slice().sort(function(a, b) {
        return filteredCount(b) - filteredCount(a);
      });
      charges.forEach(function(c) {
        var cfc = filteredCount(c);
        if (cfc === 0) return;
        html += '<div class="tt-row">'
          + '<div class="tt-bar-swatch" style="background:' + DECISION_COLORS[activeDecision] + '"></div>'
          + '<span class="tt-label">' + c.name + '</span>'
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
 
  if (activeDecision === 'All') {
    html += '<span class="tt-section-label">Outcomes</span>';
    var decisions = (charge.decisions || []).slice().sort(function(a, b) { return b.count - a.count; });
    decisions.forEach(function(d) {
      var pct = Math.round(d.count / charge.count * 100);
      html += '<div class="tt-row">'
        + '<div class="tt-swatch" style="background:' + d.color + '"></div>'
        + '<span class="tt-label">' + d.label + '</span>'
        + '<span class="tt-count">' + d.count + '</span>'
        + '<span class="tt-pct">(' + pct + '%)</span></div>';
    });
  } else {
    html += '<div class="tt-row">'
      + '<div class="tt-swatch" style="background:' + DECISION_COLORS[activeDecision] + '"></div>'
      + '<span class="tt-label">' + activeDecision + '</span>'
      + '<span class="tt-count">' + fc + '</span>'
      + '<span class="tt-pct">(' + (charge.count > 0 ? Math.round(fc / charge.count * 100) : 0) + '%)</span></div>';
  }
 
  tooltip.innerHTML = html;
  tooltip.classList.add('visible');
  positionTooltip(e);
}
 
function positionTooltip(e) {
  var rect = chartArea.getBoundingClientRect();
  var mx = e.clientX - rect.left;
  var my = e.clientY - rect.top;
  var tipW = tooltip.offsetWidth || 260;
  var tipH = tooltip.offsetHeight || 200;
  var areaW = rect.width;
 
  var tx = mx + 18;
  if (tx + tipW > areaW - 10) tx = mx - tipW - 10;
  var ty = Math.max(4, Math.min(my - 10, rect.height - tipH - 4));
 
  tooltip.style.left = tx + 'px';
  tooltip.style.top = ty + 'px';
}
 
// --- Note ---
function updateNote() {
  if (mode === 'groups') {
    if (activeDecision === 'All') {
      vizNote.textContent = 'Bar length is relative to the most common charge category. Hover for sub-charge and outcome breakdowns. Click a bar to expand its charges.';
    } else {
      vizNote.textContent = 'Filtered by \u201c' + activeDecision + '.\u201d Each bar track represents that category\u2019s total cases (scaled to the largest group). The filled area shows the share of those cases that resulted in this outcome. Click a bar to expand.';
    }
  } else {
    var name = activeGroup ? activeGroup.group : '';
    if (activeDecision === 'All') {
      vizNote.textContent = 'Bar length is relative to the most common sub-charge in \u201c' + name + '.\u201d Hover for outcome breakdowns.';
    } else {
      vizNote.textContent = 'Filtered by \u201c' + activeDecision + '\u201d within \u201c' + name + '.\u201d Each bar track represents that charge\u2019s total cases. The filled area shows the share that resulted in this outcome.';
    }
  }
}
 
// --- Init ---
initTooltip();
buildToggleBar();
renderBars();
 