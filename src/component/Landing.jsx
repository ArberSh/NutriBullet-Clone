import React from "react";
import Nav from "./Nav";
import Juicer from "../assets/Juicer.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Landing() {
  AOS.init();

  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  return (
    <div className="overflow-hidden h-full bg-gradient-to-br from-mediumbluegray from-25% to-darkblue ">
      <Nav></Nav>
      <div className="max-[640px]:p-0 p-20 flex justify-around items-start max-[640px]:flex-col">
        <div data-aos="fade-up" className=" pt-20 w-1/2 max-[640px]:w-full max-[640px]:px-10">
          <h1 className=" text-lightbluegray text-8xl font-body font-semibold">
            BEST <span className=" text-lightgray">JUICER</span> IN THE WORLD
          </h1>
          <h1 className="mt-4 text-lightgray text-xl font-sans">
            The Nutribullet juicer is acclaimed for its compact design, powerful
            motor, and efficiency in extracting nutrient-rich juice quickly and
            easily.
          </h1>
          <button className="mt-10 px-8 py-2 rounded-sm bg-lightgray text-hardbluegray text-xl hover:bg-lightgrayer">
            Shop Now
          </button>
        </div>
        <div className="max-[640px]:flex justify-center items-center w-full py-6]" data-aos="fade-left">
          <img
            className=" max-[1030px]:w-40 w-64 rotate-12"
            src={Juicer}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
