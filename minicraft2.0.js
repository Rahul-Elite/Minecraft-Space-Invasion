var a = 44;
var shoot=0;
var work = 20;
var margin_top = 0;
var margin_left=0;
var r5;
var left=0;
var left1=0;
var tip=0;
var tip1=0;
var speed=0.5; 

var b=document.getElementById("child");
var al=document.getElementById("alien");
var bx=document.getElementById("alien2");
var bx1=document.getElementById("alien3");
var par=document.getElementById("para");
var nam=document.getElementById("name");
var intruc=document.getElementById("instruction");
var step=document.getElementById("steps");
var next=document.getElementById("level1");
var again=document.getElementById("again");

var viewportHeight = window.innerHeight ;
var pagex = viewportHeight - 1;

var viewportWidth = window.innerWidth;
var pagey = viewportWidth - 1;

var ls=b.offsetLeft


var a2;
var ran;
var mov;
var r3;
var r2;
var col;
var stop;
var f1;
var f2;
var f3;

const au1 = document.getElementById("aud1");
const au2 = document.getElementById("aud2");
const au3 = document.getElementById("aud3");
const au4 = document.getElementById("aud4");
const au5 = document.getElementById("aud5");
const au6 = document.getElementById("aud6");
const au7 = document.getElementById("aud7");
const au8 = document.getElementById("aud8");
const au9 = document.getElementById("aud9");


var sh2=document.getElementById("show");

var sh=document.getElementById("shoot");

var over = document.getElementById("over");

var st=document.getElementById("start");

var st2=document.getElementById("start2");

var startall=0;

var secondSpace = false; 



                   
                         //start button

                         window.addEventListener("keyup",start11);
function start11(e){
    if(e.keyCode === 32){
        if(!secondSpace) {
            start();
        } 
        else{
           start1();
        }
    }
}

function start(){

au6.play();

startall=1;



var s1 = document.getElementById("start");

s1.style.visibility="hidden";


nam.style.visibility="hidden";
intruc.style.visibility="hidden";
step.style.visibility="hidden";


intruc.style.visibility="visible";
step.style.visibility="visible";


st2.style.visibility="visible";


secondSpace = true;

}




                       // instruction play

function start1(){
     
  
    au6.pause();
    au7.play();
    startall=2;
   

    var s2 = document.getElementById("start2");
    s2.style.visibility="hidden";


    sh.style.visibility="visible";
    sh.textContent=shoot;
    sh2.textContent=shoot;
    sh.border="7px solid red"


    intruc.style.visibility="hidden";
    step.style.visibility="hidden";


    
    par.style.visibility="visible";

    al.style.visibility="visible";
    bx.style.visibility="visible";
    bx1.style.visibility="visible";

    f2=setInterval(alien_work1,30);
    f3=setInterval(alien_work2,30);
    f1=setInterval(alien_working,30);

    au9.play();
    window.removeEventListener('keyup',start11);
}




function add(){
    window.addEventListener("keydown",fire);
 }



                         // firing button

 window.addEventListener("keydown",fire);


function fire(e){
    if(e.keyCode == "70" && startall==2){

        var r1 = document.createElement("div");
        var i = document.createElement("img"); 

        r1.appendChild(i);

        r2 = document.getElementById("par");
        
        ran=Math.random();
        ran = ran*(1000-1)+1;
        ran = "fighter" + Math.floor(ran);
       
        r2.insertAdjacentElement("beforeend",r1);
        r2.lastChild.id=ran;

        au2.play();
    
        r3 = document.getElementById(ran);
        r3.className="fighter";
        r3.children[0].src="bullet.png";
        r3.children[0].id="bullet"; 
        
         
         
         var rem;

        work = work+1;
        if(work > 26){
         rem = r2.children[7];
        r2.removeChild(rem);
        }   
       
         
        var fire_left = r3.offsetLeft;
        var fig_left = b.offsetLeft;

        var a2=ls-fig_left;
        var a3=fire_left-a2;
        console.log(a3);
        
        r3.style.left=a3 + "px";
    
        r3.style.animation='anim 1s linear 1 forwards';


         if(shoot%10 == 0 && shoot>0){
            speed=speed+0.4;
        }

        col=setInterval(collision,1);
        window.removeEventListener('keydown',fire);
        setTimeout(add,1000);
    }
  }




  




                         // right key move

  
