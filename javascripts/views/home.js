var HomeView = Backbone.View.extend({
  el: "#main-container",

  initialize: function(){
    console.log("HomeView is initialized.");
    // $("#main-container").addClass("display-false");
    // debugger
    this.render();
  },

  render: function(){
    console.log("HomeView's render function is firing");
    var html = retrieveHomeTemplate();
    this.$el.html(html);
    // $("#main-container").removeClass("display-false");
    $("#main-container").fadeIn(600);
  },


}); // HomeView
