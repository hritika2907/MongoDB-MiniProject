// 1. Insert 5 rider documents with different current_status values
db.riders.insertMany([
  {rider_id:"RD001",rider_name:"Kabir",city:"Bangalore",vehicle_type:"Bike",total_deliveries:30,average_rating:4.7,current_status:"Available",earnings_today:600,delivery_history:["ORD1","ORD2","ORD3"]},
  {rider_id:"RD002",rider_name:"Divya",city:"Chennai",vehicle_type:"Scooter",total_deliveries:18,average_rating:4.3,current_status:"Busy",earnings_today:350,delivery_history:["ORD4"]},
  {rider_id:"RD003",rider_name:"Meera",city:"Hyderabad",vehicle_type:"Bike",total_deliveries:0,average_rating:0,current_status:"Offline",earnings_today:0,delivery_history:[]},
  {rider_id:"RD004",rider_name:"Nikhil",city:"Mumbai",vehicle_type:"Scooter",total_deliveries:55,average_rating:4.9,current_status:"Available",earnings_today:1300,delivery_history:["ORD5","ORD6"]},
  {rider_id:"RD005",rider_name:"Riya",city:"Delhi",vehicle_type:"Bike",total_deliveries:7,average_rating:3.8,current_status:"Offline",earnings_today:120,delivery_history:["ORD7"]}
]);

// 2. Find riders where current_status is "Available" AND average_rating > 4.5
db.riders.find({current_status:"Available",average_rating:{$gt:4.5}});

// 3. Update earnings_today by adding 100 to riders with total_deliveries > 20
db.riders.updateMany(
  {total_deliveries:{$gt:20}},
  {$inc:{earnings_today:100}}
);

// 4. Delete riders where current_status is "Offline" AND total_deliveries is 0
db.riders.deleteMany({current_status:"Offline",total_deliveries:0});

// 5. Create a multikey index on the delivery_history array field
db.riders.createIndex({delivery_history:1});

