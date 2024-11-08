import { cn } from "@/lib/utils";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CircleMiniCricketStadiumTurf = () => {

  const navigate = useNavigate()
  return (
    <div
      id="CircleMiniCricketStadiumTurf"
      className="flex flex-col gap-10 justify-center items-center select-none min-h-screen bg-primary px-10 md:px-20 lg:px-[7.5rem] pb-16 lg:pb-28"
    >
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white uppercase leading-tight text-center px-4">
        Circle Mini
        <span className="text-secondary"> Cricket</span> Stadium Turf
      </p>
      <div className="w-full max-w-[1200px] px-4">
        <div
          className={cn(
            "group w-full cursor-pointer overflow-hidden relative card h-[60vh] sm:h-[80vh] lg:h-[100vh] rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 sm:p-6 border border-transparent dark:border-neutral-800",
            "bg-[url('/CircleMiniCricketStadiumTurff/PLT_00017.jpg')] bg-cover bg-center",
            // Preload hover image by setting it in a pseudo-element
            "before:bg-[url('/CircleMiniCricketStadiumTurff/PLT_00022.jpg')] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
            "hover:bg-[url('/CircleMiniCricketStadiumTurff/PLT_00022.jpg')]",
            "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
            "transition-all duration-500"
          )}
        >
          <div className="relative z-50 px-2">
            <h1 className="font-bold text-lg sm:text-xl md:text-3xl text-gray-50">
              Circle Mini Cricket Stadium Turf
            </h1>
            {/* <p className="font-normal text-sm sm:text-base text-gray-50 mt-2 sm:mt-4">
              This card is for some special elements, like displaying background
              gifs on hover only.
            </p> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 px-4">
        <section className="md:text-2xl text-lg text-white text-center">
          Welcome to the Circle Mini Cricket Stadium Turf, where passion for
          cricket meets high-quality, exclusive playing surfaces. Designed with
          the perfect blend of aesthetics and functionality, our turf offers an
          unmatched experience for players of all skill levels. The turf’s
          professional-grade quality ensures optimal ball bounce, pace, and
          spin, bringing a true stadium feel to every game. Whether you’re
          looking to play a friendly match or host a competitive tournament,
          Circle Mini Stadium is crafted to offer a first-rate cricketing
          experience in a compact setting.
        </section>
        <div className="flex flex-row-reverse    gap-2  items-center justify-center border border-opacity-10 hover:bg-secondary bg-slate-200/10 p-2 group hover:cursor-pointer transition-all duration-300">
          <FaArrowRight className="text-lg sm:text-xl md:text-2xl group-hover:text-primary text-white/80 transform transition-transform duration-300 -rotate-45 ease-out group-hover:-rotate-0" />
          <p  onClick={() =>{
            navigate('/circle-turf')
          }} className="text-xs sm:text-sm md:text-base group-hover:text-primary text-white/80 font-primary uppercase tracking-widest transition-colors duration-300 ">
            Read more
          </p>
        </div>
      </div>
    </div>
  );
};

export default CircleMiniCricketStadiumTurf;
