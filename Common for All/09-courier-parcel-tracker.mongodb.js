// 1. Create a parcels collection and insert one parcel
db.parcels.insertOne({ 
  parcel_id: "P001", sender_name: "Kunal", receiver_name: "Riya", weight: 3.0, shipping_cost: 180, booking_date: "2026-04-20", delivery_status: "Pending" 
});

// 2. Insert 5 parcel records
db.parcels.insertMany([
  { parcel_id: "P002", sender_name: "Meera", receiver_name: "Aditya", weight: 1.2, shipping_cost: 90, booking_date: "2026-04-21", delivery_status: "Shipped" },
  { parcel_id: "P003", sender_name: "Kabir", receiver_name: "Sonia", weight: 4.5, shipping_cost: 280, booking_date: "2026-04-22", delivery_status: "Pending" },
  { parcel_id: "P004", sender_name: "Divya", receiver_name: "Arjun", weight: 0.8, shipping_cost: 60, booking_date: "2026-04-23", delivery_status: "Delivered" },
  { parcel_id: "P005", sender_name: "Nikhil", receiver_name: "Pooja", weight: 2.7, shipping_cost: 190, booking_date: "2026-04-24", delivery_status: "Pending" },
  { parcel_id: "P006", sender_name: "Sneha", receiver_name: "Vikram", weight: 2.0, shipping_cost: 130, booking_date: "2026-04-25", delivery_status: "Shipped" }
]);

// 3. Retrieve all parcels with delivery_status "Pending"
db.parcels.find({ delivery_status: "Pending" });

// 4. Display only sender_name, receiver_name, and shipping_cost
db.parcels.find({}, { sender_name: 1, receiver_name: 1, shipping_cost: 1, _id: 0 });

// 5. Delete a parcel based on parcel_id
db.parcels.deleteOne({ parcel_id: "P001" });

