// import React, { useEffect, useRef, useState } from "react";
// import { useScroll, motion } from "framer-motion";
// import Lenis from "lenis";
// import { useCarousel } from "@/hook/useCarousel";
// import { SlBadge } from "react-icons/sl";
// import TextHoverAnimation from "../textHoverAnimation";
// import FootballAnimation from "../footballAnimation";
// import { iconsWithImagesObj } from "@/common/iconsWithImagesObj";
// import Section from "./section";

// const AnimatedSections: React.FC = () => {
//   const container = useRef<HTMLDivElement | null>(null);
//   const headingRef = useRef<HTMLDivElement | null>(null);

//   const [hideHeading, setHideHeading] = useState(false);
//   const [visibleIconIndexes, setVisibleIconIndexes] = useState<number[]>([]);

//   const { queryClient } = useCarousel();
//   const data = queryClient.getQueryData(["carousels"]) as {
//     id: number;
//     url: string;
//     phoneUrl: string;
//   }[];

//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end end"],
//   });

//   useEffect(() => {
//     // Initialize Lenis smooth scrolling
//     const lenis = new Lenis({
//       smoothWheel: true,
//       touchMultiplier: 1,
//       wheelMultiplier: 1.5,
//       autoResize: true,
//     });

//     const raf = (time: number) => {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     };

//     requestAnimationFrame(raf);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!container.current) return;

//       const { top, bottom, height } = container.current.getBoundingClientRect();
//       const sectionHeight = height / data.length;

//       // Calculate which section is in view
//       const activeIndex = Math.floor(
//         (-top + window.innerHeight / 2) / sectionHeight - 1
//       );

//       // Calculate visible sections
//       const newVisibleIndexes: number[] = [];
//       data.forEach((_, index) => {
//         const sectionTop = top + index * sectionHeight;
//         const sectionBottom = sectionTop + sectionHeight;

//         if (
//           sectionTop <= activeIndex &&
//           sectionBottom >= activeIndex - sectionHeight / 2
//         ) {
//           newVisibleIndexes.push(index);
//         }
//       });

//       setVisibleIconIndexes((prevIndexes) => {
//         // Ensure the indexes represent only currently visible sections
//         const newIndexes = prevIndexes.slice(); // Copy the previous indexes

//         // Add current active index if it's new and valid
//         if (!newIndexes.includes(activeIndex) && activeIndex >= 0) {
//           newIndexes.push(activeIndex);
//         }

//         // Remove indexes greater than the active index when scrolling back
//         return newIndexes
//           .filter((index) => index <= activeIndex)
//           .sort((a, b) => a - b);
//       });

//       // Check if heading should be hidden
//       if (bottom * 1.25 <= window.innerHeight) {
//         setHideHeading(true);
//       } else {
//         setHideHeading(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [data]);

//   if (!data || data.length === 0) {
//     return (
//       <main ref={container} className="relative h-[100vh]">
//         <div className="flex items-center justify-center text-white text-2xl">
//           No data available for carousel.
//         </div>
//       </main>
//     );
//   }

//   const sections = data.map((item, index) => ({
//     imageSrc: item.url,
//     phoneSrc: item.phoneUrl,
//     rotateRange: [0, index % 2 === 0 ? -5 : 5],
//   }));

