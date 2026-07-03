alert("script.js is working");
const words = [
    "Future Software Engineer",
    "Python Developer",
    "Web Designer",
    "AI Enthusiast"
];

let index = 0;

const typing = document.getElementById("typing");

if (typing) {

    setInterval(() => {

        index++;

        if (index >= words.length) {
            index = 0;
        }

        typing.innerHTML = words[index];

    }, 2000);

}
const questions = [

{
question:"What is my favourite anime?",
answers:[
"The Apothecary Diaries",
"Darling in the Franxx",
"To Your Eternity",
"Frieren: Beyond Journey's End"
],
correct:3
},

{
question:"What is my favourite movie?",
answers:[
"From Me to You",
"Drawing Closer",
"Five Feet Apart",
"My Sassy Girl"
],
correct:1
},

{
question:"What is my favourite colour?",
answers:[
"Blue",
"Green",
"Black",
"White"
],
correct:0
},

{
question:"Which game do I enjoy talking about the most?",
answers:[
"PUBG: Battlegrounds",
"Minecraft",
"Mobile Legends: Bang Bang",
"Free Fire"
],
correct:2
},

{
question:"Which pet have I seriously considered owning?",
answers:[
"Cat",
"Rabbit",
"Golden Retriever",
"Parrot"
],
correct:2
},

{
question:"If I could spend an entire weekend doing one thing, I'd probably...",
answers:[
"Watch anime",
"Build a website",
"Play games",
"All of the above"
],
correct:3
},

{
question:"Which genre of anime or movie usually hits me the hardest?",
answers:[
"Comedy",
"Horror",
"Emotional romance/drama",
"Action"
],
correct:2
},

{
question:"Which type of songs usually match my mood?",
answers:[
"Party songs",
"Emotional and meaningful songs",
"Heavy metal",
"EDM"
],
correct:1
},

{
question:"If I could live in one fictional world for a year, where would I choose?",
answers:[
"Violet Evergarden",
"Mobile Legends: Bang Bang",
"Harry Potter",
"Frieren: Beyond Journey's End"
],
correct:3
}

];

let currentQuestion = 0;
let score = 0;
let xp = 0;
const startButton = document.getElementById("startQuiz");
const quizBox = document.getElementById("quizBox");

if(startButton){

startButton.addEventListener("click",startQuiz);

}
const memories = [

{
title:"🌸 Violet Evergarden",
quote:"Some feelings are too deep for words, yet they quietly shape the person we become."
},

{
title:"🍂 Frieren",
quote:"Sometimes we understand the value of a journey only after the people who walked it are gone."
},

{
title:"🎹 Your Lie in April",
quote:"Some melodies end, but their echoes stay in our hearts forever."
},

{
title:"🌼 Anohana",
quote:"The people we lose never truly disappear while we continue to remember them."
}

];

function startQuiz(){

    startButton.style.display = "none";

    showQuestion();

}


    





function showQuestion(){

const q = questions[currentQuestion];

quizBox.innerHTML=`

<h2>Question ${currentQuestion+1} of ${questions.length}</h2>

<p>${q.question}</p>

${q.answers.map((answer,index)=>
`<button onclick="checkAnswer(${index})">${answer}</button>`
).join("")}

`;

}

function checkAnswer(selected){

if(selected===questions[currentQuestion].correct){

score++;

xp += 10;

document.getElementById("scoreBoard").innerHTML = "⭐ XP : " + xp;

}

currentQuestion++;

if(currentQuestion<questions.length){

showQuestion();


}else{

let badge = "";

if (xp >= 40) {

    badge = "🥇 Gold Explorer";

}
else if (xp >= 20) {

    badge = "🥈 Silver Explorer";

}
else {

    badge = "🥉 Bronze Explorer";

}

quizBox.innerHTML = `
<h2>🎉 Congratulations!</h2>

<h3>Your Score : ${score}/${questions.length}</h3>

<h2>⭐ XP : ${xp}</h2>

<h2>${badge}</h2>

<p>Thank you for playing the Nikhil Challenge!</p>

<button onclick="location.reload()">🔄 Play Again</button>
`;
const randomMemory =
memories[Math.floor(Math.random() * memories.length)];

document.getElementById("memoryCard").style.display = "block";

document.getElementById("memoryTitle").innerHTML =
randomMemory.title;

document.getElementById("memoryTitle").innerHTML =
randomMemory.title;

document.getElementById("memoryQuote").innerHTML =
randomMemory.quote;

}   // closes the else block

}   // closes the checkAnswer() function
// ================= MEMORY BOOK =================

