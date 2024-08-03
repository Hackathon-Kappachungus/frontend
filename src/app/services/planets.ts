import {planet} from "../types/planet";

export const planets: planet[] = [
  {
    name: "Mars",
    guid: "mars",
    imageUrl: "https://media.discordapp.net/attachments/563283988265959433/1269124473790136392/mars-homepage.png?ex=66aeebc5&is=66ad9a45&hm=38442deb3ee4b9e2548436d5cc0d9a7f94e7ed1808bf701ab62dd2cbda2bdd91&=&format=webp&quality=lossless&width=1224&height=816",
    description: "Mars, the fourth planet from the Sun, is known as the \"Red Planet\" due to its reddish appearance and is a key focus of study for its potential to harbor past or present life.",
    warnings: ['warning1', 'warning2', 'warning3'],
    detailImageUrl: "https://cdn.discordapp.com/attachments/563283988265959433/1269264083895713842/ss-removebg-preview.png?ex=66af6dcb&is=66ae1c4b&hm=0b052c14d5b71e58ca36fab9ccc32e59630a914aa5903389dd00c6967903c975&",
    temperature: "24°C",
    current_weather: "Sunny",
    current_image: "assets/sunny.png",
    big_warning: "SEVERE DUST STORMS",
    small_warning: "Please wear a dust mask",
    weather: [{
      temperature: 30,
      image: "assets/cloud.png",
      day: "Mon",
    }, {
      temperature: 20,
      image: "assets/rain.png",
      day: "Tue",
    }, {
      temperature: 15,
      image: "assets/cloud.png",
      day: "Wed",
    }],
    three60image: 'https://cdn.discordapp.com/attachments/563283988265959433/1269239331105800222/Perseverance_Panorama_8k-2.jpg?ex=66af56bd&is=66ae053d&hm=b73508954f47319bbbb2dabc1f6346bb4b14cdc9a8578bef45d44819a6dbd0be&'

  },
  {
    name: "Jupiter",
    guid: "jupiter",
    imageUrl: "https://cdn.discordapp.com/attachments/563283988265959433/1269126181014474772/jup-removebg-preview.png?ex=66aeed5c&is=66ad9bdc&hm=8d0d34d1ac737ffbbcceba015660b8090fd5eb56b901eae067c1a0add7c3d6af&",
    description: "Jupiter, the largest planet in our solar system, is a gas giant known for its Great Red Spot, strong magnetic field, and numerous moons.",
    warnings: ['warning1', 'warning2', 'warning3'],
    detailImageUrl: "https://cdn.discordapp.com/attachments/563283988265959433/1269161717464698972/image.png?ex=66af0e75&is=66adbcf5&hm=7fec4ad426820b3779950f65bd4763b95e76fe58008372b0b2cf5cd99c64e999&",
    temperature: "-10°C",
    current_weather: "Stormy",
    current_image: "assets/storm.png",
    big_warning: "THUNDERSTORMS",
    small_warning: "Please wear waterproof gear",
    weather: [{
      temperature: -40,
      image: "assets/storm.png",
      day: "Mon",
    }, {
      temperature: -60,
      image: "assets/rain.png",
      day: "Tue",
    }, {
      temperature: -35,
      image: "assets/cloud.png",
      day: "Wed",
    }],
    three60image: 'https://cdn.discordapp.com/attachments/563283988265959433/1269258951053017108/panoramic-shot-famous-monument-valley-usa.jpg?ex=66af6903&is=66ae1783&hm=34984832c98864a7834039a71aa655f0d27333966d8bcff57c501c2fe0b82a18&'
  },
  {
    name: "Saturn",
    guid: "saturn",
    imageUrl: "https://cdn.discordapp.com/attachments/563283988265959433/1269126180758491146/sat-removebg-preview.png?ex=66aeed5c&is=66ad9bdc&hm=45c81bf3634ee844aac7019cb13b38a677385c126af874ec7da6844501b560a4&",
    description: "Saturn is the sixth planet from the Sun, famous for its spectacular rings, and is a gas giant primarily composed of hydrogen and helium with over 80 moons, including Titan, its largest moon.",
    warnings: ['warning1', 'warning2', 'warning3'],
    detailImageUrl: "https://cdn.discordapp.com/attachments/563283988265959433/1269203586827423835/neee-removebg-preview_1.png?ex=66af3573&is=66ade3f3&hm=56417ffbb2dd9b9b4cdc7be2736aebf6c3272da8653205db303fa6e3d10b5503&",
    temperature: "-100°C",
    current_weather: "Cloudy",
    current_image: "assets/cloud.png",
    big_warning: "Freezing",
    small_warning: "Layer Up",
    weather: [{
      temperature: -40,
      image: "assets/cloud.png",
      day: "Mon",
    }, {
      temperature: -20,
      image: "assets/cloud.png",
      day: "Tue",
    }, {
      temperature: -15,
      image: "assets/rain.png",
      day: "Wed",
    }],
    three60image: 'https://cdn.discordapp.com/attachments/563283988265959433/1269266096356331643/beautiful-panoramic-high-angle-shot-namib-desert-mountains-kanaan-namibia.jpg?ex=66af6fab&is=66ae1e2b&hm=f754e3cd40bd7c80d17570d43021e230faf6b78282464f580709fec1a7c6e278&'
  },
  {
    name: "Uranus",
    guid: "uranus",
    imageUrl: "https://cdn.discordapp.com/attachments/563283988265959433/1269254399688048673/d-removebg-preview.png?ex=66af64c6&is=66ae1346&hm=8e3d397689db808919647a5a04e8b9c69aedef5438f1a2832dc637b5d8bc0dc4&",
    description: "Uranus is the seventh planet from the Sun, known for its unique sideways rotation, icy composition, faint rings, and 27 moons, including Titania and Oberon.",
    warnings: ['warning1', 'warning2', 'warning3'],
    detailImageUrl: "https://cdn.discordapp.com/attachments/563283988265959433/1269202709735800843/iqi.png?ex=66af34a2&is=66ade322&hm=378a117d18b5008c8eb4f43845f5f3e1ad741e3108d0bb17105dd4c5ed54ff9f&",
    temperature: "-10°C",
    current_weather: "Stormy",
    current_image: "assets/storm.png",
    big_warning: "SEVERE DUST STORMS",
    small_warning: "Please wear a dust mask",
    weather: [{
      temperature: 30,
      image: "assets/cloud.png",
      day: "Mon",
    }, {
      temperature: 20,
      image: "assets/cloud.png",
      day: "Tue",
    }, {
      temperature: -15,
      image: "assets/cloud.png",
      day: "Wed",
    }],
    three60image: 'https://cdn.discordapp.com/attachments/563283988265959433/1269268726746972181/desert-1170055_1280.jpg?ex=66af721e&is=66ae209e&hm=a7957d9b5319b305deaed170caf59bb2cd156e747034cef88692c11b2e302e4b&'
  },
  {
    name: "Neptune",
    guid: "neptune",
    imageUrl: "https://cdn.discordapp.com/attachments/563283988265959433/1269126181555277824/nep-removebg-preview.png?ex=66aeed5c&is=66ad9bdc&hm=8449bd903aba44fcf7bd1f7eb0b660cb5720e6a66af0dda75d66365bd2cc834b&",
    description: "Neptune is the eighth and farthest planet from the Sun, known for its striking blue color, strong winds, dynamic storms, and 14 moons, with Triton being the largest.",
    warnings: ['warning1', 'warning2', 'warning3'],
    detailImageUrl: "https://cdn.discordapp.com/attachments/563283988265959433/1269200539330023497/nept.png?ex=66af329d&is=66ade11d&hm=3f94f2cbba082420220ae2c0a96e299a3955db6ce0733b8129fd18a3772d3bf1&",
    temperature: "20°C",
    current_weather: "Sunny",
    current_image: "assets/sunny.png",
    big_warning: "THUNDERSTORMS",
    small_warning: "Please wear waterproof gear",
    weather: [{
      temperature: -40,
      image: "assets/cloud.png",
      day: "Mon",
    }, {
      temperature: -20,
      image: "assets/storm.png",
      day: "Tue",
    }, {
      temperature: -15,
      image: "assets/cloud.png",
      day: "Wed",
    }],
    three60image: 'https://cdn.discordapp.com/attachments/563283988265959433/1269267627289612328/panoramic-view-sea.jpg?ex=66af7118&is=66ae1f98&hm=76b19c0351e5534bc86c31ab63558c7cecf57634da56be88f05be8d9da276763&'
  },
  {
    name: "Pluto",
    guid: "pluto",
    imageUrl: "https://cdn.discordapp.com/attachments/563283988265959433/1269126181811126272/plut-removebg-preview.png?ex=66aeed5c&is=66ad9bdc&hm=f9662c06af0c8ea7264cd788e9a55c1399f38ef02c4d815bdd42f4a16f0292e0&",
    description: "Pluto is a dwarf planet in the Kuiper Belt, known for its icy surface, eccentric orbit, and five moons, with Charon being the largest.",
    warnings: ['warning1', 'warning2', 'warning3'],
    detailImageUrl: "https://cdn.discordapp.com/attachments/563283988265959433/1269199431564263495/plutooo-removebg-preview.png?ex=66af3195&is=66ade015&hm=239ae580cd3b3e11da950d9c96193afa2438e800fcca0d64a0b440202dba855a&",
    temperature: "-70°C",
    current_weather: "cloudy",
    current_image: "assets/cloud.png",
    big_warning: "Freezing",
    small_warning: "Layer Up",
    weather: [{
      temperature: -40,
      image: "assets/storm.png",
      day: "Mon",
    }, {
      temperature: -20,
      image: "assets/rain.png",
      day: "Tue",
    }, {
      temperature: -15,
      image: "assets/cloud.png",
      day: "Wed",
    }],
    three60image: 'https://cdn.discordapp.com/attachments/563283988265959433/1269270374474846268/winter-2383930_1280.jpg?ex=66af73a7&is=66ae2227&hm=5d0d877f80e888dffe1a9c529040f086a91f7dbf661ffec76a1ff3305d7c544d&'
  }
]