window.addEventListener("keydown",moveleft);


function moveleft(e){
if(e.keyCode == "37" && a>0  && startall==2 ){
    var c = 1;
    a-= c;
    b.style.left= a + "vw" ;  
}

}

                   //      left key move


window.addEventListener("keydown",moveright);


 function moveright(e){
if(e.keyCode == "39" && a< 90 && startall==2){ 
    var c = 1;
    a+= c;
        b.style.left= a + "vw" ;  
}

}

                        //  parameteter of alien


var pxvalue = (pagex * 1) / 100;
var px1value = (pagey * 1) / 100;

var vh=Math.round(pxvalue);
var vw=(px1value);
var px=vh*52;
var alert=vh*45;
var aln=vw*10;

   

                         //alien move

  function alien_working(){
        console.log("al3",tip1);


 
    if(margin_top > px){
        au4.pause();
        au9.pause();
        au1.play();

        over.style.visibility="visible";
        al.style.visibility="hidden";
        bx.style.visibility="hidden";
        bx1.style.visibility="hidden";
        par.style.visibility="hidden";
        sh.style.visibility="hidden";

        
        clearInterval(f2);
        clearInterval(f3);
        clearInterval(col);

      
      
        var d5 = document.getElementById("child");
        d5.style.visibility="hidden";

        sh.style.left=-30+"px";
        sh.style.top=20 +"px";
 
        
       again.style.visibility="visible";
        window.removeEventListener('keydown',moveleft);
       window.removeEventListener('keydown',moveright);
        
        clearInterval(f1);
    }
    
    else if(margin_top > 0 ){
        margin_top = margin_top+speed;
        al.style.top = margin_top + "px";

        if(margin_top>alert  || tip>alert || tip1>alert){
            au4.play();
           
        }
        
    }
    else if(margin_left==0){
        margin_top = 2;
        var alien1eft=Math.random();
        alien1eft =  alien1eft*(10-0)+0;
        alien1eft = Math.floor(alien1eft);
        alien1eft= alien1eft*aln;
        al.style.left= alien1eft+"px";
        al.style.visibility="visible";
    }
   
}



function alien_work1(){

if(tip > px){
   au4.pause();  
   au9.pause();
   au1.play();



     over.style.visibility="visible";
      al.style.visibility="hidden";
      bx.style.visibility="hidden";
     bx1.style.visibility="hidden";
      par.style.visibility="hidden";
     sh.style.visibility="hidden";
      

      clearInterval(f1);
      clearInterval(f3);
      clearInterval(col);
      

      var d1 = document.getElementById("child");
      d1.style.visibility="hidden";

      again.style.visibility="visible";
     
      window.removeEventListener('keydown',moveleft);
      window.removeEventListener('keydown',moveright);
      
      
      clearInterval(f2);
    }

    else if(tip > 0 ){
        bx.style.visibility="visible";
        tip = tip+speed;
        bx.style.top = tip + "px";
       
    }
    else if(tip == 0){
        tip = 2;
        var alienleft1=Math.random();
        alienleft1 =  alienleft1*(10-0)+0;
        alienleft1 = Math.floor(alienleft1);
        alienleft1= alienleft1*aln;
        bx.style.left= alienleft1+"px";
        bx.style.visibility="visible";
    }
   
    
}


function alien_work2(){

    if(tip1 > px){
        au4.pause();
        au9.pause();
        au1.play();


        over.style.visibility="visible";
        al.style.visibility="hidden";
        bx.style.visibility="hidden";
        bx1.style.visibility="hidden";
        par.style.visibility="hidden";
        sh.style.visibility="hidden";

        clearInterval(f1);
        clearInterval(f2);
        clearInterval(col);
      
       

        var d3 = document.getElementById("child");
        d3.style.visibility="hidden";

        sh.style.left=-30+"px";
        sh.style.top=20 +"px";

        again.style.visibility="visible";
 
     
         window.removeEventListener('keydown',moveleft);
         window.removeEventListener('keydown',moveright);

        clearInterval(f3);
    }
    else if(tip1 > 0 || tip1<0){
        bx1.style.visibility="visible";
        tip1 = tip1+speed;
        bx1.style.top = tip1 + "px";   
    }
    else if(tip1==0){
        tip1 = 2;
        var alienleft2=Math.random();
        alienleft2 =  alienleft2*(10-0)+0;
        alienleft2 = Math.floor(alienleft2);
        alienleft2= alienleft2*aln;
        bx1.style.left= alienleft2+"px";
        bx1.style.visibility="visible";
    }
}



