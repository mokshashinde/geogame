const questions = [
    {
        question: "The capital of Portugal is....?",
        optionA: "faro",
        optionB: "Porto",
        optionC: "Braga",
        optionD: "Lisbon",
        correctOption: "optionD"
    },

    {
        question: "What is Slovakia's capital city ?",
        optionA: "Riga",
        optionB: "Vilnius",
        optionC: "Bratislava",
        optionD: "Bonn",
        correctOption: "optionC"
    },

    {
        question: "If you were in Vilnius, what country would you be in?",
        optionA: "Lithuania",
        optionB: "Albania",
        optionC: "Bosnia",
        optionD: "Liechtenstein",
        correctOption: "optionA"
    },

    {
        question: "Slovakia's capital city is 75 kilometres away from which other European capital?",
        optionA: "Berlin",
        optionB: "Baku",
        optionC: "Vienna",
        optionD: "Geneva",
        correctOption: "optionB"
    },

    {
        question: "Time for a curveball. What's the capital of Greenland? (Technically it's a Danish devolved province but just go with me on this one)  ?",
        optionA: "Nuuk",
        optionB: "Kranny",
        optionC: "Glosoli",
        optionD: "Njosnavelin",
        correctOption: "optionA"
    },

    {
        question: " If you were in Chisinau, you'd be in.... ",
        optionA: "Armenia",
        optionB: "Moldova",
        optionC: "Montenegro",
        optionD: "North Maccedonia",
        correctOption: "optionB"
    },

    {
        question: " The main city in Slovenia is.... ?",
        optionA: "Ljubljana",
        optionB: "Vilnius",
        optionC: "Monteverde",
        optionD: "Tirana",
        correctOption: "optionA"
    },

    {
        question: " What about Montenegro?",
        optionA: "Podgorica",
        optionB: "Herceg Novi",
        optionC: "Niksic",
        optionD: "Bar",
        correctOption: "optionA"
    },

    {
        question: " We're going to end with some tricky ones. Where is Vaduz?",
        optionA: "Luxembourg",
        optionB: "Malta",
        optionC: "Andorra",
        optionD: "Liechtenstein",
        correctOption: "optionD"
    },

    {
        question: "Last one now - the capital of North Macedonia is... ?",
        optionA: "Skopje",
        optionB: "Tallinn",
        optionC: "Riga",
        optionD: "Nicosia",
        correctOption: "optionA"
    },

    {
        question: "Germany - the land of sausages, cheese and beer! What's their capital?",
        optionA: "Dublin",
        optionB: "Berlin",
        optionC: "Munich",
        optionD: "Frankfurt",
        correctOption: "optionB"
    },

    {
        question: "Ahhh, The Netherlands. Doesn't it look like a great way of life over there? Especially in its capital, called:?",
        optionA: "The Hague",
        optionB: "Keukenhof",
        optionC: "Rotterdam",
        optionD: "Amsterdam",
        correctOption: "optionD"
    },


    {
        question: "Denmark, the home of Lego! What is its capital though?",
        optionA: "Copenhagen",
        optionB: "Legoland HAHAHAHA",
        optionC: "Zealand",
        optionD: "Bornholm",
        correctOption: "optionA"
    },

    {
        question: "Finland is ranked #1 as the happiest country in the world - jealous. Capital name:?",
        optionA: "Gothenburg",
        optionB: "Copenhagen",
        optionC: "Helsinki",
        optionD: "Gtland",
        correctOption: "optionC"
    },

    {
        question: " Portugal is a place we'd all rather be right now, but what is its capital?",
        optionA: "Evora",
        optionB: "Sintra",
        optionC: "Porto",
        optionD: "Lisbon",
        correctOption: "optionD"
    },

    {
        question: "Sweden is a Scandinavian nation with thousands of coastal islands and inland lakes with a capital called...?",
        optionA: "Gothenburg",
        optionB: "Stockholm",
        optionC: "Kiruna",
        optionD: "Skansen",
        correctOption: "optionB"
    },

    {
        question: " Belarus has only been in the top 10 on Eurovision once since 2004. Oh well, their capital is nice! It is:?",
        optionA: "Yes",
        optionB: "Brest",
        optionC: "Minsk",
        optionD: "Niasviz",
        correctOption: "optionA"
    },

    {
        question: "Los Angeles is also known as ?",
        optionA: "Angels City",
        optionB: "Shining city",
        optionC: "City of Angels",
        optionD: "Lost Angels",
        correctOption: "optionC"
    },

    {
        question: " Let's ramp things up a bit now - the capital of Montenegro is...?",
        optionA: "Kotor",
        optionB: "Budva",
        optionC: "Sveti Stefan",
        optionD: "Podgorica",
        correctOption: "optionD"
    },

    {
        question: " Malta is full of history, are you full of knowledge on what its capital is??",
        optionA: "Mdina",
        optionB: "Valletta",
        optionC: "Gozo",
        optionD: "Comina",
        correctOption: "optionB"
    },

    {
        question: "The official languages of Cyprus are Greek and Turkish, but what is their capital?",
        optionA: "Greekturkish City",
        optionB: "Paphos",
        optionC: "Nicosia",
        optionD: "Limassol",
        correctOption: "optionC"
    },

    {
        question: "Over 2 million people live in North Macedonia... is that where you ran away to, Georgia?",
        optionA: "Sorry...Skopje",
        optionB: "Ohrid",
        optionC: "Bitola",
        optionD: "Bitola",
        correctOption: "optionA"
    },

    {
        question: "Lots of people know that The Vatican City is the smallest country in the world, less know the capital...?",
        optionA: "StPeter's Basilica",
        optionB: "Sistine Chapel",
        optionC: "San Marino",
        optionD: "Urr...is it...The Vatican City??",
        correctOption: "optionD"
    },

    {
        question: "Latvia's landscape is marked by wide beaches as well as dense, sprawling forests. Capital name is:?",
        optionA: "Jurmula",
        optionB: "Riga",
        optionC: "Sigulda",
        optionD: "Liepaja",
        correctOption: "optionB"
    },

    {
        question: "Finally, basketball is the most popular sport in Lithuania... obviously... what's their capital though?",
        optionA: "Vilnius",
        optionB: "klapeda",
        optionC: "Trakai",
        optionD: "Kaunas",
        correctOption: "optionA"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() {
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
