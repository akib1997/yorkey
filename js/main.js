
// Nav Button Open & Close
let navBtn = document.getElementById('nav-btn')
let navItems = document.getElementById('nav').getElementsByTagName("a");

navBtn.addEventListener('click', () => {
   navBtn.classList.toggle('rotate')

   for (i = 0; i < navItems.length; i++) {
      navItems[i].classList.toggle('show')
   }
   // navItems.classList.toggle('show')

   // for (var i = 0; i < navItems.length; i++) {
   //    navItems[i].style.display = navBtn.classList.contains('rotate') ? "block" : "none"
   //    navItems[i].style.opacity = navBtn.classList.contains('rotate') ? "1" : "0"
   // }
})

// Hello Button Open Modal & Close

// let hello = document.getElementById('hello')
// let question = document.getElementById('question')
// let closeQuestion = document.getElementById('closeQuestion')


// let proposel = document.getElementById('proposel')
// let planner = document.getElementById('planner')
// let closePlanner = document.getElementById('closePlanner')

// hello.addEventListener('click', () => {
//    question.style.display = 'block'
// })

// closeQuestion.addEventListener('click', () => {
//    question.style.display = 'none'
// })

// proposel.addEventListener('click', () => {
//    planner.style.display = 'block'
// })

// closePlanner.addEventListener('click', () => {
//    planner.style.display = 'none'
// })

// Lightbox


// Call Carousel

$(document).ready(function () {
   $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      mouseDrag: false,
      nav: true,
      navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
      responsive: {
         0: {
            items: 1
         },
         600: {
            items: 1
         },
         1000: {
            items: 1
         }
      }
   });

   lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
   })
});


// Tab 

let overView, team, overviewBtn, teamBtn

overView = document.getElementById('overviwe')
team = document.getElementById('team')

overviewBtn = document.getElementById('overviewBtn')
teamBtn = document.getElementById('teamBtn')
// console.log(teamBtn);


if(teamBtn, overviewBtn){
   teamBtn.addEventListener('click', () => {
      teamBtn.classList.add("active")
      overviewBtn.classList.remove('active')
      team.style.display = 'block'
      overView.style.display = 'none'
   })
   overviewBtn.addEventListener('click', () => {
      teamBtn.classList.remove("active")
      overviewBtn.classList.add('active')
      team.style.display = 'none'
      overView.style.display = 'block'
   })
}


// Typing Effect 


typingHeader = document.getElementById('typing-header')

if(typingHeader) {
   var wordsToType = document.querySelector("span[words]").getAttribute("words").split(','), 
   typer =  document.querySelector("span[words]"), 
   typingSpeed = (parseInt(typer.getAttribute('typing-speed')) || 70), 
   typingDelay = (parseInt(typer.getAttribute('typing-delay')) || 700);

   var currentWordIndex = 0, currentCharacterIndex = 0; 

   function type(){

   var wordToType = wordsToType[currentWordIndex%wordsToType.length];

   if(currentCharacterIndex < wordToType.length){
   typer.innerHTML += wordToType[currentCharacterIndex++];
   setTimeout(type, typingSpeed);
   }else{

   setTimeout(erase, typingDelay);
   }

   }
   function erase(){
   var wordToType = wordsToType[currentWordIndex%wordsToType.length]; 
   if(currentCharacterIndex >0){
   typer.innerHTML = wordToType.substr(0, --currentCharacterIndex -1);
   setTimeout(erase, typingSpeed);
   }else{

   currentWordIndex++; 
   setTimeout(type, typingDelay);
   }

   }

   window.onload = function(){
   type(); 
   }
}




