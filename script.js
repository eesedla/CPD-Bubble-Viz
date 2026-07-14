const DATA = [{"group":"Neglect of Duty","count":641,"pct":36.1,"color":"#23685b","decisions":[{"label":"Charge Dismissed","count":195,"color":"#dbe7e3"},{"label":"Reinstruction","count":133,"color":"#a9d2cf"},{"label":"Written Reprimand","count":108,"color":"#5fa896"},{"label":"Suspension","count":347,"color":"#23685b"},{"label":"Termination","count":16,"color":"#d64d4d"},{"label":"Resignation","count":25,"color":"#e56430"},{"label":"Demotion","count":9,"color":"#e6a94d"}],"charges":[{"name":"Failure to Report/Notify","count":226,"pct":12.7,"decisions":[{"label":"Charge Dismissed","count":64,"color":"#dbe7e3"},{"label":"Reinstruction","count":53,"color":"#a9d2cf"},{"label":"Written Reprimand","count":42,"color":"#5fa896"},{"label":"Suspension","count":123,"color":"#23685b"},{"label":"Termination","count":3,"color":"#d64d4d"},{"label":"Resignation","count":13,"color":"#e56430"},{"label":"Demotion","count":1,"color":"#e6a94d"}]},{"name":"Lack of Service","count":209,"pct":11.8,"decisions":[{"label":"Charge Dismissed","count":71,"color":"#dbe7e3"},{"label":"Reinstruction","count":43,"color":"#a9d2cf"},{"label":"Written Reprimand","count":34,"color":"#5fa896"},{"label":"Suspension","count":109,"color":"#23685b"},{"label":"Termination","count":5,"color":"#d64d4d"},{"label":"Resignation","count":4,"color":"#e56430"},{"label":"Demotion","count":3,"color":"#e6a94d"}]},{"name":"Neglect of Duty","count":101,"pct":5.7,"decisions":[{"label":"Charge Dismissed","count":25,"color":"#dbe7e3"},{"label":"Reinstruction","count":20,"color":"#a9d2cf"},{"label":"Written Reprimand","count":16,"color":"#5fa896"},{"label":"Suspension","count":47,"color":"#23685b"},{"label":"Termination","count":7,"color":"#d64d4d"},{"label":"Resignation","count":5,"color":"#e56430"},{"label":"Demotion","count":3,"color":"#e6a94d"}]},{"name":"Duty Report Violation","count":33,"pct":1.9,"decisions":[{"label":"Charge Dismissed","count":17,"color":"#dbe7e3"},{"label":"Reinstruction","count":6,"color":"#a9d2cf"},{"label":"Written Reprimand","count":5,"color":"#5fa896"},{"label":"Suspension","count":24,"color":"#23685b"}]},{"name":"Failure to Supervise","count":32,"pct":1.8,"decisions":[{"label":"Charge Dismissed","count":11,"color":"#dbe7e3"},{"label":"Reinstruction","count":7,"color":"#a9d2cf"},{"label":"Written Reprimand","count":6,"color":"#5fa896"},{"label":"Suspension","count":17,"color":"#23685b"},{"label":"Demotion","count":2,"color":"#e6a94d"}]},{"name":"Asleep On-Duty","count":23,"pct":1.3,"decisions":[{"label":"Charge Dismissed","count":5,"color":"#dbe7e3"},{"label":"Reinstruction","count":1,"color":"#a9d2cf"},{"label":"Suspension","count":17,"color":"#23685b"},{"label":"Termination","count":1,"color":"#d64d4d"},{"label":"Resignation","count":2,"color":"#e56430"}]},{"name":"Failed to Assist","count":8,"pct":0.5,"decisions":[{"label":"Reinstruction","count":2,"color":"#a9d2cf"},{"label":"Suspension","count":8,"color":"#23685b"}]},{"name":"Failed to Provide Language Services","count":5,"pct":0.3,"decisions":[{"label":"Charge Dismissed","count":2,"color":"#dbe7e3"},{"label":"Reinstruction","count":1,"color":"#a9d2cf"},{"label":"Written Reprimand","count":3,"color":"#5fa896"},{"label":"Suspension","count":1,"color":"#23685b"}]},{"name":"Failed to Take Corrective Action","count":4,"pct":0.2,"decisions":[{"label":"Written Reprimand","count":2,"color":"#5fa896"},{"label":"Suspension","count":1,"color":"#23685b"},{"label":"Resignation","count":1,"color":"#e56430"}]}]},{"group":"Unprofessional Behavior","count":453,"pct":25.5,"color":"#e56430","decisions":[{"label":"Charge Dismissed","count":123,"color":"#dbe7e3"},{"label":"Reinstruction","count":101,"color":"#a9d2cf"},{"label":"Written Reprimand","count":76,"color":"#5fa896"},{"label":"Suspension","count":243,"color":"#23685b"},{"label":"Termination","count":35,"color":"#d64d4d"},{"label":"Resignation","count":21,"color":"#e56430"},{"label":"Demotion","count":6,"color":"#e6a94d"}],"charges":[{"name":"Unprofessional Conduct","count":142,"pct":8.0,"decisions":[{"label":"Charge Dismissed","count":47,"color":"#dbe7e3"},{"label":"Reinstruction","count":36,"color":"#a9d2cf"},{"label":"Written Reprimand","count":30,"color":"#5fa896"},{"label":"Suspension","count":76,"color":"#23685b"},{"label":"Termination","count":3,"color":"#d64d4d"},{"label":"Resignation","count":2,"color":"#e56430"}]},{"name":"Offensive Remarks","count":125,"pct":7.0,"decisions":[{"label":"Charge Dismissed","count":39,"color":"#dbe7e3"},{"label":"Reinstruction","count":31,"color":"#a9d2cf"},{"label":"Written Reprimand","count":26,"color":"#5fa896"},{"label":"Suspension","count":63,"color":"#23685b"},{"label":"Termination","count":5,"color":"#d64d4d"},{"label":"Resignation","count":4,"color":"#e56430"},{"label":"Demotion","count":1,"color":"#e6a94d"}]},{"name":"Diminished Esteem of CPD","count":110,"pct":6.2,"decisions":[{"label":"Charge Dismissed","count":27,"color":"#dbe7e3"},{"label":"Reinstruction","count":12,"color":"#a9d2cf"},{"label":"Written Reprimand","count":8,"color":"#5fa896"},{"label":"Suspension","count":61,"color":"#23685b"},{"label":"Termination","count":21,"color":"#d64d4d"},{"label":"Resignation","count":10,"color":"#e56430"},{"label":"Demotion","count":4,"color":"#e6a94d"}]},{"name":"Uniform Violation","count":25,"pct":1.4,"decisions":[{"label":"Charge Dismissed","count":4,"color":"#dbe7e3"},{"label":"Reinstruction","count":9,"color":"#a9d2cf"},{"label":"Written Reprimand","count":6,"color":"#5fa896"},{"label":"Suspension","count":13,"color":"#23685b"},{"label":"Termination","count":1,"color":"#d64d4d"},{"label":"Resignation","count":3,"color":"#e56430"}]},{"name":"Appearance of Impropriety","count":19,"pct":1.1,"decisions":[{"label":"Charge Dismissed","count":1,"color":"#dbe7e3"},{"label":"Reinstruction","count":5,"color":"#a9d2cf"},{"label":"Written Reprimand","count":4,"color":"#5fa896"},{"label":"Suspension","count":13,"color":"#23685b"},{"label":"Termination","count":1,"color":"#d64d4d"},{"label":"Demotion","count":1,"color":"#e6a94d"}]},{"name":"Telecommunications Violation","count":19,"pct":1.1,"decisions":[{"label":"Charge Dismissed","count":2,"color":"#dbe7e3"},{"label":"Reinstruction","count":3,"color":"#a9d2cf"},{"label":"Suspension","count":13,"color":"#23685b"},{"label":"Termination","count":4,"color":"#d64d4d"},{"label":"Resignation","count":1,"color":"#e56430"}]},{"name":"Failed to Identify","count":13,"pct":0.7,"decisions":[{"label":"Charge Dismissed","count":3,"color":"#dbe7e3"},{"label":"Reinstruction","count":5,"color":"#a9d2cf"},{"label":"Written Reprimand","count":2,"color":"#5fa896"},{"label":"Suspension","count":4,"color":"#23685b"},{"label":"Resignation","count":1,"color":"#e56430"}]}]},{"group":"Body Camera Violation","count":379,"pct":21.4,"color":"#879599","decisions":[{"label":"Charge Dismissed","count":97,"color":"#dbe7e3"},{"label":"Reinstruction","count":123,"color":"#a9d2cf"},{"label":"Written Reprimand","count":64,"color":"#5fa896"},{"label":"Suspension","count":210,"color":"#23685b"},{"label":"Termination","count":3,"color":"#d64d4d"},{"label":"Resignation","count":9,"color":"#e56430"},{"label":"Demotion","count":2,"color":"#e6a94d"}],"charges":[{"name":"Failed to Activate","count":199,"pct":11.2,"decisions":[{"label":"Charge Dismissed","count":46,"color":"#dbe7e3"},{"label":"Reinstruction","count":72,"color":"#a9d2cf"},{"label":"Written Reprimand","count":30,"color":"#5fa896"},{"label":"Suspension","count":115,"color":"#23685b"},{"label":"Termination","count":1,"color":"#d64d4d"},{"label":"Resignation","count":2,"color":"#e56430"},{"label":"Demotion","count":1,"color":"#e6a94d"}],"desc":"Officer failed to activate the WCS or place it in event mode before or during a qualifying incident requiring recording."},{"name":"Unspecified","count":121,"pct":6.8,"decisions":[{"label":"Charge Dismissed","count":34,"color":"#dbe7e3"},{"label":"Reinstruction","count":27,"color":"#a9d2cf"},{"label":"Written Reprimand","count":18,"color":"#5fa896"},{"label":"Suspension","count":76,"color":"#23685b"},{"label":"Termination","count":1,"color":"#d64d4d"},{"label":"Resignation","count":2,"color":"#e56430"},{"label":"Demotion","count":1,"color":"#e6a94d"}],"desc":"Disciplinary record listed a generic “WCS violation” without describing the specific nature of the offense."},{"name":"Ended Recording Early","count":50,"pct":2.8,"decisions":[{"label":"Charge Dismissed","count":14,"color":"#dbe7e3"},{"label":"Reinstruction","count":19,"color":"#a9d2cf"},{"label":"Written Reprimand","count":12,"color":"#5fa896"},{"label":"Suspension","count":25,"color":"#23685b"},{"label":"Termination","count":1,"color":"#d64d4d"},{"label":"Resignation","count":3,"color":"#e56430"}],"desc":"Officer turned off the WCS or allowed it to return to buffering mode before an incident concluded, cutting off the recording."},{"name":"Failed to Upload or Tag","count":16,"pct":0.9,"decisions":[{"label":"Charge Dismissed","count":4,"color":"#dbe7e3"},{"label":"Reinstruction","count":7,"color":"#a9d2cf"},{"label":"Written Reprimand","count":3,"color":"#5fa896"},{"label":"Suspension","count":6,"color":"#23685b"},{"label":"Resignation","count":2,"color":"#e56430"}],"desc":"Officer failed to upload, categorize, or tag captured WCS media at the end of a tour or within required timeframes."},{"name":"Damaged or Lost Camera","count":14,"pct":0.8,"decisions":[{"label":"Charge Dismissed","count":3,"color":"#dbe7e3"},{"label":"Reinstruction","count":4,"color":"#a9d2cf"},{"label":"Written Reprimand","count":5,"color":"#5fa896"},{"label":"Suspension","count":3,"color":"#23685b"},{"label":"Resignation","count":1,"color":"#e56430"}],"desc":"Officer failed to safeguard assigned WCS equipment — including losing, allowing damage to, or failing to secure the device."}]},{"group":"Attendance","count":375,"pct":21.1,"color":"#5fa896","decisions":[{"label":"Charge Dismissed","count":83,"color":"#dbe7e3"},{"label":"Reinstruction","count":144,"color":"#a9d2cf"},{"label":"Written Reprimand","count":35,"color":"#5fa896"},{"label":"Suspension","count":125,"color":"#23685b"},{"label":"Termination","count":14,"color":"#d64d4d"},{"label":"Resignation","count":48,"color":"#e56430"}],"charges":[{"name":"Sick Leave Abuse","count":197,"pct":11.1,"decisions":[{"label":"Charge Dismissed","count":44,"color":"#dbe7e3"},{"label":"Reinstruction","count":122,"color":"#a9d2cf"},{"label":"Written Reprimand","count":3,"color":"#5fa896"},{"label":"Suspension","count":43,"color":"#23685b"},{"label":"Termination","count":6,"color":"#d64d4d"},{"label":"Resignation","count":16,"color":"#e56430"}]},{"name":"Absent Without Leave (AWOL)","count":51,"pct":2.9,"decisions":[{"label":"Charge Dismissed","count":7,"color":"#dbe7e3"},{"label":"Reinstruction","count":4,"color":"#a9d2cf"},{"label":"Written Reprimand","count":2,"color":"#5fa896"},{"label":"Suspension","count":24,"color":"#23685b"},{"label":"Termination","count":4,"color":"#d64d4d"},{"label":"Resignation","count":20,"color":"#e56430"}]},{"name":"Refusal of Mandatory Overtime","count":45,"pct":2.5,"decisions":[{"label":"Charge Dismissed","count":11,"color":"#dbe7e3"},{"label":"Reinstruction","count":4,"color":"#a9d2cf"},{"label":"Written Reprimand","count":11,"color":"#5fa896"},{"label":"Suspension","count":19,"color":"#23685b"},{"label":"Termination","count":1,"color":"#d64d4d"},{"label":"Resignation","count":5,"color":"#e56430"}]},{"name":"Tardiness","count":43,"pct":2.4,"decisions":[{"label":"Charge Dismissed","count":8,"color":"#dbe7e3"},{"label":"Reinstruction","count":8,"color":"#a9d2cf"},{"label":"Written Reprimand","count":9,"color":"#5fa896"},{"label":"Suspension","count":23,"color":"#23685b"},{"label":"Termination","count":1,"color":"#d64d4d"},{"label":"Resignation","count":3,"color":"#e56430"}]},{"name":"Attendance and Overtime Violations","count":39,"pct":2.2,"decisions":[{"label":"Charge Dismissed","count":13,"color":"#dbe7e3"},{"label":"Reinstruction","count":6,"color":"#a9d2cf"},{"label":"Written Reprimand","count":10,"color":"#5fa896"},{"label":"Suspension","count":16,"color":"#23685b"},{"label":"Termination","count":2,"color":"#d64d4d"},{"label":"Resignation","count":4,"color":"#e56430"}]}]},{"group":"Use of Force","count":231,"pct":13.0,"color":"#d64d4d","decisions":[{"label":"Charge Dismissed","count":73,"color":"#dbe7e3"},{"label":"Reinstruction","count":76,"color":"#a9d2cf"},{"label":"Written Reprimand","count":38,"color":"#5fa896"},{"label":"Suspension","count":133,"color":"#23685b"},{"label":"Termination","count":16,"color":"#d64d4d"},{"label":"Resignation","count":6,"color":"#e56430"},{"label":"Demotion","count":5,"color":"#e6a94d"}],"charges":[{"name":"Use of Force Violation","count":55,"pct":3.1,"decisions":[{"label":"Charge Dismissed","count":20,"color":"#dbe7e3"},{"label":"Reinstruction","count":15,"color":"#a9d2cf"},{"label":"Written Reprimand","count":6,"color":"#5fa896"},{"label":"Suspension","count":35,"color":"#23685b"},{"label":"Termination","count":6,"color":"#d64d4d"},{"label":"Resignation","count":2,"color":"#e56430"},{"label":"Demotion","count":1,"color":"#e6a94d"}]},{"name":"Failed to Report/Intervene","count":60,"pct":3.4,"decisions":[{"label":"Charge Dismissed","count":13,"color":"#dbe7e3"},{"label":"Reinstruction","count":19,"color":"#a9d2cf"},{"label":"Written Reprimand","count":10,"color":"#5fa896"},{"label":"Suspension","count":36,"color":"#23685b"},{"label":"Termination","count":3,"color":"#d64d4d"},{"label":"Resignation","count":1,"color":"#e56430"},{"label":"Demotion","count":2,"color":"#e6a94d"}]},{"name":"Failed to De-escalate","count":48,"pct":2.7,"decisions":[{"label":"Charge Dismissed","count":15,"color":"#dbe7e3"},{"label":"Reinstruction","count":16,"color":"#a9d2cf"},{"label":"Written Reprimand","count":7,"color":"#5fa896"},{"label":"Suspension","count":26,"color":"#23685b"},{"label":"Termination","count":3,"color":"#d64d4d"},{"label":"Resignation","count":1,"color":"#e56430"},{"label":"Demotion","count":1,"color":"#e6a94d"}]},{"name":"Failed to Request Medical Attention","count":38,"pct":2.1,"decisions":[{"label":"Charge Dismissed","count":17,"color":"#dbe7e3"},{"label":"Reinstruction","count":12,"color":"#a9d2cf"},{"label":"Written Reprimand","count":6,"color":"#5fa896"},{"label":"Suspension","count":19,"color":"#23685b"},{"label":"Termination","count":3,"color":"#d64d4d"},{"label":"Demotion","count":1,"color":"#e6a94d"}]},{"name":"Improperly Handled a Firearm","count":28,"pct":1.6,"decisions":[{"label":"Charge Dismissed","count":8,"color":"#dbe7e3"},{"label":"Reinstruction","count":14,"color":"#a9d2cf"},{"label":"Written Reprimand","count":9,"color":"#5fa896"},{"label":"Suspension","count":16,"color":"#23685b"},{"label":"Termination","count":1,"color":"#d64d4d"},{"label":"Resignation","count":1,"color":"#e56430"}]},{"name":"Unauthorized Ammunition/Firearms","count":2,"pct":0.1,"decisions":[{"label":"Suspension","count":1,"color":"#23685b"},{"label":"Resignation","count":1,"color":"#e56430"}]}]},{"group":"Integrity and Honesty","count":200,"pct":11.3,"color":"#7d6b9e","decisions":[{"label":"Charge Dismissed","count":54,"color":"#dbe7e3"},{"label":"Reinstruction","count":15,"color":"#a9d2cf"},{"label":"Written Reprimand","count":16,"color":"#5fa896"},{"label":"Suspension","count":68,"color":"#23685b"},{"label":"Termination","count":71,"color":"#d64d4d"},{"label":"Resignation","count":22,"color":"#e56430"},{"label":"Demotion","count":4,"color":"#e6a94d"}],"charges":[{"name":"Untruthfulness","count":113,"pct":6.4,"decisions":[{"label":"Charge Dismissed","count":40,"color":"#dbe7e3"},{"label":"Reinstruction","count":4,"color":"#a9d2cf"},{"label":"Written Reprimand","count":4,"color":"#5fa896"},{"label":"Suspension","count":44,"color":"#23685b"},{"label":"Termination","count":39,"color":"#d64d4d"},{"label":"Resignation","count":13,"color":"#e56430"},{"label":"Demotion","count":3,"color":"#e6a94d"}]},{"name":"Database Misuse","count":35,"pct":2.0,"decisions":[{"label":"Charge Dismissed","count":4,"color":"#dbe7e3"},{"label":"Reinstruction","count":4,"color":"#a9d2cf"},{"label":"Written Reprimand","count":8,"color":"#5fa896"},{"label":"Suspension","count":14,"color":"#23685b"},{"label":"Termination","count":9,"color":"#d64d4d"},{"label":"Resignation","count":1,"color":"#e56430"}]},{"name":"Cheating and Plagiarism","count":20,"pct":1.1,"decisions":[{"label":"Charge Dismissed","count":1,"color":"#dbe7e3"},{"label":"Termination","count":15,"color":"#d64d4d"},{"label":"Resignation","count":5,"color":"#e56430"}]},{"name":"Confidential Information Violation","count":17,"pct":1.0,"decisions":[{"label":"Charge Dismissed","count":5,"color":"#dbe7e3"},{"label":"Reinstruction","count":5,"color":"#a9d2cf"},{"label":"Written Reprimand","count":1,"color":"#5fa896"},{"label":"Suspension","count":6,"color":"#23685b"},{"label":"Termination","count":4,"color":"#d64d4d"},{"label":"Resignation","count":2,"color":"#e56430"}]},{"name":"Ethics Violation","count":15,"pct":0.8,"decisions":[{"label":"Charge Dismissed","count":4,"color":"#dbe7e3"},{"label":"Reinstruction","count":2,"color":"#a9d2cf"},{"label":"Written Reprimand","count":3,"color":"#5fa896"},{"label":"Suspension","count":4,"color":"#23685b"},{"label":"Termination","count":4,"color":"#d64d4d"},{"label":"Resignation","count":1,"color":"#e56430"},{"label":"Demotion","count":1,"color":"#e6a94d"}]}]},{"group":"Vehicle and Travel","count":203,"pct":11.4,"color":"#aab7ba","decisions":[{"label":"Charge Dismissed","count":49,"color":"#dbe7e3"},{"label":"Reinstruction","count":55,"color":"#a9d2cf"},{"label":"Written Reprimand","count":90,"color":"#5fa896"},{"label":"Suspension","count":81,"color":"#23685b"},{"label":"Termination","count":1,"color":"#d64d4d"},{"label":"Resignation","count":4,"color":"#e56430"}],"charges":[{"name":"Vehicle Pursuit Violation","count":78,"pct":4.4,"decisions":[{"label":"Charge Dismissed","count":30,"color":"#dbe7e3"},{"label":"Reinstruction","count":27,"color":"#a9d2cf"},{"label":"Written Reprimand","count":34,"color":"#5fa896"},{"label":"Suspension","count":26,"color":"#23685b"},{"label":"Resignation","count":1,"color":"#e56430"}]},{"name":"Preventable Motor Vehicle Accident","count":84,"pct":4.7,"decisions":[{"label":"Charge Dismissed","count":5,"color":"#dbe7e3"},{"label":"Reinstruction","count":15,"color":"#a9d2cf"},{"label":"Written Reprimand","count":46,"color":"#5fa896"},{"label":"Suspension","count":33,"color":"#23685b"},{"label":"Termination","count":1,"color":"#d64d4d"},{"label":"Resignation","count":1,"color":"#e56430"}]},{"name":"Travel Violation","count":41,"pct":2.3,"decisions":[{"label":"Charge Dismissed","count":14,"color":"#dbe7e3"},{"label":"Reinstruction","count":13,"color":"#a9d2cf"},{"label":"Written Reprimand","count":10,"color":"#5fa896"},{"label":"Suspension","count":22,"color":"#23685b"},{"label":"Resignation","count":2,"color":"#e56430"}]}]},{"group":"Compliance","count":144,"pct":8.1,"color":"#e6a94d","decisions":[{"label":"Charge Dismissed","count":46,"color":"#dbe7e3"},{"label":"Reinstruction","count":17,"color":"#a9d2cf"},{"label":"Written Reprimand","count":16,"color":"#5fa896"},{"label":"Suspension","count":96,"color":"#23685b"},{"label":"Termination","count":3,"color":"#d64d4d"},{"label":"Resignation","count":17,"color":"#e56430"}],"charges":[{"name":"Insubordination","count":80,"pct":4.5,"decisions":[{"label":"Charge Dismissed","count":31,"color":"#dbe7e3"},{"label":"Reinstruction","count":11,"color":"#a9d2cf"},{"label":"Written Reprimand","count":10,"color":"#5fa896"},{"label":"Suspension","count":44,"color":"#23685b"},{"label":"Termination","count":2,"color":"#d64d4d"},{"label":"Resignation","count":15,"color":"#e56430"}]},{"name":"Unauthorized Secondary Employment","count":54,"pct":3.0,"decisions":[{"label":"Charge Dismissed","count":9,"color":"#dbe7e3"},{"label":"Reinstruction","count":3,"color":"#a9d2cf"},{"label":"Written Reprimand","count":6,"color":"#5fa896"},{"label":"Suspension","count":45,"color":"#23685b"},{"label":"Termination","count":1,"color":"#d64d4d"},{"label":"Resignation","count":2,"color":"#e56430"}]},{"name":"OPS Investigation Violation","count":10,"pct":0.6,"decisions":[{"label":"Charge Dismissed","count":6,"color":"#dbe7e3"},{"label":"Reinstruction","count":3,"color":"#a9d2cf"},{"label":"Suspension","count":7,"color":"#23685b"}]}]},{"group":"Criminal Conduct","count":147,"pct":8.3,"color":"#e89494","decisions":[{"label":"Charge Dismissed","count":23,"color":"#dbe7e3"},{"label":"Reinstruction","count":5,"color":"#a9d2cf"},{"label":"Written Reprimand","count":6,"color":"#5fa896"},{"label":"Suspension","count":95,"color":"#23685b"},{"label":"Termination","count":19,"color":"#d64d4d"},{"label":"Resignation","count":22,"color":"#e56430"},{"label":"Demotion","count":3,"color":"#e6a94d"}],"charges":[{"name":"Arrest or Criminal Charge","count":131,"pct":7.4,"decisions":[{"label":"Charge Dismissed","count":18,"color":"#dbe7e3"},{"label":"Reinstruction","count":5,"color":"#a9d2cf"},{"label":"Written Reprimand","count":5,"color":"#5fa896"},{"label":"Suspension","count":85,"color":"#23685b"},{"label":"Termination","count":17,"color":"#d64d4d"},{"label":"Resignation","count":20,"color":"#e56430"},{"label":"Demotion","count":3,"color":"#e6a94d"}]},{"name":"Violence in the Workplace","count":16,"pct":0.9,"decisions":[{"label":"Charge Dismissed","count":5,"color":"#dbe7e3"},{"label":"Written Reprimand","count":1,"color":"#5fa896"},{"label":"Suspension","count":10,"color":"#23685b"},{"label":"Termination","count":2,"color":"#d64d4d"},{"label":"Resignation","count":2,"color":"#e56430"}]}]},{"group":"Improper Conduct","count":133,"pct":7.5,"color":"#dd6969","decisions":[{"label":"Charge Dismissed","count":54,"color":"#dbe7e3"},{"label":"Reinstruction","count":43,"color":"#a9d2cf"},{"label":"Written Reprimand","count":28,"color":"#5fa896"},{"label":"Suspension","count":62,"color":"#23685b"},{"label":"Termination","count":4,"color":"#d64d4d"},{"label":"Resignation","count":3,"color":"#e56430"},{"label":"Demotion","count":2,"color":"#e6a94d"}],"charges":[{"name":"Improper Search/Frisk","count":50,"pct":2.8,"decisions":[{"label":"Charge Dismissed","count":18,"color":"#dbe7e3"},{"label":"Reinstruction","count":20,"color":"#a9d2cf"},{"label":"Written Reprimand","count":8,"color":"#5fa896"},{"label":"Suspension","count":23,"color":"#23685b"},{"label":"Termination","count":2,"color":"#d64d4d"},{"label":"Resignation","count":3,"color":"#e56430"},{"label":"Demotion","count":2,"color":"#e6a94d"}]},{"name":"Improper Arrest/Detainment","count":21,"pct":1.2,"decisions":[{"label":"Charge Dismissed","count":7,"color":"#dbe7e3"},{"label":"Reinstruction","count":7,"color":"#a9d2cf"},{"label":"Written Reprimand","count":1,"color":"#5fa896"},{"label":"Suspension","count":15,"color":"#23685b"}]},{"name":"Improper Tow","count":20,"pct":1.1,"decisions":[{"label":"Charge Dismissed","count":9,"color":"#dbe7e3"},{"label":"Reinstruction","count":6,"color":"#a9d2cf"},{"label":"Written Reprimand","count":6,"color":"#5fa896"},{"label":"Suspension","count":7,"color":"#23685b"}]},{"name":"Improper Stop","count":14,"pct":0.8,"decisions":[{"label":"Charge Dismissed","count":7,"color":"#dbe7e3"},{"label":"Reinstruction","count":2,"color":"#a9d2cf"},{"label":"Written Reprimand","count":3,"color":"#5fa896"},{"label":"Suspension","count":7,"color":"#23685b"},{"label":"Termination","count":1,"color":"#d64d4d"}]},{"name":"Arrestee Handling Violation","count":14,"pct":0.8,"decisions":[{"label":"Charge Dismissed","count":6,"color":"#dbe7e3"},{"label":"Reinstruction","count":4,"color":"#a9d2cf"},{"label":"Written Reprimand","count":6,"color":"#5fa896"},{"label":"Suspension","count":5,"color":"#23685b"}]},{"name":"Improper Citation","count":9,"pct":0.5,"decisions":[{"label":"Charge Dismissed","count":5,"color":"#dbe7e3"},{"label":"Reinstruction","count":4,"color":"#a9d2cf"},{"label":"Written Reprimand","count":4,"color":"#5fa896"},{"label":"Suspension","count":3,"color":"#23685b"}]},{"name":"Mishandled Juvenile","count":5,"pct":0.3,"decisions":[{"label":"Charge Dismissed","count":2,"color":"#dbe7e3"},{"label":"Suspension","count":2,"color":"#23685b"},{"label":"Termination","count":1,"color":"#d64d4d"}]}]},{"group":"Evidence and Property","count":135,"pct":7.6,"color":"#ccd8db","decisions":[{"label":"Charge Dismissed","count":33,"color":"#dbe7e3"},{"label":"Reinstruction","count":35,"color":"#a9d2cf"},{"label":"Written Reprimand","count":41,"color":"#5fa896"},{"label":"Suspension","count":54,"color":"#23685b"},{"label":"Resignation","count":5,"color":"#e56430"},{"label":"Demotion","count":2,"color":"#e6a94d"}],"charges":[{"name":"Failed to Safeguard Equipment","count":73,"pct":4.1,"decisions":[{"label":"Charge Dismissed","count":12,"color":"#dbe7e3"},{"label":"Reinstruction","count":21,"color":"#a9d2cf"},{"label":"Written Reprimand","count":27,"color":"#5fa896"},{"label":"Suspension","count":24,"color":"#23685b"},{"label":"Resignation","count":2,"color":"#e56430"}]},{"name":"Evidence Collection Violation","count":39,"pct":2.2,"decisions":[{"label":"Charge Dismissed","count":14,"color":"#dbe7e3"},{"label":"Reinstruction","count":6,"color":"#a9d2cf"},{"label":"Written Reprimand","count":7,"color":"#5fa896"},{"label":"Suspension","count":21,"color":"#23685b"},{"label":"Resignation","count":3,"color":"#e56430"},{"label":"Demotion","count":2,"color":"#e6a94d"}]},{"name":"Failed to Safeguard Property","count":23,"pct":1.3,"decisions":[{"label":"Charge Dismissed","count":7,"color":"#dbe7e3"},{"label":"Reinstruction","count":8,"color":"#a9d2cf"},{"label":"Written Reprimand","count":7,"color":"#5fa896"},{"label":"Suspension","count":9,"color":"#23685b"}]}]},{"group":"Drugs and Alcohol","count":27,"pct":1.5,"color":"#f2bcbc","decisions":[{"label":"Charge Dismissed","count":3,"color":"#dbe7e3"},{"label":"Reinstruction","count":3,"color":"#a9d2cf"},{"label":"Written Reprimand","count":4,"color":"#5fa896"},{"label":"Suspension","count":14,"color":"#23685b"},{"label":"Termination","count":2,"color":"#d64d4d"},{"label":"Resignation","count":5,"color":"#e56430"}],"charges":[{"name":"Drug & Alcohol Testing Policy Violation","count":20,"pct":1.1,"decisions":[{"label":"Charge Dismissed","count":2,"color":"#dbe7e3"},{"label":"Reinstruction","count":2,"color":"#a9d2cf"},{"label":"Suspension","count":13,"color":"#23685b"},{"label":"Termination","count":2,"color":"#d64d4d"},{"label":"Resignation","count":4,"color":"#e56430"}]},{"name":"Consumed Prohibited Substance While On Duty","count":7,"pct":0.4,"decisions":[{"label":"Charge Dismissed","count":1,"color":"#dbe7e3"},{"label":"Reinstruction","count":1,"color":"#a9d2cf"},{"label":"Written Reprimand","count":4,"color":"#5fa896"},{"label":"Suspension","count":1,"color":"#23685b"},{"label":"Resignation","count":1,"color":"#e56430"}]}]}]; 
const TOTAL_HEARINGS = 1774;
const DECISION_ORDER = ["All","Charge Dismissed","Reinstruction","Written Reprimand","Suspension","Termination","Resignation","Demotion"];
const DECISION_COLORS = {"Termination":"#d64d4d","Resignation":"#e56430","Demotion":"#e6a94d","Suspension":"#23685b","Charge Dismissed":"#dbe7e3","Written Reprimand":"#5fa896","Reinstruction":"#a9d2cf"};
 
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
initTooltip();
buildToggleBar();
renderBars();
 