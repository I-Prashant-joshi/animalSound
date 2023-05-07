var length= document.querySelectorAll(".sound").length;
console.log(length);
for(var i=0; i<length;i++)
{
    document.querySelectorAll(".sound")[i].addEventListener("click",function(){
      
    var a=this.getAttribute("id");
        console.log(a);
           switch(a){
               case "Lion":   var audio= new Audio("resource/audio/roar.mp3");
                    audio.play();
            break;
              case "Tiger":   var audio= new Audio("resource/audio/tiger.mp3");
                    audio.play();
            break;
                case "Elephant":   var audio= new Audio("resource/audio/elephant.mp3");
                    audio.play();
            break;
                case "Fox":   var audio= new Audio("resource/audio/fox.mp3");
                    audio.play();
            break;
               case "cheetah":   var audio= new Audio("resource/audio/cheetah.mp3");
                    audio.play();
            break;
                 case "cow":   var audio= new Audio("resource/audio/cow.mp3");
                    audio.play();
            break;
             case "cat":   var audio= new Audio("resource/audio/cat.mp3");
                    audio.play();
            break;
                    case "deer":   var audio= new Audio("resource/audio/deer.mp3");
                    audio.play();
            break;
                    case "dog":   var audio= new Audio("resource/audio/dog.mp3");
                    audio.play();
            break;
                    case "chimpanzee":   var audio= new Audio("resource/audio/chimpanzee.mp3");
                    audio.play();
            break;
                    case "donkey":   var audio= new Audio("resource/audio/jumento.mp3");
                    audio.play();
            break;
             case "goat":   var audio= new Audio("resource/audio/goat.mp3");
                    audio.play();
            break;
            case "horse":   var audio= new Audio("resource/audio/horse.mp3");
              audio.play();
            break;
            case "monkey":   var audio= new Audio("resource/audio/monkey.mp3");
              audio.play();
            break;
             case "giraffe":   var audio= new Audio("resource/audio/giraffe.mp3");
              audio.play();
            break;
             case "sheep":   var audio= new Audio("resource/audio/sheep.mp3");
              audio.play();
            break;
                   
        default: alert("click on right key");
            break;
    };    
    }

 )}