//  collision checking
 





function collision(){


     var fire_top = r3.offsetTop;
     console.log(fire_top);
        
        
var fire_width = r3.offsetWidth;
var fire_height = r3.offsetHeight;

var alien_width = al.offsetWidth;
var alien_height = al.offsetHeight;

var alien2_width = bx.offsetWidth;
var alien2_height = bx.offsetHeight;

var alien3_width = bx1.offsetWidth;
var alien3_height = bx1.offsetHeight;


var fire_x = r3.offsetLeft;
var fire_y = r3.offsetTop;

var alien_x = al.offsetLeft;
var alien_y = al.offsetTop;

var alien2_x = bx.offsetLeft;
var alien2_y = bx.offsetTop;

var alien3_x = bx1.offsetLeft;
var alien3_y = bx1.offsetTop;


var bol = window.getComputedStyle(r3).getPropertyValue('visibility') === 'visible';
var bol1 = window.getComputedStyle(al).getPropertyValue('visibility') === 'visible';
var bol2 = window.getComputedStyle(bx).getPropertyValue('visibility') === 'visible';
var bol3 = window.getComputedStyle(bx1).getPropertyValue('visibility') === 'visible';

if (
    fire_x + fire_width >= alien_x && fire_x <= alien_x + alien_width && fire_y + fire_height >= alien_y && fire_y <= alien_y + alien_height &&
    bol1 && bol
) {
     for(x=0;x<1;x++){
            au4.pause();

          r3.style.visibility = "hidden";
          al.style.visibility="hidden";
          
        
          au3.play();
         
          
          margin_top=0;
          shoot=shoot+1;
          sh.textContent=shoot;
          sh2.textContent=shoot;
          sh.border="7px solid red"
          }
} else if (
    fire_x + fire_width >= alien2_x && fire_x <= alien2_x + alien2_width && fire_y + fire_height >= alien2_y && fire_y <= alien2_y + alien2_height &&
    bol2 && bol
) {
     for(x=0;x<1;x++){  
           au4.pause();

            r3.style.visibility = "hidden";
        
            bx.style.visibility=  "hidden";

            
            tip = 0;  
            
            au3.play();
         
            shoot=shoot+1;
            sh.textContent=shoot;
            sh2.textContent=shoot;
            sh.border="7px solid red"
            }
} else if (
    fire_x + fire_width >= alien3_x && fire_x <= alien3_x + alien3_width && fire_y + fire_height >= alien3_y && fire_y <= alien3_y + alien3_height &&
    bol3 && bol
) {
    for(x=0;x<1;x++){
            au4.pause();
            r3.style.visibility = "hidden";
            bx1.style.visibility=  "hidden";
            tip1 = 0;  

            au3.play();
        
            shoot=shoot+1;
            sh.textContent=shoot;
            sh2.textContent=shoot;
            sh.border="7px solid red"
            }
}
   
        if(shoot==30){

            au9.pause();
           
            au8.play();
           
           next.style.visibility="visible";
            au4.pause();
    
            al.style.visibility="hidden";
            bx.style.visibility="hidden";
            bx1.style.visibility="hidden";
            par.style.visibility="hidden";
            sh.style.visibility="hidden";
    
           
    
            var d3 = document.getElementById("child");
            var img7 = document.getElementById("win");

            img7.style.visibility="visible";
            d3.style.visibility="hidden";
       
             window.removeEventListener('keydown',moveleft);
             window.removeEventListener('keydown',moveright);
    
             clearInterval(f1);
             clearInterval(f2);
             clearInterval(col);
             clearInterval(f3);
           
            
             shoot=shoot+1;  
           }
           console.log("hh");
       if(margin_top > px || tip > px || tip1 > px ){
            clearInterval(col);
           return 0;
       }
       if(fire_y == -64){
        clearInterval(col);
       return 0;
        }
      
    
   }
