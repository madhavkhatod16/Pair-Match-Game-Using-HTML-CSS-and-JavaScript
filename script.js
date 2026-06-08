var imgs = [
'🐶','🐱','🦊','🐰',
'🦄','🐬','🦋','🐼',
'🐶','🐱','🦊','🐰',
'🦄','🐬','🦋','🐼'
];

var first = "";
var firstEmoji = "";
var moves = 0;
var pairs = 0;

for(var i=0;i<imgs.length;i++){

    document.getElementById("board").innerHTML +=
    "<button id='c"+i+"'>?</button>";

}

for(var i=0;i<imgs.length;i++){

    document.getElementById("c"+i)
    .addEventListener("click", cardClick);

}

function cardClick(){

    var id = event.target.id;
    var num = id.replace("c","");

    document.getElementById(id).innerHTML =
    imgs[num];

    if(first == ""){

        first = id;
        firstEmoji = imgs[num];

    }
    else{

        moves++;
        document.getElementById("mv").innerHTML =
        moves;

        if(firstEmoji == imgs[num]){

            pairs++;
            document.getElementById("pr").innerHTML =
            pairs;

            document.getElementById("msg").innerHTML =
            "Nice Match!";

        }
        else{

            document.getElementById("msg").innerHTML =
            "Not Match!";
        }

        first = "";
        firstEmoji = "";
    }

}
