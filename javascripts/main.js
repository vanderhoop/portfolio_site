$( document ).ready(function() {
  console.log("jquery and main.js are linked");
  $('#work-nav').on("click", goToWork);
  $('#contact-nav').on("click", goToContact);
});
