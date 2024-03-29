const quotes = [
    {
        quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author : "Nelson Mandela",
    },
    {
        quote : "The way to get started is to quit talking and begin doing.",
        author : "Walt Disney",
    },
    {
        quote : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        author : "Steve Jobs",
    },
    {
        quote : "If life were predictable it would cease to be life, and be without flavor.",
        author : "Eleanor Roosevelt",
    },
    {
        quote : "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author : "Oprah Winfrey",
    },
    {
        quote : "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author : "James Cameron",
    },
    {
        quote : "Life is what happens when you're busy making other plans.",
        author : "John Lennon",
    },
    {
        quote : "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author : "Mother Teresa",
    },
    {
        quote : "Always remember that you are absolutely unique. Just like everyone else.",
        author : "Magaret Mead",
    },
    {
        quote : "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author : "Robert Louis Stevenson",
    }
];

const quote = document.querySelector("div#quote span:first-child");
const author = document.querySelector("div#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `author : ${todaysQuote.author}`;