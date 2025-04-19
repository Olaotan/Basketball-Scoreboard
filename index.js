const homeScoreBoard = document.getElementById('home-score')
const guestScoreBoard = document.getElementById('guest-score')
const homePlusOne = document.getElementById('home-plus-one')
const homePlusTwo = document.getElementById('home-plus-two')
const homePlusThree = document.getElementById('home-plus-three')
const guestPlusOne = document.getElementById('guest-plus-one')
const guestPlusTwo = document.getElementById('guest-plus-two')
const guestPlusThree = document.getElementById('guest-plus-three')
const newGame = document.getElementById('new-game-btn')

let homeScore = 0
let guestScore = 0

homePlusOne.addEventListener("click", function(){
    homeScore += 1
    homeScoreBoard.textContent = homeScore
    highlightLeader()
})

homePlusTwo.addEventListener("click", function(){
    homeScore += 2
    homeScoreBoard.textContent = homeScore
    highlightLeader()
})

homePlusThree.addEventListener("click", function(){
    homeScore += 3
    homeScoreBoard.textContent = homeScore
    highlightLeader()
})

guestPlusOne.addEventListener("click", function(){
    guestScore += 1
    guestScoreBoard.textContent = guestScore
    highlightLeader()
})

guestPlusTwo.addEventListener("click", function(){
    guestScore += 2
    guestScoreBoard.textContent = guestScore
    highlightLeader()
})

guestPlusThree.addEventListener("click", function(){
    guestScore += 3
    guestScoreBoard.textContent = guestScore
    highlightLeader()
})

newGame.addEventListener("click", function(){
    homeScore = 0
    guestScore = 0
    homeScoreBoard.textContent = 0
    guestScoreBoard.textContent = 0
    homeScoreBoard.classList.remove("highlightLeader")
    guestScoreBoard.classList.remove("highlightLeader")
})

function highlightLeader(){
    if (homeScore > guestScore){
        homeScoreBoard.classList.add("highlightLeader")
        guestScoreBoard.classList.remove("highlightLeader")
    } else if (guestScore > homeScore){
        homeScoreBoard.classList.remove("highlightLeader")
        guestScoreBoard.classList.add("highlightLeader")
    } else {
        homeScoreBoard.classList.remove("highlightLeader")
        guestScoreBoard.classList.remove("highlightLeader")
    }
}