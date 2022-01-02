var bu1=document.getElementById('b1');
bu2 = document.getElementById('b2');    
bu3 = document.getElementById('b3');
bu4 = document.getElementById('b4');
bu5 = document.getElementById('b5');
bu6 = document.getElementById('b6');
bu7 = document.getElementById('b7');
bu8 = document.getElementById('bu8');

var div1=document.getElementById('div1');
div2=document.getElementById('div2');
div3=document.getElementById('div3');
div4=document.getElementById('div4');
div5=document.getElementById('div5'); 
div6=document.getElementById('div6');
div7=document.getElementById('div10');   

bu1.style.top='-10%';
bu2.style.top='-10%';
bu3.style.top='-10%';
bu4.style.top='-10%';
bu5.style.top='-10%';
bu6.style.top='-10%';
bu7.style.top='-10%';

var x=2;  
//darkmode/lightmode


function modeswitch(){
    mode=localStorage.getItem('modes');
    if (mode=='0'){
    localStorage.removeItem('modes');
    localStorage.setItem('modes','1');

    setTimeout(function(){bu1.classList.add('darkmode');},475);
    setTimeout(function(){bu2.classList.add('darkmode');},475);
    setTimeout(function(){bu3.classList.add('darkmode');},475);
    setTimeout(function(){bu4.classList.add('darkmode');},475);
    setTimeout(function(){bu5.classList.add('darkmode');},475);
    setTimeout(function(){bu6.classList.add('darkmode');},475);
    setTimeout(function(){bu7.classList.add('darkmode');},475);
    setTimeout(function(){bu8.classList.add('darkmode');},475);
    setTimeout(function(){div1.style.backgroundColor='white';},475);
    setTimeout(function(){div2.style.backgroundColor='white';},475);
    setTimeout(function(){div3.style.backgroundColor='white';},475);
    setTimeout(function(){div4.classList.add('darkmode');},475);
    setTimeout(function(){div5.classList.add('darkmode');},475);
    setTimeout(function(){div6.classList.add('darkmode');},475);
    setTimeout(function(){div7.classList.add('darkmode');},475);
    sf();
}
else{
    localStorage.removeItem('modes');
    localStorage.setItem('modes','0');

    setTimeout(function(){bu1.classList.remove('darkmode');},475);
    setTimeout(function(){bu2.classList.remove('darkmode');},475);
    setTimeout(function(){bu3.classList.remove('darkmode');},475);
    setTimeout(function(){bu4.classList.remove('darkmode');},475);
    setTimeout(function(){bu5.classList.remove('darkmode');},475);
    setTimeout(function(){bu6.classList.remove('darkmode');},475);
    setTimeout(function(){bu7.classList.remove('darkmode');},475);
    setTimeout(function(){bu8.classList.remove('darkmode');},475);
    setTimeout(function(){div1.style.backgroundColor='black';},475);
    setTimeout(function(){div2.style.backgroundColor='black';},475);
    setTimeout(function(){div3.style.backgroundColor='black';},475);
    setTimeout(function(){div4.classList.remove('darkmode');},475);
    setTimeout(function(){div5.classList.remove('darkmode');},475);
    setTimeout(function(){div6.classList.remove('darkmode');},475);
    setTimeout(function(){div7.classList.remove('darkmode');},475);
    sb();
}
}
function sf(){
    document.getElementById('sw2').classList.add('swmove');
    setTimeout(function(){document.getElementById('sw2').style.animationPlayState = "paused";}, 499);
    document.getElementById('switch').classList.add('bcs');
    setTimeout(function(){document.getElementById('switch').style.animationPlayState = "paused";}, 499);
}
function sb(){
    document.getElementById('sw2').style.animationPlayState = "running";
    setTimeout(function(){document.getElementById('sw2').classList.remove('swmove');}, 499);
    document.getElementById('switch').style.animationPlayState = "running";
    setTimeout(function(){document.getElementById('switch').classList.remove('bcs');}, 499);
}
//on load to get the dark mode to the right state 

