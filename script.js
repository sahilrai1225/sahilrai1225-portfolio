document.addEventListener("DOMContentLoaded", function () {

/* =========================
   HERO TYPING EFFECT (STABLE VERSION)
========================== */

const typingElement = document.querySelector(".typing");

const heroWords = [
    "ML Engineer",
    "AI Developer",
    "Data Science",
    "Data Analysis",
    "Python Developer"
];

let heroWordIndex = 0;
let heroCharIndex = 0;
let heroIsDeleting = false;

function heroTypeEffect() {

    const currentWord = heroWords[heroWordIndex];

    if (!heroIsDeleting) {
        heroCharIndex++;
    } else {
        heroCharIndex--;
    }

    typingElement.textContent =
        currentWord.substring(0, heroCharIndex);

    if (!heroIsDeleting && heroCharIndex === currentWord.length) {
        heroIsDeleting = true;
        setTimeout(heroTypeEffect, 1500);
        return;
    }

    if (heroIsDeleting && heroCharIndex === 0) {
        heroIsDeleting = false;
        heroWordIndex = (heroWordIndex + 1) % heroWords.length;
    }

    setTimeout(heroTypeEffect, heroIsDeleting ? 60 : 120);
}

heroTypeEffect();

    /* =========================
       ABOUT STREAMING EFFECT
    ========================== */

    const aboutSection = document.querySelector("#about");
    const aboutTextElement = document.querySelector("#about-text");

    const aboutFullText = `
I am Sahil Rai, a Bachelor of Computer Applications student at the Institute of Management Studies, Noida (Graduating 2026). I am deeply interested in Machine Learning, Artificial Intelligence, and data-driven systems that create measurable impact.

My goal is to become an ML/AI Engineer and contribute to building scalable, intelligent solutions in real-world environments. I am actively seeking opportunities — internships or full-time roles — where I can learn, grow, and contribute meaningfully within a professional organization.

Beyond technology, I have a strong interest in reading — especially Hindi and English novels — which has helped me develop analytical thinking, creativity, and clarity in communication. I believe continuous learning, discipline, and curiosity are essential for long-term growth in any field.
`;

    let aboutCharIndex = 0;
    let aboutIsDeleting = false;
    let aboutStarted = false;

    function streamAboutText() {

        if (!aboutIsDeleting) {
            aboutTextElement.textContent =
                aboutFullText.substring(0, aboutCharIndex + 1);
            aboutCharIndex++;

            if (aboutCharIndex === aboutFullText.length) {
                setTimeout(() => {
                    aboutIsDeleting = true;
                }, 15000);  // Stay visible 15 seconds
            }

        } else {
            aboutTextElement.textContent =
                aboutFullText.substring(0, aboutCharIndex - 1);
            aboutCharIndex--;

            if (aboutCharIndex === 0) {
                aboutIsDeleting = false;
            }
        }

        setTimeout(streamAboutText, aboutIsDeleting ? 10 : 18);
    }

    // Scroll trigger
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !aboutStarted) {
                aboutStarted = true;
                streamAboutText();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(aboutSection);



    /* =========================
       PARTICLES
    ========================== */

    if (typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
            particles: {
                number: { value: 60 },
                size: { value: 3 },
                move: { speed: 2 },
                line_linked: { enable: true }
            }
        });
    }


const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = Math.ceil(target / 100);

        if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});

    // /* =========================
    //    SCROLL REVEAL
    // ========================== */

    // if (typeof ScrollReveal !== "undefined") {

    //     ScrollReveal().reveal('.project-card', {
    //         delay: 200,
    //         distance: '50px',
    //         origin: 'bottom',
    //         duration: 800,
    //         interval: 200
    //     });

    //     ScrollReveal().reveal('.cert-card', {
    //         delay: 200,
    //         distance: '40px',
    //         origin: 'bottom',
    //         duration: 800,
    //         interval: 200
    //     });
    // }

});
