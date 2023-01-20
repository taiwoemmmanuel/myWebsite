//my website
//import '@auroratide/typewritten-text/lib/define.js'
//import {TypewrittenText} from 'lib/define.js'
$("#menu").click(function(){
  // $('.nave').classList.add('show-margin')
  document.querySelector('.nave').classList.toggle('show-margin')
});

$animatedtext = document.querySelector('.animated-text typewritten-text')
$name = document.querySelector('.name')
//$animatedtext.textContent = "I'm a UI designer"

var portfolios = [
   " Frontend dev",
   " UI designer",
   " Graphic designer",
   " Javascript devolper",
   " Writer & Blogger",
  " Politics and Music Lover"]

  var port = ['cart','bart','card','blog','vlog']
console.log(portfolios.length)

   //function loopOverText(texts,seconds){
   //     let x = texts.length
   //     let y = -1
   //     setInterval(() => {
   //         y++;
   //         if(y === x){y = 0}
   //         $animatedtext.textContent = " " + texts[y]
   //     }, seconds);
   // }
   // loopOverText(port,2000)  
    let string = portfolios[0]
    console.log(JSON.stringify(string))
  let num = 0
    setInterval(() => {
      num++
     // $name.textContent += num
    }, 00);

  var svgHandle = document.getElementsByClassName('svgHandle')
  for(let i = 0; i < svgHandle.length; i++){
    svgHandle[i].innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 90"><defs><style>.cls-1{fill:#f90;}</style></defs><title>Asset 2svg handle</title>
    <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M59.53,1.51,40.45,31.22l7.48,7.57L23.53,63.46a10,10,0,0,0-5.68-1.76H10.14A10.2,10.2,0,0,0,0,72v7.79A10.2,10.2,0,0,0,10.14,90h7.71A10.21,10.21,0,0,0,28,79.74V72a10.28,10.28,0,0,0-1.74-5.74l24.4-24.66,6.46,6.52L86.51,28.78,88,0Z"/>
    </g></g></svg>` 
  }

  //for svg title
  var svgTitle = document.getElementsByClassName('svgTitle')
  for(let i = 0; i < svgTitle.length; i++){
    svgTitle[i].innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 541 127.5"><defs><style>.cls-1{fill:#ff8d07;opacity:0.85;}</style></defs>
    <title>Asset 4svg title</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect class="cls-1" width="541" height="79"/>
    <polygon class="cls-1" points="60.5 79 60.5 127.5 12 79 60.5 79"/></g></g></svg>` 
  }

  //type writer

  const projectWindow = document.querySelector('.project-window');
  const prevButton = document.querySelector('.project-roller button:first-of-type');
  const nextButton = document.querySelector('.project-roller button:last-of-type');

  const projectItem = document.getElementsByClassName('project-item')
  //projectItem[3].scrollLeft = '100'
  //projectItem[3].classList.add('project-item-right')
  
  //09156512878 
  var scrollDegree = 0;
  var clickTracker = 1;
  var counterLength = projectItem.length - 1
 projectItem[0].classList.add('project-item-inViewPort')

  function showNext (){
    scrollDegree += 360
    clickTracker++;
    if(clickTracker <= projectItem.length){
      projectWindow.scrollTo(scrollDegree,0) 
    }
   if(clickTracker === projectItem.length){
    nextButton.style.display = 'none'
   }
   prevButton.style.display = 'inline'
  
  }
projectWindow.addEventListener('scroll',()=>{
  for(let i = 0; i < projectItem.length; i++){
    if(CheckViewPort(projectItem[i])){
      projectItem[i].classList.add('project-item-inViewPort')
    }else{
      projectItem[i].classList.remove('project-item-inViewPort')
    }
  }
})

function showPrev(){
    scrollDegree -= 360
    clickTracker--;
    if(clickTracker >= 1){
      projectWindow.scrollTo(scrollDegree,0) 
    }
   if(clickTracker === 1){
    prevButton.style.display = 'none'
   }
   nextButton.style.display = 'inline'
  
}



function CheckViewPort(elem){
  var bounding = elem.getBoundingClientRect();
  return(
    bounding.top >= 0 && bounding.left >= 3 &&
   //bounding.botttom <= (window.innerHeight || document.documentElement.clientHeight) && 
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
