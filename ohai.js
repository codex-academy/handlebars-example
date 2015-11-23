var template = Handlebars.compile(
  document.getElementById("ohai-template").innerHTML
);

var data = { name: "Mojojojo" };

document.getElementById("ohai").innerHTML = template(data);
