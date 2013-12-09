function removeHash () {
    history.pushState("", document.title, window.location.pathname + window.location.search);
}

function goToWork(){
  console.log("goToWork function works");
  window.location.hash = "work";
}

function goToContact(){
  console.log("goToContact function works");
  window.location.hash = "contact";
}

function goToHome(){
  console.log("goToHome function works");
  // removes pesky hash symbol when navigating back to Home from Work || Contact
  removeHash();
}
