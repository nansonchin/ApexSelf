const scrollOffset = 10;
const scrollElements = document.querySelectorAll(".legend-corner");

const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
};

const displayScrollElement = (el) => {
    el.classList.add('active');
};
  
const hideScrollElement = (el) => {
    el.classList.remove('active');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, scrollOffset)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

window.addEventListener('scroll', handleScrollAnimation);