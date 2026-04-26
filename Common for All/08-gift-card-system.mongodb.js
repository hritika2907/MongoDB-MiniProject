// 1. Create a giftcards collection and insert one document
db.giftcards.insertOne({
  card_id: "GC-001", recipient_name: "Riya", sender_name: "Kunal", amount: 1200, purchase_date: "2026-04-01", expiry_date: "2026-11-30", is_used: false
});

// 2. Insert 5 gift card records
db.giftcards.insertMany([
  { card_id: "GC-002", recipient_name: "Aditya", sender_name: "Neha", amount: 700, purchase_date: "2026-03-12", expiry_date: "2026-12-31", is_used: true },
  { card_id: "GC-003", recipient_name: "Sonia", sender_name: "Rajesh", amount: 2500, purchase_date: "2026-04-18", expiry_date: "2027-05-01", is_used: false },
  { card_id: "GC-004", recipient_name: "Kabir", sender_name: "Meera", amount: 1800, purchase_date: "2026-01-08", expiry_date: "2026-07-15", is_used: false },
  { card_id: "GC-005", recipient_name: "Divya", sender_name: "Arjun", amount: 3500, purchase_date: "2026-02-10", expiry_date: "2026-02-28", is_used: true },
  { card_id: "GC-006", recipient_name: "Nikhil", sender_name: "Pooja", amount: 900, purchase_date: "2026-04-22", expiry_date: "2027-04-30", is_used: false }
]);

// 3. Retrieve all cards where is_used is false AND expiry_date is after today's date
db.giftcards.find({ 
  is_used: false, 
  expiry_date: { $gt: "2026-05-01" } 
});

// 4. Display only recipient_name, amount, and expiry_date
db.giftcards.find({}, { recipient_name: 1, amount: 1, expiry_date: 1, _id: 0 });

// 5. Delete a gift card based on card_id
db.giftcards.deleteOne({ card_id: "GC-002" });

