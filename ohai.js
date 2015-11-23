/// Here's a step-by-step example of how to use Handlebars on the client-side

// Find the Handlebars template on the page
var source = document.getElementById("ohai-template").innerHTML;

// Use Handlebars to compile the template
var template = Handlebars.compile(source);

// Set up the data
var data = {
  name: "Mojojojo"
};

// Combine the data and the template
var compiled = template(data);

// Get the target element
var target = document.getElementById("ohai");

// Display the results in the target element
target.innerHTML = compiled;
