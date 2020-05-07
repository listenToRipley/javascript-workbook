
const strNumbs = ["1","4","1","5","9","2","6","5","3","5","8","9","7","9","3","2","3","8","4","6","2","6","4","3","3","8","3","2","7","9","5","0","2","8","8","4","1","9","7","1","6","9","3","9","9","3","7","5","1","0","5","8","2","0","9","7","4","9","4","4","5","9","2","3","0","7","8","1","6","4","0","6","2","8","6","2","0","8","9","9","8","6","2","8","0","3","4","8","2","5","3","4","2","1","1","7","0","6","7","9","8","2","1","4","8","0","8","6","5","1","3","2","8","2","3","0","6","6","4","7","0","9","3","8","4","4","6","0","9","5","5","0","5","8","2","2","3","1","7","2","5","3","5","9","4","0","8","1","2","8","4","8","1","1","1","7","4","5","0","2","8","4","1","0","2","7","0","1","9","3","8","5","2","1","1","0","5","5","5","9","6","4","4","6","2","2","9","4","8","9","5","4","9","3","0","3","8","1","9","6","4","4","2","8","8","1","0","9","7","5","6","6","5","9","3","3","4","4","6","1","2","8","4","7","5","6","4","8","2","3","3","7","8","6","7","8","3","1","6","5","2","7","1","2","0","1","9","0","9","1","4","5","6","4","8","5","6","6","9","2","3","4","6","0","3","4","8","6","1","0","4","5","4","3","2","6","6","4","8","2","1","3","3","9","3","6","0","7","2","6","0","2","4","9","1","4","1","2","7","3","7","2","4","5","8","7","0","0","6","6","0","6","3","1","5","5","8","8","1","7","4","8","8","1","5","2","0","9","2","0","9","6","2","8","2","9","2","5","4","0","9","1","7","1","5","3","6","4","3","6","7","8","9","2","5","9","0","3","6","0","0","1","1","3","3","0","5","3","0","5","4","8","8","2","0","4","6","6","5","2","1","3","8","4","1","4","6","9","5","1","9","4","1","5","1","1","6","0","9","4","3","3","0","5","7","2","7","0","3","6","5","7","5","9","5","9","1","9","5","3","0","9","2","1","8","6","1","1","7","3","8","1","9","3","2","6","1","1","7","9","3","1","0","5","1","1","8","5","4","8","0","7","4","4","6","2","3","7","9","9","6","2","7","4","9","5","6","7","3","5","1","8","8","5","7","5","2","7","2","4","8","9","1","2","2","7","9","3","8","1","8","3","0","1","1","9","4","9","1","2","9","8","3","3","6","7","3","3","6","2","4","4","0","6","5","6","6","4","3","0","8","6","0","2","1","3","9","4","9","4","6","3","9","5","2","2","4","7","3","7","1","9","0","7","0","2","1","7","9","8","6","0","9","4","3","7","0","2","7","7","0","5","3","9","2","1","7","1","7","6","2","9","3","1","7","6","7","5","2","3","8","4","6","7","4","8","1","8","4","6","7","6","6","9","4","0","5","1","3","2","0","0","0","5","6","8","1","2","7","1","4","5","2","6","3","5","6","0","8","2","7","7","8","5","7","7","1","3","4","2","7","5","7","7","8","9","6","0","9","1","7","3","6","3","7","1","7","8","7","2","1","4","6","8","4","4","0","9","0","1","2","2","4","9","5","3","4","3","0","1","4","6","5","4","9","5","8","5","3","7","1","0","5","0","7","9","2","2","7","9","6","8","9","2","5","8","9","2","3","5","4","2","0","1","9","9","5","6","1","1","2","1","2","9","0","2","1","9","6","0","8","6","4","0","3","4","4","1","8","1","5","9","8","1","3","6","2","9","7","7","4","7","7","1","3","0","9","9","6","0","5","1","8","7","0","7","2","1","1","3","4","9","9","9","9","9","9","8","3","7","2","9","7","8","0","4","9","9","5","1","0","5","9","7","3","1","7","3","2","8","1","6","0","9","6","3","1","8","5","9","5","0","2","4","4","5","9","4","5","5","3","4","6","9","0","8","3","0","2","6","4","2","5","2","2","3","0","8","2","5","3","3","4","4","6","8","5","0","3","5","2","6","1","9","3","1","1","8","8","1","7","1","0","1","0","0","0","3","1","3","7","8","3","8","7","5","2","8","8","6","5","8","7","5","3","3","2","0","8","3","8","1","4","2","0","6","1","7","1","7","7","6","6","9","1","4","7","3","0","3","5","9","8","2","5","3","4","9","0","4","2","8","7","5","5","4","6","8","7","3","1","1","5","9","5","6","2","8","6","3","8","8","2","3","5","3","7","8","7","5","9","3","7","5","1","9","5","7","7","8","1","8","5","7","7","8","0","5","3","2","1","7","1","2","2","6","8","0","6","6","1","3","0","0","1","9","2","7","8","7","6","6","1","1","1","9","5","9","0","9","2","1","6","4","2","0","1","9","8","9"];

