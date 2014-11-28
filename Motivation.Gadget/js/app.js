
var REFRESH_INTERVAL = 10000;

var updateInterval;
var quote;
var author;
var image;

var currentQuote = 0;
var quotesQty = 0;

var space = '&nbsp;';
var lquote = '&ldquo;';
var rquote = '&rdquo;';
var mdash = '&mdash;';

function initUI(){
    
    quote = document.getElementById("quote");
    author = document.getElementById("author");
    image = document.getElementById("image");

    quotesQty = window.quotes.length; 

    updateQuote();
    updateInterval = setInterval(updateQuote, REFRESH_INTERVAL);
    
}


function updateQuote(){
   
    quote.innerHTML = lquote + space + window.quotes[currentQuote].quote + space + rquote;
    author.innerHTML = mdash + space + window.quotes[currentQuote].author + space ;
    image.innerHTML = '<img width="120" height="120" src="/images/'+window.quotes[currentQuote].image+'">';

    if( currentQuote == quotesQty - 1 ){
    	currentQuote = 0;
    }else{
    	currentQuote = currentQuote + 1;
    }
}