var heading = document.getElementById("title");
var picture = document.getElementById("picture");
var numberButton = document.getElementById("numberButton");
var weatherButton = document.getElementById("weatherButton");
var numberInput=document.getElementById("halfInput");
var fortuneOutput=document.getElementById("fortune-output");
var dateInput=document.getElementById("dateInput");

numberButton.addEventListener ("click", halfNumber);

function halfNumber(){
  var numberInputText=numberInput.value;
  var numberInputValue=parseFloat(numberInputText);
  console.log("The Weather Tomorrow Will Be" + numberInputValue/2 + "Degrees Celsius.");
  alert(numberInputValue/2);
}
weatherButton.addEventListener ("click", getWeather);

function getWeather(){
  var season= ["Unfortunatly, you will die from flooding, polar bears as a species will outlive you by two days and whatever will be left of your carcass will be obliterated by an Earth shattering meteor shower.", "You will be forced to live inside, attached to a defibulator with air pollution too high for any living being.","The entire world will decide to take a stand against climate change and go vegan. The world will be saved and all will be good. Joking, no one will get their shit together in time and the Earth will be destroyed.", "Turtles will be mythical creatures. You will live on Mars, but it won't be ideal and you will not have touched another human in decades."];
  var selectedSeason= Math.floor(Math.random ()* season.length);
  var seasonInputText = dateInput.value;
  fortuneOutput.innerHTML = season[selectedSeason];
}

function restyle(){
  fortuneOutput.style.textAlign=("center");
  fortuneOutput.style.textSize=("5");
  weatherButton.style.backgroundColor = ("#000000");
  numberButton.style.backgroundColor = ("#000000");

}
    restyle();
