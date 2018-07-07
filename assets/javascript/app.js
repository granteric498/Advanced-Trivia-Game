// Establish counters for correct, incorrect, and unanswered questions.
var correct = 0;
var incorrect = 0;
var unanswered = 0;

// Establish variable for the timer.
var time = 15;

// Establish variable for the clock interval (1 second)
var intervalId;

// When user clicks on start, function "run" will start.
$("#start").on("click", run);

function run() {
    // Displays the questions:
    // Hide all questions until they get prompted later.
    $("#text").css("display", "inline");
    $("#number2").css("display", "none");
    $("#number3").css("display", "none");
    $("#number4").css("display", "none");
    $("#number5").css("display", "none");
    $("#number6").css("display", "none");
    $("#number7").css("display", "none");
    $("#number8").css("display", "none");

    // Hides the start button
    $("#start").css("display", "none");

    // Sets the variable for the clock interval at one second
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
};  

function decrement() {
    // Clock will go down one second and display each second
    time--;
    $("#clock").html("<h2>Time remaining: " + time + "</h2>");
};

function nextQuestion() {
    $("#clock").css("display", "inline");
    $("#resultImage").css("display", "none");
    $("#result").css("display", "none");
    time = 15;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
};

    // Question 1
  $("button[name='question1']").click(function() {    
    // After 5 seconds of displaying the result of question 1, question 2 gets displayed
    setTimeout(
        function() {
            $("#number2").css("display", "inline");
            $("#number1").css("display", "none");
            nextQuestion();
        }, 5000
    );

    // Adds image regardless of result
    $("#resultImage").html('<img src="assets/images/question1.gif">');

    // Hides the text of question 1 and clock
    $("#number1").css("display", "none");
    $("#clock").css("display", "none");

    if ($(this).attr('value') == 1) {
        // Change clicked to yes. If it is no when time is up, then user receives different prompt.
        $(this).data('clicked', 'yes');
        // All correct answers have a value of one.
        // If selected answer has value of one, correct answer ++
        correct++;
        $("#result").html("<h2>Correct!</h2><h3>The Bears were the 30th ranked offense in the league.</h3>");
    } else if ($(this).attr('value') == 0) {
        // Change clicked to yes. If it is no when time is up, then user receives different prompt.
        $(this).data('clicked', 'yes');
        // All remaining values are 0, which is an incorrect answer.
        incorrect++;
        $("#result").html("<h2>Nope!</h2><h3>The Bears were the 30th ranked offense in the league.</h3>");
    }
  });

  // Question 2
  $("button[name='question2']").click(function() {
    setTimeout(
        function() {
            $("#number3").css("display", "inline");
            $("#number2").css("display", "none");
            nextQuestion();
        }, 5000
    );

    $("#resultImage").css("display", "inline");
    $("#resultImage").html('<img src="assets/images/question2.gif">');

    $("#result").css("display", "inline");

    $("#number2").css("display", "none");
    $("#clock").css("display", "none");

    if ($(this).attr('value') == 1) {
        $(this).data('clicked', 'yes');
        correct++;
        $("#result").html("<h2>Correct!</h2><h3>The Bears were the 10th ranked defense in the league.</h3>");
    } else if ($(this).attr('value') == 0) {
        $(this).data('clicked', 'yes');
        incorrect++;
        $("#result").html("<h2>Nope!</h2><h3>The Bears were the 10th ranked defense in the league.</h3>");
    };
  });

  // Question 3
  $("button[name='question3']").click(function() {
    setTimeout(
        function() {
            $("#number4").css("display", "inline");
            $("#number3").css("display", "none");
            nextQuestion();
        }, 5000
    );

    $("#resultImage").css("display", "inline");
    $("#resultImage").html('<img src="assets/images/question3.gif">');

    $("#result").css("display", "inline");

    $("#number3").css("display", "none");
    $("#clock").css("display", "none");

    if ($(this).attr('value') == 1) {
        $(this).data('clicked', 'yes');
        correct++;
        $("#result").html("<h2>Correct!</h2><h3>The Bears went 5-11 in 2017.</h3>");
    } else if ($(this).attr('value') == 0) {
        $(this).data('clicked', 'yes');
        incorrect++;
        $("#result").html("<h2>Nope!</h2><h3>The Bears went 5-11 in 2017.</h3>");
    };
  });

  // Question 4
  $("button[name='question4']").click(function() {
    setTimeout(
        function() {
            $("#number5").css("display", "inline");
            $("#number4").css("display", "none");
            nextQuestion();
        }, 5000
    );

    $("#resultImage").css("display", "inline");
    $("#resultImage").html('<img src="assets/images/question4.gif">');

    $("#result").css("display", "inline");

    $("#number4").css("display", "none");
    $("#clock").css("display", "none");

    if ($(this).attr('value') == 1) {
        $(this).data('clicked', 'yes');
        correct++;
        $("#result").html("<h2>Correct!</h2><h3>Roquan Smith was the 2018 First Round Pick.</h3>");
    } else if ($(this).attr('value') == 0) {
        $(this).data('clicked', 'yes');
        incorrect++;
        $("#result").html("<h2>Nope!</h2><h3>Roquan Smith was the 2018 First Round Pick.</h3>");
    };
  });

    // Question 5
    $("button[name='question5']").click(function() {
        setTimeout(
            function() {
                $("#number6").css("display", "inline");
                $("#number5").css("display", "none");
                nextQuestion();
            }, 5000
        );

        $("#resultImage").css("display", "inline");
        $("#resultImage").html('<img src="assets/images/question5.gif">');
    
        $("#result").css("display", "inline");
    
        $("#number5").css("display", "none");
        $("#clock").css("display", "none");
    
        if ($(this).attr('value') == 1) {
            $(this).data('clicked', 'yes');
            correct++;
            $("#result").html("<h2>Correct!</h2><h3>Matt Nagy is the Chicago Bears Head Coach.<br>(seen smiling in the background)</h3>");
        } else if ($(this).attr('value') == 0) {
            $(this).data('clicked', 'yes');
            incorrect++;
            $("#result").html("<h2>Nope!</h2><h3>Matt Nagy is the Chicago Bears Head Coach.<br>(seen smiling in the background)</h3>");
        };
      });

  // Question 6
  $("button[name='question6']").click(function() {
    setTimeout(
        function() {
            $("#number7").css("display", "inline");
            $("#number6").css("display", "none");
            nextQuestion();
        }, 5000
    );

    $("#resultImage").css("display", "inline");
    $("#resultImage").html('<img src="assets/images/question6.gif">');

    $("#result").css("display", "inline");

    $("#number6").css("display", "none");
    $("#clock").css("display", "none");

    if ($(this).attr('value') == 1) {
        $(this).data('clicked', 'yes');
        correct++;
        $("#result").html("<h2>Correct!</h2><h3>Mitchell Trubisky is the starting quarterback.</h3>");
    } else if ($(this).attr('value') == 0) {
        $(this).data('clicked', 'yes');
        incorrect++;
        $("#result").html("<h2>Nope!</h2><h3>Mitchell Trubisky is the starting quarterback.</h3>");
    };
  });

    // Question 7
    $("button[name='question7']").click(function() {
        setTimeout(
            function() {
                $("#number8").css("display", "inline");
                $("#number7").css("display", "none");
                nextQuestion();
            }, 5000
        );
    
        $("#resultImage").css("display", "inline");
        $("#resultImage").html('<img src="assets/images/question7.gif">');
    
        $("#result").css("display", "inline");
    
        $("#number7").css("display", "none");
        $("#clock").css("display", "none");
    
        if ($(this).attr('value') == 1) {
            $(this).data('clicked', 'yes');
            correct++;
            $("#result").html("<h2>Correct!</h2><h3>The Bears last went to the playoffs in 2010.</h3>");
        } else if ($(this).attr('value') == 0) {
            $(this).data('clicked', 'yes');
            incorrect++;
            $("#result").html("<h2>Nope!</h2><h3>The Bears last went to the playoffs in 2010.</h3>");
        };
      });

    // Question 8
  $("button[name='question8']").click(function() {
    setTimeout(
        function() {
            $("#number8").css("display", "none");
            $("#clock").css("display", "inline");
            nextQuestion();

            setTimeout(
                function() {
                    $("#number8").css("display", "none");
                    $("#clock").css("display", "none");
                    $("#resultImage").css("display", "inline");
                    $("#resultImage").html('<img src="assets/images/question9.gif">');
                    $("#result").css("display", "inline");
                    $("#result").html("<h2>Final Results!</h2><h3>Correct: " + correct + "<br>Incorrect: " + incorrect + "<br>Unanswered: " + unanswered + "</h3>");
                }, 5
            )
        }, 5000
    );

    $("#resultImage").css("display", "inline");
    $("#resultImage").html('<img src="assets/images/question8.gif">');

    $("#result").css("display", "inline");

    $("#number8").css("display", "none");
    $("#clock").css("display", "none");

    if ($(this).attr('value') == 1) {
        $(this).data('clicked', 'yes');
        correct++;
        $("#result").html("<h2>Correct!</h2><h3>Jordan Howard was the last Pro Bowler.</h3>");
    } else if ($(this).attr('value') == 0) {
        $(this).data('clicked', 'yes');
        incorrect++;
        $("#result").html("<h2>Nope!</h2><h3>Jordan Howard was the last Pro Bowler.</h3>");
    };
  });

  /*
  FIND OUT HOW TO PROMPT UNANSWERED QUESTION
  if ($("button[name='question1']").data('clicked') == 'no' && time === 0) {
    // If the question does not have any checked boxes,
    // it counts as an unanswered question. Unanswered++
    unanswered++;
    console.log(unanswered);
    $("#result").html("<h2>Out of time!</h2><br><h3>The Bears were the 30th ranked offense in the league.</h3>");
};

   */

    /*
    Adding a retry button:
    $("#retry").html("Would you like to go again?")
    $("#retryButton").html("<button id='retryActiveButton'>Yes!</button>"
    $("#retryActiveButton").on("click", run);
    */

    // Make sure you convert time into minutes and seconds!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
