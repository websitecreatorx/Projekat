const wrapperslider = document.getElementById('news-slider');

function scrollWrapperSlider(){
    const scrollAmount = amount;
    wrapperslider.scrollBy(scrollAmount, 0);   
    if(wrapperslider.scrollLeft + wrapperslider.clientWidth >= wrapperslider.scrollWidth - 10){
        clearInterval(timer);
        setTimeout(scrollBackWrapperSlider, 0);
    }
}

function scrollBackWrapperSlider(){
    wrapperslider.scrollLeft = 0;
    if(wrapperslider.scrollLeft == 0){
        setInterval(scrollWrapperSlider, 7000);
    }
}

wrapperslider.addEventListener('onload', scrollBackWrapperSlider());
wrapperslider.addEventListener('onload', timer);

var timer = setInterval(scrollWrapperSlider, 7000);

let amount;

if(window.innerWidth < 900){
    amount = (wrapperslider.scrollWidth - wrapperslider.clientWidth ) / 4;
}else{
    amount = (wrapperslider.scrollWidth - wrapperslider.clientWidth ) / 2 + 1;
}
