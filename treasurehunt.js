//JavaScript File
   
var reloadPage = () => {
    location.reload()
}
// var randomTreasure = Math.floor(Math.random()*25)
// console.log(randomTreasure)
  
var randomTreasure = Math.floor(Math.random()*25)+1
console.log(randomTreasure)

var randomBomb = Math.floor(Math.random()*25)+1
console.log(randomBomb)
while (randomBomb === randomTreasure) {
    var randomTreasure = Math.floor(Math.random() *25)
}
var inc=0
var clickLimit = 10

var changeChar = (location) => {
    inc=inc+1
        document.getElementById("counter").innerHTML = inc
        
    if (randomTreasure === location) {  
        document.getElementById(location).innerHTML = "&#x1f308"
        alert("You've found the Treasure!")
    }
    else if(inc === clickLimit) {
        alert("Out of chances")
    }
    else if (randomBomb === location) {
        document.getElementById(location).innerHTML = "&#x2620"
        alert("Sorry, you exploded!") 
    }
    else {
        document.getElementById(location).innerHTML = "!"
    }
}
