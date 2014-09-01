var body = $("html, body");

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
    this.mainContainer.css("opacity", 0);
    // sets a timeout to wait for the css transition to complete before removing content
    var timeoutID1 = setTimeout(function(){
      body.scrollTop(0);
      routerInstance.mainContainer.css("display", "none");
      routerInstance.homeView.render().css("display", "block").css("opacity", 1.0);
      clearTimeout(timeoutID1);
    }, 600);
  },

  work: function(){
    var routerInstance = this;
    // this.mainContainer.fadeOut(400, function(){
    //   body.scrollTop(0);
    //   routerInstance.workView.render().fadeIn(600);
    // });

    this.mainContainer.css("opacity", 0);
    var timeoutID2 = setTimeout(function(){
      body.scrollTop(0);
      routerInstance.mainContainer.css("display", "none");
      routerInstance.workView.render().css("display", "block").css("opacity", 1.0);
      clearTimeout(timeoutID2);
    }, 600);
  },

  contact: function(){
    var routerInstance = this;
    // this.mainContainer.fadeOut(400, function(){
    //   body.scrollTop(0);
    //   routerInstance.contactView.render().fadeIn(600);
    // });
    this.mainContainer.css("opacity", 0);
    var timeoutID3 = setTimeout(function(){
      body.scrollTop(0);
      routerInstance.mainContainer.css("display", "none");
      routerInstance.contactView.render().css("display", "block").css("opacity", 1.0);
      clearTimeout(timeoutID3);
    }, 600);
  }
});
