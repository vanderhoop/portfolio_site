var HomeView = Backbone.View.extend({
  el: "#main-container",

  initialize: function(){
    console.log("HomeView is initialized.")
    preparePage();
    this.render();
  },

  render: function(){
    console.log("HomeView's render function is firing");
    var html = prepareTitleTemplate("Home");
    this.$el.html(html);
  },


}); // HomeView
