$( document ).ready(function() {
  app = {}
  // instantiate router, start tracking history, and go to home route
  app.router = new Router();
  Backbone.history.start();

  // sets up routes
  $('#home-nav').on("click", function(){
    app.router.navigate("home", {trigger:true});
  });
  $('#contact-nav').on("click", function(){
    app.router.navigate("contact", {trigger:true});
  });
  $('#work-nav').on("click", function(){
    app.router.navigate("work", {trigger:true});
  });

  app.router.navigate("home", {trigger: true})
});
