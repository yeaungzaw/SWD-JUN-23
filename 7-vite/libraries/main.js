import './index.css';

import Glide from '@glidejs/glide';
import VenoBox from 'venobox';
import 'flowbite';
import Typed from 'typed.js';
import Aos from 'aos';
import WOW from 'wow.js';


const glideOptions = {
  type: 'carousel',
  perView: 3,
  gap: 0,
  autoplay: 3000,

  breakpoints: {
    1024: {
      perView: 2,
    },
    600: {
      perView: 1,
    }
  },
}

new Glide('.glide', glideOptions).mount();

new VenoBox({
  selector: ".my-link"
});


// Drawer btn
const openDrawer = document.querySelector("#openDrawer");

// Drawer
const drawerBox = document.querySelector("#drawer-example");

const drawerOptions = {
  placement: "top",
  bodyScrolling: true,
}

const drawer = new Drawer(drawerBox, drawerOptions);

const openDrawerHandler = () => {
  console.log("open drawer");

  drawer.toggle();
}

openDrawer.addEventListener("click", openDrawerHandler);

// Type JS
const typed = new Typed("#element", {
  strings: [
    "I'm a <i>Frontend Web Developer</i>", 
    "I'm a <i>UI / UX Developer</i>", 
    "I'm a <i>Backend Developer</i>", 
    "I'm a <i>Full Stack Developer</i>"
  ],
  typeSpeed: 50,
  startDelay: 1000,
  backSpeed: 10,
  backDelay: 3000,
  loop: true,
  loopCount: Infinity,
})

// AOS Content Animation
Aos.init({
  // delay: 1000,
  offset: 200,
  // once: true,
  duration: 1000,
});

new WOW({
  boxClass:     'wow',      // animated element css class (default is wow)
  animateClass: 'animate__animated',
}).init()