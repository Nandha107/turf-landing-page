// import React, { useEffect, } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import _ from "lodash";

// import { useTestimonials } from "@/hook/useTestimonials";
// import TextHoverAnimation from "./textHoverAnimation";
// import VideoCard from "./videoCard/main";
// type Testimonial = {
//   id: number;
//   authorName: string;
//   content: string;
//   rating: number;
//   createdAt: Date;
//   fileType: "image" | "video" | "youtube" | "instagram";
//   mediaUrl: string;
// };
// gsap.registerPlugin(ScrollTrigger);
// const Testimonials: React.FC = () => {
//   const { queryClient } = useTestimonials();

//   const data =
//     (queryClient.getQueryData(["testimonials"]) as Testimonial[]) ?? [];

//   console.log(data.map((test) => test.mediaUrl));

//   useEffect(() => {
//     // Function to initialize ScrollTrigger
//     const initializeScrollTrigger = () => {
//       const gsapBl = document.querySelector(".gsap__bl") as HTMLDivElement;
//       const gsapTrack = document.querySelector(
//         ".gsap__track"
//       ) as HTMLDivElement;

//       const gsapBlWidth = gsapBl?.offsetWidth || 0;
//       const gsapTrackWidth = gsapTrack?.offsetWidth || 0;
//       const scrollSliderTransform = gsapTrackWidth - gsapBlWidth;

//       // Clean up existing ScrollTriggers
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

//       // Create a new ScrollTrigger
//       gsap.to(".gsap__track", {
//         x: `-=${scrollSliderTransform}px`,
//         scrollTrigger: {
//           trigger: ".gsap_slider",
//           start: "center center",
//           end: () => `+=${gsapTrackWidth}`,
//           pin: true,
//           scrub: true,
//         },
//       });
//     };

//     initializeScrollTrigger(); // Initial call to set up ScrollTrigger

//     // Resize event handler
//     const onWindowResize = _.debounce(() => {
//       console.log("Window resized!");
//       initializeScrollTrigger(); // Reinitialize ScrollTrigger on resize
//     }, 100);

//     window.addEventListener("resize", onWindowResize);

//     return () => {
//       window.removeEventListener("resize", onWindowResize);
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Clean up scroll triggers
//     };
//   }, []);

//   return (
//     <div className="wrapp p-6">
//       <header className="header p-2">
//         <div className="content flex gap-3 flex-col">
//           <h1 className="relative uppercase text-lg sm:text-2xl md:text-3xl lg:text-5xl font-special italic font-extrabold text-white z-[11] opacity-0 animate-lineUp delay-1000">
//             <TextHoverAnimation text="Testimonials" />
//           </h1>
//           <p className="text-base md:text-lg lg:text-2xl xl:text-3xl text-white/40 font-primary">
//             Discover the heartfelt words of those we've had the privilege to
//             serve. Our client's stories reflect the passion and dedication we
//             bring to every moment."
//           </p>
//         </div>
//       </header>
//       <div className="block md:hidden grid justify-center items-center gap-4 border grid-cols-1 sm:grid-cols-2">
//         {data.map((test, i) => (
//           <VideoCard key={i} videoSrc={test.mediaUrl} />
//         ))}
//       </div>

//       <main className="main hidden md:block">
//         <section className="section-slider gsap_slider">
//           <div className="content">
//             <div className="section__slider gsap_h">
//               <div className="gsap__bl">
//                 <div className="gsap__inner">
//                   <div className="gsap__track">
//                     {data.map((test) => (
//                       <div className="t flex m-4 ">
//                         <VideoCard videoSrc={test.mediaUrl} />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="section-text">
//           <div className="content">
//             <p>
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
//               voluptatem fugit accusamus fuga vero quos, sint est laboriosam
//               eveniet ea! ...
//             </p>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Testimonials;

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import TextHoverAnimation from "./textHoverAnimation";
import { useTestimonials } from "@/hook/useTestimonials";
import VideoCard from "./videoCard/main";
// import { Footer } from "./footer";

import { Footer } from "./footer";

type Testimonial = {
  id: number;
  authorName: string;
  content: string;
  rating: number;
  createdAt: Date;
  fileType: "image" | "video" | "youtube" | "instagram";
  mediaUrl: string;
};

const Testimonials = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const { queryClient } = useTestimonials();

  const data =
    (queryClient.getQueryData(["testimonials"]) as Testimonial[]) ?? [];

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}, []); 

  return (
    <div className="flex flex-col lg:pt-[10] pt-32  pb-20 ">
      <div className="flex flex-col gap-5 text-center items-center justify-center px-10 lg:px-48">
        <p className="text-[12px] font-secondary  uppercase tracking-[1px]">
          what client says
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-secondary uppercase leading-tight">
          <TextHoverAnimation text="Testimonials" />
        </h1>
        <p className="text-lg md:text-2xl text-white font-secondary ">
          Discover the heartfelt words of those we've had the privilege to
          serve. Our client's stories reflect the passion and dedication we
          bring to every moment."
        </p>
      </div>

      <section ref={targetRef} className="md:h-[400vh] flex flex-col px-10">
        <div className="sticky top-0  h-screen justify-center items-center  xl:flex xl:visible lg:flex lg:visible  hidden overflow-hidden">
          <motion.div style={{ x ,width:1100} } className="flex gap-10">
            {data.map((test, i) => (
              <div key={i} className="flex flex-col gap-2">
                <HorizontalCard key={i} videoSrc={test.mediaUrl} />

                <p className="text-3xl  font-primary text-white  uppercase leading-tight">
                  Author <span className="text-secondary">name</span>
                </p>
                <div>content</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="sticky top-0 justify-center items-center py-12 gap-12 md:visible lg:hidden xl:hidden flex flex-col ">
          {data.map((test, i) => (
            <div key={i} className="flex flex-col gap-2">
              <VerticalCard key={i} videoSrc={test.mediaUrl} />
              <p className="text-3xl  font-primary  text-white  uppercase leading-tight">
                Author <span className="text-secondary">name</span>
              </p>
              <div>content</div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

const HorizontalCard: React.FC<{ videoSrc: string }> = ({ videoSrc }) => {
  return (
    <div className=" h-[30rem] w-[20rem] transition-transform overflow-hidden  hover:z-50 duration-500 hover:shadow-2xl hover:scale-125">
      <VideoCard videoSrc={videoSrc} />
    </div>
  );
};

const VerticalCard: React.FC<{ videoSrc: string }> = ({ videoSrc }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="show"
      whileInView="visible"
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="h-[500px] w-[300px] "
    >
      <VideoCard videoSrc={videoSrc} />
    </motion.div>
  );
};

export default Testimonials;
