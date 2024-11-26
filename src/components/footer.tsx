// import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// export const Footer = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col gap-10 mt-10 px-10 lg:px-48">
//       <div className="w-full flex flex-col lg:flex-row border-t border-b border-slate-100/20">
//         <div className="py-10 lg:py-[3.5rem] px-3 lg:px-1 flex flex-col lg:flex-row w-[60%] text-[12px] gap-5 lg:gap-10 font-secondary  uppercase">
//           <p className="hover:cursor-pointer hover:text-white">Home</p>
//           <p className="hover:cursor-pointer hover:text-white">About</p>
//           <p className="hover:cursor-pointer hover:text-white">Services</p>
//           <p className="hover:cursor-pointer hover:text-white">Contact</p>
//         </div>
//         <div className="pb-10 lg:py-[3.5rem] px-3 lg:px-1 flex w-[40%] text-[12px] gap-8 font-secondary  lg:justify-end">
//           <div className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:cursor-pointer hover:text-white hover:border-white">
//             <FaInstagram />
//           </div>
//           <div className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:cursor-pointer hover:text-white hover:border-white">
//             <FaYoutube />
//           </div>
//           <div className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:cursor-pointer hover:text-white hover:border-white">
//             <FaFacebook />
//           </div>
//           <div className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:cursor-pointer hover:text-white hover:border-white">
//             <FaWhatsapp />
//           </div>
//         </div>
//       </div>
//       <div className="flex py-5">
//         <p>©2024. All rights reserved.</p>
//       </div>
//     </div>
//   );
// };

import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AnimateCard from "./AnimateCard/main";
import { MdCall, MdEmail, MdLocationPin } from "react-icons/md";

