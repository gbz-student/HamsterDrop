class Play {
    constructor()
    {
        this.iTotalPlayer =0;
        this.iCurrentUser = 0;
        this.aPlayers = [];
        this.location = "";

    }
    reload(json)
    {
        this.iTotalPlayer=json.iTotalPlayer;
        json.aPlayers.forEach(function(element)
        {
           Game.addPlayer(element.name,element.idhamster)
        })
        //  this.aPlayers = json.aPlayers;
        this.location = json.location;
    }
    closeGame()
    {
        localStorage.removeItem("Game");
    }

    addPlayer(name, idHamster)
    {
        console.log("Création d'un nouveau joueur")

            var playertemp = new Player(this.iCurrentUser,name, idHamster);
            this.aPlayers[this.iCurrentUser] = playertemp;

            console.log("Le joueur " + (this.iCurrentUser + 1) + "/" + (this.iTotalPlayer) + "vient d'etre ajouter");
            console.log(this.aPlayers[this.iCurrentUser].name + "  " + idHamster)

            this.iCurrentUser++;

    }
    setiTotalPlayer(totalPlayer)
    {
        this.iTotalPlayer = totalPlayer;
        console.log("La partie est créé avec " + (this.getiTotalPlayer()) + " joueurs" );
    }
    getiCurrentUser()
    {
        return this.iCurrentUser + 1;
    }
    getiTotalPlayer()
    {
        return this.iTotalPlayer;
    }
    setLocation(location)
    {
        this.location = location;
        console.log("Play in" + location);
    }
    getaPlayers()
    {
        return this.aPlayers;
    }
    setaPlayers(aplayers)
    {
        this.aPlayers = aplayers;
    }


}
/*
class Tournament
{
    constructor(){
        this.tournament = [];
        this.nbrMatch = aPlayers.length/2;
        console.log(this.nbrMatch);
    }

    startTournamen(){
        for(i = 0; i<aPlayers.length; i+2)
        {
            addMatch(player[i], player[i+1])
            y = y+2;
        }
    }

    addMatch(player1,player2)
    {
        this.tournament.push(new Match(player1,player2));
    }

    winTournament()
    {

    }

}
/*
class Player {
    constructor(id,name,idhamster)
    {
        this.playerId = id;
        this.name = name;
        this.idhamster = idhamster;
        this.score = [];
        this.active = true;

        console.log("A new player " + this.name)
    }

    addscore(level,value, time) {
        this.score[level].value = value;
        this.score[level].time = time;
        console.log("score of player " + this.name + " :" + this.score[level].value + " during the level " + level)
    }
    score()
    {
        return this.score.time;
    }
}*/
/*
class Match {
    constructor(player1, player2) {
        this.player1 = Player(player1);
        this.player2 = Player(player2);
        this.end = false;
    }

    win() {
        if (this.player1.score() > this.player2.score()) {
            return this.player1;
        } else {
            return this.player2;
        }
        this.end = true;
    }

    getend()
    {
        return this.end;
    }
}*/

