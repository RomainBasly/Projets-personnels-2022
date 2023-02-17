let paddlePlayer1 = document.getElementById('player1');
let paddlePlayer2 = document.getElementById('player2');
let scorePlayer2 = document.getElementsByClassName('scorePlayer2');
let ball = document.getElementById('ball');
let ballY = 0;
let ballX = 0;
let ballMove = 20;
let YPLAYER1 = 0;
let YPLAYER2 = 0;
let STEP = 50;


window.addEventListener("keydown", async (e) => {
    await player1Moves(e);
    await player2Moves(e);
});

async function player1Moves(e) {
    if (e.key === 's' && YPLAYER1 < 650) {
        YPLAYER1 += STEP;
        console.log(YPLAYER1);
        paddlePlayer1.style.transform = `translateY(${YPLAYER1}px)`;
    };
    if (e.key === 'z' && YPLAYER1 > 0) {
        YPLAYER1 -= STEP;
        console.log(YPLAYER1);
        paddlePlayer1.style.transform = `translateY(${YPLAYER1}px)`;
    };
}

async function player2Moves(e) {
    if (e.key === 'ArrowUp' && YPLAYER2 > 0) {
        YPLAYER2 -= STEP;
        paddlePlayer2.style.transform = `translateY(${YPLAYER2}px)`;
    };
    if (e.key === 'ArrowDown' && YPLAYER2 < 650) {
        YPLAYER2 += STEP;
        paddlePlayer2.style.transform = `translateY(${YPLAYER2}px)`;
    };
}

async function ballMovement() {
    ballX += ballMove;
    ball.style.transform = `translateX(${ballX}px)`;
}

window.addEventListener("keydown", async (e) => {
    if (e.key === 'ArrowRight') {
        await ballMovement();
    }
});

setInterval(ballMovement, 100);

// let ball = {
//     width: '30px',
//     backgroundColor: 'red',
//     height: '30px',
//     borderRadius: '50%',
//     x: (paddlePlayer2.getBoundingClientRect().x / 2),
//     y: (screen.height / 2)
// }

// for (let i = 0; i < ball.length;) {
//     console.log(document.style.element)
// }