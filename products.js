const products = [
  {
    // =====================
// DAL (1-10)
// =====================
{
id:1,
name:"Arhar Dal",
category:"Dal",
sizes:[{size:"500g",price:110},{size:"1kg",price:220}]
},
{
id:2,
name:"Moong Dal",
category:"Dal",
sizes:[{size:"500g",price:90},{size:"1kg",price:180}]
},
{
id:3,
name:"Masoor Dal",
category:"Dal",
sizes:[{size:"500g",price:80},{size:"1kg",price:160}]
},
{
id:4,
name:"Chana Dal",
category:"Dal",
sizes:[{size:"500g",price:76},{size:"1kg",price:152}]
},
{
id:5,
name:"Urad Dal",
category:"Dal",
sizes:[{size:"500g",price:100},{size:"1kg",price:200}]
},
{
id:6,
name:"Kala Chana",
category:"Dal",
sizes:[{size:"500g",price:65},{size:"1kg",price:130}]
},
{
id:7,
name:"Kabuli Chana",
category:"Dal",
sizes:[{size:"500g",price:80},{size:"1kg",price:160}]
},
{
id:8,
name:"Rajma Chitra",
category:"Dal",
sizes:[{size:"500g",price:85},{size:"1kg",price:170}]
},
{
id:9,
name:"Rajma Lal",
category:"Dal",
sizes:[{size:"500g",price:90},{size:"1kg",price:180}]
},
{
id:10,
name:"Lobiya",
category:"Dal",
sizes:[{size:"500g",price:75},{size:"1kg",price:150}]
},

// =====================
// SPICES (11-20)
// =====================
{
id:11,
name:"Haldi Powder",
category:"Spices",
sizes:[{size:"50g",price:20},{size:"100g",price:40},{size:"200g",price:75},{size:"500g",price:180},{size:"1kg",price:350}]
},
{
id:12,
name:"Lal Mirch Powder",
category:"Spices",
sizes:[{size:"50g",price:25},{size:"100g",price:50},{size:"200g",price:95},{size:"500g",price:230},{size:"1kg",price:450}]
},
{
id:13,
name:"Dhaniya Powder",
category:"Spices",
sizes:[{size:"50g",price:15},{size:"100g",price:30},{size:"200g",price:55},{size:"500g",price:130},{size:"1kg",price:250}]
},
{
id:14,
name:"Jeera",
category:"Spices",
sizes:[{size:"50g",price:30},{size:"100g",price:60},{size:"200g",price:110},{size:"500g",price:270},{size:"1kg",price:520}]
},
{
id:15,
name:"Kali Mirch",
category:"Spices",
sizes:[{size:"50g",price:50},{size:"100g",price:100},{size:"200g",price:190},{size:"500g",price:470},{size:"1kg",price:900}]
},
{
id:16,
name:"Saunf",
category:"Spices",
sizes:[{size:"50g",price:20},{size:"100g",price:40},{size:"200g",price:75},{size:"500g",price:180},{size:"1kg",price:340}]
},
{
id:17,
name:"Ajwain",
category:"Spices",
sizes:[{size:"50g",price:18},{size:"100g",price:36},{size:"200g",price:70},{size:"500g",price:170},{size:"1kg",price:330}]
},
{
id:18,
name:"Laung",
category:"Spices",
sizes:[{size:"50g",price:65},{size:"100g",price:130},{size:"200g",price:250},{size:"500g",price:620},{size:"1kg",price:1200}]
},
{
id:19,
name:"Dalchini",
category:"Spices",
sizes:[{size:"50g",price:25},{size:"100g",price:50},{size:"200g",price:95},{size:"500g",price:230},{size:"1kg",price:450}]
},
{
id:20,
name:"Tej Patta",
category:"Spices",
sizes:[{size:"50g",price:12},{size:"100g",price:24},{size:"200g",price:45},{size:"500g",price:110},{size:"1kg",price:210}]
},

// =====================
// FLOUR (21-30)
// =====================
{
id:21,
name:"Gehu Ka Aata",
category:"Flour",
sizes:[{size:"1kg",price:60},{size:"5kg",price:295},{size:"10kg",price:580}]
},
{
id:22,
name:"Multigrain Aata",
category:"Flour",
sizes:[{size:"1kg",price:75},{size:"5kg",price:365},{size:"10kg",price:720}]
},
{
id:23,
name:"Besan",
category:"Flour",
sizes:[{size:"1kg",price:88},{size:"5kg",price:430},{size:"10kg",price:850}]
},
{
id:24,
name:"Maida",
category:"Flour",
sizes:[{size:"1kg",price:56},{size:"5kg",price:275},{size:"10kg",price:540}]
},
{
id:25,
name:"Suji",
category:"Flour",
sizes:[{size:"1kg",price:72},{size:"5kg",price:350},{size:"10kg",price:690}]
},
{
id:26,
name:"Bajra Aata",
category:"Flour",
sizes:[{size:"1kg",price:80},{size:"5kg",price:390},{size:"10kg",price:770}]
},
{
id:27,
name:"Jowar Aata",
category:"Flour",
sizes:[{size:"1kg",price:85},{size:"5kg",price:420},{size:"10kg",price:820}]
},
{
id:28,
name:"Makki Ka Aata",
category:"Flour",
sizes:[{size:"1kg",price:70},{size:"5kg",price:340},{size:"10kg",price:670}]
},
{
id:29,
name:"Ragi Aata",
category:"Flour",
sizes:[{size:"1kg",price:95},{size:"5kg",price:465},{size:"10kg",price:920}]
},
{
id:30,
name:"Chawal Ka Aata",
category:"Flour",
sizes:[{size:"1kg",price:78},{size:"5kg",price:380},{size:"10kg",price:750}]
},

// =====================
// DRY FRUITS (31-40)
// =====================
{
id:31,
name:"Badam",
category:"Dry Fruits",
sizes:[{size:"100g",price:95},{size:"250g",price:235},{size:"500g",price:460},{size:"1kg",price:900}]
},
{
id:32,
name:"Kaju",
category:"Dry Fruits",
sizes:[{size:"100g",price:105},{size:"250g",price:260},{size:"500g",price:510},{size:"1kg",price:1000}]
},
{
id:33,
name:"Pista",
category:"Dry Fruits",
sizes:[{size:"100g",price:130},{size:"250g",price:320},{size:"500g",price:630},{size:"1kg",price:1240}]
},
{
id:34,
name:"Kishmish",
category:"Dry Fruits",
sizes:[{size:"100g",price:45},{size:"250g",price:110},{size:"500g",price:220},{size:"1kg",price:430}]
},
{
id:35,
name:"Akhrot",
category:"Dry Fruits",
sizes:[{size:"100g",price:120},{size:"250g",price:295},{size:"500g",price:580},{size:"1kg",price:1140}]
},

// =====================
// DAIRY (41-50)
// =====================
{
id:41,
name:"Full Cream Milk",
category:"Dairy",
sizes:[{size:"500ml",price:35},{size:"1L",price:70}]
},
{
id:42,
name:"Toned Milk",
category:"Dairy",
sizes:[{size:"500ml",price:33},{size:"1L",price:66}]
},
{
id:43,
name:"Paneer",
category:"Dairy",
sizes:[{size:"200g",price:90},{size:"500g",price:220},{size:"1kg",price:430}]
},
{
id:44,
name:"Desi Ghee",
category:"Dairy",
sizes:[{size:"500ml",price:360},{size:"1L",price:720},{size:"5L",price:3500}]
},
{
id:45,
name:"Butter",
category:"Dairy",
sizes:[{size:"100g",price:60},{size:"500g",price:290}]
},
{
id:46,
name:"Curd (Dahi)",
category:"Dairy",
sizes:[{size:"400g",price:40},{size:"1kg",price:90}]
},
{
id:47,
name:"Lassi",
category:"Dairy",
sizes:[{size:"200ml",price:20},{size:"1L",price:90}]
},
{
id:48,
name:"Chaas",
category:"Dairy",
sizes:[{size:"200ml",price:15},{size:"1L",price:60}]
},
{
id:49,
name:"Cheese",
category:"Dairy",
sizes:[{size:"200g",price:140},{size:"500g",price:340}]
},
{
id:50,
name:"Milk Powder",
category:"Dairy",
sizes:[{size:"200g",price:120},{size:"500g",price:290},{size:"1kg",price:560}]
},// =====================
// RICE
// =====================

{
id:51,
name:"Basmati Rice",
category:"Rice",
sizes:[
{size:"1kg",price:120},
{size:"5kg",price:590},
{size:"10kg",price:1160},
{size:"25kg",price:2850}
]
},

{
id:52,
name:"Normal Rice",
category:"Rice",
sizes:[
{size:"1kg",price:70},
{size:"5kg",price:340},
{size:"10kg",price:670},
{size:"25kg",price:1650}
]
},// =====================
// GROCERY (53-65)
// =====================

{
id:53,
name:"Sugar",
category:"Grocery",
sizes:[
{size:"1kg",price:48},
{size:"5kg",price:238}
]
},

{
id:54,
name:"Salt",
category:"Grocery",
sizes:[
{size:"1kg",price:25}
]
},

{
id:55,
name:"Rock Salt (Sendha Namak)",
category:"Grocery",
sizes:[
{size:"500g",price:35},
{size:"1kg",price:70}
]
},

{
id:56,
name:"Jaggery (Gud)",
category:"Grocery",
sizes:[
{size:"500g",price:38},
{size:"1kg",price:75}
]
},

{
id:57,
name:"Poha",
category:"Grocery",
sizes:[
{size:"500g",price:40},
{size:"1kg",price:78}
]
},

{
id:58,
name:"Sabudana",
category:"Grocery",
sizes:[
{size:"500g",price:55},
{size:"1kg",price:105}
]
},

{
id:59,
name:"Suji",
category:"Grocery",
sizes:[
{size:"500g",price:32},
{size:"1kg",price:64}
]
},

{
id:60,
name:"Maida",
category:"Grocery",
sizes:[
{size:"500g",price:30},
{size:"1kg",price:58}
]
},

{
id:61,
name:"Besan",
category:"Grocery",
sizes:[
{size:"500g",price:48},
{size:"1kg",price:95}
]
},

{
id:62,
name:"Tea",
category:"Grocery",
sizes:[
{size:"250g",price:160},
{size:"500g",price:310},
{size:"1kg",price:610}
]
},

{
id:63,
name:"Coffee",
category:"Grocery",
sizes:[
{size:"100g",price:190},
{size:"200g",price:370}
]
},

{
id:64,
name:"Honey",
category:"Grocery",
sizes:[
{size:"250g",price:130},
{size:"500g",price:250},
{size:"1kg",price:480}
]
},

{
id:65,
name:"Oats",
category:"Grocery",
sizes:[
{size:"500g",price:95},
{size:"1kg",price:185}
]
},// =====================
// NAMKEEN (66-80)
// =====================

{
id:66,
name:"Haldiram Aloo Bhujia",
category:"Namkeen",
sizes:[
{size:"150g",price:45},
{size:"400g",price:110},
{size:"1kg",price:260}
]
},
{
id:67,
name:"Bikaneri Bhujia",
category:"Namkeen",
sizes:[
{size:"150g",price:45},
{size:"400g",price:110},
{size:"1kg",price:260}
]
},
{
id:68,
name:"Navratan Mixture",
category:"Namkeen",
sizes:[
{size:"150g",price:50},
{size:"400g",price:120},
{size:"1kg",price:280}
]
},
{
id:69,
name:"Moong Dal Namkeen",
category:"Namkeen",
sizes:[
{size:"150g",price:55},
{size:"400g",price:130},
{size:"1kg",price:300}
]
},
{
id:70,
name:"Salted Peanuts",
category:"Namkeen",
sizes:[
{size:"200g",price:60},
{size:"500g",price:140},
{size:"1kg",price:270}
]
},
{
id:71,
name:"Khatta Meetha Mix",
category:"Namkeen",
sizes:[
{size:"150g",price:45},
{size:"400g",price:115},
{size:"1kg",price:270}
]
},
{
id:72,
name:"Masala Chips",
category:"Namkeen",
sizes:[
{size:"₹10 Pack",price:10},
{size:"₹20 Pack",price:20},
{size:"Family Pack",price:60}
]
},
{
id:73,
name:"Banana Chips",
category:"Namkeen",
sizes:[
{size:"200g",price:70},
{size:"500g",price:170},
{size:"1kg",price:330}
]
},
{
id:74,
name:"Corn Flakes Mix",
category:"Namkeen",
sizes:[
{size:"200g",price:60},
{size:"500g",price:145},
{size:"1kg",price:280}
]
},
{
id:75,
name:"Chana Jor Garam",
category:"Namkeen",
sizes:[
{size:"200g",price:55},
{size:"500g",price:130},
{size:"1kg",price:250}
]
},
{
id:76,
name:"Sev",
category:"Namkeen",
sizes:[
{size:"200g",price:45},
{size:"500g",price:110},
{size:"1kg",price:220}
]
},
{
id:77,
name:"Ratlami Sev",
category:"Namkeen",
sizes:[
{size:"200g",price:55},
{size:"500g",price:135},
{size:"1kg",price:260}
]
},
{
id:78,
name:"Mixture",
category:"Namkeen",
sizes:[
{size:"200g",price:50},
{size:"500g",price:120},
{size:"1kg",price:240}
]
},
{
id:79,
name:"Tasty Nuts Mix",
category:"Namkeen",
sizes:[
{size:"200g",price:90},
{size:"500g",price:220},
{size:"1kg",price:430}
]
},
{
id:80,
name:"Roasted Chana",
category:"Namkeen",
sizes:[
{size:"250g",price:40},
{size:"500g",price:80},
{size:"1kg",price:160}
]
},

// =====================
// CLEANING (81-100)
// =====================

{
id:81,
name:"Surf Excel",
category:"Cleaning",
sizes:[
{size:"500g",price:80},
{size:"1kg",price:155},
{size:"2kg",price:300}
]
},
{
id:82,
name:"Ariel Detergent",
category:"Cleaning",
sizes:[
{size:"500g",price:85},
{size:"1kg",price:165},
{size:"2kg",price:320}
]
},
{
id:83,
name:"Tide Plus",
category:"Cleaning",
sizes:[
{size:"500g",price:75},
{size:"1kg",price:145},
{size:"2kg",price:280}
]
},
{
id:84,
name:"Wheel Powder",
category:"Cleaning",
sizes:[
{size:"500g",price:40},
{size:"1kg",price:78},
{size:"2kg",price:150}
]
},
{
id:85,
name:"Ghadi Detergent",
category:"Cleaning",
sizes:[
{size:"500g",price:38},
{size:"1kg",price:75},
{size:"2kg",price:145}
]
},
{
id:86,
name:"Vim Bar",
category:"Cleaning",
sizes:[
{size:"200g",price:10},
{size:"400g",price:20}
]
},
{
id:87,
name:"Vim Liquid",
category:"Cleaning",
sizes:[
{size:"250ml",price:55},
{size:"500ml",price:105},
{size:"750ml",price:150}
]
},
{
id:88,
name:"Harpic",
category:"Cleaning",
sizes:[
{size:"500ml",price:110},
{size:"1L",price:210}
]
},
{
id:89,
name:"Lizol",
category:"Cleaning",
sizes:[
{size:"500ml",price:105},
{size:"1L",price:200},
{size:"2L",price:380}
]
},
{
id:90,
name:"Colin",
category:"Cleaning",
sizes:[
{size:"500ml",price:95},
{size:"1L",price:180}
]
},
{
id:91,
name:"Domex",
category:"Cleaning",
sizes:[
{size:"500ml",price:95},
{size:"1L",price:180}
]
},
{
id:92,
name:"Dettol Antiseptic",
category:"Cleaning",
sizes:[
{size:"250ml",price:95},
{size:"500ml",price:180}
]
},
{
id:93,
name:"Floor Mop",
category:"Cleaning",
sizes:[
{size:"1 Piece",price:350}
]
},
{
id:94,
name:"Broom",
category:"Cleaning",
sizes:[
{size:"1 Piece",price:180}
]
},
{
id:95,
name:"Dustbin",
category:"Cleaning",
sizes:[
{size:"10L",price:250},
{size:"20L",price:450}
]
},
{
id:96,
name:"Garbage Bags",
category:"Cleaning",
sizes:[
{size:"30 Bags",price:90},
{size:"60 Bags",price:170}
]
},
{
id:97,
name:"Scrub Pad",
category:"Cleaning",
sizes:[
{size:"Pack of 3",price:30}
]
},
{
id:98,
name:"Toilet Brush",
category:"Cleaning",
sizes:[
{size:"1 Piece",price:120}
]
},
{
id:99,
name:"Glass Cleaner",
category:"Cleaning",
sizes:[
{size:"500ml",price:110}
]
},
{
id:100,
name:"Room Freshener",
category:"Cleaning",
sizes:[
{size:"300ml",price:220}
]
},// =====================
// SOAP (101-115)
// =====================

{
id:101,
name:"Lux Soap",
category:"Soap",
sizes:[
{size:"75g",price:38},
{size:"125g",price:60},
{size:"Pack of 4",price:230}
]
},
{
id:102,
name:"Lifebuoy Soap",
category:"Soap",
sizes:[
{size:"100g",price:35},
{size:"125g",price:42},
{size:"Pack of 4",price:160}
]
},
{
id:103,
name:"Dove Soap",
category:"Soap",
sizes:[
{size:"75g",price:45},
{size:"125g",price:68},
{size:"Pack of 4",price:260}
]
},
{
id:104,
name:"Dettol Soap",
category:"Soap",
sizes:[
{size:"75g",price:40},
{size:"125g",price:58},
{size:"Pack of 4",price:220}
]
},
{
id:105,
name:"Pears Soap",
category:"Soap",
sizes:[
{size:"75g",price:55},
{size:"125g",price:80},
{size:"Pack of 3",price:230}
]
},
{
id:106,
name:"Santoor Soap",
category:"Soap",
sizes:[
{size:"75g",price:36},
{size:"125g",price:55},
{size:"Pack of 4",price:200}
]
},
{
id:107,
name:"Cinthol Soap",
category:"Soap",
sizes:[
{size:"100g",price:38},
{size:"Pack of 4",price:150}
]
},
{
id:108,
name:"Patanjali Soap",
category:"Soap",
sizes:[
{size:"75g",price:28},
{size:"Pack of 4",price:110}
]
},
{
id:109,
name:"Mysore Sandal Soap",
category:"Soap",
sizes:[
{size:"75g",price:65},
{size:"125g",price:95}
]
},
{
id:110,
name:"Medimix Soap",
category:"Soap",
sizes:[
{size:"75g",price:40},
{size:"125g",price:60}
]
},
{
id:111,
name:"Fiama Soap",
category:"Soap",
sizes:[
{size:"75g",price:45},
{size:"125g",price:70}
]
},
{
id:112,
name:"Godrej No.1 Soap",
category:"Soap",
sizes:[
{size:"100g",price:32},
{size:"Pack of 4",price:125}
]
},
{
id:113,
name:"Hamam Soap",
category:"Soap",
sizes:[
{size:"100g",price:35},
{size:"Pack// =====================
// TOOTHPASTE (151-160)
// =====================

{
id:151,
name:"Colgate Strong Teeth",
category:"Oral Care",
sizes:[
{size:"100g",price:65},
{size:"200g",price:120}
]
},
{
id:152,
name:"Colgate MaxFresh",
category:"Oral Care",
sizes:[
{size:"100g",price:75},
{size:"200g",price:145}
]
},
{
id:153,
name:"Closeup",
category:"Oral Care",
sizes:[
{size:"100g",price:70},
{size:"200g",price:135}
]
},
{
id:154,
name:"Pepsodent",
category:"Oral Care",
sizes:[
{size:"100g",price:68},
{size:"200g",price:130}
]
},
{
id:155,
name:"Sensodyne",
category:"Oral Care",
sizes:[
{size:"75g",price:160},
{size:"150g",price:310}
]
},
{
id:156,
name:"Dabur Red",
category:"Oral Care",
sizes:[
{size:"100g",price:75},
{size:"200g",price:145}
]
},
{
id:157,
name:"Patanjali Dant Kanti",
category:"Oral Care",
sizes:[
{size:"100g",price:60},
{size:"200g",price:115}
]
},
{
id:158,
name:"Meswak Toothpaste",
category:"Oral Care",
sizes:[
{size:"100g",price:80},
{size:"200g",price:155}
]
},
{
id:159,
name:"Vicco Vajradanti",
category:"Oral Care",
sizes:[
{size:"100g",price:95}
]
},
{
id:160,
name:"Oral-B Toothpaste",
category:"Oral Care",
sizes:[
{size:"100g",price:110}
]
},

// =====================
// TOOTHBRUSH (161-170)
// =====================

{
id:161,
name:"Colgate Toothbrush",
category:"Oral Care",
sizes:[
{size:"1 Piece",price:30},
{size:"Pack of 3",price:85}
]
},
{
id:162,
name:"Oral-B Toothbrush",
category:"Oral Care",
sizes:[
{size:"1 Piece",price:45},
{size:"Pack of 2",price:85}
]
},
{
id:163,
name:"Sensodyne Toothbrush",
category:"Oral Care",
sizes:[
{size:"1 Piece",price:70}
]
},
{
id:164,
name:"Pepsodent Toothbrush",
category:"Oral Care",
sizes:[
{size:"1 Piece",price:35}
]
},
{
id:165,
name:"Kids Toothbrush",
category:"Oral Care",
sizes:[
{size:"1 Piece",price:40}
]
},
{
id:166,
name:"Tongue Cleaner",
category:"Oral Care",
sizes:[
{size:"1 Piece",price:25}
]
},
{
id:167,
name:"Dental Floss",
category:"Oral Care",
sizes:[
{size:"30m",price:120}
]
},
{
id:168,
name:"Mouthwash",
category:"Oral Care",
sizes:[
{size:"250ml",price:110},
{size:"500ml",price:210}
]
},
{
id:169,
name:"Lister// =====================
// BABY CARE (201-210)
// =====================

{
id:201,
name:"Johnson's Baby Powder",
category:"Baby Care",
sizes:[
{size:"100g",price:85},
{size:"200g",price:165}
]
},
{
id:202,
name:"Johnson's Baby Soap",
category:"Baby Care",
sizes:[
{size:"75g",price:45},
{size:"Pack of 4",price:170}
]
},
{
id:203,
name:"Johnson's Baby Oil",
category:"Baby Care",
sizes:[
{size:"100ml",price:120},
{size:"200ml",price:220}
]
},
{
id:204,
name:"Baby Lotion",
category:"Baby Care",
sizes:[
{size:"100ml",price:160},
{size:"200ml",price:290}
]
}

// =====================
// CHOCOLATES (211-220)
// =====================

{
id:211,
name:"Dairy Milk",
category:"Chocolate",
sizes:[
{size:"₹10",price:10},
{size:"₹20",price:20},
{size:"₹40",price:40}
]
},
{
id:212,
name:"KitKat",
category:"Chocolate",
sizes:[
{size:"₹10",price:10},
{size:"₹20",price:20}
]
},
{
id:213,
name:"5 Star",
category:"Chocolate",
sizes:[
{size:"₹10",price:10},
{size:"₹20",price:20}
]
},
{
id:214,
name:"Perk",
category:"Chocolate",
sizes:[
{size:"₹10",price:10}
]
},
{
id:215,
name:"Munch",
category:"Chocolate",
sizes:[
{size:"₹10",price:10}
]
},
{
id:216,
name:"Snickers",
category:"Chocolate",
sizes:[
{size:"Small",price:25},
{size:"Large",price:50}
]
},
{
id:217,
name:"Ferrero Rocher",
category:"Chocolate",
sizes:[
{size:"Pack of 4",price:220}
]
},
{
id:218,
name:"Milky Bar",
category:"Chocolate",
sizes:[
{size:"₹10",price:10},
{size:"₹20",price:20}
]
},
{
id:219,
name:"Kinder Joy",
category:"Chocolate",
sizes:[
{size:"20g",price:60}
]
},
{
id:220,
name:"Bournville",
category:"Chocolate",
sizes:[
{size:"80g",price:120}
]
},

// =====================
// NOODLES & PASTA (221-235)
// =====================

{
id:221,
name:"Maggi Noodles",
category:"Instant Food",
sizes:[
{size:"70g",price:15},
{size:"Pack of 12",price:170}
]
},
{
id:222,
name:"Yippee Noodles",
category:"Instant Food",
sizes:[
{size:"70g",price:15},
{size:"Pack of 12",price:170}
]
},
{
id:223,
name:"Top Ramen",
category:"Instant Food",
sizes:[
{size:"70g",price:15}
]
},
{
id:224,
name:"Pasta",
category:"Instant Food",
sizes:[
{size:"500g",price:95},
{size:"1kg",price:180}
]
},
{
id:225,
name:"Macaroni",
category:"Instant Food",
sizes:[
{size:"500g",price:90}
]
},
{
id:226,
name:"Vermicelli",
category:"Instant Food",
sizes:[
{size:"500g",price:55}
]
},
{
id:227,
name:"Oats Noodles",
category:"Instant Food",
sizes:[
{size:"70g",price:20}
]
},
{
id:228,
name:"Cup Noodles",
category:"Instant Food",
sizes:[
{size:"1 Cup",price:50}
]
},
{
id:229,
name:"Instant Soup",
category:"Instant Food",
sizes:[
{size:"Pack",price:35}
]
},
{
id:230,
name:"Pizza Base",
category:"Instant Food",
sizes:[
{size:"Pack of 2",price:80}
]
},
{
id:231,
name:"Bread Crumbs",
category:"Instant Food",
sizes:[
{size:"250g",price:70}
]
},
{
id:232,
name:"Corn Pasta",
category:"Instant Food",
sizes:[
{size:"500g",price:120}
]
},
{
id:233,
name:"Spaghetti",
category:"Instant Food",
sizes:[
{size:"500g",price:110}
]
},
{
id:234,
name:"Lasagna Sheets",
category:"Instant Food",
sizes:[
{size:"250g",price:150}
]
},
{
id:235,
name:"Ready Mix Upma",
category:"Instant Food",
sizes:[
{size:"200g",price:60}
]
},

// =====================
// SAUCES (236-250)
// =====================

{
id:236,
name:"Kissan Tomato Ketchup",
category:"Sauces",
sizes:[
{size:"500g",price:120},
{size:"1kg",price:220}
]
},
{
id:237,
name:"Maggi Hot & Sweet Sauce",
category:"Sauces",
sizes:[
{size:"500g",price:135}
]
},
{
id:238,
name:"Soy Sauce",
category:"Sauces",
sizes:[
{size:"200ml",price:85}
]
},
{
id:239,
name:"Green Chilli Sauce",
category:"Sauces",
sizes:[
{size:"200ml",price:80}
]
},
{
id:240,
name:"Red Chilli Sauce",
category:"Sauces",
sizes:[
{size:"200ml",price:80}
]
},
{
id:241,
name:"Pizza Sauce",
category:"Sauces",
sizes:[
{size:"250g",price:110}
]
},
{
id:242,
name:"Mayonnaise",
category:"Sauces",
sizes:[
{size:"250g",price:120},
{size:"500g",price:220}
]
},
{
id:243,
name:"Sandwich Spread",
category:"Sauces",
sizes:[
{size:"250g",price:130}
]
},
{
id:244,
name:"White Vinegar",
category:"Sauces",
sizes:[
{size:"500ml",price:70}
]
},
{
id:245,
name:"Apple Cider Vinegar",
category:"Sauces",
sizes:[
{size:"500ml",price:260}
]
},
{
id:246,
name:"Schezwan Chutney",
category:"Sauces",
sizes:[
{size:"250g",price:140}
]
},
{
id:247,
name:"Mustard Sauce",
category:"Sauces",
sizes:[
{size:"300g",price:150}
]
},
{
id:248,
name:"Pasta Sauce",
category:"Sauces",
sizes:[
{size:"350g",price:170}
]
},
{
id:249,
name:"Tandoori Mayo",
category:"Sauces",
sizes:[
{size:"250g",price:150}
]
},
{
id:250,
name:"Mint Chutney",
category:"Sauces",
sizes:[
{size:"200g",price:90}
]
},// =====================
// COOKING OIL (251-260)
// =====================

{
id:251,
name:"Fortune Sunflower Oil",
category:"Cooking Oil",
sizes:[
{size:"1L",price:180},
{size:"5L",price:890}
]
},
{
id:252,
name:"Fortune Mustard Oil",
category:"Cooking Oil",
sizes:[
{size:"1L",price:190},
{size:"5L",price:930}
]
},
{
id:253,
name:"Dhara Mustard Oil",
category:"Cooking Oil",
sizes:[
{size:"1L",price:185},
{size:"5L",price:910}
]
},
{
id:254,
name:"Saffola Gold Oil",
category:"Cooking Oil",
sizes:[
{size:"1L",price:220},
{size:"5L",price:1080}
]
},
{
id:255,
name:"Engine Mustard Oil",
category:"Cooking Oil",
sizes:[
{size:"1L",price:195},
{size:"5L",price:950}
]
},
{
id:256,
name:"Patanjali Mustard Oil",
category:"Cooking Oil",
sizes:[
{size:"1L",price:180},
{size:"5L",price:880}
]
},
{
id:257,
name:"Rice Bran Oil",
category:"Cooking Oil",
sizes:[
{size:"1L",price:170},
{size:"5L",price:840}
]
},
{
id:258,
name:"Soyabean Oil",
category:"Cooking Oil",
sizes:[
{size:"1L",price:165},
{size:"5L",price:820}
]
},
{
id:259,
name:"Groundnut Oil",
category:"Cooking Oil",
sizes:[
{size:"1L",price:210},
{size:"5L",price:1030}
]
},
{
id:260,
name:"Coconut Oil",
category:"Cooking Oil",
sizes:[
{size:"500ml",price:180},
{size:"1L",price:340}
]
},

// =====================
// MASALA (261-275)
// =====================

{
id:261,
name:"Garam Masala",
category:"Masala",
sizes:[
{size:"50g",price:35},
{size:"100g",price:65},
{size:"200g",price:125}
]
},
{
id:262,
name:"Kitchen King Masala",
category:"Masala",
sizes:[
{size:"50g",price:35},
{size:"100g",price:70},
{size:"200g",price:135}
]
},
{
id:263,
name:"Chaat Masala",
category:"Masala",
sizes:[
{size:"50g",price:30},
{size:"100g",price:60}
]
},
{
id:264,
name:"Pav Bhaji Masala",
category:"Masala",
sizes:[
{size:"50g",price:35},
{size:"100g",price:65}
]
},
{
id:265,
name:"Biryani Masala",
category:"Masala",
sizes:[
{size:"50g",price:40},
{size:"100g",price:75}
]
},
{
id:266,
name:"Sambhar Masala",
category:"Masala",
sizes:[
{size:"50g",price:35},
{size:"100g",price:70}
]
},
{
id:267,
name:"Chicken Masala",
category:"Masala",
sizes:[
{size:"50g",price:45},
{size:"100g",price:85}
]
},
{
id:268,
name:"Meat Masala",
category:"Masala",
sizes:[
{size:"50g",price:45},
{size:"100g",price:85}
]
},
{
id:269,
name:"Paneer Masala",
category:"Masala",
sizes:[
{size:"50g",price:35},
{size:"100g",price:70}
]
},
{
id:270,
name:"Shahi Paneer Masala",
category:"Masala",
sizes:[
{size:"50g",price:40},
{size:"100g",price:75}
]
},

// =====================
// PICKLES & PAPAD (271-300)
// =====================

{
id:271,
name:"Mango Pickle",
category:"Pickle",
sizes:[
{size:"500g",price:160},
{size:"1kg",price:300}
]
},
{
id:272,
name:"Mixed Pickle",
category:"Pickle",
sizes:[
{size:"500g",price:150},
{size:"1kg",price:290}
]
},
{
id:273,
name:"Lemon Pickle",
category:"Pickle",
sizes:[
{size:"500g",price:145},
{size:"1kg",price:280}
]
},
{
id:274,
name:"Green Chilli Pickle",
category:"Pickle",
sizes:[
{size:"500g",price:150},
{size:"1kg",price:290}
]
},
{
id:275,
name:"Garlic Pickle",
category:"Pickle",
sizes:[
{size:"500g",price:170},
{size:"1kg",price:330}
]
},
{
id:276,
name:"Lijjat Papad",
category:"Papad",
sizes:[
{size:"200g",price:85},
{size:"500g",price:195}
]
},
{
id:277,
name:"Moong Papad",
category:"Papad",
sizes:[
{size:"200g",price:90},
{size:"500g",price:210}
]
},
{
id:278,
name:"Urad Papad",
category:"Papad",
sizes:[
{size:"200g",price:95},
{size:"500g",price:220}
]
},
{
id:279,
name:"Masala Papad",
category:"Papad",
sizes:[
{size:"200g",price:90},
{size:"500g",price:210}
]
},
{
id:280,
name:"Jeera Papad",
category:"Papad",
sizes:[
{size:"200g",price:95},
{size:"500g",price:220}
]
 }// =====================
// HOUSEHOLD ITEMS (301-350)
// =====================

{
id:301,
name:"Aluminium Foil",
category:"Household",
sizes:[{size:"9m",price:90},{size:"18m",price:170}]
},
{
id:302,
name:"Cling Film",
category:"Household",
sizes:[{size:"20m",price:95}]
},
{
id:303,
name:"Butter Paper",
category:"Household",
sizes:[{size:"20 Sheets",price:110}]
},
{
id:304,
name:"Tissue Paper",
category:"Household",
sizes:[{size:"100 Pulls",price:90}]
},
{
id:305,
name:"Kitchen Towel",
category:"Household",
sizes:[{size:"2 Rolls",price:120}]
},
{
id:306,
name:"Match Box",
category:"Household",
sizes:[{size:"Pack",price:15}]
},
{
id:307,
name:"Agarbatti",
category:"Household",
sizes:[{size:"Pack",price:40}]
},
{
id:308,
name:"Camphor",
category:"Household",
sizes:[{size:"100g",price:70}]
},
{
id:309,
name:"Cotton",
category:"Household",
sizes:[{size:"100g",price:45}]
},
{
id:310,
name:"Candle",
category:"Household",
sizes:[{size:"Pack",price:50}]
},
{
id:311,
name:"Mosquito Coil",
category:"Household",
sizes:[{size:"Pack",price:45}]
},
{
id:312,
name:"Mosquito Liquid Refill",
category:"Household",
sizes:[{size:"45ml",price:85}]
},
{
id:313,
name:"Plastic Mug",
category:"Household",
sizes:[{size:"1 Piece",price:90}]
},
{
id:314,
name:"Plastic Bucket",
category:"Household",
sizes:[{size:"16L",price:280}]
},
{
id:315,
name:"Steel Scrubber",
category:"Household"// =====================
// POOJA ITEMS (351-375)
// =====================

{
id:351,
name:"Agarbatti",
category:"Pooja",
sizes:[{size:"Small Pack",price:30},{size:"Large Pack",price:80}]
},
{
id:352,
name:"Dhoop Batti",
category:"Pooja",
sizes:[{size:"Pack",price:40}]
},
{
id:353,
name:"Camphor (Kapoor)",
category:"Pooja",
sizes:[{size:"100g",price:70},{size:"250g",price:160}]
},
{
id:354,
name:"Cotton Batti",
category:"Pooja",
sizes:[{size:"100g",price:35}]
},
{
id:355,
name:"Pooja Oil",
category:"Pooja",
sizes:[{size:"500ml",price:110},{size:"1L",price:210}]
},
{
id:356,
name:"Diya",
category:"Pooja",
sizes:[{size:"Pack of 12",price:80}]
},
{
id:357,
name:"Steel Diya",
category:"Pooja",
sizes:[{size:"1 Piece",price:90}]
},
{
id:358,
name:"Brass Diya",
category:"Pooja",
sizes:[{size:"1 Piece",price:350}]
},
{
id:359,
name:"Match Box",
category:"Pooja",
sizes:[{size:"Pack",price:15}]
},
{
id:360,
name:"Ghee Diya Batti",
category:"Pooja",
sizes:[{size:"Pack",price:45}]
},
{
id:361,
name:"Kumkum",
category:"Pooja",
sizes:[{size:"50g",price:25}]
},
{
id:362,
name:"Roli",
category:"Pooja",
sizes:[{size:"50g",price:20}]
},
{
id:363,
name:"Chandan Powder",
category:"Pooja",
sizes:[{size:"50g",price:45}]
},
{
id:364,
name:"Chandan Stick",
category:"Pooja",
sizes:[{size:"1 Piece",price:60}]
},
{
id:365,
name:"Sindoor",
category:"Pooja",
sizes:[{size:"50g",price:35}]
},
{
id:366,
name:"Pooja Thali",
category:"Pooja",
sizes:[{size:"1 Piece",price:250}]
},
{
id:367,
name:"Bell (Ghanti)",
category:"Pooja",
sizes:[{size:"1 Piece",price:180}]
},
{
id:368,
name:"Incense Stand",
category:"Pooja",
sizes:[{size:"1 Piece",price:120}]
},
{
id:369,
name:"Kalash",
category:"Pooja",
sizes:[{size:"1 Piece",price:250}]
},
{
id:370,
name:"Coconut",
category:"Pooja",
sizes:[{size:"1 Piece",price:45}]
},
{
id:371,
name:"Mouli Kalawa",
category:"Pooja",
sizes:[{size:"1 Roll",price:25}]
},
{
id:372,
name:"Hawan Samagri",
category:"Pooja",
sizes:[{size:"250g",price:90},{size:"500g",price:170}]
},
{
id:373,
name:"Gangajal",
category:"Pooja",
sizes:[{size:"250ml",price:40},{size:"500ml",price:70}]
},
{
id:374,
name:"Panchmewa",
category:"Pooja",
sizes:[{size:"250g",price:160}]
},
{
id:375,
name:"Supari",
category:"Pooja",
sizes:[{size:"100g",price:60}]
},// =====================
// MORE GROCERY ITEMS (376-400)
// =====================

{
id:376,
name:"Makhana",
category:"Grocery",
sizes:[
{size:"100g",price:95},
{size:"250g",price:220},
{size:"500g",price:420}
]
},

{
id:377,
name:"Sattu",
category:"Grocery",
sizes:[
{size:"500g",price:75},
{size:"1kg",price:145}
]
},

{
id:378,
name:"Jau (Barley)",
category:"Grocery",
sizes:[
{size:"500g",price:45},
{size:"1kg",price:85}
]
},

{
id:379,
name:"Ragi Flour",
category:"Grocery",
sizes:[
{size:"500g",price:65},
{size:"1kg",price:125}
]
},

{
id:380,
name:"Corn Flour",
category:"Grocery",
sizes:[
{size:"200g",price:45},
{size:"500g",price:90}
]
},

{
id:381,
name:"Corn Starch",
category:"Grocery",
sizes:[
{size:"100g",price:35},
{size:"500g",price:120}
]
},

{
id:382,
name:"Custard Powder",
category:"Grocery",
sizes:[
{size:"100g",price:45},
{size:"500g",price:180}
]
},

{
id:383,
name:"Cocoa Powder",
category:"Grocery",
sizes:[
{size:"100g",price:110},
{size:"250g",price:260}
]
},

{
id:384,
name:"Baking Powder",
category:"Grocery",
sizes:[
{size:"100g",price:40},
{size:"200g",price:75}
]
},

{
id:385,
name:"Baking Soda",
category:"Grocery",
sizes:[
{size:"100g",price:30},
{size:"200g",price:55}
]
},

{
id:386,
name:"Dry Yeast",
category:"Grocery",
sizes:[
{size:"50g",price:65},
{size:"100g",price:120}
]
},

{
id:387,
name:"Vanilla Essence",
category:"Grocery",
sizes:[
{size:"20ml",price:45},
{size:"100ml",price:150}
]
},

{
id:388,
name:"Rose Essence",
category:"Grocery",
sizes:[
{size:"20ml",price:50},
{size:"100ml",price:170}
]
},

{
id:389,
name:"Food Colour",
category:"Grocery",
sizes:[
{size:"20ml",price:35},
{size:"50ml",price:75}
]
},

{
id:390,
name:"Jelly Crystals",
category:"Grocery",
sizes:[
{size:"90g",price:50}
]
},

{
id:391,
name:"White Vinegar",
category:"Grocery",
sizes// =====================
// MORE GROCERY ITEMS (401-425)
// =====================

{
id:401,
name:"Black Salt",
category:"Grocery",
sizes:[
{size:"500g",price:45},
{size:"1kg",price:85}
]
},

{
id:402,
name:"Rock Salt",
category:"Grocery",
sizes:[
{size:"500g",price:40},
{size:"1kg",price:75}
]
},

{
id:403,
name:"Tamarind",
category:"Grocery",
sizes:[
{size:"250g",price:60},
{size:"500g",price:115}
]
},

{
id:404,
name:"Dry Coconut Powder",
category:"Grocery",
sizes:[
{size:"100g",price:55},
{size:"250g",price:120}
]
},

{
id:405,
name:"Desiccated Coconut",
category:"Grocery",
sizes:[
{size:"100g",price:65},
{size:"250g",price:145}
]
},

{
id:406,
name:"Cashew Broken",
category:"Grocery",
sizes:[
{size:"250g",price:230},
{size:"500g",price:450},
{size:"1kg",price:890}
]
},

{
id:407,
name:"Raisins",
category:"Grocery",
sizes:[
{size:"250g",price:120},
{size:"500g",price:230},
{size:"1kg",price:450}
]
},

{
id:408,
name:"Almonds",
category:"Grocery",
sizes:[
{size:"250g",price:240},
{size:"500g",price:470},
{size:"1kg",price:920}
]
},

{
id:409,
name:"Pistachios",
category:"Grocery",
sizes:[
{size:"250g",price:330},
{size:"500g",price:650}
]
},

{
id:410,
name:"Walnuts",
category:"Grocery",
sizes:[
{size:"250g",price:260},
{size:"500g",price:510}
]
},

{
id:411,
name:"Chia Seeds",
category:"Grocery",
sizes:[
{size:"250g",price:180},
{size:"500g",price:340}
]
},

{
id:412,
name:"Flax Seeds",
category:"Grocery",
sizes:[
{size:"250g",price:80},
{size:"500g",price:150}
]
},

{
id:413,
name:"Pumpkin Seeds",
category:"Grocery",
sizes:[
{size:"250g",price:220},
{size:"500g",price:420}
]
},

{
id:414,
name:"Sunflower Seeds",
category:"Grocery",
sizes:[
{size:"250g",price:160},
{size:"500g",price:310}
]
},

{
id:415,
name:"Sesame Seeds",
category:"Grocery",
sizes:[
{size:"250g",price:75},
{size:"500g",price:145}
]
},

{
id:416,
name:"Ajwain",
category:"Grocery",
sizes:[
{size:"100g",price:40},
{size:"250g",price:90}
]
},

{
id:417,
name:"Saunf",
category:"Grocery",
sizes:[
{size:"100g",price:35},
{size:"250g",price:80},
{size:"500g",price:150}
]
},

{
id:418,
name:"Mishri",
category:"Grocery",
sizes:[
{size:"250g",price:50},
{size:"500g",price:95}
]
},

{
id:419,
name:"Elaichi Dana",
category:"Grocery",
sizes:[
{size:"50g",price:180// =====================
// MORE GROCERY ITEMS (426-450)
// =====================

{
id:426,
name:"Khus Khus (Poppy Seeds)",
category:"Grocery",
sizes:[
{size:"100g",price:180},
{size:"250g",price:430}
]
},

{
id:427,
name:"Kalonji",
category:"Grocery",
sizes:[
{size:"100g",price:45},
{size:"250g",price:110}
]
},

{
id:428,
name:"Methi Dana",
category:"Grocery",
sizes:[
{size:"100g",price:30},
{size:"250g",price:70},
{size:"500g",price:130}
]
},

{
id:429,
name:"Jeera",
category:"Grocery",
sizes:[
{size:"100g",price:55},
{size:"250g",price:130},
{size:"500g",price:250}
]
},

{
id:430,
name:"Dhaniya Seeds",
category:"Grocery",
sizes:[
{size:"100g",price:35},
{size:"250g",price:80},
{size:"500g",price:150}
]
},

{
id:431,
name:"Mustard Seeds",
category:"Grocery",
sizes:[
{size:"100g",price:30},
{size:"250g",price:65},
{size:"500g",price:120}
]
},

{
id:432,
name:"Fennel Seeds",
category:"Grocery",
sizes:[
{size:"100g",price:45},
{size:"250g",price:110},
{size:"500g",price:210}
]
},

{
id:433,
name:"Carom Seeds (Ajwain)",
category:"Grocery",
sizes:[
{size:"100g",price:40},
{size:"250g",price:95}
]
},

{
id:434,
name:"Isabgol",
category:"Grocery",
sizes:[
{size:"100g",price:140},
{size:"200g",price:270}
]
},

{
id:435,
name:"Murmura",
category:"Grocery",
sizes:[
{size:"250g",price:30},
{size:"500g",price:55},
{size:"1kg",price:100}
]
},

{
id:436,
name:"Rice Flakes",
category:"Grocery",
sizes:[
{size:"500g",price:45},
{size:"1kg",price:85}
]
},

{
id:437,
name:"Roasted Makhana",
category:"Grocery",
sizes:[
{size:"100g",price:110},
{size:"250g",price:260}
]
},

{
id:438,
name:"Jowar Flour",
category:"Grocery",
sizes:[
{size:"500g",price:60},
{size:"1kg",price:115}
]
},

{
id:439,
name:"Bajra Flour",
category:"Grocery",
sizes:[
{size:"500g",price:55},
{size:"1kg",price:105}
]
},

{
id:440,
name:"Multigrain Flour",
category:"Grocery",
sizes:[
{size:"1kg",price:95},
{size:"5kg",price:450}
]
},

{
id:441,
name:"Organic Sugar",
category:"Grocery",
sizes:[
{size:"1kg",price:70},
{size:"5kg",price:340}
]
},

{
id:442,
name:"Brown Sugar",
category:"Grocery",
sizes:[
{size:"500g",price:65},
{size:"1kg",price:125}
]
},

{
id:443,
name:"Jaggery Cubes",
category:"Grocery",
sizes:[
{size:"500g",price:70},
{size:"1kg",price:135}
]
},

{
id:444,
name:"Dates",
category:"Grocery",
sizes:[
{size:"250g",price:120},
{size:"500g",price:230},
{size:"1kg",price:450}
]
},

{
id:445,
name:"Dry Figs",
category:"Grocery",
sizes:[
{size:"250g",price:280},
{size:"500g",price:550}
]
},

{
id:446,
name:"Tutti Frutti",
category:"Grocery",
sizes:[
{size:"100g",price:40},
{size:"250g",price:90}
]
},

{
id:447,
name:"Vermicelli",
category:"Grocery",
sizes:[
{size:"500g",price:60},
{size:"1kg",price:115}
]
},

{
id:448,
name:"Rice Sevai",
category:"Grocery",
sizes:[
{size:"500g",price:70},
{size:"1kg",price:135}
]
},

{
id:449,
name:"Papad Khar",
category:"Grocery",
sizes:[
{size:"100g",price:45},
{size:"250g",price:95}
]
},

{
id:450,
name:"Citric Acid",
category:"Grocery",
sizes:[
{size:"100g",price:50},
{size:"250g",price:110}
]
},
