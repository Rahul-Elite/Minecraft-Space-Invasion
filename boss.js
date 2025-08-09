var a = 47;
var a2;
var a3;
var a4;
var key=0;
var c=0;
var k=0;
var x=1000;     // player health
var b=1000;     // boss health
var st1;
var st2;
var st3;
var st4;
var f1_x;
var f2_x;
var f4_x;
var f3_x;
var f5_x;
var f1_y;
var f2_y;
var f3_y; 
var f4_y;
var f5_y;
var ft_x;
var ft_y;


var str=document.getElementById("start");
var img3=document.getElementById("image3");
var img4=document.getElementById("image5");
var img5=document.getElementById("image4");
var pg1=document.getElementById("page1");
var pg2=document.getElementById("page2");

var skp=document.getElementById("Skip");
var cm1=document.getElementById("cm1");
var cm2=document.getElementById("cm2");
var cm3=document.getElementById("cm3");
var cm4=document.getElementById("cm4");
var cm5=document.getElementById("cm5");

var shutter=document.getElementById("shutter");

var img1=document.getElementById("image1");
var img2=document.getElementById("image2");
var boss=document.getElementById("boss");
var fg=document.getElementById("child");
var r3=document.getElementById("fx");
var f1=document.getElementById("f1");
var f2=document.getElementById("f2");
var f3=document.getElementById("f3");
var f4=document.getElementById("f4");
var f5=document.getElementById("f5");

var l1=document.getElementById("l1");
var l2=document.getElementById("l2");
var l3=document.getElementById("l3");
var l4=document.getElementById("l4");
var l5=document.getElementById("l5");

var bs1=document.getElementById("bl1");
var bs2=document.getElementById("bl2");
var bs3=document.getElementById("bl3");
var bs4=document.getElementById("bl4");
var bs5=document.getElementById("bl5");

var bs=document.getElementById("bosslife");


const au1 = document.getElementById("aud1");
const au2 = document.getElementById("aud2");
const au3 = document.getElementById("aud3");
const au4 = document.getElementById("aud4");
const au5 = document.getElementById("aud5");
const au6 = document.getElementById("aud6");

const au7 = document.getElementById("aud7");
const au8 = document.getElementById("aud8");
const au9= document.getElementById("aud9");
const au10 = document.getElementById("aud10");
const au11= document.getElementById("aud11");
const au12= document.getElementById("aud12");
const au13= document.getElementById("aud13");



var viewportHeight = window.innerHeight ;
var pagex = viewportHeight - 1;

var viewportWidth = window.innerWidth;
var pagey = viewportWidth - 1;


 var fire_left = r3.offsetLeft;
 var fig_left = fg.offsetLeft;
 a2=fire_left-fig_left;
 var int=a2;






function start(){
    
    au5.play();
    str.style.visibility="hidden";
    img3.style.visibility="hidden";
    img4.style.visibility="hidden";
    img5.style.visibility="hidden";
    st1=setInterval(work,1000);
}


//---------------------------------------------------------------------------------------------------------//
function skip(){
    c=27;
    skp.style.visibility="hidden";
    au7.pause();
    au8.pause();
    au9.pause();
    au10.pause();
    au13.pause();
    cm1.style.visibility="hidden";
    cm2.style.visibility="hidden";
    cm3.style.visibility="hidden";
    cm4.style.visibility="hidden";
    cm5.style.visibility="hidden";
    

}

