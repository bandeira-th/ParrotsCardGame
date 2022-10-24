
let firstCard, secondCard, firstCardClass, secondCardClass, numberOfCards = ""
let counter = 0
let tries = 0

//criar lista de backImages
listBackImages = ["back-01.png","back-02.png", "back-03.png","back-04.png","back-05.png","back-06.png","back-07.png"]
//lista embaralhada
const sortedImages = listBackImages.sort(comparador)

//pegar container de cartas
let cardsContainer = document.querySelector('.cards-container')

numberOfCards = Number(prompt("Olá! Com quantas cartas você quer jogar? \n (digite um número PAR de 4 até 14)"))
while(numberOfCards < 4 || numberOfCards > 14 || numberOfCards%2 !== 0)  {
    numberOfCards = Number(prompt("Olá! Com quantas cartas você quer jogar? \n (digite um número PAR de 4 até 14)"))
}

let half = numberOfCards / 2

let firstHalf = []

for(let i = 0; i < half; i++){
    firstHalf.push(sortedImages[i])
}

let secondHalf = firstHalf
let wholeDeck = firstHalf.concat(secondHalf)
let wholeSortedDeck = wholeDeck.sort(comparador) //




function flip(element){
    tries++;
    let cardsFlipped = document.querySelectorAll(".game-card__inside");
    cardsFlipped = Array.from(cardsFlipped)
    if (counter == 0){
        element.classList.add('flipped')
        firstCard = element
        firstCardClass = element.getAttribute('class')
        console.log(firstCard)
    } else if (counter == 1) {
        element.classList.add('flipped')
        secondCard = element 
        secondCardClass = element.getAttribute('class')
        if (firstCardClass != secondCardClass){
            setTimeout(removeFlip, 1000, firstCard, secondCard)
        }
    } 
    
    counter++;
    if (counter == 2){
        counter = 0
    }
        
    let check = cardsFlipped.every((cd) => cd.classList.contains("flipped"));
    function result(){
        if (check === true) {
            alert(`Você ganhou em ${tries} jogadas!`)
            }
    }    
    setTimeout(result, 1000)
}


function removeFlip(el, el2){
    el.classList.remove("flipped")
    el2.classList.remove("flipped")
    
}


function comparador() { 
    return Math.random() - 0.5; 
}

for(let item = 0; item < wholeSortedDeck.length; item++) {
    cardsContainer.innerHTML += 
    `<div class="game-card">
        <div class="game-card__inside ${wholeSortedDeck[item]}}" onclick="flip(this)">      
            <div class="game-card__side game-card__side-front">
                <img src="/images/parrot.png" alt="" class="parrot-image">
            </div>
            <div class="game-card__side game-card__side-back">
                <img src="images/${wholeSortedDeck[item]}" class="${wholeSortedDeck[item]}"> 
            </div>
        </div>
    </div>`
}







