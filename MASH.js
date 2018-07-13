// Version 1 - Always Return House

// function mash () {
//  console.log("house");
// }
// mash();

// Version 2 -- Choice of House

let mashCHOICES = ["Mansion", "Apartment", "Shack", "House", process.argv[2]]

function getHOME () {

   let rndChoice = Math.random() * mashCHOICES.length
   let round = Math.floor(rndChoice)
   let choice = mashCHOICES[round]
   return choice
}
getHOME();

// Version 3 -- Amount of Children

function getChildrenCount() {
    let rndNumber = Math.random() * 100
    let roundedRnd = Math.floor(rndNumber) || 4
    return roundedRnd
}

getChildrenCount();

// Version 4 -- Get Car. Function could us

let carChoices = ["Ferrari", "Hot Wheels", "Honda", "Wagon", "Piggyback Ride", "HoverBoard", ]

function getCar() {
    let rndDecision = Math.random() * carChoices.length
    let rounded = Math.floor(rndDecision) 
    let decision = carChoices[rounded]
    return decision
}

// Version 5 -- Custom Choices

let jobChoices = ["Drug Dealer", "Babysitter", "CEO", "Slave", "Mafia Boss", "President", "Bum", "MTA Worker", 
"Sanitation Worker", "Teaching Fellow", "Underground Railwork Worker", "Taxi Driver", "Sewer Cleaner", "Professional Fortnite Player",]

// Possible Ways your life will come to an end. Function Uses Array and Math.random().


function getJob() {
let rndJobChoice = Math.random() * jobChoices.length
let rounding = Math.floor(rndJobChoice)
let jobChoice = jobChoices[rounding]
return jobChoice
}

// Possible amount of years you will live before you die. Uses Math.random().
if (roundedYears < 18, ) {
    
} else {
    
}


function lifeSpan() {
    let rndYears = Math.random() * 150
    let roundedYears = Math.floor(rndYears)
   
   if (condition) { 
    return roundedYears
   } else {
       
   }
   
    return roundedYears
}

// Possible Ways your life will come to an end. Uses Array and Math.random().

let causesOfDeath = ["Ebola", " a watermelon falling on your head", " getting sniped by XXxMLGNoScopeGodxXX", "Cardiac Arrest", 
"getting fired at by a shooting squad", "drinking poison", "burning alive", "drowning in a 3 ft pool", 
"getting struck by lightning", "smoking 1000 pounds of weed in an hour", "getting crushed by the L train", 
"getting pushed into a volcano by your best friend"]

function waysToDie() {
    let rndDeath = Math.random() * causesOfDeath.length
    let roundedDeath = Math.floor(rndDeath)
    let deathChoice = causesOfDeath[roundedDeath]
    return deathChoice
}

// Final Game!

let futureLife = ("You will have " + getChildrenCount() + " children and live in a " + getHOME() + " and drive a " + getCar() 
+ " ." + "You'll work as a " + getJob() + " and live for 👌 " + lifeSpan() + " years. You will die to " + waysToDie() + " ." )
console.log(futureLife);
