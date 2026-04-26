// 1. Create a tasks collection and insert one task
db.tasks.insertOne({
  task_id: "T101",
  title: "Finish Database Project",
  description: "Complete all MongoDB queries",
  due_date: "2026-05-01",
  priority: "High",
  is_completed: false
});

// 2. Insert 5 tasks with different priorities
db.tasks.insertMany([
  { task_id: "T102", title: "Go shopping", description: "Buy fruits and snacks", due_date: "2026-04-27", priority: "Medium", is_completed: false },
  { task_id: "T103", title: "Study DSA", description: "Practice arrays problems", due_date: "2026-04-28", priority: "Low", is_completed: true },
  { task_id: "T104", title: "Recharge mobile", description: "Monthly recharge plan", due_date: "2026-04-29", priority: "High", is_completed: false },
  { task_id: "T105", title: "Text friend", description: "Check in after long time", due_date: "2026-04-26", priority: "Medium", is_completed: true },
  { task_id: "T106", title: "Morning run", description: "Jog for 20 minutes", due_date: "2026-04-27", priority: "Low", is_completed: false }
]);

// 3. Retrieve all tasks where is_completed is false
db.tasks.find({ is_completed: false });

// 4. Display only title and due_date
db.tasks.find({}, { title: 1, due_date: 1, _id: 0 });

// 5. Delete a task based on task_id
db.tasks.deleteOne({ task_id: "T003" });
