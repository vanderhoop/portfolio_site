function prepareTitleTemplate(titleText){
  var template = _.template( $("#title-template").html() );
  return template({ title: titleText });
}

var WorkView = Backbone.View.extend({
  el: "#main-container",
  template: _.template( $("#work-template").html() ),

  initialize: function(){
    console.log("WorkView is initialized");
    this.projects = [
      {
        media: '<a href="http://insightjournal.us"><div class="work-media" id="insight-journal-sprite"></div></a>',
        title: "InsightJournal",
        role: "Web Developer",
        description: "The private online journaling tool that grows to know you through sentiment analysis and usage patterns."
      },
      {
        media: '<a href="http://metapinger.herokuapp.com/"><div class="work-media" id="metapinger-sprite"></div></a>',
        title: "MetaPinger",
        role: "Web Developer",
        description: "Heroku's servers are famous for idling, so I built a Heroku app that pings Heroku apps (including itself) at 10 minute intervals, ensuring perpetual wakefulness."
      },
      {
        media: '<a href="https://vimeo.com/23211569"><div class="work-media" id="fairtweets-sprite"></div></a>',
        title: "Ben & Jerry's - Fair Tweets",
        role: "Copywriter and VO Talent",
        description: "A fun little web app that donated unused twitter characters to spread the word about World Fair Trade Day."
      },
      {
        media: '<a href="https://github.com/vanderhoop/battleroom"><div class="work-media" id="battleroom-sprite"><div class="overlay"><p>+</p></div></div></a>',
        title: "The Battleroom Gem",
        role: "Benevolent Dictator for Life",
        description: "A command line tool designed to give Ruby newbies countless reps doing simple tasks like working with variables, manipulating data structures, and defining and invoking methods."
      }
    ];

    this.titleHTML = prepareTitleTemplate("Work");
    this.workHTML = this.template({ projects: this.projects });
  },

  render: function(){
    console.log("Workview render function is firing");
    return this.$el.html(this.titleHTML + this.workHTML);
  },

});



