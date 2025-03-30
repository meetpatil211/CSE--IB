const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Do what you can, with what you have, where you are.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "Be yourself; everyone else is already taken.",
    "The only way to do great work is to love what you do."
];

document.getElementById("quote-btn").addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteBox = document.getElementById("quote");
    
    quoteBox.style.opacity = 0;
    setTimeout(() => {
        quoteBox.innerText = quotes[randomIndex];
        quoteBox.style.opacity = 1;
    }, 500);
});
