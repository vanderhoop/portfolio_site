$( document ).ready(function() {
  app = {}
  // instantiate router, start tracking history, and go to home route
  app.router = new Router();
  Backbone.history.start();
  app.router.navigate("home", {trigger: true})

  // sets up routing for contact and nav
  $('#contact-nav, #work-nav').on("click", function(){
    app.router.navigate("contact", {trigger:true});
  });
  $('#work-nav').on("click", function(){
    app.router.navigate("work", {trigger:true});
  });
});
