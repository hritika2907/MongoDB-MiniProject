// 1. Create a parking collection and insert one parking slot
db.parking.insertOne({
  slot_id: "P1-10", floor: 1, vehicle_type: "SUV", is_occupied: true, vehicle_number: "KA-05-MN-4321"
});

// 2. Insert 5 parking slot records
db.parking.insertMany([
  { slot_id: "P1-11", floor: 1, vehicle_type: "SUV", is_occupied: false, vehicle_number: null },
  { slot_id: "P2-03", floor: 2, vehicle_type: "Scooter", is_occupied: true, vehicle_number: "DL-09-ZZ-7654" },
  { slot_id: "P2-04", floor: 2, vehicle_type: "Scooter", is_occupied: false, vehicle_number: null },
  { slot_id: "P3-08", floor: 3, vehicle_type: "Sedan", is_occupied: true, vehicle_number: "MH-14-RT-9988" },
  { slot_id: "P1-15", floor: 1, vehicle_type: "Hatchback", is_occupied: false, vehicle_number: null }
]);

// 3. Retrieve all slots where is_occupied is false
db.parking.find({ is_occupied: false });

// 4. Display only slot_id, floor, and vehicle_type using projection
db.parking.find({}, { slot_id: 1, floor: 1, vehicle_type: 1, _id: 0 });

// 5. Delete a parking slot based on slot_id
db.parking.deleteOne({ slot_id: "P1-10" });
