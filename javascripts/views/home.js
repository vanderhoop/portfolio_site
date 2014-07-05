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
