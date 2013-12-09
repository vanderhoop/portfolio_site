var Router = Backbone.Router.extend({
  routes: {
    '/': "homeView",
    '#work': 'workView'
  },

  initialize: function(){
    console.log("Router is working");

  },

  homeView: function(){

  },

  workView: function(){
    console.log("workView is firing");
  }
}); //Router
