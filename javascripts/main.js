$( document ).ready(function() {
  var router = new Router();
  $('#work-nav').on("click", goToWork);
  $('#contact-nav').on("click", goToContact);
  $('#home-nav').on("click", goToHome);
  Backbone.history.start();
});
