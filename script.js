const DATA = [{"group":"Neglect of Duty","count":641,"pct":36.1,"color":"#004D66","decisions":[{"label":"Suspension","count":347,"color":"#23685b"},{"label":"Charge Dismissed","count":195,"color":"#d0d64c"},{"label":"Reinstruction","count":133,"color":"#ccd8db"},{"label":"Written Reprimand","count":108,"color":"#a9d2cf"},{"label":"Termination","count":16,"color":"#D64D4D"},{"label":"Separation","count":23,"color":"#e56430"},{"label":"Resignation","count":4,"color":"#f4c913"},{"label":"Demotion","count":9,"color":"#6A4FC7"}],"charges":[{"name":"Failure to Report/Notify","count":226,"pct":12.7,"decisions":[{"label":"Suspension","count":123,"color":"#23685b"},{"label":"Charge Dismissed","count":64,"color":"#d0d64c"},{"label":"Reinstruction","count":53,"color":"#ccd8db"},{"label":"Written Reprimand","count":42,"color":"#a9d2cf"},{"label":"Termination","count":3,"color":"#D64D4D"},{"label":"Separation","count":12,"color":"#e56430"},{"label":"Resignation","count":1,"color":"#f4c913"},{"label":"Demotion","count":1,"color":"#6A4FC7"}]},{"name":"Lack of Service","count":209,"pct":11.8,"decisions":[{"label":"Suspension","count":109,"color":"#23685b"},{"label":"Charge Dismissed","count":71,"color":"#d0d64c"},{"label":"Reinstruction","count":43,"color":"#ccd8db"},{"label":"Written Reprimand","count":34,"color":"#a9d2cf"},{"label":"Termination","count":5,"color":"#D64D4D"},{"label":"Separation","count":4,"color":"#e56430"},{"label":"Resignation","count":1,"color":"#f4c913"},{"label":"Demotion","count":3,"color":"#6A4FC7"}]},{"name":"Neglect of Duty","count":101,"pct":5.7,"decisions":[{"label":"Suspension","count":47,"color":"#23685b"},{"label":"Charge Dismissed","count":25,"color":"#d0d64c"},{"label":"Reinstruction","count":20,"color":"#ccd8db"},{"label":"Written Reprimand","count":16,"color":"#a9d2cf"},{"label":"Termination","count":7,"color":"#D64D4D"},{"label":"Separation","count":4,"color":"#e56430"},{"label":"Resignation","count":2,"color":"#f4c913"},{"label":"Demotion","count":3,"color":"#6A4FC7"}]},{"name":"Duty Report Violation","count":33,"pct":1.9,"decisions":[{"label":"Suspension","count":24,"color":"#23685b"},{"label":"Charge Dismissed","count":17,"color":"#d0d64c"},{"label":"Reinstruction","count":6,"color":"#ccd8db"},{"label":"Written Reprimand","count":5,"color":"#a9d2cf"}]},{"name":"Failure to Supervise","count":32,"pct":1.8,"decisions":[{"label":"Suspension","count":17,"color":"#23685b"},{"label":"Charge Dismissed","count":11,"color":"#d0d64c"},{"label":"Reinstruction","count":7,"color":"#ccd8db"},{"label":"Written Reprimand","count":6,"color":"#a9d2cf"},{"label":"Demotion","count":2,"color":"#6A4FC7"}]},{"name":"Asleep On-Duty","count":23,"pct":1.3,"decisions":[{"label":"Suspension","count":17,"color":"#23685b"},{"label":"Charge Dismissed","count":5,"color":"#d0d64c"},{"label":"Reinstruction","count":1,"color":"#ccd8db"},{"label":"Termination","count":1,"color":"#D64D4D"},{"label":"Separation","count":2,"color":"#e56430"}]},{"name":"Failed to Assist","count":8,"pct":0.5,"decisions":[{"label":"Suspension","count":8,"color":"#23685b"},{"label":"Reinstruction","count":2,"color":"#ccd8db"}]},{"name":"Failed to Provide Language Services","count":5,"pct":0.3,"decisions":[{"label":"Suspension","count":1,"color":"#23685b"},{"label":"Charge Dismissed","count":2,"color":"#d0d64c"},{"label":"Reinstruction","count":1,"color":"#ccd8db"},{"label":"Written Reprimand","count":3,"color":"#a9d2cf"}]},{"name":"Failed to Take Corrective Action","count":4,"pct":0.2,"decisions":[{"label":"Suspension","count":1,"color":"#23685b"},{"label":"Written Reprimand","count":2,"color":"#a9d2cf"},{"label":"Separation","count":1,"color":"#e56430"}]}]},{"group":"Unprofessional Behavior","count":453,"pct":25.5,"color":"#FB8500","decisions":[{"label":"Suspension","count":243,"color":"#23685b"},{"label":"Charge Dismissed","count":123,"color":"#d0d64c"},{"label":"Reinstruction","count":101,"color":"#ccd8db"},{"label":"Written Reprimand","count":76,"color":"#a9d2cf"},{"label":"Termination","count":35,"color":"#D64D4D"},{"label":"Separation","count":18,"color":"#e56430"},{"label":"Resignation","count":4,"color":"#f4c913"},{"label":"Demotion","count":6,"color":"#6A4FC7"}],"charges":[{"name":"Unprofessional Conduct","count":142,"pct":8.0,"decisions":[{"label":"Suspension","count":76,"color":"#23685b"},{"label":"Charge Dismissed","count":47,"color":"#d0d64c"},{"label":"Reinstruction","count":36,"color":"#ccd8db"},{"label":"Written Reprimand","count":30,"color":"#a9d2cf"},{"label":"Termination","count":3,"color":"#D64D4D"},{"label":"Separation","count":2,"color":"#e56430"},{"label":"Resignation","count":1,"color":"#f4c913"}]},{"name":"Offensive Remarks","count":125,"pct":7.0,"decisions":[{"label":"Suspension","count":63,"color":"#23685b"},{"label":"Charge Dismissed","count":39,"color":"#d0d64c"},{"label":"Reinstruction","count":31,"color":"#ccd8db"},{"label":"Written Reprimand","count":26,"color":"#a9d2cf"},{"label":"Termination","count":5,"color":"#D64D4D"},{"label":"Separation","count":4,"color":"#e56430"},{"label":"Demotion","count":1,"color":"#6A4FC7"}]},{"name":"Diminished Esteem of CPD","count":110,"pct":6.2,"decisions":[{"label":"Suspension","count":61,"color":"#23685b"},{"label":"Charge Dismissed","count":27,"color":"#d0d64c"},{"label":"Reinstruction","count":12,"color":"#ccd8db"},{"label":"Written Reprimand","count":8,"color":"#a9d2cf"},{"label":"Termination","count":21,"color":"#D64D4D"},{"label":"Separation","count":8,"color":"#e56430"},{"label":"Resignation","count":2,"color":"#f4c913"},{"label":"Demotion","count":4,"color":"#6A4FC7"}]},{"name":"Uniform Violation","count":25,"pct":1.4,"decisions":[{"label":"Suspension","count":13,"color":"#23685b"},{"label":"Charge Dismissed","count":4,"color":"#d0d64c"},{"label":"Reinstruction","count":9,"color":"#ccd8db"},{"label":"Written Reprimand","count":6,"color":"#a9d2cf"},{"label":"Termination","count":1,"color":"#D64D4D"},{"label":"Separation","count":2,"color":"#e56430"},{"label":"Resignation","count":1,"color":"#f4c913"}]},{"name":"Appearance of Impropriety","count":19,"pct":1.1,"decisions":[{"label":"Suspension","count":13,"color":"#23685b"},{"label":"Charge Dismissed","count":1,"color":"#d0d64c"},{"label":"Reinstruction","count":5,"color":"#ccd8db"},{"label":"Written Reprimand","count":4,"color":"#a9d2cf"},{"label":"Termination","count":1,"color":"#D64D4D"},{"label":"Demotion","count":1,"color":"#6A4FC7"}]},{"name":"Telecommunications Violation","count":19,"pct":1.1,"decisions":[{"label":"Suspension","count":13,"color":"#23685b"},{"label":"Charge Dismissed","count":2,"color":"#d0d64c"},{"label":"Reinstruction","count":3,"color":"#ccd8db"},{"label":"Termination","count":4,"color":"#D64D4D"},{"label":"Separation","count":1,"color":"#e56430"}]},{"name":"Failed to Identify","count":13,"pct":0.7,"decisions":[{"label":"Suspension","count":4,"color":"#23685b"},{"label":"Charge Dismissed","count":3,"color":"#d0d64c"},{"label":"Reinstruction","count":5,"color":"#ccd8db"},{"label":"Written Reprimand","count":2,"color":"#a9d2cf"},{"label":"Separation","count":1,"color":"#e56430"}]}]},{"group":"Body Camera Violation","count":379,"pct":21.4,"color":"#6A4FC7","decisions":[{"label":"Suspension","count":210,"color":"#23685b"},{"label":"Charge Dismissed","count":97,"color":"#d0d64c"},{"label":"Reinstruction","count":123,"color":"#ccd8db"},{"label":"Written Reprimand","count":64,"color":"#a9d2cf"},{"label":"Termination","count":3,"color":"#D64D4D"},{"label":"Separation","count":9,"color":"#e56430"},{"label":"Resignation","count":2,"color":"#f4c913"},{"label":"Demotion","count":2,"color":"#6A4FC7"},{"label":"Warning","count":2,"color":"#51a89a"}],"charges":[{"name":"Body Camera Violation","count":379,"pct":21.4,"decisions":[{"label":"Suspension","count":210,"color":"#23685b"},{"label":"Charge Dismissed","count":97,"color":"#d0d64c"},{"label":"Reinstruction","count":123,"color":"#ccd8db"},{"label":"Written Reprimand","count":64,"color":"#a9d2cf"},{"label":"Termination","count":3,"color":"#D64D4D"},{"label":"Separation","count":9,"color":"#e56430"},{"label":"Resignation","count":2,"color":"#f4c913"},{"label":"Demotion","count":2,"color":"#6A4FC7"},{"label":"Warning","count":2,"color":"#51a89a"}]}]},{"group":"Attendance","count":375,"pct":21.1,"color":"#F4C913","decisions":[{"label":"Suspension","count":125,"color":"#23685b"},{"label":"Charge Dismissed","count":83,"color":"#d0d64c"},{"label":"Reinstruction","count":144,"color":"#ccd8db"},{"label":"Written Reprimand","count":35,"color":"#a9d2cf"},{"label":"Termination","count":14,"color":"#D64D4D"},{"label":"Separation","count":31,"color":"#e56430"},{"label":"Resignation","count":17,"color":"#f4c913"},{"label":"Warning","count":4,"color":"#51a89a"}],"charges":[{"name":"Sick Leave Abuse","count":197,"pct":11.1,"decisions":[{"label":"Suspension","count":43,"color":"#23685b"},{"label":"Charge Dismissed","count":44,"color":"#d0d64c"},{"label":"Reinstruction","count":122,"color":"#ccd8db"},{"label":"Written Reprimand","count":3,"color":"#a9d2cf"},{"label":"Termination","count":6,"color":"#D64D4D"},{"label":"Separation","count":11,"color":"#e56430"},{"label":"Resignation","count":5,"color":"#f4c913"},{"label":"Warning","count":2,"color":"#51a89a"}]},{"name":"Absent Without Leave (AWOL)","count":51,"pct":2.9,"decisions":[{"label":"Suspension","count":24,"color":"#23685b"},{"label":"Charge Dismissed","count":7,"color":"#d0d64c"},{"label":"Reinstruction","count":4,"color":"#ccd8db"},{"label":"Written Reprimand","count":2,"color":"#a9d2cf"},{"label":"Termination","count":4,"color":"#D64D4D"},{"label":"Separation","count":11,"color":"#e56430"},{"label":"Resignation","count":9,"color":"#f4c913"}]},{"name":"Refusal of Mandatory Overtime","count":45,"pct":2.5,"decisions":[{"label":"Suspension","count":19,"color":"#23685b"},{"label":"Charge Dismissed","count":11,"color":"#d0d64c"},{"label":"Reinstruction","count":4,"color":"#ccd8db"},{"label":"Written Reprimand","count":11,"color":"#a9d2cf"},{"label":"Termination","count":1,"color":"#D64D4D"},{"label":"Separation","count":4,"color":"#e56430"},{"label":"Resignation","count":1,"color":"#f4c913"}]},{"name":"Tardiness","count":43,"pct":2.4,"decisions":[{"label":"Suspension","count":23,"color":"#23685b"},{"label":"Charge Dismissed","count":8,"color":"#d0d64c"},{"label":"Reinstruction","count":8,"color":"#ccd8db"},{"label":"Written Reprimand","count":9,"color":"#a9d2cf"},{"label":"Termination","count":1,"color":"#D64D4D"},{"label":"Separation","count":2,"color":"#e56430"},{"label":"Resignation","count":1,"color":"#f4c913"},{"label":"Warning","count":2,"color":"#51a89a"}]},{"name":"Attendance and Overtime Violations","count":39,"pct":2.2,"decisions":[{"label":"Suspension","count":16,"color":"#23685b"},{"label":"Charge Dismissed","count":13,"color":"#d0d64c"},{"label":"Reinstruction","count":6,"color":"#ccd8db"},{"label":"Written Reprimand","count":10,"color":"#a9d2cf"},{"label":"Termination","count":2,"color":"#D64D4D"},{"label":"Separation","count":3,"color":"#e56430"},{"label":"Resignation","count":1,"color":"#f4c913"}]}]},{"group":"Use of Force","count":231,"pct":13.0,"color":"#619484","decisions":[{"label":"Suspension","count":133,"color":"#23685b"},{"label":"Charge Dismissed","count":73,"color":"#d0d64c"},{"label":"Reinstruction","count":76,"color":"#ccd8db"},{"label":"Written Reprimand","count":38,"color":"#a9d2cf"},{"label":"Termination","count":16,"color":"#D64D4D"},{"label":"Separation","count":5,"color":"#e56430"},{"label":"Resignation","count":1,"color":"#f4c913"},{"label":"Demotion","count":5,"color":"#6A4FC7"}],"charges":[{"name":"Use of Force Violation","count":55,"pct":3.1,"decisions":[{"label":"Suspension","count":35,"color":"#23685b"},{"label":"Charge Dismissed","count":20,"color":"#d0d64c"},{"label":"Reinstruction","count":15,"color":"#ccd8db"},{"label":"Written Reprimand","count":6,"color":"#a9d2cf"},{"label":"Termination","count":6,"color":"#D64D4D"},{"label":"Separation","count":2,"color":"#e56430"},{"label":"Demotion","count":1,"color":"#6A4FC7"}]},{"name":"Failed to Report/Intervene","count":60,"pct":3.4,"decisions":[{"label":"Suspension","count":36,"color":"#23685b"},{"label":"Charge Dismissed","count":13,"color":"#d0d64c"},{"label":"Reinstruction","count":19,"color":"#ccd8db"},{"label":"Written Reprimand","count":10,"color":"#a9d2cf"},{"label":"Termination","count":3,"color":"#D64D4D"},{"label":"Separation","count":1,"color":"#e56430"},{"label":"Demotion","count":2,"color":"#6A4FC7"}]},{"name":"Failed to De-escalate","count":48,"pct":2.7,"decisions":[{"label":"Suspension","count":26,"color":"#23685b"},{"label":"Charge Dismissed","count":15,"color":"#d0d64c"},{"label":"Reinstruction","count":16,"color":"#ccd8db"},{"label":"Written Reprimand","count":7,"color":"#a9d2cf"},{"label":"Termination","count":3,"color":"#D64D4D"},{"label":"Separation","count":1,"color":"#e56430"},{"label":"Demotion","count":1,"color":"#6A4FC7"}]},{"name":"Failed to Request Medical Attention","count":38,"pct":2.1,"decisions":[{"label":"Suspension","count":19,"color":"#23685b"},{"label":"Charge Dismissed","count":17,"color":"#d0d64c"},{"label":"Reinstruction","count":12,"color":"#ccd8db"},{"label":"Written Reprimand","count":6,"color":"#a9d2cf"},{"label":"Termination","count":3,"color":"#D64D4D"},{"label":"Demotion","count":1,"color":"#6A4FC7"}]},{"name":"Improperly Handled a Firearm","count":28,"pct":1.6,"decisions":[{"label":"Suspension","count":16,"color":"#23685b"},{"label":"Charge Dismissed","count":8,"color":"#d0d64c"},{"label":"Reinstruction","count":14,"color":"#ccd8db"},{"label":"Written Reprimand","count":9,"color":"#a9d2cf"},{"label":"Termination","count":1,"color":"#D64D4D"},{"label":"Separation","count":1,"color":"#e56430"}]},{"name":"Unauthorized Ammunition/Firearms","count":2,"pct":0.1,"decisions":[{"label":"Suspension","count":1,"color":"#23685b"},{"label":"Resignation","count":1,"color":"#f4c913"}]}]},{"group":"Integrity and Honesty","count":200,"pct":11.3,"color":"#D64D4D","decisions":[{"label":"Suspension","count":68,"color":"#23685b"},{"label":"Charge Dismissed","count":54,"color":"#d0d64c"},{"label":"Reinstruction","count":15,"color":"#ccd8db"},{"label":"Written Reprimand","count":16,"color":"#a9d2cf"},{"label":"Termination","count":71,"color":"#D64D4D"},{"label":"Separation","count":14,"color":"#e56430"},{"label":"Resignation","count":8,"color":"#f4c913"},{"label":"Demotion","count":4,"color":"#6A4FC7"}],"charges":[{"name":"Untruthfulness","count":113,"pct":6.4,"decisions":[{"label":"Suspension","count":44,"color":"#23685b"},{"label":"Charge Dismissed","count":40,"color":"#d0d64c"},{"label":"Reinstruction","count":4,"color":"#ccd8db"},{"label":"Written Reprimand","count":4,"color":"#a9d2cf"},{"label":"Termination","count":39,"color":"#D64D4D"},{"label":"Separation","count":9,"color":"#e56430"},{"label":"Resignation","count":4,"color":"#f4c913"},{"label":"Demotion","count":3,"color":"#6A4FC7"}]},{"name":"Database Misuse","count":35,"pct":2.0,"decisions":[{"label":"Suspension","count":14,"color":"#23685b"},{"label":"Charge Dismissed","count":4,"color":"#d0d64c"},{"label":"Reinstruction","count":4,"color":"#ccd8db"},{"label":"Written Reprimand","count":8,"color":"#a9d2cf"},{"label":"Termination","count":9,"color":"#D64D4D"},{"label":"Resignation","count":1,"color":"#f4c913"}]},{"name":"Cheating and Plagiarism","count":20,"pct":1.1,"decisions":[{"label":"Charge Dismissed","count":1,"color":"#d0d64c"},{"label":"Termination","count":15,"color":"#D64D4D"},{"label":"Separation","count":3,"color":"#e56430"},{"label":"Resignation","count":2,"color":"#f4c913"}]},{"name":"Confidential Information Violation","count":17,"pct":1.0,"decisions":[{"label":"Suspension","count":6,"color":"#23685b"},{"label":"Charge Dismissed","count":5,"color":"#d0d64c"},{"label":"Reinstruction","count":5,"color":"#ccd8db"},{"label":"Written Reprimand","count":1,"color":"#a9d2cf"},{"label":"Termination","count":4,"color":"#D64D4D"},{"label":"Separation","count":1,"color":"#e56430"},{"label":"Resignation","count":1,"color":"#f4c913"}]},{"name":"Ethics Violation","count":15,"pct":0.8,"decisions":[{"label":"Suspension","count":4,"color":"#23685b"},{"label":"Charge Dismissed","count":4,"color":"#d0d64c"},{"label":"Reinstruction","count":2,"color":"#ccd8db"},{"label":"Written Reprimand","count":3,"color":"#a9d2cf"},{"label":"Termination","count":4,"color":"#D64D4D"},{"label":"Separation","count":1,"color":"#e56430"},{"label":"Demotion","count":1,"color":"#6A4FC7"}]}]},{"group":"Vehicle and Travel","count":203,"pct":11.4,"color":"#4DB3B3","decisions":[{"label":"Suspension","count":81,"color":"#23685b"},{"label":"Charge Dismissed","count":49,"color":"#d0d64c"},{"label":"Reinstruction","count":55,"color":"#ccd8db"},{"label":"Written Reprimand","count":90,"color":"#a9d2cf"},{"label":"Termination","count":1,"color":"#D64D4D"},{"label":"Separation","count":4,"color":"#e56430"},{"label":"Resignation","count":1,"color":"#f4c913"}],"charges":[{"name":"Vehicle Pursuit Violation","count":78,"pct":4.4,"decisions":[{"label":"Suspension","count":26,"color":"#23685b"},{"label":"Charge Dismissed","count":30,"color":"#d0d64c"},{"label":"Reinstruction","count":27,"color":"#ccd8db"},{"label":"Written Reprimand","count":34,"color":"#a9d2cf"},{"label":"Separation","count":1,"color":"#e56430"}]},{"name":"Preventable Motor Vehicle Accident","count":84,"pct":4.7,"decisions":[{"label":"Suspension","count":33,"color":"#23685b"},{"label":"Charge Dismissed","count":5,"color":"#d0d64c"},{"label":"Reinstruction","count":15,"color":"#ccd8db"},{"label":"Written Reprimand","count":46,"color":"#a9d2cf"},{"label":"Termination","count":1,"color":"#D64D4D"},{"label":"Separation","count":1,"color":"#e56430"},{"label":"Resignation","count":1,"color":"#f4c913"}]},{"name":"Travel Violation","count":41,"pct":2.3,"decisions":[{"label":"Suspension","count":22,"color":"#23685b"},{"label":"Charge Dismissed","count":14,"color":"#d0d64c"},{"label":"Reinstruction","count":13,"color":"#ccd8db"},{"label":"Written Reprimand","count":10,"color":"#a9d2cf"},{"label":"Separation","count":2,"color":"#e56430"}]}]},{"group":"Compliance","count":144,"pct":8.1,"color":"#C45B8A","decisions":[{"label":"Suspension","count":96,"color":"#23685b"},{"label":"Charge Dismissed","count":46,"color":"#d0d64c"},{"label":"Reinstruction","count":17,"color":"#ccd8db"},{"label":"Written Reprimand","count":16,"color":"#a9d2cf"},{"label":"Termination","count":3,"color":"#D64D4D"},{"label":"Separation","count":10,"color":"#e56430"},{"label":"Resignation","count":7,"color":"#f4c913"}],"charges":[{"name":"Insubordination","count":80,"pct":4.5,"decisions":[{"label":"Suspension","count":44,"color":"#23685b"},{"label":"Charge Dismissed","count":31,"color":"#d0d64c"},{"label":"Reinstruction","count":11,"color":"#ccd8db"},{"label":"Written Reprimand","count":10,"color":"#a9d2cf"},{"label":"Termination","count":2,"color":"#D64D4D"},{"label":"Separation","count":10,"color":"#e56430"},{"label":"Resignation","count":5,"color":"#f4c913"}]},{"name":"Unauthorized Secondary Employment","count":54,"pct":3.0,"decisions":[{"label":"Suspension","count":45,"color":"#23685b"},{"label":"Charge Dismissed","count":9,"color":"#d0d64c"},{"label":"Reinstruction","count":3,"color":"#ccd8db"},{"label":"Written Reprimand","count":6,"color":"#a9d2cf"},{"label":"Termination","count":1,"color":"#D64D4D"},{"label":"Resignation","count":2,"color":"#f4c913"}]},{"name":"OPS Investigation Violation","count":10,"pct":0.6,"decisions":[{"label":"Suspension","count":7,"color":"#23685b"},{"label":"Charge Dismissed","count":6,"color":"#d0d64c"},{"label":"Reinstruction","count":3,"color":"#ccd8db"}]}]},{"group":"Criminal Conduct","count":147,"pct":8.3,"color":"#944A61","decisions":[{"label":"Suspension","count":95,"color":"#23685b"},{"label":"Charge Dismissed","count":23,"color":"#d0d64c"},{"label":"Reinstruction","count":5,"color":"#ccd8db"},{"label":"Written Reprimand","count":6,"color":"#a9d2cf"},{"label":"Termination","count":19,"color":"#D64D4D"},{"label":"Separation","count":20,"color":"#e56430"},{"label":"Resignation","count":3,"color":"#f4c913"},{"label":"Demotion","count":3,"color":"#6A4FC7"}],"charges":[{"name":"Arrest or Criminal Charge","count":131,"pct":7.4,"decisions":[{"label":"Suspension","count":85,"color":"#23685b"},{"label":"Charge Dismissed","count":18,"color":"#d0d64c"},{"label":"Reinstruction","count":5,"color":"#ccd8db"},{"label":"Written Reprimand","count":5,"color":"#a9d2cf"},{"label":"Termination","count":17,"color":"#D64D4D"},{"label":"Separation","count":18,"color":"#e56430"},{"label":"Resignation","count":2,"color":"#f4c913"},{"label":"Demotion","count":3,"color":"#6A4FC7"}]},{"name":"Violence in the Workplace","count":16,"pct":0.9,"decisions":[{"label":"Suspension","count":10,"color":"#23685b"},{"label":"Charge Dismissed","count":5,"color":"#d0d64c"},{"label":"Written Reprimand","count":1,"color":"#a9d2cf"},{"label":"Termination","count":2,"color":"#D64D4D"},{"label":"Separation","count":2,"color":"#e56430"},{"label":"Resignation","count":1,"color":"#f4c913"}]}]},{"group":"Improper Conduct","count":133,"pct":7.5,"color":"#3A6B5E","decisions":[{"label":"Suspension","count":62,"color":"#23685b"},{"label":"Charge Dismissed","count":54,"color":"#d0d64c"},{"label":"Reinstruction","count":43,"color":"#ccd8db"},{"label":"Written Reprimand","count":28,"color":"#a9d2cf"},{"label":"Termination","count":4,"color":"#D64D4D"},{"label":"Separation","count":3,"color":"#e56430"},{"label":"Demotion","count":2,"color":"#6A4FC7"}],"charges":[{"name":"Improper Search/Frisk","count":50,"pct":2.8,"decisions":[{"label":"Suspension","count":23,"color":"#23685b"},{"label":"Charge Dismissed","count":18,"color":"#d0d64c"},{"label":"Reinstruction","count":20,"color":"#ccd8db"},{"label":"Written Reprimand","count":8,"color":"#a9d2cf"},{"label":"Termination","count":2,"color":"#D64D4D"},{"label":"Separation","count":3,"color":"#e56430"},{"label":"Demotion","count":2,"color":"#6A4FC7"}]},{"name":"Improper Arrest/Detainment","count":21,"pct":1.2,"decisions":[{"label":"Suspension","count":15,"color":"#23685b"},{"label":"Charge Dismissed","count":7,"color":"#d0d64c"},{"label":"Reinstruction","count":7,"color":"#ccd8db"},{"label":"Written Reprimand","count":1,"color":"#a9d2cf"}]},{"name":"Improper Tow","count":20,"pct":1.1,"decisions":[{"label":"Suspension","count":7,"color":"#23685b"},{"label":"Charge Dismissed","count":9,"color":"#d0d64c"},{"label":"Reinstruction","count":6,"color":"#ccd8db"},{"label":"Written Reprimand","count":6,"color":"#a9d2cf"}]},{"name":"Improper Stop","count":14,"pct":0.8,"decisions":[{"label":"Suspension","count":7,"color":"#23685b"},{"label":"Charge Dismissed","count":7,"color":"#d0d64c"},{"label":"Reinstruction","count":2,"color":"#ccd8db"},{"label":"Written Reprimand","count":3,"color":"#a9d2cf"},{"label":"Termination","count":1,"color":"#D64D4D"}]},{"name":"Arrestee Handling Violation","count":14,"pct":0.8,"decisions":[{"label":"Suspension","count":5,"color":"#23685b"},{"label":"Charge Dismissed","count":6,"color":"#d0d64c"},{"label":"Reinstruction","count":4,"color":"#ccd8db"},{"label":"Written Reprimand","count":6,"color":"#a9d2cf"}]},{"name":"Improper Citation","count":9,"pct":0.5,"decisions":[{"label":"Suspension","count":3,"color":"#23685b"},{"label":"Charge Dismissed","count":5,"color":"#d0d64c"},{"label":"Reinstruction","count":4,"color":"#ccd8db"},{"label":"Written Reprimand","count":4,"color":"#a9d2cf"}]},{"name":"Mishandled Juvenile","count":5,"pct":0.3,"decisions":[{"label":"Suspension","count":2,"color":"#23685b"},{"label":"Charge Dismissed","count":2,"color":"#d0d64c"},{"label":"Termination","count":1,"color":"#D64D4D"}]}]},{"group":"Evidence and Property","count":135,"pct":7.6,"color":"#B8960A","decisions":[{"label":"Suspension","count":54,"color":"#23685b"},{"label":"Charge Dismissed","count":33,"color":"#d0d64c"},{"label":"Reinstruction","count":35,"color":"#ccd8db"},{"label":"Written Reprimand","count":41,"color":"#a9d2cf"},{"label":"Separation","count":5,"color":"#e56430"},{"label":"Demotion","count":2,"color":"#6A4FC7"},{"label":"Warning","count":1,"color":"#51a89a"}],"charges":[{"name":"Failed to Safeguard Equipment","count":73,"pct":4.1,"decisions":[{"label":"Suspension","count":24,"color":"#23685b"},{"label":"Charge Dismissed","count":12,"color":"#d0d64c"},{"label":"Reinstruction","count":21,"color":"#ccd8db"},{"label":"Written Reprimand","count":27,"color":"#a9d2cf"},{"label":"Separation","count":2,"color":"#e56430"},{"label":"Warning","count":1,"color":"#51a89a"}]},{"name":"Evidence Collection Violation","count":39,"pct":2.2,"decisions":[{"label":"Suspension","count":21,"color":"#23685b"},{"label":"Charge Dismissed","count":14,"color":"#d0d64c"},{"label":"Reinstruction","count":6,"color":"#ccd8db"},{"label":"Written Reprimand","count":7,"color":"#a9d2cf"},{"label":"Separation","count":3,"color":"#e56430"},{"label":"Demotion","count":2,"color":"#6A4FC7"}]},{"name":"Failed to Safeguard Property","count":23,"pct":1.3,"decisions":[{"label":"Suspension","count":9,"color":"#23685b"},{"label":"Charge Dismissed","count":7,"color":"#d0d64c"},{"label":"Reinstruction","count":8,"color":"#ccd8db"},{"label":"Written Reprimand","count":7,"color":"#a9d2cf"}]}]},{"group":"Drugs and Alcohol","count":27,"pct":1.5,"color":"#7A4520","decisions":[{"label":"Suspension","count":14,"color":"#23685b"},{"label":"Charge Dismissed","count":3,"color":"#d0d64c"},{"label":"Reinstruction","count":3,"color":"#ccd8db"},{"label":"Written Reprimand","count":4,"color":"#a9d2cf"},{"label":"Termination","count":2,"color":"#D64D4D"},{"label":"Separation","count":3,"color":"#e56430"},{"label":"Resignation","count":2,"color":"#f4c913"}],"charges":[{"name":"Drug & Alcohol Testing Policy Violation","count":20,"pct":1.1,"decisions":[{"label":"Suspension","count":13,"color":"#23685b"},{"label":"Charge Dismissed","count":2,"color":"#d0d64c"},{"label":"Reinstruction","count":2,"color":"#ccd8db"},{"label":"Termination","count":2,"color":"#D64D4D"},{"label":"Separation","count":3,"color":"#e56430"},{"label":"Resignation","count":1,"color":"#f4c913"}]},{"name":"Consumed Prohibited Substance While On Duty","count":7,"pct":0.4,"decisions":[{"label":"Suspension","count":1,"color":"#23685b"},{"label":"Charge Dismissed","count":1,"color":"#d0d64c"},{"label":"Reinstruction","count":1,"color":"#ccd8db"},{"label":"Written Reprimand","count":4,"color":"#a9d2cf"},{"label":"Resignation","count":1,"color":"#f4c913"}]}]},{"group":"Not Fit for Duty","count":11,"pct":0.6,"color":"#D64D4D","decisions":[{"label":"Suspension","count":2,"color":"#23685b"},{"label":"Charge Dismissed","count":2,"color":"#d0d64c"},{"label":"Termination","count":6,"color":"#D64D4D"},{"label":"Separation","count":2,"color":"#e56430"},{"label":"Resignation","count":1,"color":"#f4c913"}],"charges":[{"name":"Not Fit for Duty","count":11,"pct":0.6,"decisions":[{"label":"Suspension","count":2,"color":"#23685b"},{"label":"Charge Dismissed","count":2,"color":"#d0d64c"},{"label":"Termination","count":6,"color":"#D64D4D"},{"label":"Separation","count":2,"color":"#e56430"},{"label":"Resignation","count":1,"color":"#f4c913"}]}]}];
 
