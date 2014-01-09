function prepareTitleTemplate(titleText){
  var source = $("#title-template").html(),
      template = Handlebars.compile(source),
      context = { title: titleText };
  return template(context);
}

function retrieveContactTemplate(){
  return $("#contact-template").html();
}

function retrieveHomeTemplate(){
  var source = $("#home-template").html();
  var template = Handlebars.compile(source);
  return template();
}

function retrieveWorkTemplate(){
  var source = $("#work-template").html();
  var template = Handlebars.compile(source);
  return template;
}
