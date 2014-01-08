var WorkView = Backbone.View.extend({
  el: "#main-container",

  initialize: function(){
    console.log("WorkView is initialized");
    $('html,body').scrollTop(0);
    this.render();
  },

  render: function(){
    console.log("Workview render function is firing");
    var titleDiv = prepareTitleTemplate("Work");
    this.$el.html(titleDiv);
    var template = retrieveWorkTemplate();
    var projects = [
      {
        media: '<a href="http://insightjournal.us"><div class="work-media" id="insight-journal-sprite"></div></a>',
        title: "InsightJournal",
        role: "Web Developer",
        description: "The private online journaling tool that grows to know you through sentiment analysis and usage patterns."
      },
      {
        media: '<a href="http://insight-journal.herokuapp.com/"><div class="work-media" id="granulr-sprite"></div></a>',
        title: "Granulr",
        role: "Web Developer",
        description: "A web app for breaking large goals down into infinitely smaller subgoals."
      },
      {
        media: '<iframe class="work-media" src="http://player.vimeo.com/video/35587878?title=0&byline=0&portrait=0" width="360" height="203" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
        title: "Ben & Jerry's - Fair Tweets",
        role: "Copywriter and VO Talent",
        description: "A fun little web app that donated unused twitter characters to spread the word about World Fair Trade Day."
      },
      {
        media: '<iframe class="work-media" src="http://player.vimeo.com/video/61557103?title=0&amp;byline=0&amp;portrait=0" width="360" height="203" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
        title: "Skyfall Promos",
        role: "Video Editor",
        description: "Promos for Skyfall's release on DVD and Blu-Ray"
      }
    ];
    var workHTML = template({ projects: projects });
    this.$el.append(workHTML);
    $("#main-container").fadeIn(600);
  } // render

}); // WorkView



