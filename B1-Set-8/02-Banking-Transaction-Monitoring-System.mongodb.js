// 1. Insert multiple transaction records into the transactions collection
db.transactions.insertMany([
  {transaction_id:"TX001",account_number:1234567890,transaction_type:"Online",transaction_amount:60000,transaction_date:"2026-04-20",transaction_status:"Pending"},
  {transaction_id:"TX002",account_number:9876543210,transaction_type:"ATM",transaction_amount:8000,transaction_date:"2026-04-22",transaction_status:"Verified"},
  {transaction_id:"TX003",account_number:1234567890,transaction_type:"Online",transaction_amount:15000,transaction_date:"2026-04-23",transaction_status:"Pending"},
  {transaction_id:"TX004",account_number:5555555555,transaction_type:"Cheque",transaction_amount:200000,transaction_date:"2025-12-10",transaction_status:"Invalid"},
  {transaction_id:"TX005",account_number:4444444444,transaction_type:"Online",transaction_amount:45000,transaction_date:"2026-04-25",transaction_status:"Pending"}
]);

// 2. Retrieve transactions where transaction_amount is greater than 50,000 using $gt
db.transactions.find({transaction_amount:{$gt:50000}});

// 3. Retrieve transactions where transaction_amount is greater than 10,000 and transaction_type equals "Online"
db.transactions.find({transaction_amount:{$gt:10000},transaction_type:"Online"});

// 4. Update transaction_status to "Verified" for transactions where account_number equals 1234567890
db.transactions.updateMany(
  {account_number:1234567890},
  {$set:{transaction_status:"Verified"}}
);

// 5. Delete transactions where transaction_status equals "Invalid"
db.transactions.deleteMany({transaction_status:"Invalid"});
