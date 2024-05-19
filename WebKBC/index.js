let ques = [
    "What is the Capital City of India",
    "Who won the 2011 Cricket World Cup",
    "Who is the Current Prime Minister of India",
    "Who founded the Technology Company Microsoft",
    "Among the four options , which is not a place in India",
    "Among the four which Indian has not yet played an International ICC Event",
]

let options = [
    ["Delhi" , "Mumbai" ,"Bangalore" , "Goa"],
    ["India" , "Australia" ,"New Zealand" , "Sri Lanka"],
    ["Modi" , "Rajeev Gandhi" , "Indira Gandhi" , "Mahatma Gandhi"],
    ["Bill Gates" , "Priyanshu Batham" ,"Pratham Gupta" , "Utkarsh Rana"],
    ["Columbo" ,"Chennai" , "Lucknow" , "Moradabad"],
    ["Bhuvneshwar Kumar" , "Vijay Shankar" , "Dinesh Karthik" , "Rinku Singh"],
]
let answers = [1 , 1 , 1 , 1 , 1 , 4];

for(var q = 0 ; q < ques.length ; q++){
    document.getElementById('que-box').innerHTML = ques[q];
    let ans = document.getElementById('')
}
for(var j = 0 ; j < options.length ; j++){
    document.getElementsByClassName('box1')[j].innerHTML = options[j][0];
    document.getElementsByClassName('box2')[j].innerHTML = options[j][1];
    document.getElementsByClassName('box3')[j].innerHTML = options[j][2];
    document.getElementsByClassName('box4')[j].innerHTML = options[j][3];
}