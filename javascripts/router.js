var Router = Backbone.Router.extend({
  routes: {
    ''        : 'home',
    'work'    : 'work',
    'contact' : 'contact'
  },

  home: function(){
    console.log("homeView is working");
  },

  work: function(){

    console.log("workView is firing");
  },

  contact: function(){
    console.log("contact view is firing");
  } // contact
}); //Router
