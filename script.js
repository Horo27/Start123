gsap.registerPlugin(ScrollTrigger) 

gsap.to("#teamSection", {
    scrollTrigger: {
        trigger:"#teamSection",
        start: "top top",
        scrub: 1,
        pin:true,
        pinSpacing: false
    }
});

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // Get current scroll position
    const viewportHeight = window.innerHeight; // Get viewport height
    const triggerPosition = 2 * viewportHeight; // 200vh in pixels

    // Change background color when scroll reaches 200vh
    if (scrollPosition >= triggerPosition) {
        document.querySelector('.bg-img').style.visibility = "hidden";
    } else {
        document.querySelector('.bg-img').style.visibility = "visible";
    }
});