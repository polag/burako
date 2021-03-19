function Player(name, points,oldPoints){
    this.name = name;
    this.points = points;
    this.oldPoints = oldPoints;
    this.updatePoints = function(){
        return this.oldPoints+= this.points;
    };
}
let player1;
let player2;

function getNames(){
    name1 = prompt("Ingrese nombre de jugador 1");
    name2 = prompt("Ingrese nombre de jugador 2");
    name3 = prompt("Ingrese nombre de jugador 3");


    return [name1,name2,name3];
}


function setPlayers(){
    let players = getNames();
    player1= new Player(players[0],0,0);
    player2= new Player(players[1],0,0);    
    player3= new Player(players[2],0,0);    
    //console.log(player1);

    document.querySelector("#player1").innerHTML = player1.name;
    document.querySelector("#player2").innerHTML = player2.name;
    document.querySelector("#player3").innerHTML = player3.name;
}

function calcularPuntos() {
    let pointsP1 = parseInt(document.querySelector("#points1").value);
    let pointsP2 = parseInt(document.querySelector("#points2").value);
    let pointsP3 = parseInt(document.querySelector("#points3").value);
    player1.points =  pointsP1;
    player2.points =  pointsP2;
    player3.points =  pointsP3;
    //console.log(player1.name);
    player1.updatePoints();
    player2.updatePoints();
    player3.updatePoints();


    if ( player1.oldPoints >= 3000 || player2.oldPoints >= 3000 || player3.oldPoints >= 3000 ) {
       if (player1.oldPoints > player2.oldPoints && player1.oldPoints > player3.oldPoints) {
            alert("El ganador es " + player1.name);
        }
        else if(player2.oldPoints > player1.oldPoints && player2.oldPoints > player3.oldPoints){
            alert("El ganador es " + player2.name);
        }
        else{
            alert("El ganador es " + player3.name);
        }
    }

    document.querySelector("#result1").innerHTML = player1.oldPoints;
    document.querySelector("#result2").innerHTML = player2.oldPoints;
    document.querySelector("#result3").innerHTML = player3.oldPoints;
}

function resetPlayers(){
    player1.oldPoints = 0;
    player2.oldPoints = 0;
    player3.oldPoints = 0;


    document.querySelector("#result1").innerHTML = player1.oldPoints;
    document.querySelector("#result2").innerHTML = player2.oldPoints;
    document.querySelector("#result3").innerHTML = player3.oldPoints;
    document.querySelector("#points1").value = 0;
    document.querySelector("#points2").value = 0;
    document.querySelector("#points3").value = 0;
}

