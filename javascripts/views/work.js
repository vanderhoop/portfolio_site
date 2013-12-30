var WorkView = Backbone.View.extend({
  el: "#main-container",

  initialize: function(){
    console.log("WorkView is initialized");
    preparePage();
    this.render();
  },

  render: function(){
    console.log("Workview render function is firing");
    var html = prepareTitleTemplate("Work");
    this.$el.html(html);
    var workHTML = retrieveWorkTemplate();
    this.$el.append(workHTML);
  }

}); // WorkView



