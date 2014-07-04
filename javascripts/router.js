var Router = Backbone.Router.extend({
  routes: {
    'home'        : 'home',
    'work'        : 'work',
    'contact'     : 'contact',
    '*default'    : 'home',
  },

  initialize: function(){
  },

  home: function(){
    $("#main-container").fadeOut(400, function(){
      console.log("home route is firing");
      app.homeView = new HomeView();
    });
  },

  work: function(){
    $("#main-container").fadeOut(400, function(){
      console.log("work route is firing");
      app.workView = new WorkView();
    });
  },

  contact: function(){
    $("#main-container").fadeOut(400, function(){
      console.log("contact route is firing");
      app.contactView = new ContactView();    // $('.home, .work').switchClass('display-true', 'display-false');
    });
  }
}); //Router
