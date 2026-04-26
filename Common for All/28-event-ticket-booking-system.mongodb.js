// 1. Insert 5 booking documents with different ticket types
db.bookings.insertMany([
  {booking_id:"BK001",event_name:"AI Summit",event_date:"2026-11-20",venue:"Tech Arena",customer_name:"Kabir",ticket_type:"VIP",number_of_tickets:2,total_price:6000,booking_date:"2026-04-20",payment_status:"Paid"},
  {booking_id:"BK002",event_name:"Jazz Night",event_date:"2026-03-05",venue:"City Hall",customer_name:"Divya",ticket_type:"General",number_of_tickets:3,total_price:1800,booking_date:"2026-02-01",payment_status:"Paid"}, // Event already passed
  {booking_id:"BK003",event_name:"Art Fair",event_date:"2026-12-10",venue:"Gallery Center",customer_name:"Meera",ticket_type:"Student",number_of_tickets:1,total_price:250,booking_date:"2026-04-25",payment_status:"Pending"},
  {booking_id:"BK004",event_name:"Startup Expo",event_date:"2023-06-15",venue:"Innovation Hub",customer_name:"Nikhil",ticket_type:"VIP",number_of_tickets:1,total_price:2500,booking_date:"2023-04-10",payment_status:"Pending"},
  {booking_id:"BK005",event_name:"AI Summit",event_date:"2026-11-20",venue:"Tech Arena",customer_name:"Riya",ticket_type:"General",number_of_tickets:4,total_price:4000,booking_date:"2026-04-24",payment_status:"Refunded"}
]);

// 2. Find bookings where event_date > "2026-10-01" AND payment_status is "Paid"
db.bookings.find({event_date:{$gt:"2026-10-01"},payment_status:"Paid"});

// 3. Update payment_status to "Refunded" where event_date < today AND payment_status is "Paid"
db.bookings.updateMany(
  {event_date:{$lt:"2026-04-25"},payment_status:"Paid"},
  {$set:{payment_status:"Refunded"}}
);

// 4. Delete bookings with payment_status "Pending" AND booking_date < "2024-01-01"
db.bookings.deleteMany({payment_status:"Pending",booking_date:{$lt:"2024-01-01"}});

// 5. Aggregate total number_of_tickets sold per event_name
db.bookings.aggregate([
  {$group:{_id:"$event_name",total_tickets_sold:{$sum:"$number_of_tickets"}}}
]);