//   return (
//     <main
//       ref={container}
//       className={`relative h-[${data?.length * 100}vh] select-none lg:mb-[10%]`}
//     >
//       {sections.map((section, index) => (
//         <Section
//           key={index}
//           scrollYProgress={scrollYProgress}
//           imageSrc={section.imageSrc}
//           phoneSrc={section.phoneSrc}
//           rotateRange={section.rotateRange as [number, number]}
//         />
//       ))}
//       <div
//         ref={headingRef}
//         className={`z-10 fixed text-center top-[15%] w-full transition-all duration-500 ${
//           hideHeading ? "opacity-0 lg:hidden" : "opacity-100 lg:visible"
//         }`}
//       >
//         <h1 className="text-2xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] flex items-center justify-center gap-2 font-primary [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)] text-white uppercase leading-tight">
//           <span className="text-secondary">
//             <SlBadge />
//           </span>
//           <TextHoverAnimation text={"South"} />
//           <TextHoverAnimation text={"India's"} />
//           <span className="text-secondary">
//             <TextHoverAnimation text={"No.1"} />
//           </span>
//         </h1>
//         <h1 className="text-2xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] flex items-center justify-center gap-2 font-primary [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)] text-white uppercase leading-tight">
//           <TextHoverAnimation text={"Sports"} />
//           <div className="text-secondary">
//             <TextHoverAnimation text={"infrastructure"} />
//           </div>
//           <TextHoverAnimation text={"Developer"} />
//         </h1>
//       </div>
//       <div
//         className={`w-full min-h-[40vh] z-[1000] fixed bottom-[5%] px-20 hidden lg:flex justify-center items-end transition-all duration-500 ${
//           hideHeading ? "opacity-0 lg:hidden" : "opacity-100 lg:visible"
//         }`}
//       >
//         <div className="grid lg:grid-cols-5 md:grid-cols-5">
//           {iconsWithImagesObj.map((icon, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={
//                 visibleIconIndexes.includes(index)
//                   ? { opacity: 1, scale: 1 }
//                   : { opacity: 0, scale: 0.8 }
//               }
//               transition={{ duration: 0.5 }}
//               className={`grid col-start-${icon.col} row-start-1`}
//             >
//               <div className="flex flex-col md:w-full w-[75%] items-start md:items-center text-left md:text-center">
//                 <div className="flex flex-col md:items-center items-start space-y-1">
//                   <div className="items-start w-[50%] md:items-center md:justify-center md:w-full flex justify-start ">
//                     <img
//                       src={icon.imageSrc}
//                       className="h-full w-full md:h-52 md:w-52 lg:h-52 lg:w-52 select-none"
//                       draggable="false"
//                     />
//                   </div>
//                   <span className="flex w-full flex-col items-start sm:items-center text-left sm:text-center gap-1 md:gap-3">
//                     <h1 className="text-xl md:text-xl lg:text-lg font-primary uppercase text-white z-[11] opacity-0 animate-lineUp">
//                       {icon.title}
//                     </h1>
//                     <p className="text-md md:text-[14px] lg:text-[14px] text-gray-300 w-[80%] break-words">
//                       {icon.description}
//                     </p>
//                   </span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//           <div
//             className={`z-10 grid col-start-3 row-start-1 transition-all duration-500 ${
//               hideHeading ? "opacity-0" : "opacity-100"
//             }`}
//           >
//             <div className="flex justify-center items-end">
//               <FootballAnimation />
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default AnimatedSections;

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { useCarousel } from "@/hook/useCarousel";
import { SlBadge } from "react-icons/sl";
import TextHoverAnimation from "../textHoverAnimation";
import FootballAnimation from "../footballAnimation";
import { iconsWithImagesObj } from "@/common/iconsWithImagesObj";
import Section from "./section";
const AnimatedSections: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);

  const [hideHeading, setHideHeading] = useState(false);
  const [visibleIconIndexes, setVisibleIconIndexes] = useState<number[]>([]);

  const { queryClient } = useCarousel();
  const data = queryClient.getQueryData(["carousels"]) as {
    id: number;
    url: string;
    phoneUrl: string;
  }[];

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      smoothWheel: true,
      touchMultiplier: 1,
      wheelMultiplier: 1.5,
      autoResize: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!container.current) return;

      const { top, bottom, height } = container.current.getBoundingClientRect();
      const sectionHeight = height / data.length;

      // Calculate which section is in view
      const activeIndex = Math.floor(
        (-top + window.innerHeight / 2) / sectionHeight - 1
      );

      // Calculate visible sections
      const newVisibleIndexes: number[] = [];
      data.forEach((_, index) => {
        const sectionTop = top + index * sectionHeight;
        const sectionBottom = sectionTop + sectionHeight;

        if (
          sectionTop <= activeIndex &&
          sectionBottom >= activeIndex - sectionHeight / 2
        ) {
          newVisibleIndexes.push(index);
        }
      });

      setVisibleIconIndexes((prevIndexes) => {
        const newIndexes = prevIndexes.slice(); // Copy the previous indexes

        // Add current active index if it's new and valid
        if (!newIndexes.includes(activeIndex) && activeIndex >= 0) {
          newIndexes.push(activeIndex);
        }

        // Remove indexes greater than the active index when scrolling back
        return newIndexes
          .filter((index) => index <= activeIndex)
          .sort((a, b) => a - b);
      });

      // Check if heading should be hidden
      if (bottom * 1.25 <= window.innerHeight) {
        setHideHeading(true);
      } else {
        setHideHeading(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data]);

  if (!data || data.length === 0) {
    return (
      <main ref={container} className="relative h-[100vh]">
        <div className="flex items-center justify-center text-white text-2xl">
          No data available for carousel.
        </div>
      </main>
    );
  }

  return (
    <main
      ref={container}
      className={`relative h-[${data?.length * 100}vh] select-none lg:mb-[10%]`}
    >
      <div className="absolute bottom-0 left-0 w-full z-[999] h-36 bg-gradient-to-t from-primary to-transparent pointer-events-none"></div>
      <div className="">
      {data?.map((image, index) => (
        <Section key={index} imageSrc={image.url} phoneSrc={image.phoneUrl} />
      ))}
      <div
        ref={headingRef}
        className={`z-10 fixed text-center top-[15%] w-full transition-all duration-500 ${
          hideHeading ? "opacity-0 lg:hidden" : "opacity-100 lg:visible"
        }`}
      >

        <h1 className="text-2xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] flex items-center justify-center gap-2 font-primary [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)] text-white uppercase leading-tight">
          <span className="text-secondary">
            <SlBadge />
          </span>
          <TextHoverAnimation text={"South"} />
          <TextHoverAnimation text={"India's"} />
          <span className="text-secondary">
            <TextHoverAnimation text={"No.1"} />
          </span>
        </h1>
        <h1 className="text-2xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] flex items-center justify-center gap-2 font-primary [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)] text-white uppercase leading-tight">
          <TextHoverAnimation text={"Sports"} />
          <div className="text-secondary">
            <TextHoverAnimation text={"infrastructure"} />
          </div>
          <TextHoverAnimation text={"Developer"} />
        </h1>
      </div>
      <div
           className={`z-10 fixed text-center  bottom-10 md:bottom-10 flex justify-center   w-full  transition-all duration-500 ${
            hideHeading ? "opacity-0 lg:hidden" : "opacity-100 lg:visible"
          }`}
          >

            {/* <div className="flex justify-center  w-full top-0 h-full items-center border "> */}
              <FootballAnimation />
            {/* </div> */}
        {/*  */}

          </div>
          <div className={`fixed bottom-8 md:bottom-6  w-full justify-center items-center ${
            hideHeading ? "opacity-0 lg:hidden" : "opacity-100 lg:visible"
          }`}>
          <p className="text-lg md:text-lg  flex  gap-2 font-primary [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)] text-white uppercase leading-tight  flex-col justify-center items-center">
            <span className="flex gap-2">
              <TextHoverAnimation text=" drag "/>
              <TextHoverAnimation text="to"/>

             <span className="text-secondary">
             <TextHoverAnimation text=" Rotate  "/>

            </span>
            <TextHoverAnimation text="  a  "/>
            <TextHoverAnimation text="  BALL "/>


            </span>
            
            
            {/* <MdKeyboardDoubleArrowDown  className={`animate-bounceUpDown h-10 w-14 transition-all `}/> */}
          </p>
          </div>
        
      </div>
      <div
        className={`w-full min-h-[40vh] z-40 fixed bottom-[5%] px-20 hidden lg:flex justify-center items-end transition-all duration-500 ${
          hideHeading ? "opacity-0 lg:hidden" : "opacity-100 lg:visible"
        }`}
      >
        <div className="grid lg:grid-cols-5 md:grid-cols-5">
          {iconsWithImagesObj.map((icon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                visibleIconIndexes.includes(index)
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5 }}
              className={`grid col-start-${icon.col} row-start-1`}
            >
              <div className="flex flex-col md:w-full w-[75%] items-start md:items-center text-left md:text-center">
                <div className="flex flex-col md:items-center items-start space-y-1">
                  <div className="items-start w-[50%] md:items-center md:justify-center md:w-full flex justify-start ">
                    <img
                      src={icon.imageSrc}
                      className="h-full w-full md:h-44 md:w-44 lg:h-44 lg:w-44 select-none"
                      draggable="false"
                    />
                  </div>
                  <span className="flex w-full flex-col items-start sm:items-center text-left sm:text-center gap-1 md:gap-3 [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)]">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-primary uppercase text-secondary z-[11] opacity-0 animate-lineUp [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)]">
                      {icon.title}
                    </h1>
                    <p className="text-md md:text-[14px] lg:text-base text-white w-[80%] leading-tight font-medium break-words [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)]">
                      {icon.description}
                    </p>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
          <div
            className={`z-10 grid col-start-3 row-start-1 transition-all duration-500 ${
              hideHeading ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex justify-center items-end">
              <FootballAnimation />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AnimatedSections;
