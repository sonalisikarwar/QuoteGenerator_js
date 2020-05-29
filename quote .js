var quotes = [
'"Get busy living or get busy dying"-Stephen King',
'"We are what we think"-buddha',
'"You only live once but if you do it  right once is enough" - Mae West',
'"Many of lifes failures are people who did not realize how close they were to success when they gave up"  -Thomas A. Edison',
'"If you want to live a happy life  tie it to a goal, not to people or things" - Albert Einstein',
'"Never let the fear of striking out keep you from playing the game"  -Babe Ruth',
'"Money and success dont change people they merely amplify what is already there"  -Will Smith',
'"Your time is limited so dont waste it living someone elses life Dont be trapped by dogma  which is living with the results of other peoples thinking"  -Steve Jobs',
'"Not how long but how well you have lived is the main things"  -Seneca'
]
 
function newQuote() {
       var randomNumber = Math.floor(Math.random() *  (quotes.length));
       document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

}