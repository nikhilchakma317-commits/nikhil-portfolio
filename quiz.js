
// =========================
// QUESTIONS
// =========================

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
"PUBG",
"Minecraft",
"Mobile Legends",
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
question:"If I could spend an entire weekend doing one thing...",
answers:[
"Watch anime",
"Build a website",
"Play games",
"All of the above"
],
correct:3
},

{
question:"Which genre do I love the most?",
answers:[
"Comedy",
"Horror",
"Romance",
"Emotional Drama"
],
correct:3
},

{
question:"Which songs match my mood?",
answers:[
"Party Songs",
"Emotional Songs",
"Heavy Metal",
"EDM"
],
correct:1
},

{
question:"If I could live in one fictional world...",
answers:[
"Violet Evergarden",
"Harry Potter",
"Mobile Legends",
"Frieren"
],
correct:3
}

];

// =========================
// MEMORIES
// =========================

const memories = [

{
title:"🌸 Violet Evergarden",
quote:"Some feelings are too deep for words, yet they quietly shape the person we become."
},

{
title:"🍂 Frieren",
quote:"The value of a journey is often understood long after it has ended."
},

{
title:"🎹 Your Lie in April",
quote:"Some songs never truly end because they continue inside our hearts."
}

];

// =========================
// VARIABLES
// =========================

let currentQuestion = 0;
let score = 0;
let xp = 0;

// =========================
// HTML
// =========================

const startButton = document.getElementById("startQuiz");
const quizBox = document.getElementById("quizBox");

startButton.addEventListener("click", startQuiz);

function startQuiz(){

    startButton.style.display = "none";

    showQuestion();

}
// =========================
// SHOW QUESTION
// =========================

function showQuestion(){

    // Progress Bar
    const progress =
    (currentQuestion / questions.length) * 100;

    document.getElementById("progressBar").style.width =
    progress + "%";

    // Current Question
    const q = questions[currentQuestion];

    quizBox.innerHTML = `
        <h2>Question ${currentQuestion + 1} of ${questions.length}</h2>

        <p>${q.question}</p>

        ${q.answers.map((answer,index)=>
        `<button onclick="checkAnswer(${index})">${answer}</button>`
        ).join("")}
    `;

}
// =========================
// CHECK ANSWER
// =========================

function checkAnswer(selected){

    // Correct answer
    if(selected === questions[currentQuestion].correct){

        score++;
        xp += 10;

    }

    // Update XP
    document.getElementById("scoreBoard").innerHTML =
    "⭐ XP : " + xp;

    // Achievement
    let achievement = "🌱 Beginner";

    if(score >= 3){
        achievement = "🎮 Quiz Player";
    }

    if(score >= 5){
        achievement = "🌸 Anime Lover";
    }

    if(score >= 7){
        achievement = "🔥 Super Fan";
    }

    if(score === questions.length){
        achievement = "👑 Legend of Nikhil";
    }

    document.getElementById("achievement").innerHTML =
    "🏅 Achievement: " + achievement;

    // Next Question
    currentQuestion++;

    // Continue Quiz
    if(currentQuestion < questions.length){

        showQuestion();

    }else{

        showResult();

    }

}
// =========================
// RESULT SCREEN
// =========================

function showResult(){

    let badge = "";

    if(score === questions.length){

        badge = "👑 Legend of Nikhil";

    }else if(score >= 7){

        badge = "🥇 Gold Explorer";

    }else if(score >= 5){

        badge = "🥈 Silver Explorer";

    }else{

        badge = "🥉 Bronze Explorer";

    }

    const randomMemory =
    memories[Math.floor(Math.random() * memories.length)];

    quizBox.innerHTML = `
    <div class="result-box">

        <h1>🏆 Congratulations!</h1>

        <h2>${badge}</h2>

        <h3>📊 Score : ${score}/${questions.length}</h3>

        <h3>⭐ XP : ${xp}</h3>

        <hr>

        <h2>🌸 Memory Unlocked</h2>

        <h3>${randomMemory.title}</h3>

        <p>${randomMemory.quote}</p>

        <button onclick="location.reload()">
        🔄 Play Again
        </button>

    </div>
    `;
}
// =========================
// RESULT SCREEN
// =========================

function showResult(){

    let badge = "";

    if(score === questions.length){
        badge = "👑 Legend of Nikhil";
    }
    else if(score >= 7){
        badge = "🥇 Gold Explorer";
    }
    else if(score >= 5){
        badge = "🥈 Silver Explorer";
    }
    else{
        badge = "🥉 Bronze Explorer";
    }

    const randomMemory =
    memories[Math.floor(Math.random() * memories.length)];

    quizBox.innerHTML = `
    <div class="result-box">

        <h1>🏆 Congratulations!</h1>

        <h2>${badge}</h2>

        <h3>📊 Score: ${score}/${questions.length}</h3>

        <h3>⭐ XP: ${xp}</h3>

        <hr>

        <h2>🌸 Memory Unlocked</h2>

        <h3>${randomMemory.title}</h3>

        <p>${randomMemory.quote}</p>

        <button onclick="location.reload()">
            🔄 Play Again
        </button>

    </div>
    `;
}