function work(){
    console.log(c);
     c=c+1;
    if(c==1){
        skp.style.visibility="visible";
        img1.style.visibility="visible";
        img2.style.visibility="visible";
    }
    if(c===3){
         
        au7.play();
        cm1.style.visibility="visible";
    }
    if(c===7){
         
        au8.play();
        cm1.style.visibility="hidden";
        cm2.style.visibility="visible";
    }
    if(c===10){
         
        au9.play();
        cm2.style.visibility="hidden";
        cm3.style.visibility="visible";
    }

    if(c===23){ 
        au13.play();
        cm3.style.visibility="hidden";
        cm5.style.visibility="visible";
    }
    if(c==25){
        cm5.style.visibility="hidden";
        cm4.style.visibility="visible";
        au10.play();
    }
    if(c==28){
        cm4.style.visibility="hidden";
        skp.style.visibility="hidden";
        img1.style.visibility="hidden";
        img2.style.visibility="hidden";
        shutter.style.visibility="visible";
        boss.style.visibility="visible";
        au12.play();
    }
    if(c==31){
       
        shutter.style.animation='down 5s linear 1 forwards';
    }
    if(c===39){
        au3.play();

        st4=setInterval(fire,1000);
    
        fg.style.visibility="visible";
        f1.style.visibility="visible";
        f2.style.visibility="visible";
        f3.style.visibility="visible";
        f4.style.visibility="visible";
        f5.style.visibility="visible";

        l1.style.visibility="visible";
        l2.style.visibility="visible";
        l3.style.visibility="visible";
        l4.style.visibility="visible";
        l5.style.visibility="visible";

        bs.style.visibility="visible";
        bs1.style.visibility="visible";
        bs2.style.visibility="visible";
        bs3.style.visibility="visible";
        bs4.style.visibility="visible";
        bs5.style.visibility="visible";

}
    if(c==40){
        boss.style.animation='bsmove 4s linear infinite forwards';
        clearInterval(st1);
        st2=setInterval(collision,1);
        c=0;
        k=1;
    }
    

}


//----------------------------------------------------------------------------------------------------------//

                              // firing button


function add(){
    window.addEventListener("keydown",firex);
    r3.style.animation='animm 1s linear 1 forwards';
 }

 window.addEventListener("keydown",firex);


function firex(e){
    if(e.keyCode == "70" ){
 
           
        fire_left = r3.offsetLeft;
        fig_left = fg.offsetLeft;

        a2=fire_left-fig_left;
        a3=fig_left+int;
     
       
         r3.style.left=a3 + "px";
       
        r3.style.visibility = "visible";
        r3.style.animation='anim2 1s linear 1 forwards';
        
        au1.play();

        window.removeEventListener('keydown',firex);
        setTimeout(add,1000);
        st3=setInterval(bosshit,1);


    }
  }

//----------------------------------------------------------------------------------------------------------//


                                  // right key move

  
window.addEventListener("keydown",moveleft);


function moveleft(e){
if(e.keyCode == "37" && a>1 ){
    var c = 1;
    a-= c;
        fg.style.left= a + "vw" ;  
}

}

//----------------------------------------------------------------------------------------------------------//

                                     //      left key move


window.addEventListener("keydown",moveright);


 function moveright(e){
if(e.keyCode == "39" && a<93 ){
    var c = 1;
    a+= c;
    fg.style.left= a + "vw" ;  

    
}

}

//----------------------------------------------------------------------------------------------------------//
                                  //  fighter hit collision


function bosshit(){
    var fz_x = boss.offsetLeft;
    var fz_y = boss.offsetTop;
    var fz_width = boss.offsetWidth;
    var fz_height = boss.offsetHeight;

    var fx_x = r3.offsetLeft;
    var fx_y = r3.offsetTop;
    var fx_width = r3.offsetWidth;
    var fx_height = r3.offsetHeight;

    var computedStyle = window.getComputedStyle(r3);
    var visibilityValue = computedStyle.getPropertyValue('visibility');
    var ch = visibilityValue === 'visible';

    if
    (fz_x < fx_x + fx_width && fz_x + fz_width > fx_x && fz_y < fx_y + fx_height && fz_y + fz_height > fx_y && ch) {
        r3.style.visibility = "hidden"; 
        b=b-100;
        au2.play();
    }
    if(fx_y < -10){
        r3.style.visibility = "hidden"; 
        clearInterval(st3);
    }
  
}

//----------------------------------------------------------------------------------------------------------//


                                          // control visibility 

