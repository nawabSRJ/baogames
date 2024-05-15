var stickers = [
    "./assets/1.jpeg",
    "./assets/2.jpeg",
    "./assets/3.jpeg",
    "./assets/4.jpeg",
    "./assets/5.jpeg",
    "./assets/6.jpeg",
    "./assets/7.jpeg",
    "./assets/8.jpeg",
    "./assets/1.jpeg",
    "./assets/2.jpeg",
    "./assets/3.jpeg",
    "./assets/4.jpeg",
    "./assets/5.jpeg",
    "./assets/6.jpeg",
    "./assets/7.jpeg",
    "./assets/8.jpeg",
];
let pick1 = "" , pick2 = "";    // append URL when imgs clicked
let score = 0;
let lives = stickers.length / 2;
function updateLives(){
document.getElementById('lives').innerHTML = lives.toString();
}
let chosen = [];
var shuf_stickers = stickers.sort(()=>( Math.random() > .5) ? 2 : -1);
for(var i = 0; i < stickers.length ; i++){
    let box = document.createElement('div');
    box.className = 'item';
    var imgElement = document.createElement("img");
    imgElement.src = shuf_stickers[i]; // assuming its an image URL
    // box.innerHTML = ! not this 
    box.appendChild(imgElement);
    document.querySelector('.container').appendChild(box);

    // * when box is opened 
    box.addEventListener('click' ,  function(){
        if(!this.classList.contains('boxOpen') && chosen.length < 2){
            this.classList.add('boxOpen')
            chosen.push(this);
            if(pick1 === ""){ 
                pick1 = this.querySelector('img').src;
                lives--;
                if(lives == 0){
                    showGameOverMessage();
                }
                updateLives();
                
            }else if(pick2 === ""){
                pick2 = this.querySelector('img').src;
                

                if(pick1 === pick2){
                    score += 1;
                    document.getElementById('score').innerHTML = score.toString();
                    if(score == 8){
                        console.log("correct")
                        showGameOverMessage();
                    }
                    setTimeout(()=>{
                        chosen = []; //reset
                        pick1 = "" , pick2 = "" ; // reset
                    } , 1000);
                    
                    
                }else{
                    setTimeout(()=>{
                        chosen.forEach(box => box.classList.remove('boxOpen'));
                        chosen = []; //reset
                        pick1 = "" , pick2 = "" ; // reset
                    } , 1000);
                }
            }
        }
    });
}
// for game over msg
function showGameOverMessage() {
    document.getElementById('gameOverMessage').classList.remove('hidden');
    let rematchBtn = document.getElementById('rematchButton');
    rematchBtn.focus();
}
function welcomeMessage(){
    document.getElementById('welcomeMessage').classList.remove('hidden');
}

