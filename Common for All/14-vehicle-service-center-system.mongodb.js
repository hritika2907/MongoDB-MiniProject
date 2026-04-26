// 1. Insert 5 service records
db.services.insertMany([
  {service_id:"V001",customer_name:"Kabir",vehicle_number:"KA-09-Z-4321",service_type:"Tire Replacement",service_date:"2026-04-25",cost:2000,status:"Scheduled"},
  {service_id:"V002",customer_name:"Meera",vehicle_number:"TN-22-Y-8765",service_type:"Engine Repair",service_date:"2026-07-15",cost:6000,status:"InProgress"},
  {service_id:"V003",customer_name:"Divya",vehicle_number:"MH-18-X-3456",service_type:"General Service",service_date:"2024-11-20",cost:700,status:"InProgress"},
  {service_id:"V004",customer_name:"Nikhil",vehicle_number:"DL-02-W-7890",service_type:"Brake Repair",service_date:"2026-08-10",cost:7500,status:"InProgress"},
  {service_id:"V005",customer_name:"Riya",vehicle_number:"KL-11-V-1234",service_type:"Oil Change",service_date:"2024-05-10",cost:400,status:"Completed"}
]);

// 2. Find "InProgress" records where service_date is before "2026-08-01"
db.services.find({status:"InProgress",service_date:{$lt:"2026-08-01"}});

// 3. Update status to "Completed" where service_date is before "2025-01-01"
db.services.updateMany(
  {service_date:{$lt:"2025-01-01"}},
  {$set:{status:"Completed"}}
);

// 4. Delete records with status "Completed" AND cost < 500
db.services.deleteMany({status:"Completed",cost:{$lt:500}});

// 5. Find records sorted by cost (descending), showing only specific fields
db.services.find(
  {},
  {customer_name:1,service_type:1,cost:1,_id:0}
).sort({cost:-1});

