var imgs = [
'🐶','🐱','🦊','🐰',
'🦄','🐬','🦋','🐼',
'🐶','🐱','🦊','🐰',
'🦄','🐬','🦋','🐼'
];

var selected = [];
var moves = 0;
var pairs = 0;

imgs.forEach(function(img){

    document.getElementById("board").innerHTML +=
    "<div class='card'>" + img + "</div>";

});

var cards = document.querySelectorAll(".card");

cards.forEach(function(card){

    card.addEventListener("click", function(){

        selected.push(card.innerHTML);

        moves++;
        document.getElementById("mv").innerHTML = moves;

        if(selected.length == 2){

            if(selected[0] == selected[1]){

                pairs++;
                document.getElementById("pr").innerHTML = pairs;

                document.getElementById("msg").innerHTML =
                "Nice Match!";

            }
            else{

                document.getElementById("msg").innerHTML =
                "Not Match!";

            }

            selected = [];

        }

    });

});
