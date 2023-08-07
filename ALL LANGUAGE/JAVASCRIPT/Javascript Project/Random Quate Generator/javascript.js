function generate() {
    var quotes = {
        "Mitch Hedberg": "I'm sick of following my dreams, man. I'm just going to ask where they're going and hook up with ’em later.",
        "Dr. Strangelove": "Gentlemen, you can't fight in here. This is the war room.",
        "Rose": "My mother always used to say: The older you get, the better you get, unless you’re a banana."
    }

    var authors = Object.keys(quotes);

    
    var author = authors[Math.floor(Math.random() * authors.length)];
    
    var quote = quotes[author];
    console.log(quote);
    console.log(quote);
    console.log(quote);
    console.log(quote);
    console.log(quote);
    
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;


    // console.log(authors);
}