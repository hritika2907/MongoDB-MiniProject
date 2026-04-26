// 1. Insert 5 playlist documents with different songs arrays
db.playlists.insertMany([
  {playlist_id:"PL001",user_name:"Kabir",playlist_name:"Morning Boost",songs:[{title:"Rise Up",artist:"Andra Day"},{title:"Stronger",artist:"Kelly Clarkson"}],created_date:"2026-04-10",total_duration_minutes:50,is_public:true,play_count:160},
  {playlist_id:"PL002",user_name:"Divya",playlist_name:"Relax Mode",songs:[{title:"Ocean Eyes",artist:"Billie Eilish"}],created_date:"2026-04-20",total_duration_minutes:70,is_public:true,play_count:55},
  {playlist_id:"PL003",user_name:"Meera",playlist_name:"Study Beats",songs:[{title:"Focus Flow",artist:"Lofi Beats"}],created_date:"2022-11-15",total_duration_minutes:100,is_public:false,play_count:280},
  {playlist_id:"PL004",user_name:"Nikhil",playlist_name:"Dance Floor",songs:[{title:"Levitating",artist:"Dua Lipa"},{title:"Blinding Lights",artist:"The Weeknd"}],created_date:"2026-01-05",total_duration_minutes:95,is_public:true,play_count:520},
  {playlist_id:"PL005",user_name:"Riya",playlist_name:"Calm Sleep",songs:[{title:"Forest Sounds",artist:"Nature"}],created_date:"2022-05-20",total_duration_minutes:450,is_public:false,play_count:25}
]);

// 2. Find playlists where is_public is true AND play_count > 100
db.playlists.find({is_public:true,play_count:{$gt:100}});

// 3. Update play_count by incrementing it by 1 for a specific playlist
db.playlists.updateOne(
  {playlist_id:"PL001"},
  {$inc:{play_count:1}}
);

// 4. Delete playlists where created_date < "2023-01-01" AND is_public is false
db.playlists.deleteMany({created_date:{$lt:"2023-01-01"},is_public:false});

// 5. Use aggregation to find average total_duration_minutes per user
db.playlists.aggregate([
  {$group:{_id:"$user_name",average_duration:{$avg:"$total_duration_minutes"}}}
]);

