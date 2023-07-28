const btns=document.querySelectorAll(".nav-btn");
const slides=document.querySelectorAll(".video-slide")
const mediaImages=document.querySelectorAll(".media-image")
const contents=document.querySelectorAll(".content")
const legendsSkills=document.querySelectorAll(".legend-container")
const heirlooms=document.querySelectorAll(".heirloom-container")

var sliderNav=function(manual){
    btns.forEach((btn)=>{
        btn.classList.remove("active");
    });

    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });
    mediaImages.forEach((mediaImage)=>{
        mediaImage.classList.remove("active");
    });
    contents.forEach((content)=>{
        content.classList.remove("active");
    });
    legendsSkills.forEach((legendsSkill)=>{
        legendsSkill.classList.remove("active");
    });
    heirlooms.forEach((heirloom)=>{
        heirloom.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    mediaImages[manual].classList.add("active");
    contents[manual].classList.add("active");
    legendsSkills[manual].classList.add("active");
    heirlooms[manual].classList.add("active");
}

btns.forEach((btn,i)=>{
    btn.addEventListener("click", ()=>{
        sliderNav(i);
    });
});