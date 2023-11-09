import './index.css';

import Glide from '@glidejs/glide';
import VenoBox from 'venobox';
import 'flowbite';


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