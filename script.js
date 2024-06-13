//  News Wrapper Slider Automation 
//  Declarations

const NewsWrapperSlider = document.getElementById('news-slider');

let NewsAmount; 

//  Functions

function scrollNewsWrapperSlider(){
    const NewsScrollAmount = NewsAmount;
    NewsWrapperSlider.scrollBy(NewsScrollAmount, 0);   
    if(NewsWrapperSlider.scrollLeft + NewsWrapperSlider.clientWidth >= NewsWrapperSlider.scrollWidth - 10){
        clearInterval(setInterval(scrollNewsWrapperSlider, 7000));
        setTimeout(scrollBackNewsWrapperSlider, 0);
    }
}

function scrollBackNewsWrapperSlider(){
    NewsWrapperSlider.scrollLeft = 0;
    if(NewsWrapperSlider.scrollLeft == 0){
        setInterval(scrollNewsWrapperSlider, 7000);
    }
}

function firstTimeScrollNewsSlider(){
    if(NewsWrapperSlider.scrollLeft > 0){
        setInterval(scrollNewsWrapperSlider, 7000);  
    }
}

//  Event Listeners

NewsWrapperSlider.addEventListener('onload', scrollBackNewsWrapperSlider());
NewsWrapperSlider.addEventListener('onload', firstTimeScrollNewsSlider());

// Scroll Amount For Different Screen Widths (News)

if(window.innerWidth >= 900){
    NewsAmount = (NewsWrapperSlider.scrollWidth - NewsWrapperSlider.clientWidth ) / 2 + 1;
}else{
    NewsAmount = (NewsWrapperSlider.scrollWidth - NewsWrapperSlider.clientWidth ) / 4;
}





//  Partners Wrapper Slider Automation & Slider Buttons
//  Declarations

const PartnersWrapperSlider = document.getElementById('partners-slider');
const PartnersSliderButton = document.getElementsByClassName('partners-slider-button');
const PartnersSliderButtonNumber_0 = PartnersSliderButton[0];
const PartnersSliderButtonNumber_1 = PartnersSliderButton[1];
const PartnersSliderButtonNumber_2 = PartnersSliderButton[2];
const PartnersSliderButtonNumber_3 = PartnersSliderButton[3];

let PartnersAmount;
let PartnersButtonCounter = 0;
let PartnersInterval;
let PartnersTimeout;

//  Functions

function scrollPartnersWrapperSlider(){   
    const PartnersScrollAmount = PartnersAmount;
    PartnersWrapperSlider.scrollBy(PartnersScrollAmount, 0);
    if(PartnersWrapperSlider.scrollLeft + PartnersWrapperSlider.clientWidth >= PartnersWrapperSlider.scrollWidth - 10){
        clearInterval(PartnersInterval);
        PartnersTimeout = setTimeout(scrollBackPartnersWrapperSlider, 0); 
    }else{
        PartnersSliderButton[PartnersButtonCounter].classList.remove('active-partners-slider-button');
        PartnersButtonCounter++; 
        PartnersSliderButton[PartnersButtonCounter].classList.add('active-partners-slider-button');
    }
}

function scrollBackPartnersWrapperSlider(){
    PartnersSliderButton[PartnersButtonCounter].classList.remove('active-partners-slider-button');
    PartnersButtonCounter = 0;
    PartnersSliderButton[PartnersButtonCounter].classList.add('active-partners-slider-button');
    PartnersWrapperSlider.scrollLeft = 0;
    if(PartnersWrapperSlider.scrollLeft == 0){
        clearInterval(PartnersInterval);
        PartnersInterval = setInterval(scrollPartnersWrapperSlider, 7000);
    }else if(PartnersWrapperSlider.scrollLeft > 0){
        PartnersInterval = setInterval(scrollPartnersWrapperSlider, 7000);
    }
}

function firstTimeScrollPartnersSlider(){
    if(PartnersWrapperSlider.scrollLeft > 0){
        clearInterval(PartnersInterval);
        PartnersInterval = setInterval(scrollPartnersWrapperSlider, 7000);  
    }
}

function addClassToActivePartnersButton(buttonIndex) {
    clearTimeout(PartnersTimeout);
    clearInterval(PartnersInterval);
    PartnersButtonCounter = buttonIndex;
    PartnersWrapperSlider.scrollLeft = PartnersAmount * buttonIndex;
  
    for (let i = 0; i < PartnersSliderButton.length; i++) {
        const button = PartnersSliderButton[i];
        button.classList.remove('active-partners-slider-button');
        if (i === buttonIndex) {
          button.classList.add('active-partners-slider-button');
        }
      }
  
    if (buttonIndex === 3) {
      PartnersTimeout = setTimeout(scrollBackPartnersWrapperSlider, 7000);
      clearInterval(PartnersInterval);
    } else {
      PartnersInterval = setInterval(scrollPartnersWrapperSlider, 7000);
      clearTimeout(PartnersTimeout);
    }
  }

//  Event Listeners

PartnersSliderButtonNumber_0.addEventListener('click', () => addClassToActivePartnersButton(0));
PartnersSliderButtonNumber_1.addEventListener('click', () => addClassToActivePartnersButton(1));
PartnersSliderButtonNumber_2.addEventListener('click', () => addClassToActivePartnersButton(2));
PartnersSliderButtonNumber_3.addEventListener('click', () => addClassToActivePartnersButton(3));
PartnersWrapperSlider.addEventListener('onload', scrollBackPartnersWrapperSlider());
PartnersWrapperSlider.addEventListener('onload', firstTimeScrollPartnersSlider());



if(window.innerWidth >= 1920){
    PartnersAmount = 1720;
}else if(window.innerWidth < 1920 && window.innerWidth > 960){
    PartnersAmount = 860;
}else if(window.innerWidth <= 960){
    PartnersAmount = 430; 
}

//  APIs

let url ='http://139.59.147.167:8085/gallery'
let options = {
    method: "GET"
}

fetch(url, options)
.then(response => response.json())
.then(json => response)