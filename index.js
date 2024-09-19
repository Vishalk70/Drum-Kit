// document.querySelectorAll("button")[0].addEventListener("click",function(){ alert("Hellooooo World!");});
// document.querySelectorAll("button")[1].addEventListener("click",function(){alert("Hellooooo World!");});
// document.querySelectorAll("button")[2].addEventListener("click",function(){alert("Hellooooo World!");});
// document.querySelectorAll("button")[3].addEventListener("click",function(){alert("Hellooooo World!");});
// document.querySelectorAll("button")[4].addEventListener("click",function(){alert("Hellooooo World!");});
// document.querySelectorAll("button")[5].addEventListener("click",function(){alert("Hellooooo World!");});
// document.querySelectorAll("button")[6].addEventListener("click",function(){alert("Hellooooo World!");});


var n = document.querySelectorAll(".drum").length;

for(var i = 0; i < n; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){ 
          
        var button = this.innerHTML;
        soundGenerator(button);
        animateButton(button);

      });

}

document.addEventListener("keypress",function(event){
    soundGenerator(event.key);
    animateButton(event.key);
});

function soundGenerator(key){
    switch(key){
        case "w":  var snare = new Audio('sounds/snare.mp3');
                   snare.play();
                    break;
        case "a": var tom1 = new Audio('sounds/tom-1.mp3');
                    tom1.play();
                     break;
        case "s": var tom2 = new Audio('sounds/tom-2.mp3');
                    tom2.play(); 
                     break;
         case "d": var kick = new Audio('sounds/kick-bass.mp3');
                    kick.play();
                    break;
        case "j": var tom3 = new Audio('sounds/tom-3.mp3');
                    tom3.play();
                     break;
        case "k": var tom4 = new Audio('sounds/tom-4.mp3');
                    tom4.play();
                     break;
        case "l": var crash = new Audio('sounds/crash.mp3');
                    crash.play();
                     break;
    
        default:console.log(button);
    
                }
}

//function to create animation 

function animateButton(currentkey)
{
    var key = document.querySelector("."+currentkey);
    key.classList.add("clicked");

    setTimeout(function(){
     key.classList.remove("clicked");
    },200);

}




// var audio = new Audio('sounds/kick-bass.mp3');
// audio.play();