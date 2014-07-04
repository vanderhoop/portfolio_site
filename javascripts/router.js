var Router = Backbone.Router.extend({
  routes: {
    'home'        : 'home',
    'work'        : 'work',
    'contact'     : 'contact',
    '*default'    : 'home',
  },

  initialize: function(){
    // cacheing
    this.mainContainer = $("#main-container");
  },

  home: function(){
    this.mainContainer.fadeOut(400, function(){
      console.log("home route is firing");
      app.homeView = new HomeView();
    });
  },

  work: function(){
    this.mainContainer.fadeOut(400, function(){
      console.log("work route is firing");
      app.workView = new WorkView();
    });
  },

  contact: function(){
    this.mainContainer.fadeOut(400, function(){
      console.log("contact route is firing");
      app.contactView = new ContactView();
    });
  }
}); //Router
