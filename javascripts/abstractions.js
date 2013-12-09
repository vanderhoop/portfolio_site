var title = $('#title');

function removeHash () {
  history.pushState("", document.title, window.location.pathname + window.location.search);
}

function populateWorkView(){
  $('#title-div').fadeIn();
  // I want to add tiles to my work page
}

function goToWork(){
  title.html('Work');
  title.css('width', "2em");
  // window.location.hash = "work";
  $('.col-md-6').fadeOut(300).queue(populateWorkView);
}

function populateContactView(){
  $('#title-div').fadeIn();
  // all contact info
}

function goToContact(){
  title.html('Contact');
  title.css('width', "3em");
  window.location.hash = "contact";
  $('.col-md-6').fadeOut(300).queue(populateContactView);
  // conjures email with prepopulated fields
  // window.location = "mailto:sayhello@yourfriendtravis.com?Subject=Greetings!&body=Hello%20Travis%2C%0AMy%20name%20is%20________.%20I%27d%20like%20to%20get%20in%20touch!%20I%20can%20best%20be%20reached%20by%20(phone%2Femail)%20at%3A%20______________%20.%20%0A%0ATalk%20soon%2C%20%0A(Your%20name)";
}

function goToHome(){
  // removes pesky hash symbol when navigating back to Home from Work || Contact
  removeHash();
  window.top.location=window.top.location;
  // location.reload(false);
}
