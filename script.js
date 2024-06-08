const wrapperslider = document.getElementById('news-slider');

function scrollWrapperSlider(){
    const scrollAmount = 260;
    wrapperslider.scrollBy(scrollAmount, 0);   
    if(wrapperslider.scrollLeft == 508){
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