export const Footer = () => {
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    if (path.startsWith("#")) {
      if (location.pathname !== "/") {
        console.log(22222);
        // If not on the home page, navigate to it first
        navigate("/", { replace: true });
        setTimeout(() => {
          const section = document.querySelector(path);
          if (section) section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        // Scroll directly if already on the home page
        const section = document.querySelector(path);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // External route navigation
      navigate(path);
    }
  };

  return (
    <div className="flex flex-col gap-10 mt-10 px-10 lg:px-28">
      <AnimateCard>
        <div className="w-full flex flex-col border-t border-b border-slate-100/20 py-10 lg:pt-[3.5rem] px-3 lg:px-1">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="flex flex-col lg:items-center lg:flex-row pb-10 lg:w-[50%] w-full text-[12px] gap-5 lg:gap-10 font-secondary uppercase">
              <p
                onClick={() => handleNavClick("#home")}
                className="hover:cursor-pointer hover:text-white"
              >
                Home
              </p>
              <p
                onClick={() => handleNavClick("#aboutUs")}
                className="hover:cursor-pointer hover:text-white"
              >
                About
              </p>
              <p
                onClick={() => handleNavClick("#services")}
                className="hover:cursor-pointer hover:text-white"
              >
                Services
              </p>
              <p
                onClick={() => handleNavClick("#contact")}
                className="hover:cursor-pointer hover:text-white"
              >
                Contact
              </p>
            </div>
            <div className="flex lg:w-[50%] w-full text-[12px] gap-8 pb-10 font-secondary lg:justify-end">
              <div
                onClick={() => {
                  window.open("https://www.instagram.com/gameon_solution");
                }}
                className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:cursor-pointer hover:text-white hover:border-white"
              >
                <FaInstagram />
              </div>
              <div
                onClick={() => {
                  window.open("https://www.youtube.com/@GameonSolution");
                }}
                className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:cursor-pointer hover:text-white hover:border-white"
              >
                <FaYoutube />
              </div>
              <div className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:cursor-pointer hover:text-white hover:border-white">
                <FaFacebook />
              </div>
              <div
                onClick={() => {
                  window.open("https://wa.me/9615737373");
                }}
                className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:cursor-pointer hover:text-white hover:border-white"
              >
                <FaWhatsapp />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center bg-yellow-400/20 py-5">
            <div className="flex flex-col lg:flex-row gap-10 lg:justify-around">
              <div className="flex flex-col justify-center w-full lg:w-[30%] items-center gap-2">
                <MdCall className="text-2xl opacity-80" />
                <div className="flex flex-col gap-3 justify-center items-center">
                  <p className="font-primary uppercase text-xl md:text-2xl text-secondary">
                    Call
                  </p>
                  <p className="flex tracking-[1.5px] justify-center items-center gap-1 font-secondary uppercase text-xs font-medium text-white">
                    <span className="flex justify-center items-center gap-1.5">
                      <span className="tracking-[1.5px]">+91 9615737373</span>
                      <span>(or)</span>
                      <span className="tracking-[1.5px]">+91 9715131313</span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center w-full lg:w-[30%] items-center gap-2">
                <MdEmail className="text-2xl opacity-80" />
                <div className="flex flex-col gap-3 justify-center items-center">
                  <p className="font-primary uppercase text-xl md:text-2xl text-secondary">
                    Write
                  </p>
                  <p className="font-secondary uppercase text-xs font-medium text-white tracking-[1.5px]">
                    gameon.solution.317@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center w-full lg:w-[30%] items-center gap-2">
                <MdLocationPin className="text-2xl opacity-80" />
                <div className="flex flex-col gap-3 justify-center items-center">
                  <p className="font-primary uppercase text-2xl text-secondary">
                    Visit
                  </p>
                  <p className="font-secondary tracking-[1.5px] uppercase text-center text-xs font-medium text-white">
                    Seethammal Colony 2nd Cross St, Lubdhi Colony, Alwarpet,
                    Chennai, Tamil Nadu 600018
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimateCard>
      {/* <AnimateCard>
        <div className="w-full flex flex-col lg:flex-row border-t border-b border-slate-100/20 ">
          <div className="border border-red-900 w-full">
            <div className="py-10 lg:py-[3.5rem] px-3 lg:px-1 flex flex-col lg:flex-row w-[60%] text-[12px] gap-5 lg:gap-10 font-secondary uppercase">
              <p
                onClick={() => handleNavClick("#home")}
                className="hover:cursor-pointer hover:text-white"
              >
                Home
              </p>
              <p
                onClick={() => handleNavClick("#aboutUs")}
                className="hover:cursor-pointer hover:text-white"
              >
                About
              </p>
              <p
                onClick={() => handleNavClick("#services")}
                className="hover:cursor-pointer hover:text-white"
              >
                Services
              </p>
              <p
                onClick={() => handleNavClick("#contact")}
                className="hover:cursor-pointer hover:text-white"
              >
                Contact
              </p>
            </div>
            <div className="pb-10 lg:py-[3.5rem] px-3 lg:px-1 flex w-[40%] text-[12px] gap-8 font-secondary lg:justify-end">
              <div
                onClick={() => {
                  window.open("https://www.instagram.com/gameon_solution");
                }}
                className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:cursor-pointer hover:text-white hover:border-white"
              >
                <FaInstagram />
              </div>
              <div
                onClick={() => {
                  window.open("https://www.youtube.com/@GameonSolution");
                }}
                className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:cursor-pointer hover:text-white hover:border-white"
              >
                <FaYoutube />
              </div>
              <div className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:cursor-pointer hover:text-white hover:border-white">
                <FaFacebook />
              </div>
              <div
                onClick={() => {
                  window.open("https://wa.me/9615737373");
                }}
                className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:cursor-pointer hover:text-white hover:border-white"
              >
                <FaWhatsapp />
              </div>
            </div>
          </div>
        </div>
      </AnimateCard> */}

      <div className="flex py-5">
        <p>©2024. All rights reserved.</p>
      </div>
    </div>
  );
};
