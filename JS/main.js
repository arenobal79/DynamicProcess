let index=1
showSlide(index)

function moveslider(n){
    showSlide(index+=n);
}

function positionslide(n){
    showSlide(index=n)
}
setInterval(function time(){
    showSlide(index+=1);
},2500)

function showSlide(n){
    let i;
    let slides=document.getElementsByClassName("img-slider");
    let bars = document.getElementsByClassName("bar");

    if(n>slides.length){
        index=1;
    }
    if(n<1){
        index=slides.length()
    }
    for(i=0; i<slides.length;i++){
        slides[i].style.display="none";
    }
    for(i=0; i<bars.length;i++){
        bars[i].className = bars[i].className.replace("active","");
    }
    slides[index-1].style.display="block";
    bars[index-1].className+=" active"
}