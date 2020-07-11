const btn = document.querySelector('#btnGenerator');
const phrase = document.querySelector('.quote');
const author = document.querySelector('.author');

const requestQuote = async () => {
  const response = await fetch('https://type.fit/api/quotes');
  const data = await response.json();
  return data;
};

const showQuote = async () => {
  const quote = await requestQuote();
  const random = Math.floor(Math.random() * quote.length);

  phrase.innerHTML = quote[random].text;
  author.innerHTML = quote[random].author;
};

btn.addEventListener('click', showQuote);
