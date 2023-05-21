player1 = localStorage.getItem("PlayerOne");
player2 = localStorage.getItem("PlayerTwo");
document.getElementById("p1").innerHTML = player1;
document.getElementById("p2").innerHTML = player2;
score1 = 0;
score2 = 0;
document.getElementById("player1score").innerHTML = score1;
document.getElementById("player2score").innerHTML = score2;
document.getElementById("questionturn").innerHTML = "Question Turn: " + player1;
document.getElementById("answerturn").innerHTML = "Answer Turn: " + player2;

function send() {
    number1 = document.getElementById("n1").value;
    number1 = document.getElementById("n2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "X" + number2 + "<h4>";
    input_box = "<br>Answer: <input type='text'id='input_check_box'>";
    check_button = "<br><br><button onclick='check()'>Check></button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}