dataSetVersion = "2023-01-10"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Remove alternative variations",
    key: "alt",
    tooltip: "Check this to remove alternative variations of the same character (ex. Hina (Swimsuit)).",
	checked: false
  },
  {
    name: "Leave only global version characters",
    key: "jp",
    tooltip: "Check this to remove characters that are currently only on japanese server.",
	checked: false
  },
  {
    name: "Disable NPCs",
    key: "npc",
    tooltip: "Check this to remove non-playable (or rather non-usable) characters (ex. Arona).",
	checked: false
  },
  {
    name: "Disable limited characters",
    key: "unique",
    tooltip: "Check this to remove unique, limited time characters (ex. recruitable only from limited time banners or events).",
	checked: false
  },
  {
    name: "Filter by School",
    key: "school",
    tooltip: "Check this to filter characters by school.",
    checked: false,
    sub: [
      { name: "Abydos High School", key: "abydos"},
      { name: "Gehenna Academy", key: "gehenna" },
      { name: "Millennium Science School", key: "millenium" },
      { name: "Trinity General School", key: "trinity" },
      { name: "Hyakkiyako Alliance Academy", key: "hyakkiyako" },
      { name: "Shanhaijing Senior Secondary School", key: "shanhaijing" },
      { name: "Red Winter Federal Academy", key: "redwinter" },
      { name: "Valkyrie Police Academy", key: "valkyrie" },
      { name: "Arius Branch School", key: "arius" },
      { name: "SRT Special Academy", key: "srt" },
      { name: "Other", key: "other" },
    ]
  },
  {
    name: "Filter by Club",
    key: "club",
    tooltip: "Check this to filter characters by their club.",
    checked: false,
    sub: [
      { name: "General Student Council", key: "gsc" },
      { name: "Foreclosure Task Force", key: "ftf" },
      { name: "Pandemonium Society", key: "nazi" },
      { name: "Prefect Team", key: "prefect" },
      { name: "Problem Solver 68", key: "ps68" },
      { name: "Gourmet Research Society", key: "gourmet" },
      { name: "School Lunch Club", key: "lunch" },
      { name: "Medical Emergency Club", key: "gehmed" },
      { name: "Seminar", key: "seminar" },
      { name: "Cleaning&Clearing", key: "cnc" },
      { name: "Engineering Club", key: "engi" },
      { name: "Game Development Department", key: "gamedev" },
      { name: "Veritas", key: "veritas" },
      { name: "Paranormal Affairs Department", key: "occult" },
      { name: "Gym Traininng Department", key: "gym" },
      { name: "Tea Party", key: "tea" },
      { name: "Justice Task Force", key: "jtf" },
      { name: "Make-Up Work Club", key: "bootcamp" },
      { name: "After-School Sweets Club", key: "sweets" },
      { name: "Remedial Knights", key: "trinimed" },
      { name: "Sisterhood", key: "nun" },
      { name: "Trinity Vigilante Crew", key: "vigilante" },
      { name: "Library Committee", key: "lib" },
      { name: "Yin-Yang Club", key: "yinyang" },
      { name: "Festival Operations Department", key: "fest" },
      { name: "Inner Discipline Club", key: "inndisclub" },
      { name: "Ninjutsu Research Club", key: "ninja" },
      { name: "Plum Blossom Garde", key: "plum" },
      { name: "Eastern Alchemy Society", key: "bingchillingscience" },
      { name: "Red Winter Office", key: "stalin" },
      { name: "Spec Ops No.277", key: "son277" },
      { name: "Public Safety Bureau", key: "police" },
      { name: "Arius Squad", key: "arius" },
      { name: "RABBIT Platoon", key: "bnuy" },
      { name: "Other", key: "other" },
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Aru",
    img: "d/db/Aru.png",
    opts: {
		alt: false,
		jp: false,
		school: ["gehenna"],
		club: ["ps68"]
    }
  },
  {
    name: "Eimi",
    img: "e/ed/Eimi.png",
    opts: {
		alt: false,
		jp: false,
		school: ["millenium"],
		club: ["occult"]
    }
  },
  {
    name: "Haruna",
    img: "a/a6/Haruna.png",
    opts: {
		alt: false,
		jp: false,
		school: ["gehenna"],
		club: ["gourmet"]
    }
  },
  {
    name: "Hibiki",
    img: "b/bc/Hibiki.png",
    opts: {
		alt: false,
		jp: false,
		school: ["millenium"],
		club: ["engi"]
    }
  },
  {
    name: "Hifumi",
    img: "3/3b/Hifumi.png",
    opts: {
		alt: false,
		jp: false,
		school: ["trinity"],
		club: ["bootcamp"]
    }
  },
  {
    name: "Hina",
    img: "8/83/Hina.png",
    opts: {
		alt: false,
		jp: false,
		school: ["gehenna"],
		club: ["prefect"]
    }
  },
  {
    name: "Hoshino",
    img: "a/a9/Hoshino.png",
    opts: {
		alt: false,
		jp: false,
		school: ["abydos"],
		club: ["ftf"]
    }
  },
  {
    name: "Iori",
    img: "2/26/Iori.png",
    opts: {
		alt: false,
		jp: false,
		school: ["gehenna"],
		club: ["prefect"]
    }
  },
  {
    name: "Izumi",
    img: "1/10/Izumi.png",
    opts: {
		alt: false,
		jp: false,
		school: ["gehenna"],
		club: ["gourmet"]
    }
  },
  {
    name: "Karin",
    img: "5/50/Karin.png",
    opts: {
		alt: false,
		jp: false,
		school: ["millenium"],
		club: ["cnc"]
    }
  },
  {
    name: "Maki",
    img: "2/21/Maki.png",
    opts: {
		alt: false,
		jp: false,
		school: ["millenium"],
		club: ["veritas"]
    }
  },
  {
    name: "Neru",
    img: "2/24/Neru.png",
    opts: {
		alt: false,
		jp: false,
		school: ["millenium"],
		club: ["cnc"]
    }
  },
  {
    name: "Saya",
    img: "c/ce/Saya.png",
    opts: {
		alt: false,
		jp: false,
		school: ["shanhaijing"],
		club: ["bingchillingscience"]
    }
  },
  {
    name: "Shiroko",
    img: "6/63/Shiroko.png",
    opts: {
		alt: false,
		jp: false,
		school: ["abydos"],
		club: ["ftf"]
    }
  },
  {
    name: "Shun",
    img: "1/17/Shun.png",
    opts: {
		alt: false,
		jp: false,
		school: ["shanhaijing"],
		club: ["plum"]
    }
  },
  {
    name: "Sumire",
    img: "d/d6/Sumire.png",
    opts: {
		alt: false,
		jp: false,
		school: ["millenium"],
		club: ["gym"]
    }
  },
  {
    name: "Tsurugi",
    img: "c/c1/Tsurugi.png",
    opts: {
		alt: false,
		jp: false,
		school: ["trinity"],
		club: ["jtf"]
    }
  },
  {
    name: "Airi",
    img: "9/96/Airi.png",
    opts: {
		alt: false,
		jp: false,
		school: ["trinity"],
		club: ["sweets"]
    }
  },
  {
    name: "Akane",
    img: "a/aa/Akane.png",
    opts: {
		alt: false,
		jp: false,
		school: ["millenium"],
		club: ["cnc"]
    }
  },
  {
    name: "Akari",
    img: "7/7d/Akari.png",
    opts: {
		alt: false,
		jp: false,
		school: ["gehenna"],
		club: ["gourmet"]
    }
  },
  {
    name: "Ayane",
    img: "a/a7/Ayane.png",
    opts: {
		alt: false,
		jp: false,
		school: ["abydos"],
		club: ["ftf"]
    }
  },
  {
    name: "Chise",
    img: "d/d0/Chise.png",
    opts: {
		alt: false,
		jp: false,
		school: ["hyakkiyako"],
		club: ["yinyang"]
    }
  },
  {
    name: "Fuuka",
    img: "1/1f/Fuuka.png",
    opts: {
		alt: false,
		jp: false,
		school: ["gehenna"],
		club: ["lunch"]
    }
  },
  {
    name: "Hanae",
    img: "7/72/Hanae.png",
    opts: {
		alt: false,
		jp: false,
		school: ["trinity"],
		club: ["trinimed"]
    }
  },
  {
    name: "Hare",
    img: "4/47/Hare.png",
    opts: {
		alt: false,
		jp: false,
		school: ["millenium"],
		club: ["veritas"]
    }
  },
  {
    name: "Hasumi",
    img: "8/84/Hasumi.png",
    opts: {
		alt: false,
		jp: false,
		school: ["trinity"],
		club: ["jtf"]
    }
  },
  {
    name: "Junko",
    img: "3/3c/Junko.png",
    opts: {
		alt: false,
		jp: false,
		school: ["gehenna"],
		club: ["gourmet"]
    }
  },
  {
    name: "Kayoko",
    img: "a/a5/Kayoko.png",
    opts: {
		alt: false,
		jp: false,
		school: ["gehenna"],
		club: ["ps68"]
    }
  },
  {
    name: "Mutsuki",
    img: "0/0b/Mutsuki.png",
    opts: {
		alt: false,
		jp: false,
		school: ["gehenna"],
		club: ["ps68"]
    }
  },
  {
    name: "Nonomi",
    img: "a/ad/Nonomi.png",
    opts: {
		alt: false,
		jp: false,
		school: ["abydos"],
		club: ["ftf"]
    }
  },
  {
    name: "Serika",
    img: "c/c8/Serika.png",
    opts: {
		alt: false,
		jp: false,
		school: ["abydos"],
		club: ["ftf"]
    }
  },
  {
    name: "Tsubaki",
    img: "6/6a/Tsubaki.png",
    opts: {
		alt: false,
		jp: false,
		school: ["hyakkiyako"],
		club: ["inndisclub"]
    }
  },
  {
    name: "Utaha",
    img: "3/37/Utaha.png",
    opts: {
		alt: false,
		jp: false,
		school: ["millenium"],
		club: ["engi"]
    }
  },
  {
    name: "Yuuka",
    img: "3/3e/Yuuka.png",
    opts: {
		alt: false,
		jp: false,
		school: ["millenium"],
		club: ["seminar"]
    }
  },
  {
    name: "Asuna",
    img: "9/9f/Asuna.png",
    opts: {
		alt: false,
		jp: false,
		school: ["millenium"],
		club: ["cnc"]
    }
  },
  {
    name: "Chinatsu",
    img: "b/b6/Chinatsu.png",
    opts: {
		alt: false,
		jp: false,
		school: ["gehenna"],
		club: ["prefect"]
    }
  },
  {
    name: "Haruka",
    img: "b/b1/Haruka.png",
    opts: {
		alt: false,
		jp: false,
		school: ["gehenna"],
		club: ["ps68"]
    }
  },
  {
    name: "Juri",
    img: "3/37/Juri.png",
    opts: {
		alt: false,
		jp: false,
		school: ["gehenna"],
		club: ["lunch"]
    }
  },
  {
    name: "Kotama",
    img: "9/94/Kotama.png",
    opts: {
		alt: false,
		jp: false,
		school: ["millenium"],
		club: ["veritas"]
    }
  },
  {
    name: "Kotori",
    img: "a/ab/Kotori.png",
    opts: {
		alt: false,
		jp: false,
		school: ["millenium"],
		club: ["engi"]
    }
  },
  {
    name: "Pina",
    img: "9/96/Pina.png",
    opts: {
		alt: false,
		jp: false,
		school: ["hyakkiyako"],
		club: ["fest"]
    }
  },
  {
    name: "Serina",
    img: "4/41/Serina.png",
    opts: {
		alt: false,
		jp: false,
		school: ["trinity"],
		club: ["trinimed"]
    }
  },
  {
    name: "Shimiko",
    img: "f/f4/Shimiko.png",
    opts: {
		alt: false,
		jp: false,
		school: ["trinity"],
		club: ["lib"]
    }
  },
  {
    name: "Suzumi",
    img: "0/07/Suzumi.png",
    opts: {
		alt: false,
		jp: false,
		school: ["trinity"],
		club: ["vigilante"]
    }
  },
  {
    name: "Yoshimi",
    img: "c/c2/Yoshimi.png",
    opts: {
		alt: false,
		jp: false,
		school: ["trinity"],
		club: ["sweets"]
    }
  },
  {
    name: "Mashiro",
    img: "0/06/Mashiro.png",
    opts: {
		alt: false,
		jp: false,
		school: ["trinity"],
		club: ["jtf"]
    }
  },
  {
    name: "Izuna",
    img: "5/54/Izuna.png",
    opts: {
		alt: false,
		jp: false,
		school: ["hyakkiyako"],
		club: ["ninja"]
    }
  },
  {
    name: "Shizuko",
    img: "7/77/Shizuko.png",
    opts: {
		alt: false,
		jp: false,
		school: ["hyakkiyako"],
		club: ["fest"]
    }
  },
  {
    name: "Alice",
    img: "0/0f/Arisu.png",
    opts: {
		alt: false,
		jp: false,
		school: ["millenium"],
		club: ["gamedev"]
    }
  },
  {
    name: "Midori",
    img: "e/ee/Midori.png",
    opts: {
		alt: false,
		jp: false,
		school: ["millenium"],
		club: ["gamedev"]
    }
  },
  {
    name: "Momoi",
    img: "1/18/Momoi.png",
    opts: {
		alt: false,
		jp: false,
		school: ["millenium"],
		club: ["gamedev"]
    }
  },
  {
    name: "Cherino",
    img: "7/7c/Cherino.png",
    opts: {
		alt: false,
		jp: false,
		school: ["redwinter"],
		club: ["stalin"]
    }
  },
  {
    name: "Nodoka",
    img: "e/e1/Nodoka.png",
    opts: {
		alt: false,
		jp: false,
		school: ["redwinter"],
		club: ["son277"],
		unique: true
    }
  },
  {
    name: "Yuzu",
    img: "7/71/Yuzu.png",
    opts: {
		alt: false,
		jp: false,
		school: ["millenium"],
		club: ["gamedev"]
    }
  },
  {
    name: "Azusa",
    img: "8/86/Azusa.png",
    opts: {
		alt: false,
		jp: false,
		school: ["trinity", "arius"],
		club: ["bootcamp"]
    }
  },
  {
    name: "Hanako",
    img: "9/9c/Hanako.png",
    opts: {
		alt: false,
		jp: false,
		school: ["trinity"],
		club: ["bootcamp"]
    }
  },
  {
    name: "Koharu",
    img: "c/c3/Koharu.png",
    opts: {
		alt: false,
		jp: false,
		school: ["trinity"],
		club: ["jtf", "bootcamp"]
    }
  },
  {
    name: "Azusa (Swimsuit)",
    img: "a/a4/Azusa_%28Swimsuit%29.png",
    opts: {
		alt: true,
		jp: false,
		school: ["trinity", "arius"],
		club: ["bootcamp"],
		unique: true
    }
  },
  {
    name: "Mashiro (Swimsuit)",
    img: "2/20/Mashiro_%28Swimsuit%29.png",
    opts: {
		alt: true,
		jp: false,
		school: ["trinity"],
		club: ["jtf"],
		unique: true
    }
  },
  {
    name: "Tsurugi (Swimsuit)",
    img: "e/e6/Tsurugi_%28Swimsuit%29.png",
    opts: {
		alt: true,
		jp: false,
		school: ["trinity"],
		club: ["jtf"],
		unique: true
    }
  },
  {
    name: "Hifumi (Swimsuit)",
    img: "3/32/Hifumi_%28Swimsuit%29.png",
    opts: {
		alt: true,
		jp: false,
		school: ["trinity"],
		club: ["bootcamp"],
    }
  },
  {
    name: "Hina (Swimsuit)",
    img: "4/44/Hina_%28Swimsuit%29.png",
    opts: {
		alt: true,
		jp: false,
		school: ["gehenna"],
		club: ["prefect"],
		unique: true
    }
  },
  {
    name: "Iori (Swimsuit)",
    img: "5/53/Iori_%28Swimsuit%29.png",
    opts: {
		alt: true,
		jp: false,
		school: ["gehenna"],
		club: ["prefect"],
		unique: true
    }
  },
  {
    name: "Izumi (Swimsuit)",
    img: "b/b0/Izumi_%28Swimsuit%29.png",
    opts: {
		alt: true,
		jp: false,
		school: ["gehenna"],
		club: ["gourmet"],
		unique: true
    }
  },
  {
    name: "Shiroko (Cycling)",
    img: "a/a0/Shiroko_%28Riding%29.png",
    opts: {
		alt: true,
		jp: false,
		school: ["abydos"],
		club: ["ftf"]
    }
  },
  {
    name: "Shun (Kid)",
    img: "5/53/Shun_%28Kid%29.png",
    opts: {
		alt: true,
		jp: false,
		school: ["shanhaijing"],
		club: ["plum"]
    }
  },
  {
    name: "Kirino",
    img: "8/85/Kirino.png",
    opts: {
		alt: false,
		jp: false,
		school: ["valkyrie"],
		club: ["police"]
    }
  },
  {
    name: "Saya (Casual)",
    img: "e/e2/Saya_%28Casual%29.png",
    opts: {
		alt: true,
		jp: false,
		school: ["shanhaijing"],
		club: ["bingchillingscience"]
    }
  },
  {
    name: "Karin (Bunny Girl)",
    img: "b/bd/Karin_%28Bunny_Girl%29.png",
    opts: {
		alt: true,
		jp: false,
		school: ["millenium"],
		club: ["cnc"],
		unique: true
    }
  },
  {
    name: "Neru (Bunny Girl)",
    img: "7/78/Neru_%28Bunny_Girl%29.png",
    opts: {
		alt: true,
		jp: false,
		school: ["millenium"],
		club: ["cnc"],
		unique: true
    }
  },
  {
    name: "Asuna (Bunny Girl)",
    img: "a/a4/Asuna_%28Bunny_Girl%29.png",
    opts: {
		alt: true,
		jp: false,
		school: ["millenium"],
		club: ["cnc"],
    }
  },
  {
    name: "Natsu",
    img: "9/90/Natsu.png",
    opts: {
		alt: false,
		jp: false,
		school: ["trinity"],
		club: ["sweets"]
    }
  },
  {
    name: "Mari",
    img: "4/4f/Mari.png",
    opts: {
		alt: false,
		jp: false,
		school: ["trinity"],
		club: ["nun"]
    }
  },
  {
    name: "Hatsune Miku",
    img: "9/93/Hatsune_Miku.png",
    opts: {
		alt: false,
		jp: false,
		school: ["other"],
		club: ["other"],
		unique: true
    }
  },
  {
    name: "Ako",
    img: "7/72/Ako.png",
    opts: {
		alt: false,
		jp: false,
		school: ["gehenna"],
		club: ["prefect"]
    }
  },
  {
    name: "Cherino (Hot Spring)",
    img: "9/95/Cherino_%28Hot_Spring%29.png",
    opts: {
		alt: true,
		jp: false,
		school: ["redwinter"],
		club: ["stalin"]
    }
  },
  {
    name: "Chinatsu (Hot Spring)",
    img: "b/b1/Chinatsu_%28Hot_Spring%29.png",
    opts: {
		alt: true,
		jp: false,
		school: ["gehenna"],
		club: ["prefect"]
    }
  },
  {
    name: "Tomoe",
    img: "0/0a/Tomoe.png",
    opts: {
		alt: false,
		jp: false,
		school: ["redwinter"],
		club: ["stalin"],
		unique: true
    }
  },
  {
    name: "Nodoka (Hot Spring)",
    img: "3/3f/Nodoka_%28Hot_Spring%29.png",
    opts: {
		alt: true,
		jp: false,
		school: ["redwinter"],
		club: ["son277"]
    }
  },
  {
    name: "Aru (New Year)",
    img: "6/60/Aru_%28New_Year%29.png",
    opts: {
		alt: true,
		jp: false,
		school: ["gehenna"],
		club: ["ps68"],
		unique: true
    }
  },
  {
    name: "Mutsuki (New Year)",
    img: "c/c2/Mutsuki_%28New_Year%29.png",
    opts: {
		alt: true,
		jp: false,
		school: ["gehenna"],
		club: ["ps68"],
		unique: true
    }
  },
  {
    name: "Serika (New Year)",
    img: "6/61/Serika_%28New_Year%29.png",
    opts: {
		alt: true,
		jp: false,
		school: ["abydos"],
		club: ["ftf"]
    }
  },
  {
    name: "Wakamo",
    img: "a/a7/Wakamo.png",
    opts: {
		alt: false,
		jp: false,
		school: ["hyakkiyako"],
		club: ["other"],
		unique: true
    }
  },
  {
    name: "Fubuki",
    img: "c/cd/Fubuki.png",
    opts: {
		alt: false,
		jp: false,
		school: ["valkyrie"],
		club: ["police"],
		unique: true
    }
  },
  {
    name: "Chihiro",
    img: "a/a7/Chihiro.png",
    opts: {
		alt: false,
		jp: false,
		school: ["millenium"],
		club: ["veritas"]
    }
  },
  {
    name: "Sena",
    img: "f/f4/Sena.png",
    opts: {
		alt: false,
		jp: false,
		school: ["gehenna"],
		club: ["gehmed"]
    }
  },
  {
    name: "Mimori",
    img: "8/82/Mimori.png",
    opts: {
		alt: false,
		jp: false,
		school: ["hyakkiyako"],
		club: ["inndisclub"]
    }
  },
  {
    name: "Hinata",
    img: "9/97/Hinata.png",
    opts: {
		alt: false,
		jp: false,
		school: ["trinity"],
		club: ["nun"]
    }
  },
  {
    name: "Ui",
    img: "1/18/Ui.png",
    opts: {
		alt: false,
		jp: false,
		school: ["trinity"],
		club: ["lib"]
    }
  },
  {
    name: "Marina",
    img: "9/9d/Marina.png",
    opts: {
		alt: false,
		jp: false,
		school: ["redwinter"],
		club: ["stalin"]
    }
  },
  {
    name: "Miyako",
    img: "3/3e/Miyako.png",
    opts: {
		alt: false,
		jp: false,
		school: ["srt"],
		club: ["bnuy"]
    }
  },
  {
    name: "Saki",
    img: "d/d0/Saki.png",
    opts: {
		alt: false,
		jp: false,
		school: ["srt"],
		club: ["bnuy"]
    }
  },
  {
    name: "Miyu",
    img: "a/ac/Miyu.png",
    opts: {
		alt: false,
		jp: false,
		school: ["srt"],
		club: ["bnuy"]
    }
  },
  {
    name: "Iroha",
    img: "b/bf/Iroha.png",
    opts: {
		alt: false,
		jp: false,
		school: ["gehenna"],
		club: ["nazi"]
    }
  },
  {
    name: "Kaede",
    img: "f/f0/Kaede.png",
    opts: {
		alt: false,
		jp: false,
		school: ["hyakkiyako"],
		club: ["inndisclub"]
    }
  },
  {
    name: "Michiru",
    img: "e/e6/Michiru.png",
    opts: {
		alt: false,
		jp: false,
		school: ["hyakkiyako"],
		club: ["ninja"],
		unique: true
    }
  },
  {
    name: "Tsukuyo",
    img: "c/ce/Tsukuyo.png",
    opts: {
		alt: false,
		jp: true,
		school: ["hyakkiyako"],
		club: ["ninja"]
    }
  },
  {
    name: "Hiyori",
    img: "7/76/Hiyori.png",
    opts: {
		alt: false,
		jp: false,
		school: ["arius"],
		club: ["arius"]
    }
  },
  {
    name: "Misaki",
    img: "a/ae/Misaki.png",
    opts: {
		alt: false,
		jp: false,
		school: ["arius"],
		club: ["arius"]
    }
  },
  {
    name: "Atsuko",
    img: "c/c7/Atsuko.png",
    opts: {
		alt: false,
		jp: false,
		school: ["arius"],
		club: ["arius"]
    }
  },
  {
    name: "Nonomi (Swimsuit)",
    img: "9/98/Nonomi_%28Swimsuit%29.png",
    opts: {
		alt: true,
		jp: true,
		school: ["abydos"],
		club: ["ftf"]
    }
  },
  {
    name: "Wakamo (Swimsuit)",
    img: "e/e2/Wakamo_%28Swimsuit%29.png",
    opts: {
		alt: true,
		jp: true,
		school: ["hyakkiyako"],
		club: ["other"]
    }
  },
  {
    name: "Ayane (Swimsuit)",
    img: "f/f6/Ayane_%28Swimsuit%29.png",
    opts: {
		alt: true,
		jp: true,
		school: ["abydos"],
		club: ["ftf"],
		unique: true
    }
  },
  {
    name: "Hoshino (Swimsuit)",
    img: "c/c2/Hoshino_%28Swimsuit%29.png",
    opts: {
		alt: true,
		jp: true,
		school: ["abydos"],
		club: ["ftf"],
		unique: true
    }
  },
  {
    name: "Shizuko (Swimsuit)",
    img: "f/f2/Shizuko_%28Swimsuit%29.png",
    opts: {
		alt: true,
		jp: true,
		school: ["hyakkiyako"],
		club: ["fest"],
		unique: true
    }
  },
  {
    name: "Chise (Swimsuit)",
    img: "1/1e/Chise_%28Swimsuit%29.png",
    opts: {
		alt: true,
		jp: true,
		school: ["hyakkiyako"],
		club: ["yinyang"],
		unique: true
    }
  },
  {
    name: "Izuna (Swimsuit)",
    img: "3/37/Izuna_%28Swimsuit%29.png",
    opts: {
		alt: true,
		jp: true,
		school: ["hyakkiyako"],
		club: ["ninja"],
		unique: true
    }
  },
  {
    name: "Saori",
    img: "4/46/Saori.png",
    opts: {
		alt: false,
		jp: true,
		school: ["arius"],
		club: ["arius"]
    }
  },
  {
    name: "Kazusa",
    img: "b/b3/Kazusa.png",
    opts: {
		alt: false,
		jp: true,
		school: ["trinity"],
		club: ["sweets"]
    }
  },
  {
    name: "Moe",
    img: "c/cc/Moe.png",
    opts: {
		alt: false,
		jp: true,
		school: ["srt"],
		club: ["bnuy"]
    }
  },
  {
    name: "Kokona",
    img: "8/83/Kokona.png",
    opts: {
		alt: false,
		jp: true,
		school: ["shanhaijing"],
		club: ["plum"]
    }
  },
  {
    name: "Noa",
    img: "2/23/Noa.png",
    opts: {
		alt: false,
		jp: true,
		school: ["millenium"],
		club: ["seminar"]
    }
  },
  {
    name: "Utaha (Cheerleader)",
    img: "7/7b/Utaha_%28Cheerleader%29.png",
    opts: {
		alt: true,
		jp: true,
		school: ["millenium"],
		club: ["engi"]
    }
  },
  {
    name: "Hibiki (Cheerleader)",
    img: "b/bf/Hibiki_%28Cheerleader%29.png",
    opts: {
		alt: true,
		jp: true,
		school: ["millenium"],
		club: ["engi"],
		unique: true
    }
  },
  {
    name: "Akane (Bunny Girl)",
    img: "9/99/Akane_%28Bunny_Girl%29.png",
    opts: {
		alt: true,
		jp: true,
		school: ["millenium"],
		club: ["cnc"]
    }
  },
  {
    name: "Mari (Sportswear)",
    img: "8/88/Mari_%28Sportswear%29.png",
    opts: {
		alt: true,
		jp: true,
		school: ["trinity"],
		club: ["nun"],
		unique: true
    }
  },
  {
    name: "Yuuka (Sportswear)",
    img: "6/60/Yuuka_%28Sportswear%29.png",
    opts: {
		alt: true,
		jp: true,
		school: ["millenium"],
		club: ["seminar"],
		unique: true
    }
  },
  {
    name: "Hasumi (Sportswear)",
    img: "8/80/Hasumi_%28Sportswear%29.png",
    opts: {
		alt: true,
		jp: true,
		school: ["trinity"],
		club: ["jtf"],
		unique: true
    }
  },
  {
    name: "Himari",
    img: "5/5a/Himari.png",
    opts: {
		alt: false,
		jp: true,
		school: ["millenium"],
		club: ["occult", "veritas"]
    }
  },
  {
    name: "Shigure",
    img: "d/da/Shigure.png",
    opts: {
		alt: false,
		jp: true,
		school: ["redwinter"],
		club: ["son277"]
    }
  },
  {
    name: "Arona",
    img: "thumb/e/e6/Arona.png/48px-Arona.png",
    opts: {
		alt: false,
		jp: false,
		school: ["other"],
		club: ["other"],
		npc: true
    }
  },
  {
    name: "Momoka",
    img: "thumb/7/73/Momoka.png/48px-Momoka.png",
    opts: {
		alt: false,
		jp: false,
		school: ["other"],
		club: ["gsc"],
		npc: true
    }
  },
  {
    name: "Sora",
    img: "thumb/9/99/Sora.png/48px-Sora.png",
    opts: {
		alt: false,
		jp: false,
		school: ["other"],
		club: ["other"],
		npc: true
    }
  },
  {
    name: "Rin",
    img: "thumb/8/87/Rin.png/48px-Rin.png",
    opts: {
		alt: false,
		jp: false,
		school: ["other"],
		club: ["gsc"],
		npc: true
    }
  },
];