const TOTAL_HEARINGS = 1774;
const DECISION_ORDER = ["All","Suspension","Charge Dismissed","Reinstruction","Written Reprimand","Termination","Separation","Resignation","Demotion","Warning"];
const DECISION_COLORS = {"Termination":"#D64D4D","Separation":"#e56430","Resignation":"#f4c913","Demotion":"#6A4FC7","Suspension":"#23685b","Charge Dismissed":"#d0d64c","Written Reprimand":"#a9d2cf","Warning":"#51a89a","Reinstruction":"#ccd8db"};
 
const chartArea = document.getElementById('chart-area');
const vizNote = document.getElementById('viz-note');
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
      btn.style.background = isAll ? '#1C1916' : DECISION_COLORS[label];
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
      updateNote();
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
      var pctOfGroup = group.count > 0 ? Math.round(fc / group.count * 100) : 0;
      countText = fc.toLocaleString() + ' cases (' + pctOfGroup + '% of ' + group.count.toLocaleString() + ')';
    }
    label.innerHTML = '<span>' + group.group + '</span><span class="count-label">' + countText + '</span>';
 
    var track = document.createElement('div');
    track.className = 'bar-track';
 
    if (activeDecisions.size === 0) {
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
      var runningPct = 0;
      DECISION_ORDER.forEach(function(dlabel) {
        if (dlabel === 'All' || !activeDecisions.has(dlabel)) return;
        var dec = (group.decisions || []).find(function(d) { return d.label === dlabel; });
        var dc = dec ? dec.count : 0;
        if (dc <= 0) return;
        var segPct = group.count > 0 ? (dc / group.count * 100) : 0;
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
      var fill = document.createElement('div');
      fill.className = 'bar-fill';
      fill.style.width = maxChargeCount > 0 ? (charge.count / maxChargeCount * 100) + '%' : '0%';
      fill.style.background = grp.color;
      fill.style.opacity = '0.85';
      track.appendChild(fill);
    } else {
      var runningPct = 0;
      DECISION_ORDER.forEach(function(dlabel) {
        if (dlabel === 'All' || !activeDecisions.has(dlabel)) return;
        var dec = (charge.decisions || []).find(function(d) { return d.label === dlabel; });
        var dc = dec ? dec.count : 0;
        if (dc <= 0) return;
        var segPct = charge.count > 0 ? (dc / charge.count * 100) : 0;
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
 
  if (activeDecisions.size === 0) {
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
    if (activeDecisions.size === 0) {
      vizNote.textContent = 'Bar length reflects share of 1,774 total hearings where that charge appears. Hover or click any bar to see the sub-charges within each category. Use the outcome filter above to see how decisions vary by charge type.';
    } else {
      vizNote.textContent = 'Each bar track shows that category\u2019s total cases. The filled area shows what share resulted in the selected outcome(s). Segments are colored by outcome type. Click a bar to expand.';
    }
  } else {
    var name = activeGroup ? activeGroup.group : '';
    if (activeDecisions.size === 0) {
      vizNote.textContent = 'Bar length is relative to the most common sub-charge in \u201c' + name + '.\u201d Hover for outcome breakdowns.';
    } else {
      vizNote.textContent = 'Each bar track shows that charge\u2019s total cases. The filled area shows what share resulted in the selected outcome(s). Segments are colored by outcome type.';
    }
  }
}
 
// --- Init ---
initTooltip();
buildToggleBar();
renderBars();
 