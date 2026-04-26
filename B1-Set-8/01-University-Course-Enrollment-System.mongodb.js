// 1. Insert multiple enrollment records into the enrollments collection
db.enrollments.insertMany([
  {enrollment_id:"EN001",student_name:"Kabir",course_name:"Database Systems",semester:"Spring 2026",grade:"A",attendance_percentage:85,enrollment_status:"Active"},
  {enrollment_id:"EN002",student_name:"Divya",course_name:"Operating Systems",semester:"Spring 2026",grade:"C",attendance_percentage:70,enrollment_status:"Active"},
  {enrollment_id:"EN003",student_name:"Meera",course_name:"Computer Networks",semester:"Fall 2025",grade:"F",attendance_percentage:65,enrollment_status:"Active"},
  {enrollment_id:"EN004",student_name:"Nikhil",course_name:"Software Engineering",semester:"Spring 2026",grade:"B",attendance_percentage:90,enrollment_status:"Withdrawn"},
  {enrollment_id:"EN005",student_name:"Riya",course_name:"Artificial Intelligence",semester:"Spring 2026",grade:"C",attendance_percentage:80,enrollment_status:"Active"}
]);

// 2. Retrieve students whose attendance percentage is less than 75 or grade equals "F" using $or
db.enrollments.find({
  $or:[
    {attendance_percentage:{$lt:75}},
    {grade:"F"}
  ]
});

// 3. Display student_name and course_name fields only using projection
db.enrollments.find(
  {},
  {student_name:1,course_name:1,_id:0}
);

// 4. Update grade to "B" for students whose grade equals "C" using updateMany()
db.enrollments.updateMany(
  {grade:"C"},
  {$set:{grade:"B"}}
);

// 5. Delete enrollment records where enrollment_status equals "Withdrawn"
db.enrollments.deleteMany({enrollment_status:"Withdrawn"});
