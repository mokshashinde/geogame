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
    new Question("What country does this flag belong to?<br><img src='algeria.gif' height=200px/></br>", ["Liberia", "Algeria","Ireland", "Zimbabwe"], "Algeria"),

    new Question("What country does this flag belong to?<br><img src='angola.gif' height=200px/></br>", ["South Korea", "New Zeland","Nigeria", "Angola"], "Angola"),

    new Question("What country does this flag belong to?<br><img src='benin.gif' height=200px/></br>", ["Benin", "Egypt","Canada", "Liberia"], "Benin"),

    new Question("What country does this flag belong to?<br><img src='egypt.gif' height=200px/></br>", ["India", "Zimbabwe","Egypt", "Greece"], "Egypt"),

    new Question("What country does this flag belong to?<br><img src='southafrica.gif' height=200px/></br>", ["Bhutan", "South Africa","Canada", "Nigeria"], "South Africa"),

    new Question("What country does this flag belong to?<br><img src='nigeria.gif' height=200px/></br>", ["Liberia", "Australia","Mexico", "Nigeria"], "Nigeria"),

    new Question("What country does this flag belong to?<br><img src='zimbabwe.gif' height=200px/></br>", ["Zimbabwe", "Germany","Peru", "India"], "Zimbabwe"),

    new Question("What country does this flag belong to?<br><img src='liberia.gif' height=200px/></br>", ["Qatar", "Liberia","Nigeria", "Australia"], "Liberia"),



];


var quiz = new Quiz(questions);


populate();
