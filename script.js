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
//crinado comida da cobrinha:

let food = {
    //método que cria a comidiha em espaços aleatórios. MATH.FLOOR = retira a parte flutuante, o ponto 0. MATH.RANDOM = ele retorna um número aleatório até a parte cetada abaixo:
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}
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

//criando a comidinha
function drawFood(){
    context.fillStyle = "red";
    //posições onde será desenhada a comidinha
    context.fillRect(food.x, food.y, box, box);
}

//evento livre - criando o botão de movimento para cobrinha
document.addEventListener("keydown", update);
function update(Event){
    //se o nosso botão for = 37 e a direção nãoo for right a gente anda para left. Isso porque a cobrinha não tem duas cabeças, consequntemente não pode andar em direção oposta
    if(Event.keyCode == 37 && direction !="right") direction = "left";
    if(Event.keyCode == 38 && direction != "down") direction = "up";
    if(Event.keyCode == 39 && direction != "left") direction = "right";
    if(Event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){
    //função para permitir que a cobrinha atravesse as paredes - é um plano cartesiano 
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;
    criarBG();
    criarCobrinha();
    drawFood();//sem essa função não aparece a comidinha
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