function fire(){
    

      if(c%4==0){
       
        f1.style.animation='anim-1 2s linear 1 forwards'; 
        f2.style.animation='anim-2 2s linear 1 forwards';  
        f3.style.animation='anim-3 2s linear 1 forwards';   
        f4.style.animation='anim-4 2s linear 1 forwards';   
        f5.style.animation='anim-5 2s linear 1 forwards';
 
        f5.style.visibility="visible";
        f4.style.visibility="visible";
        f3.style.visibility="visible";
        f2.style.visibility="visible";
        f1.style.visibility="visible";

     
      }  
      else if(c%2==0){
        
        f1.style.animation='anim-11 2s linear 1 forwards';
        f2.style.animation='anim-22 2s linear 1 forwards';
        f3.style.animation='anim-33 2s linear 1 forwards';
        f4.style.animation='anim-44 2s linear 1 forwards';
        f5.style.animation='anim-55 2s linear 1 forwards';

        f5.style.visibility="visible";
        f4.style.visibility="visible";
        f3.style.visibility="visible";
        f2.style.visibility="visible";
        f1.style.visibility="visible";
        
       // console.log(c);
      }
      c=c+1; 
}
                 

//----------------------------------------------------------------------------------------------------------//
                                         
                                   // boss fire collision
                                   

