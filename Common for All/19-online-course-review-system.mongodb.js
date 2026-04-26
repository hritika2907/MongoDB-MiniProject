// 1. Insert 5 review documents with different ratings
db.reviews.insertMany([
  {review_id:"RV001",course_name:"Data Structures in C++",student_name:"Kabir",rating:5,review_text:"Excellent explanations!",review_date:"2026-04-20",likes_count:18,is_verified_purchase:false},
  {review_id:"RV002",course_name:"Java Essentials",student_name:"Divya",rating:4,review_text:"Helpful but a bit rushed.",review_date:"2025-11-10",likes_count:7,is_verified_purchase:true},
  {review_id:"RV003",course_name:"MongoDB Advanced Queries",student_name:"Meera",rating:5,review_text:"Very practical content.",review_date:"2026-01-15",likes_count:22,is_verified_purchase:false},
  {review_id:"RV004",course_name:"CSS Fundamentals",student_name:"Nikhil",rating:2,review_text:"Too basic.",review_date:"2023-05-12",likes_count:3,is_verified_purchase:false},
  {review_id:"RV005",course_name:"React Hooks Deep Dive",student_name:"Riya",rating:3,review_text:"Decent course.",review_date:"2026-03-01",likes_count:10,is_verified_purchase:true}
]);

// 2. Find reviews with rating > 4 AND likes_count > 10
db.reviews.find({rating:{$gt:4},likes_count:{$gt:10}});

// 3. Update is_verified_purchase to true where course_name contains "MongoDB"
db.reviews.updateMany(
  {course_name:{$regex:"MongoDB"}},
  {$set:{is_verified_purchase:true}}
);

// 4. Delete reviews where review_date is before 2024-01-01 AND rating is 1
db.reviews.deleteMany({review_date:{$lt:"2024-01-01"},rating:1});

// 5. Find reviews sorted by rating (descending), showing specific fields
db.reviews.find(
  {},
  {course_name:1,student_name:1,rating:1,_id:0}
).sort({rating:-1});

