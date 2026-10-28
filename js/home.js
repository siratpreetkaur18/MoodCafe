var quotes = [
    "Take a deep breath. You are doing better than you think.",
    "One small step every day is enough.",
    "It is okay to rest. Rest is also part of the work.",
    "You do not have to solve everything today.",
    "This feeling will pass. Be kind to yourself."
];
var number = 0;

function newQuote() {
    number = number + 1;
    if (number == quotes.length) { number = 0; }
    document.getElementById("quote").innerHTML = quotes[number];
}
