var correctAs = 0;
var wrongAs = 0;
var number = 10;
var intervalId;

var questions = ["#first-question", "#second-question", "#third-question"];
var answers = ["France", "Klose", "Brazil"];
var j = 0;

//Setting timer

$(document).ready(function () {


    runTimer();
    $(questions[0]).show();
    //click function to submit the answer
    $(".choice").on("click", function () {

        var userAnswer = $(this).val();

        //debugger;
        if (userAnswer === answers[j]) {
            correctAs++
            console.log("correct answers: " + correctAs);
            alert("Answer is correct!");

            $(questions[j]).replaceWith($(questions[j + 1]));

            setTimeout(showNext, 2000)
        }
        // incorrect answer

        else {
            wrongAs++
            console.log("wrong answers: " + wrongAs);
            alert("Answer is wrong!");
            $(questions[j]).replaceWith($(questions[j + 1]));
            setTimeout(showNext, 2000)
        }
    })
    function showNext() {
        $(questions[j + 1]).show();
        j++
        number = 10;
    }
    function runTimer() {
        clearInterval(intervalId);
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

})

