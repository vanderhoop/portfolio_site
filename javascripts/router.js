var Router = Backbone.Router.extend({
  routes: {
    'home'        : 'home',
    'work'        : 'work',
    'contact'     : 'contact',
    '*default'    : 'home',
  },

  initialize: function(){
    // cache container
    this.mainContainer = $("#main-container");
    this.contactView = new ContactView();
    this.homeView = new HomeView();
    this.workView = new WorkView();
  },

  home: function(){
    var routerInstance = this; // for use within fadeOut callback
    this.mainContainer.fadeOut(400, function(){
      console.log("home route is firing");
      routerInstance.homeView.render().fadeIn(600);
    });
  },

  work: function(){
    var routerInstance = this;
    this.mainContainer.fadeOut(400, function(){
      console.log("work route is firing");
      routerInstance.workView.render().fadeIn(600);
    });
  },

  contact: function(){
    var routerInstance = this;
    this.mainContainer.fadeOut(400, function(){
      console.log("contact route is firing");
      routerInstance.contactView.render().fadeIn(600);
    });
  }
}); //Router
