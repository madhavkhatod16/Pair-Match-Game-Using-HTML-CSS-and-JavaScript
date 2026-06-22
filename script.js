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
var lockBoard = false;

shuffleCards();
createGame();

function shuffleCards(){
    imgs.sort(() => Math.random() - 0.5);
}

function createGame(){

    document.getElementById("board").innerHTML = "";

    for(var i=0;i<imgs.length;i++){

        document.getElementById("board").innerHTML +=
        `<div class="card" id="c${i}">?</div>`;
    }

    for(var i=0;i<imgs.length;i++){

        document.getElementById("c"+i)
        .addEventListener("click", openCard);
    }
}

function openCard(e){

    if(lockBoard) return;

    var id = e.target.id;
    var num = id.replace("c","");

    if(id === firstCard) return;

    if(document.getElementById(id).innerHTML !== "?"){
        return;
    }

    document.getElementById(id).innerHTML = imgs[num];

    if(firstCard === ""){

        firstCard = id;
        firstEmoji = imgs[num];
    }
    else{

        moves++;
        document.getElementById("mv").innerHTML = moves;

        if(firstEmoji === imgs[num]){

            pairs++;

            document.getElementById("pr").innerHTML = pairs;

            document.getElementById("msg").innerHTML =
            "Nice Match!";

            firstCard = "";
            firstEmoji = "";

            if(pairs === 8){

                document.getElementById("win").style.display =
                "block";

                document.getElementById("win").innerHTML =
                "🎉 You Won in " + moves + " Moves!";
            }
        }
        else{

            document.getElementById("msg").innerHTML =
            "Not Match!";

            lockBoard = true;

            setTimeout(function(){

                document.getElementById(firstCard).innerHTML = "?";
                document.getElementById(id).innerHTML = "?";

                firstCard = "";
                firstEmoji = "";

                lockBoard = false;

            },800);
        }
    }
}

document.getElementById("rbtn")
.addEventListener("click", restartGame);

function restartGame(){

    firstCard = "";
    firstEmoji = "";
    moves = 0;
    pairs = 0;
    lockBoard = false;

    document.getElementById("mv").innerHTML = "0";
    document.getElementById("pr").innerHTML = "0";

    document.getElementById("msg").innerHTML =
    "Click two cards";

    document.getElementById("win").style.display =
    "none";

    shuffleCards();
    createGame();
}
