
const posters = [

{
image:"images/frieren.jpg",
answer:"Frieren",
options:["Frieren","Naruto","One Piece","Bleach"]
},

{
image:"images/violet.jpg",
answer:"Violet Evergarden",
options:["Violet Evergarden","Your Lie in April","Anohana","Clannad"]
},

{
image:"images/anohana.jpg",
answer:"Anohana",
options:["Anohana","Your Name","Frieren","Attack on Titan"]
},

{
image:"images/yourlie.jpg",
answer:"Your Lie in April",
options:["Your Lie in April","Blue Lock","Haikyuu","Demon Slayer"]
},

{
image:"images/drawingcloser.jpg",
answer:"Drawing Closer",
options:["Drawing Closer","Five Feet Apart","Your Name","Be With You"]
},

{
image:"images/fivefeetapart.jpg",
answer:"Five Feet Apart",
options:["Five Feet Apart","Titanic","Drawing Closer","Your Name"]
},

{
image:"images/yourname.jpg",
answer:"Your Name",
options:["Your Name","Suzume","Weathering With You","Spirited Away"]
},

{
image:"images/bewithyou.jpg",
answer:"Be With You",
options:["Be With You","Drawing Closer","Your Name","A Silent Voice"]
}

];

let current = 0;

let score = 0;

showPoster();

function showPoster(){

document.getElementById("posterImage").src =
posters[current].image;

document.getElementById("question").innerHTML =
"Who is this?";

let html = "";

posters[current].options.forEach(option=>{

html += `
<button onclick="checkAnswer('${option}')">

${option}

</button>

<br><br>
`;

});

document.getElementById("options").innerHTML = html;

}

function checkAnswer(answer){

if(answer===posters[current].answer){

score++;

}

current++;

if(current>=posters.length){

document.getElementById("question").innerHTML="🏆 Finished!";

document.getElementById("posterImage").style.display="none";

document.getElementById("options").innerHTML="";

document.getElementById("result").innerHTML=`

<h2>⭐ Score: ${score}/8</h2>

<button onclick="location.reload()">

🔄 Play Again

</button>

`;

return;

}

showPoster();

}