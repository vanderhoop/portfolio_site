$( document ).ready(function() {
  var router = new Router();
  window.location.hash = "home";
  $("#changer").on("click", function(){
    debugger
    $(this).toggleClass("bounceInDown")
  });
  $('#contact-nav').on("click", goToContact);
  $('#work-nav').on("click", goToWork);
  $('#home-nav').on("click", goToHome);
  Backbone.history.start();
});
