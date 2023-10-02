let time=300;

setInterval(function(){
time--;
let min=Math.floor(time/60);
min='0'+min;
let sec=time%60;
if(sec<10){
    sec='0'+sec;
}
if (time>0){
    document.getElementById("minutes").innerHTML=`${min}`;
    document.getElementById("seconds").innerHTML=`${sec}`;
}
},1000)
l=[0,0,0,0,0];
document.getElementsByClassName("question")[0].style.display="block";
document.getElementsByClassName("next")[0].addEventListener("click",function(){
    let i;
    for(i=0;i<5;i++){
        if(i==1){
            continue;
        }
        else{
            document.getElementsByClassName("question")[i].style.display="none";
        }
        
    }
    
document.getElementsByClassName("question")[1].style.display="block";
document.getElementById("question_number").innerHTML="Question 2";
var radio=document.getElementsByName('q1');
for(j=0;j<radio.length;j++){
    if(radio[j].checked && radio[j].value==1){
        l[0]=1
        
        break
    }
}
console.log(l)
})
document.getElementsByClassName("next")[1].addEventListener("click",function(){
    let i;
    for(i=0;i<5;i++){
        if(i==2){
            continue;
        }
        else{
            document.getElementsByClassName("question")[i].style.display="none";
        }
    }
document.getElementsByClassName("question")[2].style.display="block";
document.getElementById("question_number").innerHTML="Question 3";
var radio=document.getElementsByName('q2');
for(j=0;j<radio.length;j++){
    if(radio[j].checked && radio[j].value==1){
        l[1]=1
        
        break
    }
}
console.log(l)
})
document.getElementsByClassName("next")[2].addEventListener("click",function(){
    let i;
    for(i=0;i<5;i++){
        if(i==3){
            continue;
        }
        else{
            document.getElementsByClassName("question")[i].style.display="none";
        }
    }
document.getElementsByClassName("question")[3].style.display="block";
document.getElementById("question_number").innerHTML="Question 4";
var radio=document.getElementsByName('q3');
for(j=0;j<radio.length;j++){
    if(radio[j].checked && radio[j].value==1){
        l[2]=1
        
        break
    }
}
console.log(l)
})
document.getElementsByClassName("next")[3].addEventListener("click",function(){
    let i;
    for(i=0;i<5;i++){
        if(i==4){
            continue;
        }
        else{
            document.getElementsByClassName("question")[i].style.display="none";
        }
    }
document.getElementsByClassName("question")[4].style.display="block";
document.getElementById("question_number").innerHTML="Question 5";
var radio=document.getElementsByName('q4');
for(j=0;j<radio.length;j++){
    if(radio[j].checked && radio[j].value==1){
        l[3]=1
        
        break
    }
}
console.log(l)
})
document.getElementsByClassName("previous")[0].addEventListener("click",function(){
    let i;
    for(i=0;i<5;i++){
        if(i==0){
            continue;
        }
        else{
            document.getElementsByClassName("question")[i].style.display="none";
        }
    }
document.getElementsByClassName("question")[0].style.display="block";
document.getElementById("question_number").innerHTML="Question 1";
l[0]=0;
console.log(l)
})
document.getElementsByClassName("previous")[1].addEventListener("click",function(){
    let i;
    for(i=0;i<5;i++){
        if(i==1){
            continue;
        }
        else{
            document.getElementsByClassName("question")[i].style.display="none";
        }
    }
document.getElementsByClassName("question")[1].style.display="block";
document.getElementById("question_number").innerHTML="Question 2";
l[1]=0
console.log(l)
})
document.getElementsByClassName("previous")[2].addEventListener("click",function(){
    let i;
    for(i=0;i<5;i++){
        if(i==2){
            continue;
        }
        else{
            document.getElementsByClassName("question")[i].style.display="none";
        }
    }
document.getElementsByClassName("question")[2].style.display="block";
document.getElementById("question_number").innerHTML="Question 3";
l[2]=0
console.log(l)
})
document.getElementsByClassName("previous")[3].addEventListener("click",function(){
    let i;
    for(i=0;i<5;i++){
        if(i==3){
            continue;
        }
        else{
            document.getElementsByClassName("question")[i].style.display="none";
        }
    }
document.getElementsByClassName("question")[3].style.display="block";
document.getElementById("question_number").innerHTML="Question 4";
l[3]=0
console.log(l)
})

/*if(document.getElementById("q1o3").checked){
    l[0]=1
    console.log(l);
}
if(document.getElementById("q2o2").checked){
    l[1]=1
    console.log(l)
}
if(document.getElementById("q3o1").checked){
    l[2]=1
    console.log(l)
}
if(document.getElementById("q4o2").checked){
    l[3]=1
    console.log(l)
}
if(document.getElementById("q5o1").checked){
    l[4]=1
    console.log(l)
}*/

document.getElementsByClassName("submit")[0].addEventListener('click',function(){
    var radio=document.getElementsByName('q5');
    for(j=0;j<radio.length;j++){
        if(radio[j].checked && radio[j].value==1){
            l[4]=1
            
            break
        }
    }
    document.getElementsByClassName('instructions')[0].style.visibility='hidden';
    document.getElementsByClassName('results')[0].style.visibility='visible';
    let score=0;
for(i=0;i<5;i++){
    if(l[i]==1){
        score=score+1;
    }
}


document.getElementById('displayscore').innerHTML=score;
})
function clicked(){
    l[4]=0;
}


document.getElementById('retake').addEventListener('click',function(){
    document.getElementsByClassName('instructions')[0].style.visibility='visible';
    document.getElementsByClassName('results')[0].style.visibility='hidden';
    time=300;
    document.getElementsByClassName("question")[0].style.display="block";
    document.getElementsByClassName("question")[4].style.display="none";
    document.getElementById("question_number").innerHTML="Question 1";
    var q1=document.getElementsByName('q1');
    for(i=0;i<q1.length;i++){
        q1[i].checked=false;
    }
    var q1=document.getElementsByName('q2');
    for(i=0;i<q1.length;i++){
        q1[i].checked=false;
    }
    var q1=document.getElementsByName('q3');
    for(i=0;i<q1.length;i++){
        q1[i].checked=false;
    }
    var q1=document.getElementsByName('q4');
    for(i=0;i<q1.length;i++){
        q1[i].checked=false;
    }
    var q1=document.getElementsByName('q5');
    for(i=0;i<q1.length;i++){
        q1[i].checked=false;
    }
    l=[0,0,0,0,0]

})
setTimeout(function(){
    document.getElementsByClassName('instructions')[0].style.visibility='hidden';
    document.getElementsByClassName('results')[0].style.visibility='visible';
    let score=0;
    for(i=0;i<5;i++){
        if(l[i]==1){
            score=score+1;
        }
    }
    
    
    document.getElementById('displayscore').innerHTML=score;
},300000)
