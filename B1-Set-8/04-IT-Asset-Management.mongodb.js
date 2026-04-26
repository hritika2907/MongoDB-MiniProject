// 1. Insert multiple asset records into the assets collection
db.assets.insertMany([
  {asset_id:"AS001",asset_name:"Laptop Dell XPS",asset_type:"Electronics",purchase_date:"2024-05-10",warranty_period:"3 years",asset_value:60000,asset_status:"Active"},
  {asset_id:"AS002",asset_name:"Office Chair",asset_type:"Furniture",purchase_date:"2023-08-20",warranty_period:"2 years",asset_value:15000,asset_status:"Active"},
  {asset_id:"AS003",asset_name:"Server Rack",asset_type:"Hardware",purchase_date:"2022-11-05",warranty_period:"5 years",asset_value:120000,asset_status:"Under Maintenance"},
  {asset_id:"AS004",asset_name:"Printer HP",asset_type:"Electronics",purchase_date:"2021-01-15",warranty_period:"3 years",asset_value:18000,asset_status:"Retired"},
  {asset_id:"AS005",asset_name:"Projector Epson",asset_type:"Electronics",purchase_date:"2025-03-01",warranty_period:"3 years",asset_value:55000,asset_status:"Active"}
]);

// 2. Retrieve assets whose asset_value is greater than 50,000 using $gt
db.assets.find({asset_value:{$gt:50000}});

// 3. Retrieve assets whose asset_value is less than 20,000 or asset_status equals "Under Maintenance" using $or
db.assets.find({
  $or:[
    {asset_value:{$lt:20000}},
    {asset_status:"Under Maintenance"}
  ]
});

// 4. Update asset_status to "Active" for assets whose warranty_period equals 3 years using updateMany()
db.assets.updateMany(
  {warranty_period:"3 years"},
  {$set:{asset_status:"Active"}}
);

// 5. Delete assets where asset_status equals "Retired" using deleteMany()
db.assets.deleteMany({asset_status:"Retired"});
