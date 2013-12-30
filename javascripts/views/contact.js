var ContactView = Backbone.View.extend({
  el: "#main-container",

  events: {
  },

  initialize: function(){
    console.log("ContactView is instantiated");
    $("#home-nav").on("click", function(){
      app.router.navigate("home", { trigger:true });
    })
    preparePage();
    this.render();
  },

  render: function(){
    console.log("ContactView Render function fires");
    var html = prepareTitleTemplate("Contact");
    this.$el.html(html);
    // I want to generate a div.row with one column left offset.
    // I will do this by generating a template via handlbares
    var contactHTML = retrieveContactTemplate();
    this.$el.append(contactHTML);
  } // render

}); // ContactView
