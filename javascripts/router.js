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
    // for use within fadeOut callback
    var routerInstance = this;
    this.mainContainer.fadeOut(400, function(){
      routerInstance.homeView.render().fadeIn(600);
    });
  },

  work: function(){
    var routerInstance = this;
    this.mainContainer.fadeOut(400, function(){
      routerInstance.workView.render().fadeIn(600);
    });
  },

  contact: function(){
    var routerInstance = this;
    this.mainContainer.fadeOut(400, function(){
      routerInstance.contactView.render().fadeIn(600);
    });
  }
});
