$( document ).ready(function() {
    $("img").one("load", function(){
      console.log("home photo loaded");
      var app = {};
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

      app.router.navigate("home", {trigger: true});
    }).each(function() {
      if(this.complete) $(this).load();
    });
});
