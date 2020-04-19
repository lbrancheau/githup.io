//JavaScript File
var jokeAge = "Why did the chicken cross the road?"

var chicken = (setup) => {
    alert(setup)
    alert("to get to the other side")
}
chicken(jokeAge)


var greeter = () => {
    var yourName = prompt("What is your name?")
     alert("Hello "+ yourName)
}
greeter()

var madLibs = () => {
    var yourAdjective = prompt("Please enter an adjective")
    alert("Piranhas are more "+ yourAdjective)
    var yourNoun = prompt("Please enter a noun")
    alert("during the day,so make sure you cross the "+ yourNoun)
    var yourLiquid = prompt("Please enter a liquid")
    alert(" at night. Piranhas are attracted to fresh "+ yourLiquid)
    var yourBodyPart = prompt("Please enter a body part")
    alert("and will most likely take a bite of your "+ yourBodyPart)
    var yourVerb = prompt("Please enter a verb")
    alert("if you "+yourVerb)
    var yourNountwo = prompt("Please enter a noun")
    alert(". Whatever you do if you have an open "+ yourNountwo)
    var yourPlace = prompt("Please enter a place")
    alert("try and find another way to get back to "+ yourPlace+". Good luck!")
}
madLibs()

var madLibs = () => {
    var yourAdjective = prompt("Please enter an adjective")
    var yourNoun = prompt("Please enter a noun")
    var yourLiquid = prompt("Please enter a liquid")
    var yourBodyPart = prompt("Please enter a body part")
    var yourVerb = prompt("Please enter a verb")
    var yourNountwo = prompt("Please enter a noun")
    var yourPlace = prompt("Please enter a place")
    alert ("Piranhas are more "+yourAdjective+" during the day, so make sure you cross the "+yourNoun+" at night. Piranhas are attracted to fresh "+yourLiquid+" and will most likely take a bite out of your "+yourBodyPart+" if you "+yourVerb+". Whatever you do, if you have an open "+yourNountwo+" try and find another way to get back to "+yourPlace+". Good luck!")
}
madLibs()

var worldDom = () => {
    var yourName = prompt("What is your name?")
    var code = prompt("Do you know how to write code?")
    if (code.toLowerCase()==="yes") {
        alert ("You will rule the world, "+yourName)
    }
    else if (code.toLowerCase()==="no") {
       alert ("Well, good luck with that!")     
    }
    else {
        alert("try again!")
    }
}
worldDom()

var magic = () => {
    var question = prompt("Ask a question.")
    var randomNum = Math.floor(Math.random()*6)
    if (randomNum === 0) {
        alert("Better not tell you now")
    }
    else if (randomNum === 1) {
        alert("It is decidedly so")
    }
   else if (randomNum === 2) {
        alert("Don't count on it")
    }
   else if (randomNum === 3) {
        alert("Signs point to yes")
    }
    else if (randomNum === 4) {
        alert("Outlook not so good")
    }
    else {
        alert ("Sorry, something went wrong")
    }
}
magic()