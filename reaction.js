
const box = document.getElementById("reactionBox");

const result = document.getElementById("reactionResult");

let startTime;

let ready = false;

let timeout = Math.random() * 3000 + 2000;

setTimeout(function(){

    ready = true;

    box.style.background = "green";

    box.innerHTML = "CLICK!";

    startTime = Date.now();

}, timeout);

box.onclick = function(){

    if(!ready){

        result.innerHTML = "❌ Too early! Refresh and try again.";

        return;

    }

    let reaction = Date.now() - startTime;

    let message = "😊 Good!";

    if(reaction < 300){

        message = "🔥 Excellent!";

    }

    if(reaction < 200){

        message = "⚡ Lightning Fast!";

    }

    result.innerHTML =

    `
    <h2>${message}</h2>

    <h2>${reaction} ms</h2>

    <button onclick="location.reload()">

    🔄 Play Again

    </button>
    `;

};