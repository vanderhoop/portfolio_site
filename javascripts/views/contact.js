var ContactView = Backbone.View.extend({
  el: "#main-container",

  initialize: function(){
    console.log("ContactView is instantiated");
  },

  render: function(){
    console.log("ContactView Render function fires");
    var titleHTML = prepareTitleTemplate("Contact"),
        contactHTML = retrieveContactTemplate();
    return this.$el.html(titleHTML + contactHTML);
  }, // render

}); // ContactView
