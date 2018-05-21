var correctAs = 0;
var wrongAs = 0;
var number = 10;
var intervalId;

var questions = ["#first-question", "#second-question", "#third-question"];
var answers = ["France", "Brazil", "Italy"];

function newTrivia(q) {
    var number = 10;

}

//Seeting timer

function runTimer() {
    //clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {

    number--;

    $("#timer").html("<h3>Time left: " + number + " S</h3>");

    if (number === 0) {

        stop();
        alert("time is up!");
        wrongAs++;
        console.log("wrong answers: " + wrongAs);

    }
}

function stop() {

    clearInterval(intervalId);
}

runTimer();
$(questions[0]).show();
//click function to submit the answer
$("#submitbtn").on("click", function () {
    submitAnswer()
})

function submitAnswer() {
    var radios = $('[name="choice"]');
    console.log ("radios: "+ radios)
    var checked = false;
    var userAnswer;

    for (i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            checked = true;
            userAnswer = radios[i].value;
        }
    }
    // if user click submit button without selecting any option, alert box should be say "please select choice answer".
    if (!checked) {
        alert("please select choice answer");
        return;
    }


    // Correct answer
    if (userAnswer === "France") {
        correctAs++
        console.log("correct answers: " + correctAs);
        alert("Answer is correct!");
        
            $(questions[0]).replaceWith($(questions[1]));
            $(questions[1]).show();
      

    }
    // incorrect answer

    else {
        wrongAs++
        console.log("wrong answers: " + wrongAs);
        alert("Answer is wrong!");
        for (j=1; j < questions.length, j++;){
            $(questions[j]).replaceWith($(questions[j+1]));
            $(questions[j+1]).show();
        }
    }


}