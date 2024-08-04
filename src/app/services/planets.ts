import {planet} from "../types/planet";

export const planets: planet[] = [
  {
    name: "Mars",
    guid: "mars",
    imageUrl: "assets/images/marss.png",
    description: "Mars, the fourth planet from the Sun, is known as the \"Red Planet\" due to its reddish appearance and is a key focus of study for its potential to harbor past or present life.",
    warnings: ['warning1', 'warning2', 'warning3'],
    detailImageUrl: "assets/images/mars-big.png",
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
    three60image: 'assets/images/mars-360.jpg'

  },
  {
    name: "Jupiter",
    guid: "jupiter",
    imageUrl: "assets/images/jupiter.png",
    description: "Jupiter, the largest planet in our solar system, is a gas giant known for its Great Red Spot, strong magnetic field, and numerous moons.",
    warnings: ['warning1', 'warning2', 'warning3'],
    detailImageUrl: "assets/images/jupiter-large.png",
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
    three60image: 'assets/images/jupiter-360.jpg'
  },
  {
    name: "Saturn",
    guid: "saturn",
    imageUrl: "assets/images/saturn.png",
    description: "Saturn is the sixth planet from the Sun, famous for its spectacular rings, and is a gas giant primarily composed of hydrogen and helium with over 80 moons, including Titan, its largest moon.",
    warnings: ['warning1', 'warning2', 'warning3'],
    detailImageUrl: "assets/images/saturn-large.png",
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
    three60image: 'assets/images/saturn-360.jpg'
  },
  {
    name: "Uranus",
    guid: "uranus",
    imageUrl: "assets/images/uranus.png",
    description: "Uranus is the seventh planet from the Sun, known for its unique sideways rotation, icy composition, faint rings, and 27 moons, including Titania and Oberon.",
    warnings: ['warning1', 'warning2', 'warning3'],
    detailImageUrl: "assets/images/uranus-large.png",
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
    three60image: 'assets/images/uranus-360.jpg'
  },
  {
    name: "Neptune",
    guid: "neptune",
    imageUrl: "assets/images/neptune.png",
    description: "Neptune is the eighth and farthest planet from the Sun, known for its striking blue color, strong winds, dynamic storms, and 14 moons, with Triton being the largest.",
    warnings: ['warning1', 'warning2', 'warning3'],
    detailImageUrl: "assets/images/neptune-large.png",
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
    three60image: 'assets/images/neptune-360.jpg'
  },
  {
    name: "Pluto",
    guid: "pluto",
    imageUrl: "assets/images/pluto.png",
    description: "Pluto is a dwarf planet in the Kuiper Belt, known for its icy surface, eccentric orbit, and five moons, with Charon being the largest.",
    warnings: ['warning1', 'warning2', 'warning3'],
    detailImageUrl: "assets/images/pluto-large.png",
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
    three60image: 'assets/images/pluto-360.jpg',
    hideFromHome: false,
  },
  {
    name: "Lost Earth",
    guid: "earth",
    imageUrl: "assets/images/earth.png",
    description: "Pluto is a dwarf planet in the Kuiper Belt, known for its icy surface, eccentric orbit, and five moons, with Charon being the largest.",
    warnings: ['warning1', 'warning2', 'warning3'],
    detailImageUrl: "assets/images/earth-large.png",
    temperature: "Error",
    current_weather: "Error",
    current_image: "assets/cloud.png",
    big_warning: "Error",
    small_warning: "Error",
    weather: [{
      temperature: 10000,
      image: "assets/storm.png",
      day: "Mon",
    }, {
      temperature: 10000,
      image: "assets/storm.png",
      day: "Tue",
    }, {
      temperature: 15000,
      image: "assets/storm.png",
      day: "Wed",
    }],
    three60image: 'assets/images/earth-360-view.png',
    hideFromHome: true,
  }
]
