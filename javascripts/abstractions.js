var title = $('#title');

function removeHash () {
  history.pushState("", document.title, window.location.pathname + window.location.search);
}

function populateWorkView(){
  console.log("populateWorkView firing");
  $('#title-div').fadeIn();
  $('.work').animate({ opacity: 1 }, 500);
}

function goToWork(){

  console.log("goToWorkFiring");
  $('.work').removeAttr("display").removeAttr("style");
  debugger
  var hash = window.location.hash.substring(1);
  if (hash != "work") {
    // changes title of page and alters length of title underscore
    title.html('Work');
    title.css('width', "2em");
    // sets opacity of all divs of the current view class to 0
    // populateWorkView is fired after animation complete
    $('.' + hash).animate({opacity:0}, 500).queue(populateWorkView);
    $('.contact, .home').css("display", "none");
  }
  window.location.hash = "work";
}

function populateContactView(){
  $('#title-div').fadeIn();
  // all contact info
  $('.contact').animate({ opacity: 1 }, 500);
}

function goToContact(){
  $('.contact').removeAttr("display").removeAttr("style");
  var hash = window.location.hash.substring(1);
  if (hash != "contact") {
    title.html('Contact');
    title.css('width', "3em");
    $('.' + hash).animate({ opacity:0 }, 300).queue(populateContactView);
    $('.work, .home').css("display", "none");
  }
  window.location.hash = "contact";
}

function goToHome(){
  // removes pesky #work || #contact hash when navigating back to Home from Work || Contact
  removeHash();
  window.top.location=window.top.location;
}
