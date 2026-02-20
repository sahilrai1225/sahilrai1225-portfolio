// document.addEventListener("DOMContentLoaded", function () {

// /* =========================
//    HERO TYPING EFFECT (STABLE VERSION)
// ========================== */

// const typingElement = document.querySelector(".typing");

// const heroWords = [
//     "ML Engineer",
//     "AI Developer",
//     "Data Science",
//     "Data Analysis",
//     "Python Developer"
// ];

// let heroWordIndex = 0;
// let heroCharIndex = 0;
// let heroIsDeleting = false;

// function heroTypeEffect() {

//     const currentWord = heroWords[heroWordIndex];

//     if (!heroIsDeleting) {
//         heroCharIndex++;
//     } else {
//         heroCharIndex--;
//     }

//     typingElement.textContent =
//         currentWord.substring(0, heroCharIndex);

//     if (!heroIsDeleting && heroCharIndex === currentWord.length) {
//         heroIsDeleting = true;
//         setTimeout(heroTypeEffect, 1500);
//         return;
//     }

//     if (heroIsDeleting && heroCharIndex === 0) {
//         heroIsDeleting = false;
//         heroWordIndex = (heroWordIndex + 1) % heroWords.length;
//     }

//     setTimeout(heroTypeEffect, heroIsDeleting ? 60 : 120);
// }

// heroTypeEffect();

//     /* =========================
//        ABOUT STREAMING EFFECT
//     ========================== */

//     const aboutSection = document.querySelector("#about");
//     const aboutTextElement = document.querySelector("#about-text");

//     const aboutFullText = `
// I am Sahil Rai, a Bachelor of Computer Applications student at the Institute of Management Studies, Noida (Graduating 2026). I am deeply interested in Machine Learning, Artificial Intelligence, and data-driven systems that create measurable impact.

// My goal is to become an ML/AI Engineer and contribute to building scalable, intelligent solutions in real-world environments. I am actively seeking opportunities — internships or full-time roles — where I can learn, grow, and contribute meaningfully within a professional organization.

// Beyond technology, I have a strong interest in reading — especially Hindi and English novels — which has helped me develop analytical thinking, creativity, and clarity in communication. I believe continuous learning, discipline, and curiosity are essential for long-term growth in any field.
// `;

//     let aboutCharIndex = 0;
//     let aboutIsDeleting = false;
//     let aboutStarted = false;

//     function streamAboutText() {

//         if (!aboutIsDeleting) {
//             aboutTextElement.textContent =
//                 aboutFullText.substring(0, aboutCharIndex + 1);
//             aboutCharIndex++;

//             if (aboutCharIndex === aboutFullText.length) {
//                 setTimeout(() => {
//                     aboutIsDeleting = true;
//                 }, 15000);  // Stay visible 15 seconds
//             }

//         } else {
//             aboutTextElement.textContent =
//                 aboutFullText.substring(0, aboutCharIndex - 1);
//             aboutCharIndex--;

//             if (aboutCharIndex === 0) {
//                 aboutIsDeleting = false;
//             }
//         }

//         setTimeout(streamAboutText, aboutIsDeleting ? 10 : 18);
//     }

