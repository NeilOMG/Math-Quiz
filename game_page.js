player_1_name = localStorage.getItem("player_1");
player_2_name = localStorage.getItem("player_2");

var player_1_score = 0
var player_2_score = 0

document.getElementById("player1_name").innerHTML = player_1_name + ": "
document.getElementById("player2_name").innerHTML = player_2_name + ": "

document.getElementById("player1_score").innerHTML = player_1_score
document.getElementById("player2_score").innerHTML = player_2_score

document.getElementById("player_question").innerHTML = "question turn :" + player_1_name
document.getElementById("player_answer").innerHTML = "answer turn :" + player_2_name


function send() {

    number_1=document.getElementById("number1").value;
    number_2=document.getElementById("number2").value;
    actual_answer=parseInt(number_1) * parseInt(number_2)
    question = "<h4>" + number_1 + " X " + number_2 +"</h4>"
    input = "<br>Answer: <input type='text' id='input_check_box'>"
    button = "<br></br><button class='btn btn-info' onclick='check()'>Check</button>"

    row = question + input + button;

    document.getElementById("output").innerHTML = row

    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}

question_turn = "player1"
answer_turn = "player2"

function check() {

    get_answer = document.getElementById("input_check_box").value;
    

    if (get_answer == actual_answer) {

        if (answer_turn == "player1") {

            player_1_score = player_1_score + 1
            document.getElementById("player1_score").innerHTML = player_1_score

        }
        else {

            player_2_score = player_2_score + 1
            document.getElementById("player2_score").innerHTML = player_2_score

        }

    }

    if(question_turn=="player1"){

        question_turn="player2"
        document.getElementById("player_question").innerHTML = "question turn :" + player_2_name

    }
    else{

        question_turn="player1"
        document.getElementById("player_question").innerHTML = "question turn :" + player_1_name

    }

    if(answer_turn=="player1"){

        answer_turn="player2"
        document.getElementById("player_answer").innerHTML = "answer turn :" + player_2_name

    } 
    else{

        answer_turn="player1"
        document.getElementById("player_answer").innerHTML = "answer turn :" + player_1_name

    }
    
    document.getElementById("output").innerHTML=""

}