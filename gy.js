function greet(){
  let a= new Date(). getHours();
    if(a>0 && a<11){
   alert('Good Morning')
  }
 else if(a>11 && a<16){
 alert('Good afternoon')
  }
else{
 alert('Good Evening')
};

};
function seun(){
  let resturant={
name: 'chicken Republic',
categories: ['aficandish','chinesedish','calarbadish','indiadish','drink','soup','meat',],
drink: ['chivita','chiexotic','cocoa','fanta','7up','evabottlewater',],
soup:['egusi','ewedu','stew','ogbono','okoro',],
swallow:['amala','semovita','akpu','fufu','eba',],
owner: 'mr okoro',
location: 'bodija',
};
alert(`i want ${resturant.categories[5]} ${resturant.soup[0]} and ${resturant.swallow[4]} i also want ${resturant.drink[3]}, thanks`);
};
function james(){
  let age=prompt('what is Nigerian age ?');
  let d=+age;
  switch(d){
case 50: alert('not close');
break;
case 59: alert('close');
break;
case 60: alert(' almost correct');
break;
case 63: alert('correct');
break;
case 64: alert('close');
break;
case 65: alert('close');
break;
default: alert('wrong');
};
};
let w,q;
function getAnswer(){
    if(w==" " || q==""){
        ci.innerHTML="insert a number"
        ci.style.color="red"
    }
    else if(isNaN(q) || isNaN(w)){
        ci.innerHTML =" insert a number"
        ci.style.color="red"
    }
 }
let ci= document.getElementById('answer');
let p =document.getElementById('symbol');
 
let rt = document.querySelectorAll('.but')

for(let i =0; i<rt.length; i++){

    rt[i].addEventListener('click', function(){

        getAnswer()
        let w = Number(document.getElementById('input1').value);
        let q = Number(document.getElementById('input2').value);
        if(rt[i].value=='add'){
            let ko =w+q
            p.innerHTML= "+";
            ci.innerHTML= ` = ${ko}`
            ci.style.color= 'green';

        }
        if(rt[i].value=='sub'){
            let ko =w-q
            p.innerHTML= "-";
            ci.innerHTML= ` = ${ko}`
            ci.style.color= 'green';

        }
        if(rt[i].value=='divi'){
            let ko =w/q
            p.innerHTML= "/";
            ci.innerHTML= ` = ${ko}`
            ci.style.color= 'green';

        }
        if(rt[i].value=='multi'){
            let ko =w*q
            p.innerHTML= "X";
            ci.innerHTML= ` = ${ko}`
            ci.style.color= 'green';

        }
    })
};

function cla(){
let moneyInvested = Number(document.getElementById('iron').value);
let month= Number(document.getElementById('steel').value);
let loan = moneyInvested*0.1;
let calow= moneyInvested+loan*month;
document.getElementById('payup').innerHTML=(`${calow}`)
document.getElementById('mote').innerHTML=(`${month} month`)
 
};


function seyi(){
let ser = document.querySelector('#winner')
let oneday= new Date().getDay()
let days = ['Sunday', 'Monday', "Tuesday", 'Wednesday', 'Thursday', 'Friday', 'Saturday']
if (oneday==0){
  ser.innerHTML = (` <h2>Today is ${days[oneday]} go to church </h2>`)
}
else if(oneday==5){
  ser.innerHTML =(` <h2>Today is ${days[oneday]} go to mosque </h2>`)
}
else if(oneday==6){
  ser.innerHTML =(` <h2>Today is ${days[oneday]} go to party </h2>`)
}
else(
  ser.innerHTML =(` <h2>Today is ${days[oneday]} go to work</h2>`)
)
}
function vibes(){
let n;
n= prompt('enter a number from 1 to 70');
if(!n || n<1 || n>70) {
alert(`enter a number from 1 to 70`)
}
else if (n==2){
    alert(`the number is a prime number`)
}
else{
    let i;
    for(i =2; i<n; i++){
        if(n%i==0){
            alert(`you are wrong, ${n} is not a prime number`);
            break;
        }
    }   
     if(n==i){
            alert(`this is a prime number`)
        }
}
}
function opeyemi(){
let firstMoney = Number(document.querySelector(`#lon`).value);
let MarkUpPercentAge = Number(document.querySelector(`#lom`).value);
let MonthsYear = Number(document.querySelector(`#stee`).value);
let Percentage = MarkUpPercentAge/100;
let TotalAmount = firstMoney*Percentage+firstMoney;
let jk= MonthsYear;
let Inter= TotalAmount/MonthsYear;
document.querySelector(`#fre`).innerHTML= `${Inter} naria`;
document.querySelector(`#frt`).innerHTML = `${jk}`;
document.querySelector(`#fry`).innerHTML = `${TotalAmount} naria`;
}
function cha(){
let ampaino =document.querySelector(`#lom`).value;
show.innerHTML=`${ampaino}`
}


const secretNumber = Math.trunc(Math.random()*20)+1;
const find = document.querySelector(`.check`);

let theNumber = document.querySelector('.number');
let thebody = document.querySelector(`.na`);
let myMessage= document.querySelector(`.message`);
let myEngine = function(){
let myGues = Number(document.querySelector(`.mynumber`).value);
if(!myGues || myGues <1 || myGues>20){
myMessage.innerHTML=`you must put a valid number between 1 and 20`;
myMessage.style.color= `red`;
document.querySelector(`.mynumber`).value ="";
}
else if (myGues<secretNumber){
myMessage.innerHTML= `your guess is low`;
myMessage.style.color="lightblue";
document.querySelector(`.mynumber`).value ="";
}
else if (myGues>secretNumber){
myMessage.innerHTML= `your guess is too high`;
myMessage.style.color="lightblue";
document.querySelector(`.mynumber`).value ="";
}
else if (myGues==secretNumber){
myMessage.innerHTML='Game Over';
myMessage.style.color='white';
thebody.style.background = `green`;
thebody.style.color = `white`;
theNumber.innerHTML=`The number is ${secretNumber} Correct`;
theNumber.style.color=`white`;
document.querySelector(`.mynumber`).value ="";
}
}
console.log(secretNumber)
find.addEventListener('click', myEngine)
