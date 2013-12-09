function removeHash () {
    history.pushState("", document.title, window.location.pathname + window.location.search);
}

function goToWork(){
  console.log("goToWork function works");
  $('.col-md-6').hide(500);
  $('#main-container-col-left').html('<p>Hi</p>');
  window.location.hash = "work";
}

function goToContact(){
  console.log("goToContact function works");
  // conjures email with prepopulated fields
  window.location = "mailto:sayhello@yourfriendtravis.com?Subject=Greetings!&body=Hello%20Travis%2C%0AMy%20name%20is%20________.%20I%27d%20like%20to%20get%20in%20touch!%20I%20can%20best%20be%20reached%20by%20(phone%2Femail)%20at%3A%20______________%20.%20%0A%0ATalk%20soon%2C%20%0A(Your%20name)";
}

function goToHome(){
  console.log("goToHome function works");
  // removes pesky hash symbol when navigating back to Home from Work || Contact
  removeHash();
  location.reload();
}
