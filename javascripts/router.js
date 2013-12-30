var Router = Backbone.Router.extend({
  routes: {
    'home'        : 'home',
    'work'        : 'work',
    'contact'     : 'contact'
  },

  initialize: function(){
  },

  home: function(){
    console.log("home route is firing");
    app.homeView = new HomeView();

    // $('#content-div').html('<img src="images/user.png" id="travis-pic" alt="">');
    // $('#content-div').switchClass('display-false','display-true');
    // $('#content-div').removeClass('display-false').addClass('display-true');

    // $('#hello').html('My name is Travis.</br>I make cool things for the web.');
    // make an element of the desired
  },

  work: function(){
    console.log("work route is firing");
    app.workView = new WorkView();
    // $('.home, .contact').switchClass('display-true', 'display-false');
    // // $('.home, .contact').removeClass('display-true').addClass('display-false');
    // $('.work').switchClass('display-false','display-true');
  },

  contact: function(){
    console.log("contact route is firing");
    app.contactView = new ContactView();    // $('.home, .work').switchClass('display-true', 'display-false');
  }
}); //Router
