// 1. Insert 5 defect records
db.defects.insertMany([
  {defect_id:"D001",product_name:"Smartphone Screen",batch_number:"B200",defect_type:"Cosmetic",detection_date:"2026-04-20",severity:"Low",quantity_affected:45,root_cause:"Alignment Issue",status:"Open",resolution_date:null},
  {defect_id:"D002",product_name:"Laptop Battery",batch_number:"B201",defect_type:"Safety",detection_date:"2026-04-25",severity:"High",quantity_affected:180,root_cause:"Material Defect",status:"Open",resolution_date:null},
  {defect_id:"D003",product_name:"Camera Module",batch_number:"B198",defect_type:"Functional",detection_date:"2021-08-15",severity:"Medium",quantity_affected:100,root_cause:"Dust Particles",status:"Resolved",resolution_date:"2021-08-20"},
  {defect_id:"D004",product_name:"Power Adapter",batch_number:"B202",defect_type:"Safety",detection_date:"2026-04-22",severity:"High",quantity_affected:250,root_cause:null,status:"Investigating",resolution_date:null},
  {defect_id:"D005",product_name:"Protective Case",batch_number:"B203",defect_type:"Cosmetic",detection_date:"2026-04-24",severity:"Low",quantity_affected:70,root_cause:"Molding Error",status:"Open",resolution_date:null}
]);

// 2. Find defects where severity is "High" AND status is "Open"
db.defects.find({severity:"High",status:"Open"});

// 3. Update status to "Resolved" and set resolution_date to today where root_cause is identified
db.defects.updateMany(
  {root_cause:{$ne:null}},
  {$set:{status:"Resolved",resolution_date:"2026-04-25"}}
);

// 4. Delete defects where detection_date < "2022-01-01" AND status is "Resolved"
db.defects.deleteMany({detection_date:{$lt:"2022-01-01"},status:"Resolved"});

// 5. Aggregate total quantity_affected per defect_type, sorted from highest to lowest
db.defects.aggregate([
  {$group:{_id:"$defect_type",total_affected:{$sum:"$quantity_affected"}}},
  {$sort:{total_affected:-1}}
]);

