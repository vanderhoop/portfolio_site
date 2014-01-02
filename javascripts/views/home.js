var HomeView = Backbone.View.extend({
  el: "#main-container",

  initialize: function(){
    console.log("HomeView is initialized.")
    $("#main-container").switchClass("display-true", "display-false");

    // preparePage();
    this.render();
  },

  render: function(){
    console.log("HomeView's render function is firing");
    var html = retrieveHomeTemplate();
    this.$el.html(html);
    $("#main-container").switchClass("display-false", "display-true");
  },


}); // HomeView
