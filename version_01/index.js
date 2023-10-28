const api_url = "https://api.quotable.io/quotes/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();
  quote.innerHTML = data[0].content;
  author.innerHTML = data[0].author;
}

window.addEventListener("DOMContentLoaded", getQuote(api_url));