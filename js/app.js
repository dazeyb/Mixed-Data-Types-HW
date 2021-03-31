// 1. Data Types

// A light switch that can be either on or off.

Datatypes: Booleans, strings

Datastructure: I would do an if statement that registers true or false. If light switch position up (string) = true (boolean), then turn light on = true (boolean).


// A user's email address.
  
Datatype: String
Datastructure: If it's just a logged amount of characters, I think one string would work.



// A spaceship with a hull, laser blasters, tractor beam, and warp drive.

Datatype: Object
Datastructure: An object containing all the pieces of the ship inside as objects.



// A list of student names from our class.

Datatype: String
Datastructure: An array containing a list of student names as strings.



// A list of student names from our class, each with a location.

Datatypes: Strings and objects
Datastructure: It could be an array of the student names as objects, each containing their locations as strings.



// A list of student names from our class, each with a location and each with a list of favorite tv shows.

Datatypes: Objects and strings
Datastructure: It could be an array with the student names as objects, containing their locations as strings, and another array nested in each student object that had their favorite tv shoes as strings. (This could also be an object within the object instead of another array).



// 2. Take it Easy
// Q1

let rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];


// Q2

rainbow[4];


// Q3

const ben = {
    favoriteFood: "Souls",
    hobby: "rock climbing",
    currentCity: "Tijuana",
    favoriteData: "booleans"
}


// Q4

ben.hobby;



// 3. Crazy Object!


const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },                //larry.characters[2].favourtieHobby);
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}


  * "omg my mouth is burning"

console.log(crazyObject.taco[1].salsa[5]);

  * "Pretty pretty prettayyyyy good"

console.log(crazyObject.larry.quotes[0]);

  * "Swearing at Larry and Jeff"

console.log(crazyObject.larry.characters[2].favourtieHobby);

  * "Chicken Teriyaki Boyyyyyy"



  * The object the contains the name `funkhauser`

---

&#x1F534; **Commit:** "crazyObject"

---



