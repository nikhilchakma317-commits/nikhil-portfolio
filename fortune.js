
const fortunes = [

"🌸 Every great journey begins with one small step.",

"💙 Believe in yourself even when nobody else does.",

"⭐ Today's effort becomes tomorrow's success.",

"🎌 Like Frieren, treasure every moment with the people you love.",

"🌸 Violet Evergarden reminds us that emotions make us human.",

"🎬 Every ending is the beginning of another story.",

"💻 Keep coding. Your future self will thank you.",

"🎮 Never give up after one defeat.",

"🌄 Dreams become reality through consistency.",

"❤️ Thank you for visiting Nikhil's World."

];

const button = document.getElementById("fortuneBtn");

const box = document.getElementById("fortuneBox");

button.onclick = function(){

    const random = Math.floor(Math.random() * fortunes.length);

    box.innerHTML = `

    <h2>${fortunes[random]}</h2>

    <br>

    <button onclick="location.reload()">

    🔄 Try Again

    </button>

    `;

};