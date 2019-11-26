const url =
  "https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4443";
var counter = 0;
var events={}
//var hideEvent = document.getElementById('hideevent').style.display = 'none'
//var hideResult = document.getElementById('hideshow').style.display = 'none'
var nextbutton = document.getElementById("nxt-btn")

nextbutton.addEventListener("click", next)//functions
var prevbutton = document.getElementById('pvs-btn')
prevbutton.addEventListener("click", previous)//functions

fetch(url)
  .then(function(result) {
    return result.json();
  })
  .then(function(json) {
    console.log(json.events);
    events = json
    displayResults(events);
  });

function displayResults(json) {
  //for (i=0; i<json.events.length;i++){
  let eventname = document.getElementById('eventname')
  let eventposter = document.getElementById('eventthumb')
  let eventresult = document.getElementById('eventresult')
  console.log('counter = ', counter)
  if (json.events[counter].strEvents !== null) {
      eventname.innerText = json.events[counter].strEvent
  
  }
  if (json.events[counter].strResult !== null) {
      eventresult.innerText = json.events[counter].strResult
  } 

  if (json.events[counter].strThumb !== null) {
    console.log(json.events[counter].strThumb);
    eventposter.setAttribute('src', json.events[counter].strThumb)
  };
  // if (json.events[counter].strThumb === null) {
//    eventposter.style.display = 'none'
}


function next() {
    counter++
    //console.log('counter = ', counter)
    displayResults(events)
}

function previous() {
counter--
    displayResults(events)
}