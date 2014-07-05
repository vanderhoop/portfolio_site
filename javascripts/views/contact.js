var ContactView = Backbone.View.extend({
  el: "#main-container",

  initialize: function(){
    this.titleHTML = prepareTitleTemplate("Contact");
    this.contactHTML = $("#contact-template").html();
  },

  render: function(){
    console.log("ContactView Render function fires");
    return this.$el.html(this.titleHTML + this.contactHTML);
  },

});
