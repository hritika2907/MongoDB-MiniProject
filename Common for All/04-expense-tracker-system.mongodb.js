// 1. Create an expenses collection and insert one expense
db.expenses.insertOne({
  expense_id: "E001",
  category: "Shopping",
  amount: 320,
  date: "2026-04-25",
  payment_method: "UPI",
  note: "Bought clothes at mall"
});

// 2. Insert 5 expenses with different categories
db.expenses.insertMany([
  { expense_id: "E002", category: "Travel", amount: 550, date: "2026-04-24", payment_method: "Cash", note: "Train ticket" },
  { expense_id: "E003", category: "Leisure", amount: 1100, date: "2026-04-23", payment_method: "Card", note: "Amusement park entry" },
  { expense_id: "E004", category: "Utilities", amount: 2700, date: "2026-04-22", payment_method: "UPI", note: "Water bill" },
  { expense_id: "E005", category: "Groceries", amount: 400, date: "2026-04-21", payment_method: "Cash", note: "Vegetables and staples" },
  { expense_id: "E006", category: "Commute", amount: 200, date: "2026-04-20", payment_method: "UPI", note: "Bus pass recharge" }
]);

// 3. Retrieve all expenses with amount greater than 500
db.expenses.find({ amount: { $gt: 500 } });

// 4. Display only category, amount, and date using projection
db.expenses.find({}, { category: 1, amount: 1, date: 1, _id: 0 });

// 5. Delete an expense based on expense_id
db.expenses.deleteOne({ expense_id: "E001" });

