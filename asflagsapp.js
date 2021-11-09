function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {

        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;


        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};


var questions = [
    new Question("What country does this flag belong to?<br><img src='afghanistan.gif' height=180px/></br>", ["Turkey", "Bangladesh","Singapore", "Japan"], "Afghanistan"),

    new Question("What country does this flag belong to?<br><img src='japan.gif' height=200px/></br>", ["South Korea", "New Zeland","Japan", "Australia"], "Japan"),

    new Question("What country does this flag belong to?<br><img src='canada.gif' height=200px/></br>", ["Brazil", "China","Canada", "France"], "Canada"),

    new Question("What country does this flag belong to?<br><img src='southkorea.gif' height=200px/></br>", ["India", "South Korea","Australia", "Greece"], "South Korea"),

    new Question("What country does this flag belong to?<br><img src='bangladesh.gif' height=200px/></br>", ["Bhutan", "Kenya","Canada", "Bangladesh"], "Bangladesh"),

    new Question("What country does this flag belong to?<br><img src='italy.gif' height=200px/></br>", ["Italy", "Australia","Mexico", "Romania"], "Italy"),

    new Question("What country does this flag belong to?<br><img src='germany.gif' height=200px/></br>", ["Australia", "Germany","Peru", "India"], "Germany"),

    new Question("What country does this flag belong to?<br><img src='australia.gif' height=200px/></br>", ["Qatar", "Canada","Nigeria", "Australia"], "Australia"),



];


var quiz = new Quiz(questions);


populate();
