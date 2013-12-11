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
  $('.work, .home').addClass('display-false');
  $('#content-div').html('<p class="contact">Interested in chatting? Feel free to connect with me over any of the social networks I have listed in the footer or go ahead and send me a quick <a href="mailto:sayhello@yourfriendtravis.com?Subject=Greetings!&body=Hello%20Travis%2C%0AMy%20name%20is%20________.%20I%27d%20like%20to%20get%20in%20touch!%20I%20can%20best%20be%20reached%20by%20(phone%2Femail)%20at%3A%20______________%20.%20%0A%0ATalk%20soon%2C%20%0A(Your%20name)">e-mail</a>.</p>');
  $('#title-div').fadeIn();
  // all contact info
  // $('.contact').animate({ opacity: 1 }, 500);
}

function goToContact(){
  var hash = window.location.hash.substring(1);
  if (hash != "contact") {
    title.html('Contact');
    title.css('width', "3em");
  }
  window.location.hash = "contact";
  populateContactView();
}

function goToHome(){
  // removes pesky #work || #contact hash when navigating back to Home from Work || Contact
  removeHash();
  window.top.location=window.top.location;
}
