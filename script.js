function computerPlay () {
    let sign = ["pierre", "feuille", "ciseaux"];
    let tirage = Math.random() * 3;
    tirage = Math.floor(tirage);
    console.log("computer a choisi : " + sign[tirage]);
    return sign[tirage];
}

function playerPlay (){
    let playerSign = "";
    do {playerSign = prompt ("quel signe voulez-vous jouer? ecrivez PIERRE, FEUILLE OU CISEAUX en toute lettre : ");}
    while ( playerSign.toUpperCase() != "PIERRE" && playerSign.toUpperCase() != "FEUILLE" 
            && playerSign.toUpperCase() != "CISEAUX");
    console.log("vous avez choisi : " + playerSign);
    return playerSign;
}

function playRound (computerSelection, playerSelection) {
    let computerSign = computerSelection.toUpperCase();
    let playerSign = playerSelection.toUpperCase();

    if (computerSign === playerSign ){
        console.log( "Egalite les deux joueurs ont choisit " + computerSign);
        return "Draw";
    }

    else if (playerSign == "PIERRE"){
        if (computerSign == "FEUILLE"){
            console.log( "Vous avez perdu, FEUILLE bat PIERRE" );
            return "Lose";
        }
        if (computerSign == "CISEAUX"){
            console.log( "Vous avez gagne, PIERRE bat CISEAUX" );
            return "Win";
        }
    }

    else if (playerSign == "FEUILLE"){
        if (computerSign == "PIERRE"){
            console.log( "Vous avez gagne, FEUILLE bat PIERRE");
            return "Win";
        }
        if (computerSign == "CISEAUX"){
            console.log( "Vous avez perdu, CISEAUX bat FEUILLE");
            return "Lose";
        }
    }

    else if (playerSign == "CISEAUX"){
        if (computerSign == "FEUILLE"){
            console.log( "Vous avez gagne, CISEAUX bat FEUILLE");
            return "Win";
        }
        if (computerSign == "PIERRE"){
            console.log( "Vous avez perdu, PIERRE bat CISEAUX");
            return "Lose";
        }
    }
}

function playGame (){
    let playerScore = 0;
    let computerScore = 0;
    let playerSign =""
    let computerSign = ""


    while (playerScore < 5 && computerScore < 5) {

        playerSign = playerPlay();
        ComputerSign = computerPlay();

        let roundResult = "";
        roundResult = playRound(ComputerSign, playerSign);
        if (roundResult === "Win"){
            playerScore += 1;
            console.log( "les nouveaux scores sont \n Player : " + playerScore + "\n Computer : " + computerScore);
        }
        else if (roundResult == "Lose"){
           computerScore += 1;
           console.log( "les nouveaux scores sont \n Player : " + playerScore + "\n Computer : " + computerScore);
        }
        else {
            console.log( "les scores sont toujours \n Player : " + playerScore + "\n Computer : " + computerScore);
        }

    }


    if (playerScore == 5){
        console.log ("Partie terminee : vous avez gagné!");
    }
    else if (computerScore == 5){
        console.log ("Partie terminee : vous avez perdu!");
    }
}


playGame();