const memories = [

{

title:"🌸 Violet Evergarden",

image:"images/violet.jpg",

rating:"⭐ Rating: 10/10",

description:"This anime taught me that some feelings are too deep for words.",

reason:"It showed me how powerful love, kindness and words can be."

},

{

title:"🍂 Frieren",

image:"images/frieren.jpg",

rating:"⭐ Rating: 10/10",

description:"Every journey becomes precious because of the people we meet.",

reason:"It reminded me to treasure every moment with family and friends."

},

{

title:"🌼 Anohana",

image:"images/anohana.jpg",

rating:"⭐ Rating: 10/10",

description:"The people we love never truly leave us.",

reason:"One of the saddest yet most beautiful stories I've ever watched."

},

{

title:"🎻 Your Lie in April",

image:"images/yourlie.jpg",

rating:"⭐ Rating: 10/10",

description:"Music can heal broken hearts.",

reason:"It inspired me to keep moving forward no matter what."

},

{

title:"🎬 Drawing Closer",

image:"images/drawingcloser.jpg",

rating:"⭐ Rating: 10/10",

description:"Every moment with someone you love is priceless.",

reason:"It reminded me to appreciate every second of life."

}

];

if(prevBtn && nextBtn){

    prevBtn.onclick = function(){

        currentMemory--;

        if(currentMemory < 0){

            currentMemory = memories.length - 1;

        }

        showMemory();

    };

    nextBtn.onclick = function(){

        currentMemory++;

        if(currentMemory >= memories.length){

            currentMemory = 0;

        }

        showMemory();

    };

    showMemory();
function showMemory(){

    memoryName.innerHTML =
    memories[currentMemory].title;

    memoryDescription.innerHTML =
    memories[currentMemory].description;

    document.getElementById("memoryImage").src =
    memories[currentMemory].image;

    document.getElementById("memoryRating").innerHTML =
    memories[currentMemory].rating;

    document.getElementById("memoryReason").innerHTML =
    memories[currentMemory].reason;

}
}




// window.addEventListener("load", function(){

//     setTimeout(function(){

//         document.getElementById("loader").style.display = "none";

//     },2000);

// });

const loader = document.getElementById("loader");

if(loader){
    loader.style.display = "none";
}
window.onload = function () {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.display = "none";

    }

};
const search = document.getElementById("search");

if(search){

    search.addEventListener("keyup", function(){

        const value = search.value.toLowerCase();

        const cards = document.querySelectorAll(".card");

        cards.forEach(card=>{

            if(card.innerText.toLowerCase().includes(value)){

                card.parentElement.style.display="block";

            }else{

                card.parentElement.style.display="none";

            }

        });

    });

}
const themeBtn = document.getElementById("themeBtn");

if(themeBtn){

    themeBtn.onclick = function(){

        document.body.classList.toggle("light");

        if(document.body.classList.contains("light")){

            localStorage.setItem("theme","light");

            themeBtn.innerHTML="☀️";

        }else{

            localStorage.setItem("theme","dark");

            themeBtn.innerHTML="🌙";

        }

    };

    if(localStorage.getItem("theme") === "light"){

        document.body.classList.add("light");

        themeBtn.innerHTML="☀️";

    }

}
const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

document.getElementById("thanks").innerHTML =

"❤️ Thank you for your message!";

form.reset();

});

}
