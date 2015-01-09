var HomeView = Backbone.View.extend({
  el: "#main-container",

  initialize: function(){
    console.log("HomeView is initialized.");
    this.html = $("#home-template").html();
  },

  render: function(){
    console.log("HomeView's render function is firing");
    return this.$el.html(this.html);
  },

});

function prepareTitleTemplate(titleText){
  var template = _.template( $("#title-template").html() );
  return template({ title: titleText });
}

var WorkView = Backbone.View.extend({
  el: "#main-container",
  template: _.template( $("#work-template").html() ),

  initialize: function(){
    console.log("WorkView is initialized");
    this.projects = [
      {
        media: '<a href="http://insightjournal.us"><div class="work-media" id="insight-journal-sprite"><p>InsightJournal</p><div class="overlay"><p>+</p></div></div></a>',
        title: "InsightJournal",
        role: "Web Developer",
        description: "The private online journaling tool that grows to know you through sentiment analysis and usage patterns."
      },
      {
        media: '<a href="http://metapinger.herokuapp.com/"><div class="work-media" id="metapinger-sprite"><p>MetaPinger</p><div class="overlay"><p>+</p></div></div></a>',
        title: "MetaPinger",
        role: "Web Developer",
        description: "Heroku's servers are famous for idling, so I built a Heroku app that pings Heroku apps (including itself) at 10 minute intervals, ensuring perpetual wakefulness."
      },
      {
        media: '<a href="https://github.com/vanderhoop/battleroom"><div class="work-media" id="battleroom-sprite"><p>Battleroom</p><div class="overlay"><p>+</p></div></div></a>',
        title: "The Battleroom Gem",
        role: "Benevolent Dictator for Life",
        description: "A command line tool designed to give Ruby newbies countless reps doing simple tasks like working with variables, manipulating data structures, and defining and invoking methods."
      }
    ];

    this.titleHTML = prepareTitleTemplate("Work");
    this.workHTML = this.template({ projects: this.projects });
  },

  render: function(){
    console.log("Workview render function is firing");
    return this.$el.html(this.titleHTML + this.workHTML);
  },

});




var ContactView = Backbone.View.extend({
  el: "#main-container",

  initialize: function(){
    this.titleHTML = prepareTitleTemplate("Contact");
    this.contactHTML = $("#contact-template").html();
  },

  render: function(){
    console.log("ContactView Render function fires");
    return this.$el.html(this.titleHTML + this.contactHTML);
  },

});

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
    this.contactView   = new ContactView();
    this.homeView      = new HomeView();
    this.workView      = new WorkView();
  },

  home: function(){
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
    this.mainContainer.css("opacity", 0);

    var timeoutID3 = setTimeout(function(){
      body.scrollTop(0);
      routerInstance.mainContainer.css("display", "none");
      routerInstance.contactView.render().css("display", "block").css("opacity", 1.0);
      clearTimeout(timeoutID3);
    }, 600);
  }
});

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
