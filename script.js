const canvas = document.getElementById("canv");
const dropDown = document.getElementById('animation')
const ctx = canvas.getContext("2d");
let w = canvas.width = 600;
let h = canvas.height = 600;
let playerImage = new Image();
playerImage.src = 'shadow_dog.png';
let spriteWidth = 575; 
let spriteHeight = 523;
let gameFrame = 0;
let stager = 5;
let playerState = 'idle';
const spriteAnimations = {};
const animationState = [
    {
        name: "idle",
        number: 7
    },
    {
        name:"jump",
        number: 7
    },
    {
        name:"fall",
        number: 7
    },
    {
        name:"run",
        number: 9
    },
    {
        name:"dizzy",
        number: 11
    },
    {
        name:"sit",
        number: 5
    },
    {
        name:"roll",
        number: 7
    },
    {
        name:"bite",
        number: 7
    },
    {
        name:"ko",
        number: 12
    },
    {
        name:"getHit",
        number: 4
    },
];
dropDown.addEventListener('change', (e)=>{
    playerState = e.target.value;
})
animationState.forEach((state, index)=>{
    let frames = [];
    for(let i=0;i<state.number;i++){
        let positionX = i * spriteWidth;
        let positionY = index * spriteHeight;
        frames.push({x:positionX, y:positionY});
    }
    spriteAnimations[state.name] = {loc:frames};
})

// console.log(spriteAnimations);
function animate(){
    ctx.clearRect(0, 0, w, h);
    let position = Math.floor(gameFrame/stager) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(playerImage, frameX , frameY,spriteWidth,spriteHeight,
         0, 0,spriteWidth, spriteHeight);
    
    gameFrame ++;
    requestAnimationFrame(animate);
}
animate();
