// 1. Insert 5 wishlist documents with different product categories
db.wishlists.insertMany([
  {wishlist_id:"W001",customer_name:"Kabir",product_name:"Smartphone",product_category:"Electronics",price:45000,added_date:"2026-04-20",notify_when_available:true},
  {wishlist_id:"W002",customer_name:"Divya",product_name:"Bluetooth Speaker",product_category:"Electronics",price:1800,added_date:"2026-04-21",notify_when_available:true},
  {wishlist_id:"W003",customer_name:"Meera",product_name:"Jeans",product_category:"Clothing",price:1200,added_date:"2023-12-15",notify_when_available:false},
  {wishlist_id:"W004",customer_name:"Nikhil",product_name:"Bookshelf",product_category:"Furniture",price:3500,added_date:"2026-04-24",notify_when_available:true},
  {wishlist_id:"W005",customer_name:"Riya",product_name:"Keyboard",product_category:"Electronics",price:2200,added_date:"2023-11-01",notify_when_available:false}
]);

// 2. Find items where price is less than 2000 AND notify_when_available is true
db.wishlists.find({price:{$lt:2000},notify_when_available:true});

// 3. Update price by applying a 20% discount for "Electronics"
db.wishlists.updateMany(
  {product_category:"Electronics"},
  {$mul:{price:0.8}}
);

// 4. Delete wishlist items where added_date is before "2024-01-01"
db.wishlists.deleteMany({added_date:{$lt:"2024-01-01"}});

// 5. Group by customer_name and count how many items each customer has
db.wishlists.aggregate([
  {$group:{_id:"$customer_name",total_items:{$sum:1}}}
]);

