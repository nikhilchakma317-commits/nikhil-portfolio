
const questions = [

{

question:"🎌 Which is Nikhil's favourite anime?",

answers:[
"Naruto",
"Frieren",
"One Piece",
"Bleach"
],

correct:"Frieren"

},

{

question:"🎬 Favourite movie?",

answers:[
"Your Name",
"Drawing Closer",
"Interstellar",
"Titanic"
],

correct:"Drawing Closer"

},

{

question:"🎮 Favourite game?",

answers:[
"PUBG",
"Valorant",
"Mobile Legends",
"Minecraft"
],

correct:"Mobile Legends"

},

{

question:"💻 Dream career?",

answers:[
"Doctor",
"Pilot",
"Software Engineer",
"Teacher"
],

correct:"Software Engineer"

},

{

question:"🏫 Which school changed Nikhil's life?",

answers:[
"Kendriya Vidyalaya",
"JNV",
"DPS",
"Army Public School"
],

correct:"JNV"

}

];

let current = 0;

let score = 0;

showQuestion();

function showQuestion(){

const q = questions[current];

document.getElementById("question").innerHTML = q.question;

let html = "";

q.answers.forEach(answer=>{

html += `

<button onclick="checkAnswer('${answer}')">

${answer}

</button>

<br><br>

`;

});

document.getElementById("answers").innerHTML = html;

}

function checkAnswer(answer){

if(answer===questions[current].correct){

score++;

}

current++;

if(current>=questions.length){

document.getElementById("question").innerHTML="🏆 Finished!";

document.getElementById("answers").innerHTML="";

document.getElementById("result").innerHTML=`

<h2>⭐ Score: ${score}/${questions.length}</h2>

<button onclick="location.reload()">

🔄 Play Again

</button>

`;

return;

}

showQuestion();

}