//     // Scroll trigger
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting && !aboutStarted) {
//                 aboutStarted = true;
//                 streamAboutText();
//             }
//         });
//     }, { threshold: 0.3 });

//     observer.observe(aboutSection);



//     /* =========================
//        PARTICLES
//     ========================== */

//     if (typeof particlesJS !== "undefined") {
//         particlesJS("particles-js", {
//             particles: {
//                 number: { value: 60 },
//                 size: { value: 3 },
//                 move: { speed: 2 },
//                 line_linked: { enable: true }
//             }
//         });
//     }


// const counters = document.querySelectorAll(".counter");

// counters.forEach(counter => {
//     const updateCounter = () => {
//         const target = +counter.getAttribute("data-target");
//         const count = +counter.innerText;
//         const increment = Math.ceil(target / 100);

//         if (count < target) {
//             counter.innerText = count + increment;
//             setTimeout(updateCounter, 20);
//         } else {
//             counter.innerText = target;
//         }
//     };
//     updateCounter();
// });

//     // /* =========================
//     //    SCROLL REVEAL
//     // ========================== */

//     // if (typeof ScrollReveal !== "undefined") {

//     //     ScrollReveal().reveal('.project-card', {
//     //         delay: 200,
//     //         distance: '50px',
//     //         origin: 'bottom',
//     //         duration: 800,
//     //         interval: 200
//     //     });

//     //     ScrollReveal().reveal('.cert-card', {
//     //         delay: 200,
//     //         distance: '40px',
//     //         origin: 'bottom',
//     //         duration: 800,
//     //         interval: 200
//     //     });
//     // }

// });
// const canvas = document.getElementById("neural-bg");
// const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let nodes = [];

// class Node {
//     constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.radius = 2;
//         this.dx = (Math.random() - 0.5) * 0.3;
//         this.dy = (Math.random() - 0.5) * 0.3;
//     }

//     draw() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//         ctx.fillStyle = "#3b82f6";
//         ctx.fill();
//     }

//     update() {
//         this.x += this.dx;
//         this.y += this.dy;

//         if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
//         if (this.y < 0 || this.y > canvas.height) this.dy *= -1;

//         this.draw();
//     }
// }

// for (let i = 0; i < 120; i++) {
//     nodes.push(new Node());
// }

// function connectNodes() {
//     for (let a = 0; a < nodes.length; a++) {
//         for (let b = a; b < nodes.length; b++) {
//             let dx = nodes[a].x - nodes[b].x;
//             let dy = nodes[a].y - nodes[b].y;
//             let distance = dx * dx + dy * dy;

//             if (distance < 10000) {
//                 ctx.beginPath();
//                 ctx.strokeStyle = "rgba(59,130,246,0.15)";
//                 ctx.lineWidth = 1;
//                 ctx.moveTo(nodes[a].x, nodes[a].y);
//                 ctx.lineTo(nodes[b].x, nodes[b].y);
//                 ctx.stroke();
//             }
//         }
//     }
// }

// function animate() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     nodes.forEach(node => node.update());
//     connectNodes();

//     requestAnimationFrame(animate);
// }

// animate();

// window.addEventListener("resize", () => {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// });

// /* =========================
//    AI MODEL TRAINING GRAPH
// ========================== */

// const graph = document.getElementById("ai-graph");
// const gctx = graph.getContext("2d");

// function resizeGraph() {
//     graph.width = window.innerWidth;
//     graph.height = 200;
// }
// resizeGraph();

// function drawGraph() {
//     gctx.clearRect(0, 0, graph.width, graph.height);

//     gctx.beginPath();
//     gctx.moveTo(0, 160);

//     for (let x = 0; x < graph.width; x += 15) {
//         let y =
//             160 -
//             Math.sin(x * 0.01 + Date.now() * 0.003) * 30 -
//             Math.cos(x * 0.02) * 10;

//         gctx.lineTo(x, y);
//     }

//     gctx.strokeStyle = "rgba(59,130,246,0.6)";
//     gctx.lineWidth = 2;
//     gctx.shadowBlur = 15;
//     gctx.shadowColor = "#3b82f6";
//     gctx.stroke();

//     requestAnimationFrame(drawGraph);
// }

// drawGraph();
// window.addEventListener("resize", resizeGraph);

/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

/* =========================
   HERO TYPING EFFECT
========================== */

const typingElement = document.querySelector(".typing");

const heroWords = [
    "ML Engineer",
    "AI Developer",
    "Data Science",
    "Deep Learning",
    "Python Developer"
];

let heroWordIndex = 0;
let heroCharIndex = 0;
let heroDeleting = false;

function heroType() {

    const word = heroWords[heroWordIndex];

    heroCharIndex += heroDeleting ? -1 : 1;
    typingElement.textContent = word.substring(0, heroCharIndex);

    if (!heroDeleting && heroCharIndex === word.length) {
        heroDeleting = true;
        return setTimeout(heroType, 1500);
    }

    if (heroDeleting && heroCharIndex === 0) {
        heroDeleting = false;
        heroWordIndex = (heroWordIndex + 1) % heroWords.length;
    }

    setTimeout(heroType, heroDeleting ? 60 : 120);
}

heroType();

/* =========================
   ABOUT STREAMING EFFECT
========================== */

const aboutSection = document.querySelector("#about");
const aboutText = document.querySelector("#about-text");

if (aboutSection && aboutText) {

const aboutContent = `
I am Sahil Rai, a Bachelor of Computer Applications student at the Institute of Management Studies, Noida (Graduating 2026). I am deeply interested in Machine Learning, Artificial Intelligence, and data-driven systems that create measurable impact.

My goal is to become an ML/AI Engineer and contribute to building scalable, intelligent solutions in real-world environments. I am actively seeking opportunities — internships or full-time roles — where I can learn, grow, and contribute meaningfully within a professional organization.

Beyond technology, I have a strong interest in reading — especially Hindi and English novels — which has helped me develop analytical thinking, creativity, and clarity in communication. I believe continuous learning, discipline, and curiosity are essential for long-term growth in any field.
`;

let index = 0;
let deleting = false;
let started = false;

function streamText() {

    if (!deleting) {
        aboutText.textContent = aboutContent.substring(0, index + 1);
        index++;

        if (index === aboutContent.length) {
            setTimeout(() => deleting = true, 12000);
        }

    } else {
        aboutText.textContent = aboutContent.substring(0, index - 1);
        index--;

        if (index === 0) deleting = false;
    }

    setTimeout(streamText, deleting ? 10 : 18);
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
            started = true;
            streamText();
        }
    });
}, { threshold: 0.3 });

