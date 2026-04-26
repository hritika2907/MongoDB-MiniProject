// 1. Insert 5 prescription documents with different statuses
db.prescriptions.insertMany([
  {prescription_id:"RX001",patient_name:"Kabir",doctor_name:"Dr. Mehta",medicine_name:"Atorvastatin",dosage:"20mg",issue_date:"2026-04-20",expiry_date:"2026-10-20",status:"Active"},
  {prescription_id:"RX002",patient_name:"Divya",doctor_name:"Dr. Rao",medicine_name:"Azithromycin",dosage:"250mg",issue_date:"2023-05-10",expiry_date:"2023-11-10",status:"Active"}, // Should be expired
  {prescription_id:"RX003",patient_name:"Nikhil",doctor_name:"Dr. Kapoor",medicine_name:"Diclofenac",dosage:"50mg",issue_date:"2023-12-01",expiry_date:"2024-06-01",status:"Fulfilled"},
  {prescription_id:"RX004",patient_name:"Meera",doctor_name:"Dr. Joshi",medicine_name:"Insulin",dosage:"10 units",issue_date:"2026-04-24",expiry_date:"2026-12-31",status:"Active"},
  {prescription_id:"RX005",patient_name:"Riya",doctor_name:"Dr. Banerjee",medicine_name:"Loratadine",dosage:"10mg",issue_date:"2026-01-15",expiry_date:"2026-03-15",status:"Expired"}
]);

// 2. Find prescriptions with status "Active" AND expiry_date after today
db.prescriptions.find({status:"Active",expiry_date:{$gt:"2026-04-25"}});

// 3. Update status to "Expired" where expiry_date is before today
db.prescriptions.updateMany(
  {expiry_date:{$lt:"2026-04-25"}},
  {$set:{status:"Expired"}}
);

// 4. Delete prescriptions with status "Fulfilled" AND issue_date before 2024-01-01
db.prescriptions.deleteMany({status:"Fulfilled",issue_date:{$lt:"2024-01-01"}});

// 5. Find prescriptions sorted by issue_date (descending), showing specific fields
db.prescriptions.find(
  {},
  {patient_name:1,medicine_name:1,status:1,_id:0}
).sort({issue_date:-1});

