let allCountryScores = [
    {
      name: "Ethiopia", 
      scores:  [ {n: "Sub", s: 9990}, {n: "lucy", s: 4134234}, {n: "DWH", s: 9999},  {n: "Hanif", s: 999999999} ]
    },     
    {
      name: "Scotland", 
      scores: [  {n: "groundkeeper willie", s: 4000}, {n: "Neill", s: 999999}, {n: "braveheart", s: -200}]
    },{
      name: "England", 
      scores: [ {n: "Jonny", s: 202020}, {n: "Chris", s: 202021}]
    },{
      name: "Brazil", 
      scores: [ {n: "Mozart", s: 999}]
    },
    {
      name: "Colombia", 
      scores: [ {n: "Maria", s: 6000}, {n: "Melanie", s: 99999999}, {n: "Ali", s: 5000}]
    }, 
    {
      name: "Turkey", 
      scores: [ {n: "selim", s: 900  }, {n: "mahmut", s: 1000  }, {n: "morat", s: 999  } ]
    },
    {
      name: "Iran", 
      scores: [ {n: "arosha", s: 5550  },  {n: "zahra", s: 3000  }, {n: "nader", s: 2000  }, {n: "Bani", s: 1999  } ]
    },
    {
      name: "Bangladesh", 
      scores: [ {n: "rahman", s: 700200}, {n: "rayhan", s: 18238123}, {n: "ali", s: 5400000} ]
    },
];

const changeCountryOrder = (array, order) => {
  if (order === "Ascending") {
    return array.sort((elementOne, elementTwo) => elementOne.name.localeCompare(elementTwo.name));
  } else if (order === "Descending") {
    return array.sort((elementOne, elementTwo) => elementTwo.name.localeCompare(elementOne.name));
  }
};

// const changeScoreOrder = (array, order) => {
//   if (order === "Descending") {
//     return array.map(element => element.scores.sort((elementOne, elementTwo) => elementTwo.s - elementOne.s));
//   } else if(order === "Ascending") {
//     return array.map(element => element.scores.sort((elementOne, elementTwo) => elementOne.s - elementTwo.s));
//   }
// };

// THAT WAS TOTALLY WRONG ^ the output was an array of arrays with no country name and no score key etc.

const changeScoreOrder = (array, order) => {
  if (order === "Descending") {
    return array.map(element => 
      element.scores.sort((elementOne, elementTwo) => { 
        elementTwo.s - elementOne.s
        return element;
      }
    ));
  } else if(order === "Ascending") {
    return array.map(element => 
      element.scores.sort((elementOne, elementTwo) => {
        elementOne.s - elementTwo.s
        return element;
      }
    ));
  }
};

console.log("\n=====COUNTRIES ASCENDING=====")
console.log(changeCountryOrder(allCountryScores, "Ascending"));
console.log(allCountryScores);

console.log("\n=====COUNTRIES DESCENDING=====")
console.log(changeCountryOrder(allCountryScores, "Descending"));
console.log(allCountryScores);

console.log("\n=====SCORES ASCENDING=====")
console.log(changeScoreOrder(allCountryScores, "Ascending"));
console.log(allCountryScores);

console.log("\n=====SCORES DESCENDING=====")
console.log(changeScoreOrder(allCountryScores, "Descending"));
console.log(allCountryScores);