// Given 1000 digits of PI as strings, return an array of the digits as numbers
const toNumbs = strNumbs.map(num  => {
  return parseInt(num, 10)
})

console.log(toNumbs)

// With the same numbers, find the sum of the even values
const sumEvens = toNumbs.reduce((acc, nextNum) => {
  if (nextNum % 2 === 0) {
    // console.log('num }',nextNum)
    acc += nextNum
  }
  return acc
})

console.log(sumEvens);

// Find the index of the first value, when added to it's index = 512 (#ATX!!)
// With the same numbers, find the sum of the even values
  //add the nowNumbs one a time, until we each 512,

  //create an array of all the values accumulations and return that array  
  let accArray = []
let total = toNumbs.reduce((acc, value) => { 
  // console.log('acc',acc,'value', value)
  accArray.push(acc)
 return acc + value
})
// console.log(accArray)
// console.log(total)

//go through the array  of accumulations and find the location 
  //use the binary search to limit the large array and make it faster 
let findAustin = (array, austin) => {
  let l = 0;
  let r = array.length -1 
  while (l <= r) {
    let m = Math.floor((l+r)/2)
    if(array[m] < austin) {
      l = m + 1
    } else if (array[m] > austin) {
      r = m - 1
    } else {
      return array.indexOf(austin) 
    }
  }
  return 'Austin not found'
}
  
const atxIdx = findAustin(accArray, 512)
console.log(`index: ${atxIdx}, value: ${toNumbs[atxIdx]}`);

const weather = [
  { id: 5743823523151872,
    weather_state_name: "Light Cloud",
    weather_state_abbr: "lc",
    wind_direction_compass: "NNE",
    created: "2018-07-11T20:53:03.251710Z",
    applicable_date: "2018-07-11",
    min_temp: 14.43,
    max_temp: 23.36,
    the_temp: 22.785,
    wind_speed: 5.682503989556987,
    wind_direction: 21.6264939172659,
    air_pressure: 1024.45,
    humidity: 58,
    visibility: 8.683041040324504,
    predictability: 70
  },
  { id: 6188149969518592,
    weather_state_name: "Heavy Cloud",
    weather_state_abbr: "hc",
    wind_direction_compass: "NE",
    created: "2018-07-11T20:53:03.268190Z",
    applicable_date: "2018-07-12",
    min_temp: 14.81,
    max_temp: 25.52,
    the_temp: 24.61,
    wind_speed: 3.2461141472739206,
    wind_direction: 42.72552812997726,
    air_pressure: 1024.605,
    humidity: 54,
    visibility: 10.633835898353615,
    predictability: 71
  },
  { id: 5742049676492800,
    weather_state_name: "Showers",
    weather_state_abbr: "s",
    wind_direction_compass: "E",
    created: "2018-07-11T20:53:03.947390Z",
    applicable_date: "2018-07-13",
    min_temp: 15.5525,
    max_temp: 25.3475,
    the_temp: 24.175,
    wind_speed: 3.6572546846814604,
    wind_direction: 90.32910675612557,
    air_pressure: 1025.385,
    humidity: 57,
    visibility: 10.181166984808717,
    predictability: 73  
  },
  { id: 6696130918219776,
    weather_state_name: "Heavy Cloud",
    weather_state_abbr: "hc",
    wind_direction_compass: "SSW",
    created: "2018-07-11T20:53:04.068570Z",
    applicable_date: "2018-07-14",
    min_temp: 15.915,
    max_temp: 27.0925,
    the_temp: 26.585,
    wind_speed: 3.649847972759087,
    wind_direction: 200.04283406736377,
    air_pressure: 1024.4450000000002,
    humidity: 52,
    visibility: 11.14056410562316,
    predictability: 71
  },
]

//using a higher order function, create an array of the unique 'weather_state_name' values of the weather array. Your function should return the following array ['Light Cloud', 'Heavy Cloud', 'Showers']
const weatherStates = new Set(weather.map((objects) => {
  return objects.weather_state_name
}))

console.log(weatherStates)

//find the id of the object in weather that has a min_temp of 15.915
//got through the weather object,
  //look at each min_temp
    //if the value is 15.915 
      //return the whole object of that object
      //didn't get it to filter on the id, still returning the whole object

const idealTemp = weather.filter(entry => {  return entry.min_temp === 15.915})
console.log(idealTemp)

let idealID = idealTemp.map(obj => {
  return obj.id
})

console.log('id:',idealID)