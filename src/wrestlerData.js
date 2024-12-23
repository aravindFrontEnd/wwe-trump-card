const wrestlerData = [
  // First set
  {
    ringName: "Undertaker",
    realName: "Mark Calloway",
    rank: "1",
    fights: "305",
    chest: "51",
    biceps: "21.5",
    height: "6'10",
    weight: "328",
    image: '/Undertaker.jpg'
  },
  {
    ringName: "The Rock",
    realName: "Dwayne Johnson",
    rank: "2", 
    fights: "316",
    chest: "51.5",
    biceps: "65",
    height: "6'5",
    weight: "275",
    image: '/rock.webp'
  },
  {
    ringName: "Triple H",
    realName: "Paul Levesque",
    rank: "3",
    fights: "305", 
    chest: "50",
    biceps: "21.5",
    height: "6'4",
    weight: "255",
    image: '/HHH.jpg'
  },
  {
    ringName: "John Cena",
    realName: "John Cena",
    rank: "4",
    fights: "210",
    chest: "47",
    biceps: "20",
    height: "5'10",
    weight: "225",
    image: '/john cena.jpg'
  },
  // {
  //   ringName: "Big Show",
  //   realName: "Paul Wight",
  //   rank: "5",
  //   fights: "295",
  //   chest: "53",
  //   biceps: "25.5",
  //   height: "7'2",
  //   weight: "510", 
  //   image: '../public/bigshow.jpg'
  // },
  // {
  //   ringName: "Goldberg",
  //   realName: "Bill Goldberg",
  //   rank: "6",
  //   fights: "192",
  //   chest: "48",
  //   biceps: "19",
  //   height: "6",
  //   weight: "220",
  //   image: '../public/goldberg.jpg'
  // },
  // {
  //   ringName: "Kane",
  //   realName: "Glenn Jacobs",
  //   rank: "7",
  //   fights: "241",
  //   chest: "53",
  //   biceps: "21.5",
  //   height: "7",
  //   weight: "326",
  //   image: '../public/kane.jpg'
  // },
  // {
  //   ringName: "Mark Henry",
  //   realName: "Mark Henry",
  //   rank: "8",
  //   fights: "171",
  //   chest: "56",
  //   biceps: "25",
  //   height: "6'1",
  //   weight: "412",
  //   image: '../public/mark-henry.jpg'
  // },
  // {
  //   ringName: "Randy Orton",
  //   realName: "Randy Orton",
  //   rank: "9",
  //   fights: "220",
  //   chest: "41",
  //   biceps: "18.5",
  //   height: "6'2",
  //   weight: "225",
  //   image: '../public/randy-orton.jpg'
  // },
  // {
  //   ringName: "Shawn Michaels",
  //   realName: "Michael Hickenbottom",
  //   rank: "10",
  //   fights: "318",
  //   chest: "46",
  //   biceps: "18.5",
  //   height: "5'11",
  //   weight: "225",
  //   image: '../public/shawn-micheal.jpg'
  // },
  // // Second set
  // {
  //   ringName: "Batista",
  //   realName: "Dave Bautista",
  //   rank: "11",
  //   fights: "238",
  //   chest: "46",
  //   biceps: "19.5",
  //   height: "5'8",
  //   weight: "240",
  //   image: '../public/Batista_pro.png'
  // },
  // {
  //   ringName: "Chris Jericho",
  //   realName: "Chris Irvine",
  //   rank: "12",
  //   fights: "210",
  //   chest: "47",
  //   biceps: "20",
  //   height: "5'10",
  //   weight: "225",
  //   image: '../public/jerico.jpg'
  // },
  // {
  //   ringName: "Rob Van Dam",
  //   realName: "Robert Szatkowski",
  //   rank: "13",
  //   fights: "192",
  //   chest: "48",
  //   biceps: "19",
  //   height: "6",
  //   weight: "220",
  //   image: '../public/rvd.jpg'
  // },
  // {
  //   ringName: "Brock Lesnar",
  //   realName: "Brock Lesnar",
  //   rank: "14",
  //   fights: "185",
  //   chest: "53",
  //   biceps: "25",
  //   height: "6'3",
  //   weight: "295",
  //   image: '../public/brock.png'
  // },
  // {
  //   ringName: "Kurt Angle",
  //   realName: "Kurt Angle",
  //   rank: "15",
  //   fights: "242",
  //   chest: "52",
  //   biceps: "20.5",
  //   height: "6'2",
  //   weight: "227",
  //   image: '../public/kurt_angle.png'
  // },
  // {
  //   ringName: "Chris Benoit",
  //   realName: "Chris Benoit",
  //   rank: "16",
  //   fights: "197",
  //   chest: "53",
  //   biceps: "21",
  //   height: "5'10",
  //   weight: "220",
  //   image: '../public/beniot.jpg'
  // },
  // {
  //   ringName: "Jeff Hardy",
  //   realName: "Jeffrey Hardy",
  //   rank: "17",
  //   fights: "231",
  //   chest: "41",
  //   biceps: "18",
  //   height: "6'2",
  //   weight: "215",
  //   image: '../public/jeff-hardy.jpg'
  // },
  // {
  //   ringName: "Christian",
  //   realName: "Jay Reso",
  //   rank: "18",
  //   fights: "210",
  //   chest: "46",
  //   biceps: "20.5",
  //   height: "5'10",
  //   weight: "212",
  //   image: '../public/Christian_pro.png'
  // },
  // {
  //   ringName: "Matt Hardy",
  //   realName: "Matt Hardy",
  //   rank: "19",
  //   fights: "220",
  //   chest: "41",
  //   biceps: "18.5",
  //   height: "6'2",
  //   weight: "225",
  //   image: '../public/matt-hardy.jpg'
  // },
  // {
  //   ringName: "Rey Mysterio",
  //   realName: "Oscar Gutierrez",
  //   rank: "20",
  //   fights: "131",
  //   chest: "47",
  //   biceps: "18",
  //   height: "5'6",
  //   weight: "165",
  //   image: '../public/ery-mistrio.jpg'
  // },
  // // Third set
  // {
  //   ringName: "Booker T",
  //   realName: "Robert Booker Huffman",
  //   rank: "21",
  //   fights: "142",
  //   chest: "50",
  //   biceps: "20.5",
  //   height: "6'3",
  //   weight: "256",
  //   image: '../public/bookerTT.jpg'
  // },
  // {
  //   ringName: "Bubba Ray Dudley",
  //   realName: "Mark LoMonaco",
  //   rank: "22",
  //   fights: "261",
  //   chest: "47",
  //   biceps: "19.5",
  //   height: "6'4",
  //   weight: "275",
  //   image: '../public/bubba.jpg'
  // },
  // {
  //   ringName: "D-Von Dudley",
  //   realName: "Devon Hughes",
  //   rank: "23",
  //   fights: "279",
  //   chest: "45",
  //   biceps: "19",
  //   height: "6'2",
  //   weight: "255",
  //   image: '../public/d-von.jpg'
  // },
  // {
  //   ringName: "Scott Steiner",
  //   realName: "Scott Rechsteiner",
  //   rank: "24",
  //   fights: "235",
  //   chest: "56",
  //   biceps: "27",
  //   height: "6'1",
  //   weight: "276",
  //   image: '../public/scott-stiner.jpg'
  // },
  // {
  //   ringName: "Edge",
  //   realName: "Adam Copeland",
  //   rank: "25",
  //   fights: "238",
  //   chest: "46",
  //   biceps: "19.5",
  //   height: "5'8",
  //   weight: "240",
  //   image: '../public/edge.jpg'
  // },
  // {
  //   ringName: "Billy Gunn",
  //   realName: "Monty Kip Sopp",
  //   rank: "26",
  //   fights: "209",
  //   chest: "48",
  //   biceps: "19",
  //   height: "6'5",
  //   weight: "265",
  //   image: '../public/billy.jpg'
  // },
  // {
  //   ringName: "Crash Holly",
  //   realName: "Michael Lockwood",
  //   rank: "27",
  //   fights: "177",
  //   chest: "48",
  //   biceps: "20",
  //   height: "5'4",
  //   weight: "140",
  //   image: '../public/CrashHolly_pro.png'
  // },
  // {
  //   ringName: "Funaki",
  //   realName: "Shoichi Funaki",
  //   rank: "28",
  //   fights: "155",
  //   chest: "42",
  //   biceps: "18",
  //   height: "5'4",
  //   weight: "180",
  //   image: '../public/funaki.jpg'
  // },
  // {
  //   ringName: "Lance Storm",
  //   realName: "Lance Evers",
  //   rank: "29",
  //   fights: "171",
  //   chest: "49",
  //   biceps: "22",
  //   height: "5'11",
  //   weight: "240",
  //   image: '../public/Lance_Storm_bio.jpg'
  // },
  // {
  //   ringName: "William Regal",
  //   realName: "Darren Matthews",
  //   rank: "30",
  //   fights: "195",
  //   chest: "46",
  //   biceps: "17.5",
  //   height: "6'2",
  //   weight: "245",
  //   image: '../public/william-regal.webp'
  // },
  // // Fourth set
  // {
  //   ringName: "Shawn Michaels",
  //   realName: "Michael Hickenbottom",
  //   rank: "31",
  //   fights: "318",
  //   chest: "46",
  //   biceps: "18.5",
  //   height: "5'11",
  //   weight: "225",
  //   image: '../public/shawn-micheal.jpg'
  // },
  // {
  //   ringName: "Kevin Nash",
  //   realName: "Kevin Nash",
  //   rank: "32",
  //   fights: "200",
  //   chest: "48",
  //   biceps: "19",
  //   height: "6'10",
  //   weight: "320",
  //   image: '../public/kevin_nash.webp'
  // },
  // {
  //   ringName: "Lita",
  //   realName: "Amy Dumas",
  //   rank: "33",
  //   fights: "141",
  //   chest: "40",
  //   biceps: "16.5",
  //   height: "5'6",
  //   weight: "135",
  //   image: '../public/lita.jpg'
  // },
  // {
  //   ringName: "Scotty Hotty",
  //   realName: "Scott Garland",
  //   rank: "34",
  //   fights: "245",
  //   chest: "47",
  //   biceps: "18",
  //   height: "5'9",
  //   weight: "210",
  //   image: '../public/scotty.jpg'
  // },
  // {
  //   ringName: "Maven",
  //   realName: "Maven Huffman",
  //   rank: "35",
  //   fights: "169",
  //   chest: "49",
  //   biceps: "18.5",
  //   height: "6'2",
  //   weight: "220",
  //   image: '../public/maven.jpg'
  // },
  // {
  //   ringName: "Steven Richards",
  //   realName: "Michael Manna",
  //   rank: "36",
  //   fights: "77",
  //   chest: "44",
  //   biceps: "17",
  //   height: "6'2",
  //   weight: "220",
  //   image: '../public/Stevie_Richards_bio.jpg'
  // },
  // {
  //   ringName: "Spike Dudley",
  //   realName: "Matthew Hyson",
  //   rank: "37",
  //   fights: "119",
  //   chest: "42",
  //   biceps: "17",
  //   height: "5'8",
  //   weight: "150",
  //   image: '../public/spike_dudley.jpg'
  // },
  // {
  //   ringName: "Raven",
  //   realName: "Scott Levy",
  //   rank: "38",
  //   fights: "74",
  //   chest: "48",
  //   biceps: "19.5",
  //   height: "6'1",
  //   weight: "235",
  //   image: '../public/raven.png'
  // },
  // {
  //   ringName: "Goldust",
  //   realName: "Dustin Runnels",
  //   rank: "39",
  //   fights: "159",
  //   chest: "42",
  //   biceps: "19",
  //   height: "6'6",
  //   weight: "250",
  //   image: '../public/Goldust_2.webp'
  // },
  
 
];

export default wrestlerData;