function collision() {

  
   
    var fg_x = fg.offsetLeft;
    var fg_y = fg.offsetTop;
    var fg_width = fg.offsetWidth;
    var fg_height = fg.offsetHeight;

    //

    var f1_x = f1.offsetLeft;
    var f1_y = f1.offsetTop;
    var f1_width = f1.offsetWidth;
    var f1_height = f1.offsetHeight;

    var computedStyle = window.getComputedStyle(f1);
    var visibilityValue = computedStyle.getPropertyValue('visibility');
    var ch1 = visibilityValue === 'visible';

    //

    var f2_x = f2.offsetLeft;
    var f2_y = f2.offsetTop;
    var f2_width = f2.offsetWidth;
    var f2_height = f2.offsetHeight;

    var computedStyle = window.getComputedStyle(f2);
    var visibilityValue = computedStyle.getPropertyValue('visibility');
    var ch2 = visibilityValue === 'visible';

    //

    var f3_x = f3.offsetLeft;
    var f3_y = f3.offsetTop;
    var f3_width = f3.offsetWidth;
    var f3_height = f3.offsetHeight;

    var computedStyle = window.getComputedStyle(f3);
    var visibilityValue = computedStyle.getPropertyValue('visibility');
    var ch3 = visibilityValue === 'visible';

    //

    var f4_x = f4.offsetLeft;
    var f4_y = f4.offsetTop;
    var f4_width = f4.offsetWidth;
    var f4_height = f4.offsetHeight;

    var computedStyle = window.getComputedStyle(f4);
    var visibilityValue = computedStyle.getPropertyValue('visibility');
    var ch4 = visibilityValue === 'visible';

    //

    var f5_x = f5.offsetLeft;
    var f5_y = f5.offsetTop;
    var f5_width = f5.offsetWidth;
    var f5_height = f5.offsetHeight;

    var computedStyle = window.getComputedStyle(f5);
    var visibilityValue = computedStyle.getPropertyValue('visibility');
    var ch5 = visibilityValue === 'visible';

   

    

    //-------------------------------------------------------------------------------------------------------//

    
    if
    (fg_x < f1_x + f1_width && fg_x + fg_width > f1_x && fg_y < f1_y + f1_height && fg_y + fg_height > f1_y && ch1) {
        
         
        au11.play();
        x = x - 200;
        f1.style.visibility = "hidden"; 
        f1.style.animation='anims555 3s linear 1 forwards';
       
    }
    if
    (fg_x < f2_x + f2_width && fg_x + fg_width > f2_x && fg_y < f2_y + f2_height && fg_y + fg_height > f2_y && ch2) {
        au11.play()
        x = x - 200;
        f2.style.visibility = "hidden";  
        f2.style.animation='anims555 3s linear 1 forwards';
      
    }
    if
    (fg_x < f3_x + f3_width && fg_x + fg_width > f3_x && fg_y < f1_y + f3_height && fg_y + fg_height > f3_y && ch3) {
        au11.play()
        x = x - 200;
        f3.style.visibility = "hidden";  
        f3.style.animation='anims555 3s linear 1 forwards';
        
    }
    if
    (fg_x < f4_x + f4_width && fg_x + fg_width > f4_x && fg_y < f4_y + f4_height && fg_y + fg_height > f4_y  && ch4) {
        au11.play()
        x = x - 200;
        f4.style.visibility = "hidden"; 
        f4.style.animation='anims555 3s linear 1 forwards';
        
    }
    if
    (fg_x < f5_x + f5_width && fg_x + fg_width > f5_x && fg_y < f5_y + f5_height && fg_y + fg_height > f5_y  && ch5) {
        au11.play()
        x = x - 200;
        f5.style.visibility = "hidden"; 
        f5.style.animation='anims555 3s linear 1 forwards';
       
    
    }
   


    if( f1_y == 1000){
        f1.style.animation='anims555 3s linear 1 forwards';
    }
    if( f2_y == 1000){
        f2.style.animation='anims555 3s linear 1 forwards';
    }
    if( f3_y == 1000){
        f3.style.animation='anims555 3s linear 1 forwards';
    }
    if( f4_y == 1000){
        f4.style.animation='anims555 3s linear 1 forwards';
    }
    if( f5_y == 1000){
        f5.style.animation='anims555 3s linear 1 forwards';
    }

   //-------------------------------------------------------------------------------------------------------//
                                        //   gave over

    if(x<=800){
        l5.style.visibility = "hidden"; 
    }
    if(x<=600){
        l4.style.visibility = "hidden"; 
    }
    if(x<=400){
        l3.style.visibility = "hidden"; 
    }
    if(x<=200){
        l2.style.visibility = "hidden"; 
    }
    if(x<=0){
        l1.style.visibility = "hidden"; 
        
       au3.pause();
      
       
    }

    if(x == 0){
        clearInterval(st2);
        clearInterval(st4); 
        clearInterval(st3);

        fg.style.visibility = "hidden"; 
        boss.style.visibility = "hidden";


        f1.style.visibility="hidden";
        f2.style.visibility="hidden";
        f3.style.visibility="hidden";
        f4.style.visibility="hidden";
        f5.style.visibility="hidden";
 

        l1.style.visibility="hidden";
        l2.style.visibility="hidden";
        l3.style.visibility="hidden";
        l4.style.visibility="hidden";
        l5.style.visibility="hidden";

       bs.style.visibility="hidden";
       bs1.style.visibility="hidden";
       bs2.style.visibility="hidden";
       bs3.style.visibility="hidden";
       bs4.style.visibility="hidden";
       bs5.style.visibility="hidden";


        k=0;
        console.log("over");
        pg2.style.visibility = "visible"; 
        au4.play();
        
    }
   
    if(b<=800){
        bs5.style.visibility = "hidden"; 
    }
    if(b<=600){
        bs4.style.visibility = "hidden"; 
    }
    if(b<=400){
        bs3.style.visibility = "hidden"; 
    }
    if(b<=200){
        bs2.style.visibility = "hidden"; 
    }
    if(b<=0){
        bs1.style.visibility = "hidden"; 
        
    au3.pause();
    }
    
    
    //-------------------------------------------------------------------------------------------------------//
                                        // boss over
    if(b == 0){
       clearInterval(st2);
       clearInterval(st4);
       clearInterval(st3);


       fg.style.visibility = "hidden"; 
       boss.style.visibility = "hidden"; 

    
       f1.style.visibility="hidden";
       f2.style.visibility="hidden";
       f3.style.visibility="hidden";
       f4.style.visibility="hidden";
       f5.style.visibility="hidden";


       l1.style.visibility="hidden";
       l2.style.visibility="hidden";
       l3.style.visibility="hidden";
       l4.style.visibility="hidden";
       l5.style.visibility="hidden";

       bs.style.visibility="hidden";
       bs1.style.visibility="hidden";
       bs2.style.visibility="hidden";
       bs3.style.visibility="hidden";
       bs4.style.visibility="hidden";
       bs5.style.visibility="hidden";

       k=0;
       
       pg1.style.visibility = "visible"; 
       console.log("boss-over");
       au6.play();
    }
}



