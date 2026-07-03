
const emojis = [
    "🍂","🍂",
    "💌","💌",
    "🌸","🌸",
    "🎻","🎻"
];

// Shuffle cards
emojis.sort(() => Math.random() - 0.5);

const board = document.getElementById("gameBoard");

let firstCard = null;
let secondCard = null;

let lockBoard = false;

let moves = 0;
let matches = 0;

// Create cards
emojis.forEach(emoji => {

    const card = document.createElement("div");

    card.className = "memory-card";

    card.dataset.emoji = emoji;

    card.innerHTML = "❓";

    card.onclick = function(){

        if(lockBoard) return;

        if(card === firstCard) return;

        card.innerHTML = emoji;

        if(firstCard == null){

            firstCard = card;

            return;

        }

        secondCard = card;

        moves++;

        document.getElementById("moves").innerHTML =
        "Moves: " + moves;

        if(firstCard.dataset.emoji === secondCard.dataset.emoji){

            firstCard.classList.add("matched");

            secondCard.classList.add("matched");

            firstCard = null;

            secondCard = null;

            matches++;

            if(matches === 4){

                document.getElementById("message").innerHTML =

                `
                🎉 Congratulations!<br><br>

                You completed the game in <b>${moves}</b> moves.

                <br><br>

                <button onclick="location.reload()">

                🔄 Play Again

                </button>
                `;

            }

        }else{

            lockBoard = true;

            setTimeout(function(){

                firstCard.innerHTML = "❓";

                secondCard.innerHTML = "❓";

                firstCard = null;

                secondCard = null;

                lockBoard = false;

            },800);

        }

    };

    board.appendChild(card);

});