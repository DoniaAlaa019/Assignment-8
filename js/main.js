var quotesContainer = [{
    auther: "Oscar Wilde",
    qoute: "“Be yourself; everyone else is already taken.”"
}, {
    auther: "Albert Einstein",
    qoute: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
}, {
    auther: "Frank Zappa",
    qoute: "“So many books, so little time.”"
}, {
    auther: "Marcus Tullius Cicero",
    qoute: "“A room without books is like a body without a soul.”"
}, {
    auther: "Bernard M. Baruch",
    qoute: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”"
}, {
    auther: "William W. Purkey",
    qoute: `“You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth.”`
}, {
    auther: "Dr. Seuss",
    qoute: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`
}, {
    auther: "Mahatma Gandhi",
    qoute: "“Be the change that you wish to see in the world.”"
}, {
    auther: "Mae West",
    qoute: "“You only live once, but if you do it right, once is enough.”"
}, {
    auther: "Albert Camus",
    qoute: `“Don’t walk in front of me… I may not follow
    Don’t walk behind me… I may not lead
    Walk beside me… just be my friend”`
}, ];
var index;
var previousQuote = 0;

function nextQuote() {
    index = Math.floor(Math.random() * 9);
    if (index == previousQuote) {
        document.getElementById("content-quote").innerHTML =
            `<div class="quote-frame d-flex flex-column justify-content-center align-items-center bg-light border-2 border border-secondary rounded-2 text-dark p-5 my-3 shadow "> 
            <p id = "quotes-content" class="container text-center lead"> ${ quotesContainer[index+1].qoute } </p> 
            <p id = "quotes-auther lead"> ${ quotesContainer[index+1].auther } </p> 
            </div>`;
        previousQuote = index + 1;
        console.log(quotesContainer[index + 1].auther);
    } else {
        document.getElementById("content-quote").innerHTML =
            `<div class="quote-frame  d-flex flex-column justify-content-center align-items-center bg-light border-2 border border-secondary rounded-2 text-dark p-5 my-3 shadow "> 
            <p id = "quotes-content" class="container text-center lead"> ${ quotesContainer[index].qoute } </p> 
            <p id = "quotes-auther lead"> ${ quotesContainer[index].auther } </p> 
            </div>`;
        previousQuote = index;
        console.log(quotesContainer[index].auther);
    }
}