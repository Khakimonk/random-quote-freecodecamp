var today = new Date();
var getHour = today.toDateString();

var writeHour = document.getElementById('timestamp');
writeHour = document.write('<h3>' + getHour + '</h3>');

function myQuote(key, quoteText, Author) {
    this.key = key;
    this.quoteText = quoteText;
    this.Author = Author;
}

var firstQuote = new myQuote(1, 'Life is a gift horse in my opinion.', ' J. D. Salinger');
var secondQuote = new myQuote(2, 'It pays to be obvious, especially if you have a reputation for subtlety. ', 'Isaac Asimov');
var thirdQuote = new myQuote(3, 'The world is changing: I feel it in the water, I feel it in the earth, and I smell it in the air.', 'J. R. R. Tolkien in The Return of the King')

var newQuote, quoteEl, quoteText;

quoteEl = document.getElementById('quoteBody');
newQuote = document.createElement('p');
quoteText = document.createTextNode(secondQuote.quoteText);
newQuote.appendChild(quoteText);
quoteEl.appendChild(newQuote);

var quoteAuth, AuthEl, newAuth;

AuthEl = document.getElementById('authBox');
newAuth = document.createElement('p');
quoteAuth = document.createTextNode(secondQuote.Author);
newAuth.appendChild(quoteAuth);
AuthEl.appendChild(newAuth);