var WorkView = Backbone.View.extend({
  el: "#main-container",

  initialize: function(){
    console.log("WorkView is initialized");
    this.render();
  },

  render: function(){
    console.log("Workview render function is firing");
    var titleDiv = prepareTitleTemplate("Work");
    this.$el.html(titleDiv);
    var template = retrieveWorkTemplate();
    var projects = [
      {
        media: '<iframe src="http://player.vimeo.com/video/35587878" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
        title: "Ben & Jerry's - Fair Tweets",
        role: "Copywriter and VO Talent",
        description: "A fun little web app that donated unused twitter characters to spread the word about World Fair Trade Day."
      },
      {
        media: '<iframe src="http://player.vimeo.com/video/35587878" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
        title: "Ben & Jerry's - Fair Tweets",
        role: "Copywriter and VO Talent",
        description: "A fun little web app that donated unused twitter characters to spread the word about World Fair Trade Day."
      },
      {
        media: '<iframe src="http://player.vimeo.com/video/61557103" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
        title: "Comedy Central - Skyfall Promos",
        role: "Video Editor",
        description: "Ballsy promos for Skyfall's release on DVD and Blu-Ray"
      }
    ];
    var workHTML = template({ projects: projects });
    this.$el.append(workHTML);
    $("#main-container").fadeIn(600);
  } // render

}); // WorkView



