function playGame(playerInput) {

    clearMessages();
    const stone = 'kamień';
    const paper = 'papier';
    const scissors = 'nożyce';

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return stone;
        } else if (argMoveId == 2) {
            return paper;
        } else if (argMoveId == 3) {
            return scissors;
        }
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    const computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    const playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    function displayResult(argComputerMove, argPlayerMove) {
        if (argComputerMove == argPlayerMove) {
            printMessage('Remis!');
        }  else if (argComputerMove == stone && argPlayerMove == paper) {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == scissors && argPlayerMove == stone) {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == paper && argPlayerMove == scissors) {
            printMessage('Ty wygrywasz!');
        } else {
            printMessage('Wygrał komputer!');
        }
    }
    displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});
