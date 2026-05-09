let cards = []
let sum = 0
let blackJack = false
let isAlive = true
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Player",
    chips: 100
}

let chipsEl = document.getElementById("chips-el")
chipsEl.textContent = player.name + ": " + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1){
        return 11
    }
    else if (randomNumber > 10){
        return 10
    }
    else{
        return randomNumber
    }
}

function startGame(){
     let firstCard = getRandomCard()
     let secondCard = getRandomCard()
     cards  = [firstCard, secondCard]
     sum = firstCard + secondCard
     isAlive = true
     renderGame()
}

function renderGame(){
   

    cardsEl.textContent =  "Cards: "
    for(let i = 0; i < cards.length; i++){
         cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
if (sum <= 20 ){
    messageEl.innerText = "Do you want to draw a new card?"
}

else if (sum === 21){
    messageEl.innerText  = "Youve won the blackjack"
    blackJack = true
}

else{
    messageEl.innerText  = "Youre out of the game"
    isAlive = false
}}

function newCard(){
    if (isAlive === true && blackJack === false ){
        let thirdCard = getRandomCard()
        sum += thirdCard
        cards.push(thirdCard)
        renderGame()
    }

}