var mode2=localStorage.getItem('modes');
if (mode2=='0'){
}
else if(mode2=='1'){

    bu1.classList.add('darkmode');
    bu2.classList.add('darkmode');
    bu3.classList.add('darkmode');
    bu4.classList.add('darkmode');
    bu5.classList.add('darkmode');
    bu6.classList.add('darkmode');
    bu7.classList.add('darkmode');
    bu8.classList.add('darkmode');
    div1.style.backgroundColor='white';
    div2.style.backgroundColor='white';
    div3.style.backgroundColor='white';
    div4.classList.add('darkmode');
    div5.classList.add('darkmode');
    div6.classList.add('darkmode');
    div7.classList.add('darkmode');
    sf();}
    else{localStorage.setItem('modes','1')}

//menu buttons appearing
function PlayFunctionf() {
    div1.classList.add('slidedown');
    div2.classList.add('fade');
    div3.classList.add('slideup');
    div5.style.width='120%';

    bu1.classList.add('fadeio');
    bu2.classList.add('fadeio2');
    bu3.classList.add('fadeio3');
    bu4.classList.add('fadeio4');
    bu5.classList.add('fadeio5');
    bu6.classList.add('fadeio6');
    bu7.classList.add('fadeio7');
    div5.classList.add('fadeio8');

    setTimeout(function(){bu1.style.animationPlayState = "paused";}, 499);
    setTimeout(function(){bu2.style.animationPlayState = "paused";}, 499);
    setTimeout(function(){bu3.style.animationPlayState = "paused";}, 499);
    setTimeout(function(){bu4.style.animationPlayState = "paused";}, 499);
    setTimeout(function(){bu5.style.animationPlayState = "paused";}, 499);
    setTimeout(function(){bu6.style.animationPlayState = "paused";}, 499);
    setTimeout(function(){bu7.style.animationPlayState = "paused";}, 499);
    setTimeout(function(){div5.style.animationPlayState = "paused";}, 499);



    

    setTimeout(function(){div1.style.animationPlayState = "paused";}, 499);
    setTimeout(function(){div2.style.animationPlayState = "paused";}, 499);
    setTimeout(function(){div3.style.animationPlayState = "paused";}, 499);
}
function PlayFunctionr() {
    div1.style.animationPlayState = "running";
    div2.style.animationPlayState = "running";
    div3.style.animationPlayState = "running";

    bu1.style.animationPlayState = "running";
    bu2.style.animationPlayState = "running";
    bu3.style.animationPlayState = "running";
    bu4.style.animationPlayState = "running";
    bu5.style.animationPlayState = "running";
    bu6.style.animationPlayState = "running";
    bu7.style.animationPlayState = "running";
    div5.style.animationPlayState = "running";

    setTimeout(function(){bu1.classList.remove('fadeio');}, 499);
    setTimeout(function(){bu2.classList.remove('fadeio2');}, 499);
    setTimeout(function(){bu3.classList.remove('fadeio3');}, 499);
    setTimeout(function(){bu4.classList.remove('fadeio4');}, 499);
    setTimeout(function(){bu5.classList.remove('fadeio5');}, 499);
    setTimeout(function(){bu6.classList.remove('fadeio6');}, 499);
    setTimeout(function(){bu7.classList.remove('fadeio7');}, 499);
    setTimeout(function(){div5.classList.remove('fadeio8');}, 499);




    setTimeout(function(){div1.classList.remove('slidedown');}, 499);
    setTimeout(function(){div2.classList.remove('fade');}, 499);
    setTimeout(function(){div3.classList.remove('slideup');}, 499);
}
function animationplay(){
    x=x+1;
    if (x%2==1){
    PlayFunctionf();
    }
    else{
    PlayFunctionr();
    }
    


}