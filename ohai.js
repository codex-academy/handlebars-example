var template = Handlebars.compile(
  document.getElementById("ohai-template").innerHTML
);

var data = { name: "Steve" };

document.getElementById("ohai").innerHTML = template(data);
