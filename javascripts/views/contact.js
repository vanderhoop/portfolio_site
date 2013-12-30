var ContactView = Backbone.View.extend({
  el: "#main-container",

  events: {
  },

  initialize: function(){
    console.log("ContactView is instantiated");
    preparePage();
    this.render();
  },

  render: function(){
    console.log("ContactView Render function fires");
    var html = prepareTitleTemplate("Contact");
    this.$el.html(html);
  } // render

}); // ContactView
