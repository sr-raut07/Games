let playing = false;
    let timeremaining;
    let score;
    let x, y, z, z1, choiceRandom, operator;
    let startTime; // To track the start time
    
    document.getElementById('startReset').onclick = function () {
        if (playing == true) {
            location.reload();
        } else {
            playing = true;
            hide("gameover");
            show("timeremaining");
            document.getElementById('startReset').innerHTML = "Reset Game";
            score = 0;
            document.getElementById('scorevalue').innerHTML = score;
            startTime = Date.now(); // Record the starting time
            countdown();
            generateQA();
        }
    }

    function countdown() {
        let countdownInterval = setInterval(function () {
            let elapsed = Math.floor((Date.now() - startTime) / 1000); // Time elapsed in seconds
            timeremaining = 60 - elapsed;
            document.getElementById('timeremainingvalue').innerHTML = timeremaining;

            if (timeremaining <= 0) {
                stopcountdown(countdownInterval);
                show("gameover");
                document.getElementById('startReset').innerHTML = "Start Game";
                document.getElementById("gameover").innerHTML = "<p>GAME OVER</p><br><p>YOUR SCORE IS " + score + "</p>";
                playing = false;
            }
        }, 100); // Check the elapsed time frequently
    }

    function stopcountdown(interval) {
        clearInterval(interval);
    }

    function generateQA() {
        x = Math.round(1 + Math.random() * 9);
        y = Math.round(1 + Math.random() * 9);
        
        // Randomly select an operator
        let operators = ['+', '-', 'x'];
        operator = operators[Math.floor(Math.random() * operators.length)];

        if (operator == '+') {
            z = x + y;
        } else if (operator == '-') {
            z = x - y;
        } else {
            z = x * y;
        }

        document.getElementById("question").innerHTML = x + ' ' + operator + ' ' + y;
        
        // Place the correct answer in a random box
        choiceRandom = Math.round(1 + Math.random() * 3);
        document.getElementById('box' + choiceRandom).innerHTML = z;
        let wrongAnswers = [z];

        for (let i = 1; i < 5; i++) {
            if (i != choiceRandom) {
                do {
                    x = Math.round(1 + Math.random() * 9);
                    y = Math.round(1 + Math.random() * 9);

                    if (operator == '+') {
                        z1 = x + y;
                    } else if (operator == '-') {
                        z1 = x - y;
                    } else {
                        z1 = x * y;
                    }
                } while (wrongAnswers.indexOf(z1) > -1);
                
                wrongAnswers.push(z1);
                document.getElementById('box' + i).innerHTML = z1;
            }
        }
    }

    for (let i = 1; i < 5; i++) {
        document.getElementById("box" + i).onclick = function () {
            if (playing == true) {
                if (this.innerHTML == z) {
                    show("correct");
                    hide("wrong");
                    setTimeout(function () {
                        hide("correct");
                        hide("wrong");
                    }, 1000);
                    score++;
                    document.getElementById('scorevalue').innerHTML = score;
                    generateQA();
                } else {
                    hide("correct");
                    show("wrong");
                    setTimeout(function () {
                        hide("wrong");
                    }, 1000);
                }
            }
        }
    }

    function show(id) {
        document.getElementById(id).style.display = "block";
    }

    function hide(id) {
        document.getElementById(id).style.display = "none";
    }


    /*
    <!DOCTYPE html>
    <html lang="en">
    <body>
    <div id="container">
        <div id="score">Score: <span id="scorevalue">0</span></div>
        <div id="correct">Correct</div>
        <div id="wrong">Try again</div>
        <div id="question"></div>
        <div id="instruction"> Click on the answer below</div>
        <div id="choices">
            <div class="box" id="box1"></div>
            <div class="box" id="box2"></div>
            <div class="box" id="box3"></div>
            <div class="box" id="box4"></div>
        </div>
        <div id="startReset">Start Game</div>
        <div id="timeremaining">Time remaining: <span id="timeremainingvalue">60</span> sec</div>
        <div id="gameover"></div>
    </div>
<script>
let playing = false;
    let timeremaining;
    let score;
    let x, y, z, z1, choiceRandom, operator;
    let startTime; // To track the start time
    
    document.getElementById('startReset').onclick = function () {
        if (playing == true) {
            location.reload();
        } else {
            playing = true;
            hide("gameover");
            show("timeremaining");
            document.getElementById('startReset').innerHTML = "Reset Game";
            score = 0;
            document.getElementById('scorevalue').innerHTML = score;
            startTime = Date.now(); // Record the starting time
            countdown();
            generateQA();
        }
    }

    function countdown() {
        let countdownInterval = setInterval(function () {
            let elapsed = Math.floor((Date.now() - startTime) / 1000); // Time elapsed in seconds
            timeremaining = 60 - elapsed;
            document.getElementById('timeremainingvalue').innerHTML = timeremaining;

            if (timeremaining <= 0) {
                stopcountdown(countdownInterval);
                show("gameover");
                document.getElementById('startReset').innerHTML = "Start Game";
                document.getElementById("gameover").innerHTML = "<p>GAME OVER</p><br><p>YOUR SCORE IS " + score + "</p>";
                playing = false;
            }
        }, 100); // Check the elapsed time frequently
    }

    function stopcountdown(interval) {
        clearInterval(interval);
    }

    function generateQA() {
        x = Math.round(1 + Math.random() * 9);
        y = Math.round(1 + Math.random() * 9);
        
        // Randomly select an operator
        let operators = ['+', '-', 'x'];
        operator = operators[Math.floor(Math.random() * operators.length)];

        if (operator == '+') {
            z = x + y;
        } else if (operator == '-') {
            z = x - y;
        } else {
            z = x * y;
        }

        document.getElementById("question").innerHTML = x + ' ' + operator + ' ' + y;
        
        // Place the correct answer in a random box
        choiceRandom = Math.round(1 + Math.random() * 3);
        document.getElementById('box' + choiceRandom).innerHTML = z;
        let wrongAnswers = [z];

        for (let i = 1; i < 5; i++) {
            if (i != choiceRandom) {
                do {
                    x = Math.round(1 + Math.random() * 9);
                    y = Math.round(1 + Math.random() * 9);

                    if (operator == '+') {
                        z1 = x + y;
                    } else if (operator == '-') {
                        z1 = x - y;
                    } else {
                        z1 = x * y;
                    }
                } while (wrongAnswers.indexOf(z1) > -1);
                
                wrongAnswers.push(z1);
                document.getElementById('box' + i).innerHTML = z1;
            }
        }
    }

    for (let i = 1; i < 5; i++) {
        document.getElementById("box" + i).onclick = function () {
            if (playing == true) {
                if (this.innerHTML == z) {
                    show("correct");
                    hide("wrong");
                    setTimeout(function () {
                        hide("correct");
                        hide("wrong");
                    }, 1000);
                    score++;
                    document.getElementById('scorevalue').innerHTML = score;
                    generateQA();
                } else {
                    hide("correct");
                    show("wrong");
                    setTimeout(function () {
                        hide("wrong");
                    }, 1000);
                }
            }
        }
    }

    function show(id) {
        document.getElementById(id).style.display = "block";
    }

    function hide(id) {
        document.getElementById(id).style.display = "none";
    }

</script>
</body>
</html>
    */



/*
class Student
{
    public static void main(Strings args[])
    {
        int a = 5;
        int b = 23;
        int c;
        c = a + b;
        System.out.println("The sum of "+a+" and "+b" is: " +c);
    }
}
*/