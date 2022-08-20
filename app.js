let previous=document.querySelector('.previous');
let next=document.querySelector('.next');
let slider=document.querySelector('.slider');
let images=document.querySelectorAll('.image');


function goBack(){
  slider.scrollLeft -= 170;
}
previous.addEventListener('click',goBack);

function goForward(){
  slider.scrollLeft += 170;
}
next.addEventListener('click',goForward);
let goToBeginning= slider.scrollWidth-slider.clientWidth;

function reverse(){
if (slider.scrollLeft>(goToBeginning-1)) {
    slider.scrollLeft -= goToBeginning;
  } else {
    slider.scrollLeft += 2;
  }
};
let play=setInterval(reverse,50);

for (let i = 0; i < images.length; i++) {
  
  images[i].addEventListener('mouseover',()=>{
    clearInterval(play)
  });
  
  images[i].addEventListener('mouseout', ()=> {
    return play=setInterval(reverse,50);
  });
};