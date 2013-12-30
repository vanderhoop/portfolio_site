var ContactView = Backbone.View.extend({
  el: "#main-container",
  initialize: function(){
    $(el).children().fadeOut();
    console.log("ContactView is instantiated");
  }


}); // ContactView
