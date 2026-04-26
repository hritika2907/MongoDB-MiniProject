// 1. Insert multiple reservation records into the reservations collection
db.reservations.insertMany([
  {reservation_id:"RS001",guest_name:"Kabir",room_type:"Deluxe",booking_date:"2026-04-10",check_in_date:"2026-05-01",check_out_date:"2026-05-05",payment_status:"Pending"},
  {reservation_id:"RS002",guest_name:"Divya",room_type:"Suite",booking_date:"2026-03-15",check_in_date:"2026-04-20",check_out_date:"2026-04-25",payment_status:"Completed"},
  {reservation_id:"RS003",guest_name:"Meera",room_type:"Standard",booking_date:"2025-12-01",check_in_date:"2026-01-10",check_out_date:"2026-01-15",payment_status:"Canceled"},
  {reservation_id:"RS004",guest_name:"Nikhil",room_type:"Deluxe",booking_date:"2026-04-22",check_in_date:"2026-06-01",check_out_date:"2026-06-05",payment_status:"Pending"},
  {reservation_id:"RS005",guest_name:"Ravi",room_type:"Suite",booking_date:"2026-04-24",check_in_date:"2026-05-10",check_out_date:"2026-05-15",payment_status:"Pending"}
]);

// 2. Retrieve reservations where payment_status equals "Pending" using $eq
db.reservations.find({payment_status:{$eq:"Pending"}});

// 3. Retrieve reservations where check_in_date is greater than 2024-01-01 using $gt
db.reservations.find({check_in_date:{$gt:"2024-01-01"}});

// 4. Update payment_status to "Completed" for reservations where guest_name equals "Ravi"
db.reservations.updateMany(
  {guest_name:"Ravi"},
  {$set:{payment_status:"Completed"}}
);

// 5. Delete reservations where payment_status equals "Canceled"
db.reservations.deleteMany({payment_status:"Canceled"});
