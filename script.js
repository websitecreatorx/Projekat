// News Wrapper Slider Automation 

const NewsWrapperSlider = document.getElementById('news-slider');

function scrollNewsWrapperSlider(){
    const NewsScrollAmount = NewsAmount;
    NewsWrapperSlider.scrollBy(NewsScrollAmount, 0);   
    if(NewsWrapperSlider.scrollLeft + NewsWrapperSlider.clientWidth >= NewsWrapperSlider.scrollWidth - 10){
        clearInterval(NewsTimer);
        setTimeout(scrollBackNewsWrapperSlider, 0);
    }
}

function scrollBackNewsWrapperSlider(){
    NewsWrapperSlider.scrollLeft = 0;
    if(NewsWrapperSlider.scrollLeft == 0){
        setInterval(scrollNewsWrapperSlider, 7000);
    }
}

NewsWrapperSlider.addEventListener('onload', scrollBackNewsWrapperSlider());
NewsWrapperSlider.addEventListener('onload', NewsTimer);

var NewsTimer = setInterval(scrollNewsWrapperSlider, 7000);

let NewsAmount;

if(window.innerWidth >= 900){
    NewsAmount = (NewsWrapperSlider.scrollWidth - NewsWrapperSlider.clientWidth ) / 2 + 1;
}else{
    NewsAmount = (NewsWrapperSlider.scrollWidth - NewsWrapperSlider.clientWidth ) / 4;
}

// Partners Wrapper Slider Automation

const PartnersWrapperSlider = document.getElementById('partners-slider');

function scrollPartnersWrapperSlider(){
    const PartnersScrollAmount = PartnersAmount;
    PartnersWrapperSlider.scrollBy(PartnersScrollAmount, 0);
    if(PartnersWrapperSlider.scrollLeft + PartnersWrapperSlider.clientWidth >= PartnersWrapperSlider.scrollWidth - 10){
        clearInterval(PartnersTimer);
        setTimeout(scrollBackPartnersWrapperSlider, 0);
    }
}

function scrollBackPartnersWrapperSlider(){
    PartnersWrapperSlider.scrollLeft = 0;
    if(PartnersWrapperSlider.scrollLeft == 0){
        setInterval(scrollPartnersWrapperSlider, 7000);
    }
}

PartnersWrapperSlider.addEventListener('onload', scrollBackPartnersWrapperSlider());
PartnersWrapperSlider.addEventListener('onload', PartnersTimer);

var PartnersTimer = setInterval(scrollPartnersWrapperSlider, 7000);

let PartnersAmount;

if(window.innerWidth >= 1920){
    PartnersAmount = 1806;
}

