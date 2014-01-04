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
        media: '<a href="http://insight-journal.herokuapp.com/"><img class="work-img" src="images/insight-journal.jpg" alt="InsightJournal"></a>',
        title: "InsightJournal",
        role: "Web Developer",
        description: "The online journaling tool that grows to know you."
      },
      {
        media: '<iframe src="http://player.vimeo.com/video/35587878?title=0&byline=0&portrait=0" width="360" height="203" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
        title: "Granulr",
        role: "Web Developer",
        description: "A web app for breaking large goals down into infinitely smaller subgoals."
      },
      {
        media: '<iframe src="http://player.vimeo.com/video/35587878?title=0&byline=0&portrait=0" width="360" height="203" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
        title: "Ben & Jerry's - Fair Tweets",
        role: "Copywriter and VO Talent",
        description: "A fun little web app that donated unused twitter characters to spread the word about World Fair Trade Day."
      },
      {
        media: '<iframe src="http://player.vimeo.com/video/61557103?title=0&amp;byline=0&amp;portrait=0" width="360" height="203" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
        title: "Comedy Central - Skyfall Promos",
        role: "Video Editor",
        description: "Promos for Skyfall's release on DVD and Blu-Ray"
      }
    ];
    var workHTML = template({ projects: projects });
    this.$el.append(workHTML);
    $("#main-container").fadeIn(600);
  } // render

}); // WorkView



