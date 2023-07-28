let legendContainers  = document.getElementsByClassName('legend-container');
let lastSection = legendContainers[legendContainers.length - 1];
let lastSectionHeight = lastSection.offsetHeight;
let lastSectionTop = lastSection.offsetTop;
let lastSectionTrigger = lastSectionTop + lastSectionHeight * 0.7;

function activeMoveObject() {
    let scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition >= lastSectionTrigger) {
         for( let i=0;i<moveObjLegend.length;i++){
        let value = window.scrollY;
        const legendContainer=legendContainers[i];
        const moveObjLegend=legendContainer.getElementsByClassName('moveObj')[0];
        moveObjLegend.style.left = value * 1.5 + 'px';
        moveObjLegend.style.top = value * 0.25 + 'px';
    }
    }
   
   
}

window.addEventListener('scroll', () => {
    activeMoveObject();
  
});