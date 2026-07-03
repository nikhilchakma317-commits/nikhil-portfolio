
let score = 0;
let time = 10;
let started = false;

const btn = document.getElementById("clickBtn");

btn.onclick = function () {

    if (!started) {
        started = true;
        startGame();
    }

    score++;
    document.getElementById("score").innerHTML = "⭐ Clicks: " + score;

};

function startGame() {

    let timer = setInterval(function () {

        time--;

        document.getElementById("timer").innerHTML = "⏳ Time: " + time;

        if (time <= 0) {

            clearInterval(timer);

            btn.disabled = true;

            let badge = "😊 Beginner";

            if (score >= 30) badge = "🥉 Fast Hands";
            if (score >= 60) badge = "🥈 Speed Master";
            if (score >= 90) badge = "🥇 Click Legend";

            let highScore = localStorage.getItem("clickHighScore") || 0;

            if (score > highScore) {
                highScore = score;
                localStorage.setItem("clickHighScore", score);
            }

            document.getElementById("result").innerHTML = `
                <h2>🏆 Game Over!</h2>
                <h3>⭐ Your Score: ${score}</h3>
                <h3>🥇 High Score: ${highScore}</h3>
                <h3>${badge}</h3>
                <br>
                <button onclick="location.reload()">
                    🔄 Play Again
                </button>
            `;
        }

    }, 1000);

}