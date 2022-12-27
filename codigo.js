var answers = ["A", "C", "C"],
    tot = answers.length;

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function getCheckedValue(radioName) {
    var radios = document.getElementsByName(radioName);
    for (var y = 0; y < radios.length; y++)
        if (radios[y].checked) return radios[y].value;
}

function getScore() {
    var score = 0;
    for (var i = 0; i < tot; i++)
        if (getCheckedValue("question" + i) === answers[i]) score += 1;
    return score;
}

function returnScore() {
    document.getElementById("result").innerHTML =
        "Tu resultado es " + getScore() + "/" + tot;
       
    if (getScore() > 2) {
        
     
document.getElementById("myModal").style.display="block";
    }


}

function cerrar(){

    document.getElementById("myModal").style.display="none";



}