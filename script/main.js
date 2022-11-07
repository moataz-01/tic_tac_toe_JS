let player = document.getElementById("player");
let overlay = document.getElementById("over");
let playAgain = document.getElementById("playAgain");
let winTone = document.getElementById("winTone");
let turn = 'x';
let squares = [];
function tie() {
    for(let i of squares) {
        if(i === "") {
            return false;
        }
    }
    return true;
}
function check(square1, square2, square3) {
    document.getElementById("item" + square1).style.backgroundColor = "gold";
    document.getElementById("item" + square2).style.backgroundColor = "gold";
    document.getElementById("item" + square3).style.backgroundColor = "gold";
    if(player.innerHTML === "Player 1") {
        player.innerHTML = "The winner is Player 2 🏆";
        playAgain.innerHTML ="<h2>The winner is Player 2</h2>" + playAgain.innerHTML;
    } else {
        player.innerHTML = "The winner is Player 1 🏆";
        playAgain.innerHTML ="<h2>The winner is Player 1</h2>" + playAgain.innerHTML;
    }
    winTone.innerHTML = `<source src="audio/win.wav" type="audio/wav">`
    setTimeout(function(){overlay.style.height = "100%";
    playAgain.style.opacity = 1;}, 1000);
}
let winner = ()=> {
    for(let i = 1; i < 10; i++) {
        squares[i] = document.getElementById("item" + i).innerHTML;
    }

    if(squares[1] === squares[2] && squares[2] === squares[3] && squares[2] != '') {
        check(1, 2, 3);
    }
    else if(squares[4] === squares[5] && squares[5] === squares[6] && squares[5] != '') {
        check(4, 5, 6);
    }
    else if(squares[7] === squares[8] && squares[8] === squares[9] && squares[8] != '') {
        check(7, 8, 9);
    }


    else if(squares[1] === squares[4] && squares[4] === squares[7] && squares[4] != '') {
        check(1, 4, 7);
    }
    else if(squares[2] === squares[5] && squares[5] === squares[8] && squares[5] != '') {
        check(2, 5, 8);
    }
    else if(squares[3] === squares[6] && squares[6] === squares[9] && squares[6] != '') {
        check(3, 6, 9);
    }


    else if(squares[1] === squares[5] && squares[5] === squares[9] && squares[5] != '') {
        check(1, 5, 9);
    }
    else if(squares[3] === squares[5] && squares[5] === squares[7] && squares[5] != '') {
        check(3, 5, 7);
    }

    //draw
    else if(tie()) {
        player.innerHTML = "Tie!";
        playAgain.innerHTML ="<h2>TIE!</h2>" + playAgain.innerHTML;
        setTimeout(function(){overlay.style.height = "100%";
                    playAgain.style.opacity = 1;}, 100);

    }
};


let game = (id) => {
    let item = document.getElementById(id)
    if(turn === 'x' && item.innerHTML == '') {
        item.innerHTML = turn.toUpperCase();
        turn = 'o';
        player.innerHTML = "Player 2";
    } else if(turn === 'o' && item.innerHTML == '') {
        item.innerHTML = turn.toUpperCase();
        turn = 'x';
        player.innerHTML = "Player 1";
    }
    winner();
};


let again = () => {
    location.reload();
};