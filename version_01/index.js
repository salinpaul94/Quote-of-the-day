const api_url = "https://api.quotable.io/quotes/random";

async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data[0].content)
}

window.addEventListener("DOMContentLoaded", getQuote(api_url));