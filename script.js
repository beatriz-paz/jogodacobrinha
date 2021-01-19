//criando a área do jogo:
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
//posição 0 é igual as posições X e Y
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

//dando movimento para a cobrinha:

let direction = "right";

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);//desenha a área do jogo
}
//criando a cobrinha:

function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo(){
    criarBG();
    criarCobrinha();
    //criar a posição de partida da cobrinha
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;   
    
    //passando condicionais de movimento para a cobrinha:
    //se a direção for = "right" a posição do snekeX vai acrescentar um box (quadradinho)
    if(direction =="right") snakeX += box;
    //vamos diminur um box para entender que estamos indo para esquerda (pois é como no plano cartesiano)
    if(direction =="left") snakeX -= box;
    if(direction =="up") snakeY -= box;
    if(direction =="down") snakeY += box;
    //função que retira o ultimo elemento da cobrinha
    snake.pop();
    //criando a cabeça da cobrinha
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}
//função de atualizar o jogo de tempos em tempos (100ms) para a cobrinha conseguir se mexer 
let jogo = setInterval(iniciarJogo, 100);


