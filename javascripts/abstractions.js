var title = $('#title');

function removeHash () {
  history.pushState("", document.title, window.location.pathname + window.location.search);
}

function populateWorkView(){
  console.log("populateWorkView firing");
}

function goToWork(){

  console.log("goToWorkFiring");
  var hash = window.location.hash.substring(1);
  if (hash != "work") {
    // changes title of page and alters length of title underscore
    title.html('Work');
    title.css('width', "2em");
  }
  window.location.hash = "work";
}

function populateContactView(){
  $('#title-div').fadeIn();
  // all contact info
  $('.contact').animate({ opacity: 1 }, 500);
}

function goToContact(){
  var hash = window.location.hash.substring(1);
  if (hash != "contact") {
    title.html('Contact');
    title.css('width', "3em");
  }
  window.location.hash = "contact";
}

function goToHome(){
  // removes pesky #work || #contact hash when navigating back to Home from Work || Contact
  removeHash();
  window.top.location=window.top.location;
}
