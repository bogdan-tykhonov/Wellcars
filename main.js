'use strict'

//////slick///

$('.main-slider').slick({
    arrows:false,
    dots:true,
    autoplay:true
});
$('.slider-car').slick(
    {
        arrows:true,
    dots:true,
    slidesToShow:2,
    slidesToScroll:2,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
           
          }
        }
    ]
        }
)
////////////////////////////toggle////////////
let toggleBtn = document.querySelectorAll('.toggle-btn');
let toggleAnswer = document.querySelectorAll('.answer-slider');

for(let i=0;i<toggleBtn.length;i++){
    toggleBtn[i].addEventListener('click', function(){
        if( toggleAnswer[i].classList.contains('answer-active')) {
            toggleAnswer[i].classList.remove('answer-active');
        }
       else{
           toggleAnswer.forEach(function(answer){
               answer.classList.remove('answer-active');
           })
            toggleAnswer[i].classList.add('answer-active');
           
       }
    })
}
//////////////////////form-move/////////
let topForm = document.querySelector('.form');

let slider = document.querySelector('.main-slider');
let engine = document.querySelector('.engine');
engine.style.top =slider.clientHeight+100+'px' ;

let dots = document.querySelector('.slick-dots');
dots.style.bottom = slider.clientHeight/4+'px';
function moveForm(){
if(document.documentElement.clientWidth <= 1400 && document.documentElement.clientWidth > 1200){
    topForm.style.top = slider.clientHeight+(topForm.clientHeight/2)+'px';
}
else if(document.documentElement.clientWidth <= 1200){
    topForm.style.top = slider.clientHeight+(topForm.clientHeight/4)+30+'px';
}
else{
    topForm.style.top = slider.clientHeight+(topForm.clientHeight/2)-30+'px';
}
}
moveForm();
///////////////small-nav/////////////
let navList = document.querySelectorAll('.nav-list-small li')
let toggleLink = document.querySelectorAll('.toggle-link');

navList.forEach(function(link){
    link.onclick = function(){
        if(this.querySelector('.toggle-small').classList.contains('active')){
       this.querySelector('.toggle-small').style.height = '';
       this.querySelector('.fa-chevron-down').style.opacity = '';
       this.querySelector('.fa-chevron-up').style.opacity = '';
       this.querySelector('.toggle-small').classList.remove('active');
        }
        else {
            this.querySelector('.toggle-small').classList.add('active');
            this.querySelector('.toggle-small').style.height = '270px';
            this.querySelector('.fa-chevron-down').style.opacity = '0';
            this.querySelector('.fa-chevron-up').style.opacity = '1';  
        }
    }
})

let smallNav = document.querySelector('.nav-list-small');
let bar = document.querySelector('.fa-bars');
bar.onclick = function(){
    smallNav.style.left ="0px";
}
let close = document.querySelector('.fa-times-circle');
close.onclick = function(){
    smallNav.style.left= -smallNav.offsetWidth+'px';
}
/////////////////////small-price-list//////
let priceBtn = document.querySelectorAll('.toggle-price button');
let priceList = document.querySelectorAll('.toggle-price ul');
priceBtn.forEach(function(btn){
    btn.onclick = function(){
        let ul = this.closest('div').querySelector('ul');
        if(ul.classList.contains('opened')){
            this.classList.remove('active-price');
        ul.classList.remove('opened');
        }
        else{
priceList.forEach(function(list){
list.classList.remove('opened');
list.closest('div').querySelector('button').classList.remove('active-price');
})
            ul.classList.add('opened')
            this.classList.add('active-price')
        }
    
    }
})
/////////////small-nav-width/////////////////
function smallNavWidth(){
if(document.documentElement.clientWidth <= 576 ){
   let nav = document.querySelector('.nav-list-small');
   nav.style.width = document.documentElement.clientWidth-100+ 'px';
   nav.style.left = -nav.offsetWidth-150 + 'px'
}
else return;
}
smallNavWidth();


