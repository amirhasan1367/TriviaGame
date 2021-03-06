var correctAs = 0;
var wrongAs = 0;
var number = 15;
var intervalId;

var questions = ["#q1", "#q2", "#q3", "#q4", "#q5", "#q6"];
var answers = ["Italy", "Ronaldo", "Brazil", "Klose", "Uruguay", "USA"];
var images = ["assets/images/zidane.gif", "assets/images/ronaldo.gif", "assets/images/brazil.gif", "assets/images/klose.gif", "assets/images/uruguay.gif", "assets/images/usa.gif"]
var j = 0;

//Setting timer

$(document).ready(function () {

    $("#startbtn").on("click", function () {
        runTimer();
        $(questions[0]).show();
        $("#startbtn").hide();
    })

    //click function to submit the answer
    $(".choice").on("click", function () {

        var userAnswer = $(this).val();

        //debugger;
        if (userAnswer === answers[j]) {
            if (j < questions.length - 1) {
                correctAs++
                //console.log("correct answers: " + correctAs);
                //alert("Answer is correct!");

                $(questions[j]).html("<h4>You were correct!</h4><img src=" + images[j] + " width='300px'>")
                setTimeout(replaceFunction, 3000);
                setTimeout(showNext, 4000);
                //console.log("j is : " + j);
            }
            if (j == questions.length - 1) {
                $(questions[j]).html("<h4>You were correct!</h4><img src=" + images[j] + " width='300px'>")
                setTimeout(finalScore, 4000);
            }
        }
        // incorrect answer

        else if (userAnswer !== answers[j]) {
            if (j < questions.length - 1) {
                wrongAs++
                //console.log("wrong answers: " + wrongAs);
                //alert("Answer is wrong!");
                $(questions[j]).html("<h4>Wrong answer! The correct answer is: <strong>" + answers[j] + "</strong></h4><img src=" + images[j] + " width='300px'>")
                setTimeout(replaceFunction, 3000);
                setTimeout(showNext, 4000);
            }
            if (j == questions.length - 1) {
                $(questions[j]).html("<h4>Wrong answer! The correct answer is: <strong>" + answers[j] + "</strong></h4><img src=" + images[j] + " width='300px'>")
                setTimeout(finalScore, 4000);
            }

        }
    })
    function replaceFunction() {
        $(questions[j]).replaceWith($(questions[j + 1]));
    }
    function showNext() {
        $(questions[j + 1]).show();
        j++
        number = 15;
        runTimer();
    }
    function runTimer() {
        clearInterval(intervalId);
        decrement();
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

        number--;

        $("#timer").html("<h3>Time left: " + number + " S</h3>");

        if (number === 0 && j < questions.length - 1 ) {

            //stop();
            //alert("time is up!");
            wrongAs++;
            //console.log("wrong answers: " + wrongAs);
            $(questions[j]).html("<h4>Your time is up! The correct answer was: <strong>" + answers[j] + "</strong></h4><img src=" + images[j] + " width='300px'>")
            setTimeout(replaceFunction, 3000);
            setTimeout(showNext, 4000);

        }
        else if (number === 0 && j == questions.length - 1 ) {

            //stop();
            //alert("time is up!");
            wrongAs++;
            //console.log("wrong answers: " + wrongAs);
            $(questions[j]).html("<h4>Your time is up! The correct answer was: <strong>" + answers[j] + "</strong></h4><img src=" + images[j] + " width='300px'>")
            setTimeout(finalScore, 4000);

        }
    }

    function stop() {

        clearInterval(intervalId);
    }

    function finalScore(){
        $(questions[j]).html("<h4>You correctly answered <strong>" + correctAs + "</strong> of <strong>" + questions.length + "</strong> questions</h4>")
    }

})

