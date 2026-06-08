var imgs = [
'🐶','🐱','🦊','🐰',
'🦄','🐬','🦋','🐼',
'🐶','🐱','🦊','🐰',
'🦄','🐬','🦋','🐼'
];

var firstCard = "";
var firstEmoji = "";
var moves = 0;
var pairs = 0;

createGame();

function createGame(){

    document.getElementById("board").innerHTML = "";

    for(var i=0;i<imgs.length;i++){

        document.getElementById("board").innerHTML +=
        "<div class='card' id='c"+i+"'>?</div>";

    }

    for(var i=0;i<imgs.length;i++){

        document.getElementById("c"+i)
        .addEventListener("click", openCard);

    }
}

function openCard(e){

    var id = e.target.id;

    var num = id.replace("c","");

    if(document.getElementById(id).innerHTML != "?"){
        return;
    }

    document.getElementById(id).innerHTML = imgs[num];

    if(firstCard == ""){

        firstCard = id;
        firstEmoji = imgs[num];

    }
    else{

        moves++;

        document.getElementById("mv").innerHTML = moves;

        if(firstEmoji == imgs[num]){

            pairs++;

            document.getElementById("pr").innerHTML = pairs;

            document.getElementById("msg").innerHTML =
            "Nice Match!";

            if(pairs == 8){

                document.getElementById("win").style.display =
                "block";

                document.getElementById("win").innerHTML =
                "You Won in " + moves + " Moves!";
            }

        }
        else{

            document.getElementById("msg").innerHTML =
            "Not Match!";

            document.getElementById(firstCard).innerHTML = "?";

            document.getElementById(id).innerHTML = "?";
        }

        firstCard = "";
        firstEmoji = "";
    }
}

document.getElementById("rbtn")
.addEventListener("click", restartGame);

function restartGame(){

    firstCard = "";
    firstEmoji = "";

    moves = 0;
    pairs = 0;

    document.getElementById("mv").innerHTML = "0";
    document.getElementById("pr").innerHTML = "0";

    document.getElementById("msg").innerHTML =
    "Click two cards";

    document.getElementById("win").style.display =
    "none";

    createGame();
}
