const api_url = "https://api.quotable.io/quotes/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();
  quote.innerHTML = data[0].content;
  author.innerHTML = data[0].author;
}

function tweet() {
  window.open(`https://twitter.com/intent/tweet?text=${quote.innerText} ---by ${author.innerText}`, "Tweet window", "width=600, height=600")
}

window.addEventListener("DOMContentLoaded", getQuote(api_url));