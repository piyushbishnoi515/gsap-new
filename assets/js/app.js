var tl = gsap.timeline();
tl.to(".logo", {
    y: 0,
    duration: 1,
    opacity: 1,
    delay: 1,
}
);
tl.to(".navbar_class", {
    y: 0,
    duration: 1,
    opacity: 1,
    delay: 2,
    stagger: 1,
}
);
tl.to(".transfrom", {
    x: 0,
    duration: 1,
    opacity: 1,
    delay: 1,
}
);


tl.to(".paragraph", {
    x: 0,
    duration: 1,
    opacity: 1,
    delay: 2,
}
);
tl.to(".get-started", {
    x: 0,
    duration: 1,
    opacity: 1,
    delay: 2.3,
}
); tl.to(".get-started2", {
    x: 0,
    duration: 1,
    opacity: 1,
    delay: 2.6,
}
);
// gsap.registerPlugin(ScrollTrigger);
// var tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".container",
//         start: "top top",
//         end: "buttom top ",
//         scrub: true,
//         markers: true,
//         pin: true
//     }
// })
// tl.to(".images",
//     {
//         y: 400,
//         duration: 3,
//         opacity: 1,
//         delay: 2.3,
//         rotate: "360deg"
//     }

// )