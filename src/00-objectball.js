function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
            "number": 0,
            "shoe": 16,
            "points": 22,
            "rebounds": 12,
            "assists": 12,
            "steals": 3,
            "blocks": 1,
            "slamDunks": 1,
        },
        "Reggie Evans": {
            "number": 30,
            "shoe": 14,
            "points": 12,
            "rebounds": 12,
            "assists": 12,
            "steals": 3,
            "blocks": 1,
            "slamDunks": 1,
        },
        "Brook Lopez": {
            "number": ,
            "shoe":,
            "points":
            "rebounds":
            "assists":
            "steals":
            "blocks":
            "slamDunks":
        },
        "Mason Plumlee": {
            "number":,
            "shoe":,
            "points":
            "rebounds":
            "assists":
            "steals":
            "blocks":
            "slamDunks":
        },
        "Jason Terry": {
            "number":,
            "shoe":,
            "points":
            "rebounds":
            "assists":
            "steals":
            "blocks":
            "slamDunks":
        },
      },
    },
    away: {
      teamName: "",
      colors: [],
      players: {
        "Jeff Adrien": {},
        "Bismak Biyombo": {},
        "DeSagna Diop": {},
        "Ben Gordon": {},
        "Brendan Haywood": {},
      },
    },
  };
}



function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    // debugger;
    let teamObj = game[gameKey];
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      //   debugger;

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.player;
      for (let key in data) {
        // debugger;
      }
    }
  }
}


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