observer.observe(aboutSection);
}

});

/* =========================================================
   FUTURISTIC NEURAL FIELD WITH PARALLAX
========================================================= */

const canvas = document.getElementById("neural-bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = { x: null, y: null };
let nodes = [];

class Node {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = 2;
        this.dx = (Math.random() - 0.5) * 0.4;
        this.dy = (Math.random() - 0.5) * 0.4;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#3b82f6";
        ctx.fill();
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.dy *= -1;

        // Mouse reaction
        if (mouse.x) {
            let dx = this.x - mouse.x;
            let dy = this.y - mouse.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
                this.x += dx * 0.02;
                this.y += dy * 0.02;
            }
        }

        this.draw();
    }
}

function initNodes() {
    nodes = [];
    for (let i = 0; i < 100; i++) {
        nodes.push(new Node());
    }
}

function connectNodes() {
    for (let a = 0; a < nodes.length; a++) {
        for (let b = a; b < nodes.length; b++) {
            let dx = nodes[a].x - nodes[b].x;
            let dy = nodes[a].y - nodes[b].y;
            let distance = dx * dx + dy * dy;

            if (distance < 12000) {
                ctx.beginPath();
                ctx.strokeStyle = "rgba(59,130,246,0.15)";
                ctx.lineWidth = 1;
                ctx.moveTo(nodes[a].x, nodes[a].y);
                ctx.lineTo(nodes[b].x, nodes[b].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    nodes.forEach(node => node.update());
    connectNodes();
    requestAnimationFrame(animate);
}

window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener("click", (e) => {
    for (let i = 0; i < 8; i++) {
        nodes.push(new Node());
        nodes[nodes.length - 1].x = e.x;
        nodes[nodes.length - 1].y = e.y;
    }
});

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initNodes();
});

initNodes();
animate();

/* =========================================================
   AI TRAINING GRAPH
========================================================= */

const graph = document.getElementById("ai-graph");
const gctx = graph.getContext("2d");

function resizeGraph() {
    graph.width = window.innerWidth;
    graph.height = 200;
}
resizeGraph();

function drawGraph() {
    gctx.clearRect(0, 0, graph.width, graph.height);

    gctx.beginPath();
    gctx.moveTo(0, 160);

    for (let x = 0; x < graph.width; x += 15) {
        let y =
            160 -
            Math.sin(x * 0.01 + Date.now() * 0.003) * 30 -
            Math.cos(x * 0.02) * 10;

        gctx.lineTo(x, y);
    }

    gctx.strokeStyle = "rgba(59,130,246,0.6)";
    gctx.lineWidth = 2;
    gctx.shadowBlur = 15;
    gctx.shadowColor = "#3b82f6";
    gctx.stroke();

    requestAnimationFrame(drawGraph);
}

drawGraph();
window.addEventListener("resize", resizeGraph);

const counters = document.querySelectorAll(".counter");

function runCounters() {
    counters.forEach(counter => {
        counter.innerText = "0";
        const target = +counter.getAttribute("data-target");

        let current = 0;
        const increment = Math.ceil(target / 80);

        const update = () => {
            current += increment;
            if (current >= target) {
                counter.innerText = target;
            } else {
                counter.innerText = current;
                requestAnimationFrame(update);
            }
        };

        update();
    });
}

runCounters();


const bootText = document.querySelector(".boot-text");
const bootLines = [
    "Initializing Neural Engine...",
    "Loading ML Modules...",
    "Calibrating AI Systems...",
    "Deploying Sahil Rai Portfolio...",
    "System Ready."
];

let lineIndex = 0;

function bootSequence() {
    if (lineIndex < bootLines.length) {
        bootText.innerText = bootLines[lineIndex];
        lineIndex++;
        setTimeout(bootSequence, 700);
    } else {
        document.getElementById("boot-screen").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("boot-screen").remove();
        }, 1000);
    }
}

bootSequence();

const hero = document.querySelector(".hero");

hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * 10;
    const rotateY = ((x / rect.width) - 0.5) * -10;

    hero.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

hero.addEventListener("mouseleave", () => {
    hero.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
});

