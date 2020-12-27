const quoteText = document.querySelector('#quote');
const author = document.querySelector('#author');
const newQuoteBtn = document.querySelector('#new-quote');


const quoteGenerator = async function() {
    //   const quote =  await fetch('https://quotes.rest/quote/random?language=en&limit=1');
    //   console.log(quote);
    // console.log(Ma)
    // fetch('https://type.fit/api/quotes').then(res => res.json()).then(data => console.log(data[Math.round(Math.random()*20)].text, data.length));
    try {
        const quote = await fetch('https://type.fit/api/quotes');
        if(!quote.ok) throw new Error('Something went wrong can\'t load quote');
        const quotes = await quote.json();
        const randomQuote = quotes[Math.round(Math.random()*1643)]
        quoteText.innerHTML = randomQuote.text;
        author.innerHTML = randomQuote.author;
        console.log(randomQuote);
    } catch(err) {
        quoteText.innerHTML = err.message;
        quoteText.style.backgroundColor = 'red';
        quoteText.style.borderRadius = '4px';
    }

    // fetch('https://type.fit/api/quotes').then(res => console.log(res));
}

quoteGenerator();





const generateQuote = async function() {
    let res = await fetch('https://type.fit/api/quotes');

    let quotes = await quote.json();
}


newQuoteBtn.addEventListener('click', quoteGenerator);