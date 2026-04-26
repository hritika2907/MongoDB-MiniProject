// 1. Create a single index on the order_status field
db.orders.createIndex({order_status:1});

// 2. Create a compound index on order_status and delivery_city fields
db.orders.createIndex({order_status:1,delivery_city:1});

// 3. Retrieve all orders where order_status equals "Shipped" and delivery_city equals "Chennai"
db.orders.find({order_status:"Shipped",delivery_city:"Chennai"});

// 4. Use explain() to analyze query execution statistics
db.orders.find({order_status:"Shipped",delivery_city:"Chennai"}).explain("executionStats");

// 5. Compare the number of documents examined before and after indexing
// Run the same query with explain() before creating indexes, then again after.
// Example after indexing:
db.orders.find({order_status:"Shipped",delivery_city:"Chennai"}).explain("executionStats");
