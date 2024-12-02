
const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "Act as if what you do makes a difference. It does. - William James",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt"
];


var quoteText = document.getElementById('quote-text'); 
var generateQuoteBtn = document.getElementById('generate-quote');
var previousIndex = -1;
 function generateQuote() {
    var randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === previousIndex);

    previousIndex = randomIndex;

    quoteText.textContent = quotes[randomIndex];
}

generateQuoteBtn.addEventListener('click', generateQuote);
