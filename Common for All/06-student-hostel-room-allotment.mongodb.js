// 1. Create a hostel collection and insert one student
db.hostel.insertOne({
  student_id: "S001", name: "Karan", room_number: 201, block_name: "B", bed_number: 1, check_in_date: "2026-01-15"
});

// 2. Insert 5 students with different room numbers
db.hostel.insertMany([
  { student_id: "S002", name: "Sneha", room_number: 103, block_name: "A", bed_number: 2, check_in_date: "2026-01-15" },
  { student_id: "S003", name: "Vikram", room_number: 207, block_name: "B", bed_number: 1, check_in_date: "2026-01-16" },
  { student_id: "S004", name: "Priya", room_number: 305, block_name: "C", bed_number: 2, check_in_date: "2026-01-17" },
  { student_id: "S005", name: "Arjun", room_number: 108, block_name: "A", bed_number: 1, check_in_date: "2026-01-15" },
  { student_id: "S006", name: "Meera", room_number: 410, block_name: "D", bed_number: 2, check_in_date: "2026-01-18" }
]);

// 3. Retrieve all students from block "A"
db.hostel.find({ block_name: "A" });

// 4. Display only name, room_number, and block_name using projection
db.hostel.find({}, { name: 1, room_number: 1, block_name: 1, _id: 0 });

// 5. Delete a student record based on student_id
db.hostel.deleteOne({ student_id: "S001" });

