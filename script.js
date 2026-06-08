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

for(var i=0; i<imgs.length; i++){

    document.getElementById("board").innerHTML +=
    "<div class='card' id='c"+i+"'>?</div>";

}

for(var i=0; i<imgs.length; i++){

    document.getElementById("c"+i).addEventListener("click", showCard);

}

function showCard(e){

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

        if(firstEmoji == imgs[num] && firstCard != id){

            pairs++;
            document.getElementById("pr").innerHTML = pairs;
            document.getElementById("msg").innerHTML = "Nice Match!";

            if(pairs == 8){

                document.getElementById("win").style.display = "block";
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

document.getElementById("rbtn").addEventListener("click", function(){

    location.reload();

});
