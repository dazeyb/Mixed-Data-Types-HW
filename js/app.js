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
      },           
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


//  * "omg my mouth is burning"

console.log(crazyObject.taco[1].salsa[5]);

//  * "Pretty pretty prettayyyyy good"

console.log(crazyObject.larry.quotes[0]);

//  * "Swearing at Larry and Jeff"

console.log(crazyObject.larry.characters[2].favourtieHobby);

//  * "Chicken Teriyaki Boyyyyyy"

console.log(crazyObject.larry.nicknames[1]);

//  * The object the contains the name `funkhauser`

console.log(crazyObject.larry.characters[1].name);



// 4. Object-ception


const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
} 

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;



// 5-7. Bond Films

Copy the following `bondFilms` **array** of **objects** above into your js file. Use loops and conditionals and functions in order to complete the below:





const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];


// Q5


let bondTitles = [];

const printTitles = function printTitles (arr) {
    for(let i = 0; i < arr.length; i++ ) {

      bondTitles.push(arr[i].titles);
    }
    return bondTitles;
}

printTitles(bondFilms);



// 6. Create a new array `oddBonds`, of only the Bond films released on odd-numbered years.



const printOdds = function printOdds (arr) {
  
    let oddBonds = [];

    for(let i = 0; i < arr.length; i++ ) {
    
    if(arr[i].year % 2 != 0) {
    oddBonds.push(arr[i].year);
  }
  }
  return oddBonds;
}



// 7.


const printGross = function printGross (arr) {

    let bondBucks = 0;

    for(let i = 0; i < arr.length; i++){
  
      bondBucks += parseInt(bondFilms[i].gross.replace(/,/g,"").replace("$"g,""));
    }
    console.log(bondBucks);
}

printGross(bondFilms);