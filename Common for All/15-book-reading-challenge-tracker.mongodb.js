// 1. Insert 5 reading records with different genres
db.reading.insertMany([
  {record_id:"R001",member_name:"Kabir",book_title:"Foundation",genre:"Sci-Fi",pages_read:180,total_pages:500,start_date:"2026-04-01",completion_date:null,is_completed:false},
  {record_id:"R002",member_name:"Divya",book_title:"Pride and Prejudice",genre:"Classic",pages_read:279,total_pages:279,start_date:"2026-03-15",completion_date:"2026-04-10",is_completed:true},
  {record_id:"R003",member_name:"Meera",book_title:"Educated",genre:"Memoir",pages_read:70,total_pages:350,start_date:"2026-04-20",completion_date:null,is_completed:false},
  {record_id:"R004",member_name:"Nikhil",book_title:"The Silmarillion",genre:"Fantasy",pages_read:400,total_pages:400,start_date:"2022-12-01",completion_date:"2022-12-25",is_completed:true},
  {record_id:"R005",member_name:"Riya",book_title:"Brave New World",genre:"Fiction",pages_read:150,total_pages:300,start_date:"2022-05-10",completion_date:null,is_completed:false}
]);

// 2. Find records where is_completed is false AND pages_read > 100
db.reading.find({is_completed:false,pages_read:{$gt:100}});

// 3. Update is_completed to true where completion_date is not null
db.reading.updateMany(
  {completion_date:{$ne:null}},
  {$set:{is_completed:true}}
);

// 4. Delete records where start_date is before 2023-01-01 AND is_completed is false
db.reading.deleteMany({start_date:{$lt:"2023-01-01"},is_completed:false});

// 5. Find records where genre is "Fiction" AND is_completed is true
db.reading.find({genre:"Fiction",is_completed:true});

