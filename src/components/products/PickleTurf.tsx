import { Container } from "./pageAnimation/container";
import { FadeIn } from "./pageAnimation/fade-in";
import { Hero } from "./pageAnimation/hero";
import { VideoCarousel } from "./pageAnimation/video-carousel";

const PickleTurf = () => {
  return (
    <div className="">
      <div className="bg-background relative z-10 select-none">
        <Hero
          title={"PICKLE TURF"}
          subtitle={"FINDS ITS MARK"}
          bgImgUrl={
            " /public/pickleTurf/pickle-turf-005.jpg"
          }
        />
        <Container className="relative z-10 max-w-[692px] space-y-12 py-36 text-3xl font-bold text-white md:text-4xl">
          <FadeIn>
            <p className="uppercase">
              Premium Playing Surface for Pickleball EnthusiastsL
            </p>
          </FadeIn>
          <FadeIn>
            <p>
              Introducing Pickle Turf, an exclusive, top-quality surface
              designed specifically for pickleball enthusiasts looking for a
              superior playing experience. With precise attention to texture,
              resilience, and court dynamics, Pickle Turf provides a surface
              that complements every aspect of the game. This high-performance
              turf is engineered to ensure consistent ball bounce, excellent
              traction, and comfort, enhancing your play while preserving
              agility and control. Whether for training, friendly matches, or
              competitive play, Pickle Turf transforms any space into a
              professional-grade pickleball court. Our turf combines advanced
              materials and a specialized design to withstand heavy play and
              varied weather conditions, providing durability and longevity.
              It’s crafted for minimal maintenance, so you can enjoy more
              uninterrupted game time. Pickle Turf's shock-absorbing layer
              reduces impact on joints, making it ideal for players of all ages
              and skill levels. With our exclusive turf, you get a premier
              playing environment that fosters enjoyment, safety, and
              performance.
            </p>
          </FadeIn>
          <FadeIn>
            <p className="uppercase">Features of Pickle Turf </p>
          </FadeIn>
          <FadeIn>
            <p>
              Professional-grade artificial turf tailored for pickleball
              gameplay Optimized surface for consistent ball bounce and precise
              movement Weather-resistant materials, suitable for outdoor and
              indoor play Shock-absorbing layer for reduced impact on players'
              joints Low-maintenance design for hassle-free play
            </p>
          </FadeIn>
        </Container>
      </div>
      <VideoCarousel title="Cricket Turf" carouselImages={cricketItems} />

    


    </div>
  );
};
export default PickleTurf;

const cricketItems = [
  {
    poster:
      "/public/pickleTurf/pickle-turf-001.jpg",
    name: "Airplane",
  },
  {
    poster:
      "/public/pickleTurf/pickle-turf-002.jpg",
    name: "Family man",
  },
  {
    poster:
      "/public/pickleTurf/pickle-turf-003.jpg",
    name: "Family man",
  },
  {
    poster:
      "/public/pickleTurf/pickle-turf-004.jpg",
    name: "Laboratory",
  },
  {
    poster:
      "/public/pickleTurf/pickle-turf-005.jpg",
    name: "Napoleon",
  },
  {
    poster:
      "/public/pickleTurf/pickle-turf-006.jpg",
    name: "Person in Darkness",
  },

  // {
  //   poster:
  //     "https://static.wixstatic.com/media/4c43d3_62c3430cd87440309a736d2a6aae8a9d~mv2.png/v1/crop/x_29,y_0,w_1714,h_2371/fill/w_411,h_563,fp_0.50_0.54,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-01.png",
  //   name: "Stars",
  // },
];
