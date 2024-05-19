const ques = [
    {
        'que' : "What is the Capital City of India",
        'a' : "Delhi",
        'b' : "Mumbai",
        'c' : "Bangalore",
        'd' : "Goa",
        'correct' : 'a',
    },
    {
        'que' : "Who won the 2011 Cricket World Cup",
        'a' : "New Zealand",
        'b' : "Australia",
        'c' : "India",
        'd' : "Sri Lanka",
        'correct' : 'c',
    },
    {
        'que' : "Among the four options , which is not a place in India",
        'a' : "Delhi",
        'b' : "Columbo",
        'c' : "Bangalore",
        'd' : "Moradabad",
        'correct' : 'b',
    },
    {
        'que' : "Who founded the Technology Company Microsoft",
        'a' : "Rinku Raheja",
        'b' : "Pratham Gupta",
        'c' : "Priyanshu Batham",
        'd' : "Bill Gates",
        'correct' : 'd',
    },
    {
        'que' : "What is the name of Dolphin in MySQL Company Logo",
        'a' : "Rinki",
        'b' : "Cheemki",
        'c' : "Sakila",
        'd' : "Shakira",
        'correct' : 'c',
    },
]
// var isProcessing = false;   // flag for processing
let index = 0 , correct = 0 , incorrect = 0, score = 0; 
const total = ques.length;
var quesBox = document.getElementById('que-box') 
var optBox = document.querySelectorAll('.box')
function loadQuestion(){
    // if (isProcessing) {
    //     return; // Ignore click if processing
    //   }
    if(index === ques.length){
        // todo - Game Over Box , as of now alert box
        showGameOverMessage()
    }
    const data = ques[index]
    // console.log(data)
    quesBox.innerText = `${index+1}) ${data.que}`
    // index is according to the heirarchy of elements in HTML file
    optBox[0].innerText = data.a;
    optBox[1].innerText = data.b;
    optBox[2].innerText = data.c;
    optBox[3].innerText = data.d;
    
}

// initial call
loadQuestion()

function submitAnswer(ans){
    var res;
    const data = ques[index]
    if(ans === data.correct){
        showColor(true , ans);   
        console.log("Correct Answer")
        correct += 1;
        score += 10;  // increase score by 10
        updateStats(score , correct , incorrect)

        
    }
    else{
        showColor(false , ans);
        console.log("Incorrect Answer")
        incorrect += 1;
        updateStats(score , correct , incorrect)
    }
    // by setting timeout here - both the options and color will change at the same time
    setTimeout(() => {
        // isProcessing = false;
        index += 1;
        // opts.forEach(box => box.disabled = false); 
        loadQuestion();
      }, 2000);
    
}

function updateStats(score , correct , incorrect){
    corr = document.getElementById('correct').innerText = correct.toString();
    incorr = document.getElementById('incorrect').innerText = incorrect.toString();
    scr = document.getElementById('score').innerText = score.toString();
}

function showColor(res , ans){
    const box = document.getElementById(ans)
    // var opts = document.getElementsByClassName('box')
    const options = document.querySelectorAll('.box');
    if(res){
        box.style.backgroundColor = "green";
        options.forEach(option => option.classList.add('no-select')); // Remove no-select class

    }else{
        box.style.backgroundColor = "red";
        options.forEach(option => option.classList.add('no-select')); // Remove no-select class

    }
    // resets the color after 2 seconds ~ in sync with loadQuestion() inside setTimeout() in submitAnswer()
    setTimeout(() => {
        box.style.backgroundColor = "";
         // re-enables 
         options.forEach(option => option.classList.remove('no-select')); // Remove no-select class

        myElement.disabled = false;
    }, 2000);
}