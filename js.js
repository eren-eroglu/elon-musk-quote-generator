/* Butoune bastığımda
butonun altında 
bir rastgeele elon musk qupte u istiyorum */

const quotes = ["When something is important enough, you do it even if the odds are not in your favor.", "Some people don't like change, but you need to embrace change if the alternative is disaster.","I think it is possible for ordinary people to choose to be extraordinary.","Going from PayPal, I thought: ‘Well, what are some of the other problems that are likely to most affect the future of humanity?' Not from the perspective, ‘What's the best way to make money?", "Persistence is very important. You should not give up unless you are forced to give up.","I could either watch it happen or be a part of it.","Being an Entrepreneur is like eating glass and staring into the abyss of death.","On his favorite book when he was a teen, 'The Hitchhiker's Guide to the Galaxy': It taught me that the tough thing is figuring out what questions to ask, but that once you do that, the rest is really easy.","If something's important enough, you should try. Even if - the probable outcome is failure.","People work better when they know what the goal is and why. It is important that people look forward to coming to work in the morning and enjoy working.","People should pursue what they're passionate about. That will make them happier than pretty much anything else.",]

const button = document.querySelector('#motivate')

function newQuote() {
    const randomNumber = Math.floor(Math.random() * (11));
    document.getElementById('quote').innerHTML = quotes[randomNumber];
}




