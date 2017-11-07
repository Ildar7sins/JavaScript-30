const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
    ];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
                  'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem',
                  'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 
                  'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 
                  'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 
                  'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 
                  'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 
                  'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 
                  'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 
                  'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 
                  'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 
                  'Blake, William'];
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 
              'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

// Array.prototype.filter()
//1. Two variants of using below, return true for element in array which fits to condition 
//and gives you array with true elements
/*const fifteen = inventors.filter(function(inventor) {
  if(inventor.year >= 1500 && inventor.year < 1600){
    return true; // Keep it!!!
  }
});*/

const fifteen = inventors.filter(inventor =>(inventor.year >= 1500 && inventor.year < 1600));

console.table(fifteen);

//Array.prototype.map()
//2. Returns the same amount of prototypes but you can choose wich element of prototype you want

const names = inventors.map(inventor=> `${inventor.first} ${inventor.last}`);

console.log(names);

//Array.prototype.sort()
//3. Sort the array. For example by birthdate, oldest to youngest

/*const ordered = inventors.sort(function(firstPerson, secondPerson) {
  if (firstPerson.year > secondPerson.year) {
    return 1;
  } else {
    return -1;
  }
});*/

const ordered = inventors.sort((firstPerson, secondPerson) => firstPerson.year > secondPerson.year ? 1 : -1);

console.table(ordered);

//Array.prototype.reduce
//4. It's like for, allow do something with prototype elements. For example gets amount of inventor's years of liveF

const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
},0);

console.log(totalYears);

//5. Just sort the inventors by Yaers lived
const oldest = inventors.sort(function(firstPerson, secondPerson) {
  const lastGuy = firstPerson.passed - firstPerson.year;
  const nextGuy = secondPerson.passed - secondPerson.year;
  return lastGuy > nextGuy ? -1 : 1;
});

console.table(oldest);

//sort Exercise
//6. Sort the people alphabetically by last name
const alpha = people.sort(function(lastOne, nextOne) {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});

console.log(alpha);

//7. Reduse Exercise
//Sum of the instances of each of these
const transport = data.reduce(function (obj, item) {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(transport);