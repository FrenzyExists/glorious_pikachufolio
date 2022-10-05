
<script setup>
    import VectorCircuitsVue from "./vectors/VectorCircuits.vue";
    import VectorIdeasVue from "./vectors/VectorIdeas.vue";
    import VectorProgrammerVue from "./vectors/VectorProgrammer.vue";
    import VectorRoboArmVue from "./vectors/VectorRoboArm.vue";
</script>

<template>
    <div class="h-screen">
        <div style="height: 16vh; background: hsl(217,88%, 93%);"></div>
        <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            class="svg absolute hidden lg:block w-full overflow-hidden"
            style="height: 70vh; ; z-index: -10;"
        >
            <defs>
                <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                    <stop stop-color="hsl(217, 102%, 99%)" offset="0%" />
                    <stop stop-color="hsl(217,88%, 93%)" offset="100%" />
                </linearGradient>
            </defs>
            <path
                fill="url(#sw-gradient-0)"
                d="M 0.351 264.418 C 0.351 264.418 33.396 268.165 47.112 270.128 C 265.033 301.319 477.487 325.608 614.827 237.124 C 713.575 173.504 692.613 144.116 805.776 87.876 C 942.649 19.853 1317.845 20.149 1440.003 23.965 C 1466.069 24.779 1440.135 24.024 1440.135 24.024 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 264.418 Z"
            />
        </svg>

        <div class="px-6 py-12 xl:pb-7 md:px-12 text-gray-800 text-center lg:text-left">
            <div class="container mx-auto xl:px-32">
                <div class="grid lg:grid-cols-2 gap-12 flex items-center">
                    <div class="mt-12 lg:mt-0">
                        <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                            García here! I'm a
                            <br />
                            <div class="text-blue-600 cursor">
                                <span>&nbsp;</span>
                            </div>
                        </h1>
                        <a
                            class="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            href="#!"
                            role="button"
                        >Contact Me!</a>
                    </div>
                    <div class="mb-12 lg:mb-0">
                        <img
                            src="https://mdbootstrap.com/img/new/standard/city/015.jpg"
                            class="w-full rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

const things = [
    {
        name: "Tinkerer",
        component: VectorRoboArmVue
    },
    {
        name: "Problem Solver",
        component: VectorIdeasVue
    },
    {
        name: "Programmer",
        component: VectorProgrammerVue
    },
    {
        name: "Designer",
        component: VectorCircuitsVue
    }
]

// const typedTextSpan = document.querySelector(".typed-text");
// const cursorSpan = document.querySelector(".cursor");

// const textArray = ["hard", "fun", "a journey", "LIFE"];
// const typingDelay = 200;
// const erasingDelay = 100;
// const newTextDelay = 2000; // Delay between current and next text
// let textArrayIndex = 0;
// let charIndex = 0;

// function type() {
//   if (charIndex < textArray[textArrayIndex].length) {
//     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//     typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
//     charIndex++;
//     setTimeout(type, typingDelay);
//   } 
//   else {
//     cursorSpan.classList.remove("typing");
//   	setTimeout(erase, newTextDelay);
//   }
// }

// function erase() {
// 	if (charIndex > 0) {
//     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//     typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
//     charIndex--;
//     setTimeout(erase, erasingDelay);
//   } 
//   else {
//     cursorSpan.classList.remove("typing");
//     textArrayIndex++;
//     if(textArrayIndex>=textArray.length) textArrayIndex=0;
//     setTimeout(type, typingDelay + 1100);
//   }
// }

// document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
//   if(textArray.length) setTimeout(type, newTextDelay + 250);
// });



// export default {
// data: {
//     showLetter: null,
//     timeRemaining: 3,
//     intervalId: setInterval(updateTime, 1000)
// },
// methods: {
//     updateTime(e) {
//         let remaining = timeRemaining

//         if(remaining <= 0) {
//             // Perform change

//             let id = e.target.dataset.newChildId;
//             id = Number(id);
//             this.showLetter = id;

//             // Reset
//             clearInterval(intervalId)
//         }
//         secondsRemaining -= 1;
//     }
// }
// }

</script>