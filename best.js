var template = Handlebars.compile(
  document.getElementById("best-words-template").innerHTML
);

var data = {
  words: [
      "fish",
      "chips",
      "cheese"
    ]
};

document.getElementById("best-words").innerHTML = template(data);
