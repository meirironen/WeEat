# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cuisines = Cuisine.create([
                              {name: "Asian"},
                              {name: "American"},
                              {name: "Deli"},
                              {name: "Hummus"},
                              {name: "Fish"},
                              {name: "Indian"},
                              {name: "Italian"},
                              {name: "Japanese"},
                              {name: "Mexican"},
                              {name: "Pizza"},
                          ]);


restaurants = Restaurant.create([
    { name: "Amsterdam Fries", address: "30 King George st., Tel Aviv", latitude:32.0722694, longitude:34.7741044, foodcard: true, deliverytime:60, rating:2, cuisine_id: 2 },
    { name: "Via Pasta", address: "142 Eben Gvirol St., Tel Aviv", latitude:32.08873, longitude:34.7827009, foodcard:false, deliverytime:90, rating:1, cuisine_id:7 },
    { name: "Bayren Market", address: "3 Aluf Kelman Maget St., Tel Aviv", latitude:32.0713993, longitude:34.7865759, foodcard:true, deliverytime:120, rating:2, cuisine_id:2 },
    { name: "Little Burger Shop", address: "125 Dizzingof st. Tel Aviv", latitude:32.081382, longitude:34.7736516, foodcard:true, deliverytime:30, rating:3, cuisine_id:2 },
    { name: "Zepra", address: "96 Igal Alon St. Tel Aviv", latitude:32.069392, longitude:34.7943003, foodcard:true,deliverytime:180, rating:2, cuisine_id:1 },
    { name: "Okinawa", address: "11 Levontin St. Tel Aviv", latitude:32.0618752, longitude:34.7751413, foodcard:false,deliverytime:90, rating:1, cuisine_id:8 },
    { name: "Delicatessen", address: "120 Hertzel st., Tel Aviv", latitude:32.0787143, longitude:34.7811354, foodcard:true,deliverytime:30, rating:3, cuisine_id:3 },
    { name: "Abu Hassan", address: "1 Hadolfin St. Jaffa", latitude:32.0618747, longitude:34.7839307, foodcard:false,deliverytime:90, rating:3, cuisine_id:4 },
    { name: "Market Fish", address: "23 Toval St. , Ramat Gan", latitude:32.0841122, longitude:34.8014786, foodcard:true,deliverytime:120, rating:2, cuisine_id:5 },
    { name: "India", address: "4 Shaul Hamelech St. Tel Aviv", latitude:32.0753545, longitude:34.7825281, foodcard:true,deliverytime:60, rating:1, cuisine_id:6 },
    { name: "Tandoori", address: "15 Karlibach St. Tel Aviv", latitude:32.0674821, longitude:34.783169, foodcard:false,deliverytime:120, rating:1, cuisine_id: 6},
    { name: "Mexicana", address: "3 Aluf Kelman Magen St. Tel Aviv", latitude:32.0713993, longitude:34.7865759, foodcard:true,deliverytime:60, rating:1, cuisine_id:9 },
    { name: "Pizza Hut", address: "20 Nahlat Yitzhak st. Tel Aviv", latitude:32.0739817, longitude:34.7981136, foodcard:false,deliverytime:30, rating:1, cuisine_id: 10},
    { name: "Derby Fish Bar", address: "20 Nahlat Yitzhak st. Tel Aviv", latitude:32.069392, longitude:34.7943003, foodcard:true,deliverytime:30, rating:1, cuisine_id: 5},
    { name: "Ono", address: "2 Wietzmann st. Tel Aviv", latitude:32.0775923, longitude:34.7891064, foodcard:false,deliverytime:60, rating:2, cuisine_id: 7},
    { name: "Hummus Givataaim", address: "", latitude:32.0754295, longitude:34.808406, foodcard:true,deliverytime:30, rating:1, cuisine_id: 5},
    ]);



