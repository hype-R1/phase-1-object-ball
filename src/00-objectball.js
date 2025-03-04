function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

console.log(gameObject());

function homeTeamName() {
  let object = gameObject();
  return object["home"]["teamName"];
}

console.log(homeTeamName());

function numPointsScored(player) {
  // look up player, return points
  let game = gameObject();
  //   game = ƒ and it is also an object
  debugger;
  for (let gameKey in game) {
    //  gameKey = home / away
    let teamKeys = game[gameKey];
    debugger;
    // teamKeys = the 3 keys of each team: colors, players, name

    }
  }
}

console.log(numPointsScored());

// function goodPractices() {
//   let game = gameObject();
//   for (let gameKey in game) {
//     // are you ABSOLUTELY SURE what 'gameKey' is?
//     // use the debugger to find out!
//     // debugger;
//     let teamObj = game[gameKey];
//     for (let teamKey in teamObj) {
//       // are you ABSOLUTELY SURE what 'teamKey' is?
//       // use debugger to find out!
//       //   debugger;

//       // what is 'data' at each loop through out this block?
//       // when will the following line of code work and when will it break?
//       let data = teamObj.player;
//       for (let key in data) {
//         // debugger;
//       }
//     }
//   }
// }

// -----------------------------------------
// let x = 99;
// let y = 42;
// debugger;
// console.log("x:", x);

// let oo = {
//   foo: 42,
//   bar: 83,
//   baz: 79,
// };

// for (let key in oo) {
//   //iterating over the keys in an obj
//   let value = oo[key];
//   //declaring variable and assigning it to the accessing of the obj[key]
//   console.log(key, value);
// }
// console.log(Object.keys(oo));
// console.log(Object.entries(oo));
