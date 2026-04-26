// 1. Insert 5 poll documents with options arrays
db.polls.insertMany([
  {poll_id:"P001",question:"Best Cloud Provider?",options:["AWS","Azure","Google Cloud","IBM"],votes:[180,140,90,30],created_date:"2026-01-10",end_date:"2026-12-31",is_active:true},
  {poll_id:"P002",question:"Favorite Framework?",options:["React","Angular","Vue"],votes:[220,150,100],created_date:"2026-03-01",end_date:"2026-04-01",is_active:true},
  {poll_id:"P003",question:"Next App Feature?",options:["Notifications","Analytics","Themes"],votes:[400,250,120],created_date:"2022-11-05",end_date:"2022-12-05",is_active:false},
  {poll_id:"P004",question:"Best Code Editor?",options:["VS Code","Sublime","Atom","Eclipse","Notepad++"],votes:[420,100,60,70,20],created_date:"2026-04-20",end_date:"2026-05-20",is_active:true},
  {poll_id:"P005",question:"Dinner Choice?",options:["Pasta","Salad"],votes:[15,18],created_date:"2022-05-01",end_date:"2022-05-02",is_active:false}
]);

// 2. Find active polls where end_date is after today
db.polls.find({is_active:true,end_date:{$gt:"2026-04-25"}});

// 3. Update is_active to false where end_date is before today
db.polls.updateMany(
  {end_date:{$lt:"2026-04-25"}},
  {$set:{is_active:false}}
);

// 4. Delete polls created before 2023-01-01 AND are inactive
db.polls.deleteMany({created_date:{$lt:"2023-01-01"},is_active:false});

// 5. Find polls where options array length is greater than 3
db.polls.find({
  $expr:{$gt:[{$size:"$options"},3]}
});

