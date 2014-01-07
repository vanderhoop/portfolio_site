var ContactView = Backbone.View.extend({
  el: "#main-container",

  events: {
  },

  initialize: function(){
    console.log("ContactView is instantiated");
    $('html,body').scrollTop(0);
    this.render();
  },

  render: function(){
    console.log("ContactView Render function fires");
    var titleHTML = prepareTitleTemplate("Contact");
    this.$el.html(titleHTML);
    // I want to generate a div.row with one column left offset.
    // I will do this by generating a template via handlbares
    var contactHTML = retrieveContactTemplate();
    this.$el.append(contactHTML);
    $("#main-container").fadeIn(600);
  } // render

}); // ContactView
