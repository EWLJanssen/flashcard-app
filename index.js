

    const data = {
    cards: [
            {
                question: 'hello',
                answer: 'hallo',
            },
            {
                question: 'bye',
                answer: 'doei',
            },
            {
                question: 'good night',
                answer: 'welterusten',
            }
         ]
        }


const cards = data.cards
const display = document.getElementById('card')
const p = document.createElement('p')

    
const randomCard = cards[Math.floor(Math.random()*cards.length)]
console.log(randomCard)

const randomQuestion = randomCard.question
const randomAnswer = randomCard.answer

console.log(randomQuestion)
console.log(randomAnswer)

display.appendChild(p)
p.innerHTML = randomQuestion
   


function showAnswer(){
    document.getElementById("answer").innerHTML = randomAnswer;


console.log(randomAnswer)
}


p.addEventListener
document.getElementById('p');

function nextQuestion(){
        document.getElementById("answer").innerHTML = "";
        document.getElementById("card").innerHTML = randomQuestion
     };


// myImage.onclick = function() {
//     var mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/cvfoto.jpg') {
//       myImage.setAttribute ('src','images/firefox.png');
//     } else {
//       myImage.setAttribute ('src','images/cvfoto.jpg');
//     }*/
    // const question = data.cards[i].question
    // const answer = data.cards[i].answer

    

    
     
    
            
        
            // const random = cards[Math.floor(Math.random() * cards.length )]
                     
 
//const question = document.createElement('question')


// const randCard = document.getElementById('card')
// randCard.='say hi';

// // h2.appendChild(cards)

console.log(data.cards)