import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import google from "./sponsors/google_logo.png";
import react from "./sponsors/react_logo.png";
import canva from "./sponsors/canva_logo.png";
import discord from "./sponsors/discord_logo.png";
import GSAP from "./sponsors/GSAP.svg";


gsap.registerPlugin(ScrollTrigger);

function SponsorSection() {
  const sponsors = [react, google, canva, discord, GSAP];
  const infiniteSponsors = [...sponsors, ...sponsors];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#redbar",
            start: "top bottom",
            end: "bottom top",
          },
        })
        .from("#redbar", { duration: 2, width: "1%" })
        .to("#redbar", { width: "12rem" });
    });

    return () => ctx.revert(); 
  }, []);

  return (
    <section id="sponsors" className="rubik px-4 my-20">
      <div className="p-12">
        <div className="text-center">
          <h2 className=" text-4xl md:text-6xl font-semibold text-purple-500 pb-8">
            Our Sponsors
          </h2>

          <p className="text-purple-300 mb-8">
            We are thankful to each and every company sponsored our plugin which
            helped us to continue working on it.
          </p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="animate-infinite-scroll flex items-center justify-center">
            {infiniteSponsors.map((sponsor, index) => (
              <div
                key={index}
                id="eachsponsor"
                className="m-4 px-4 rounded-3xl flex-shrink-0 w-48 h-24 flex items-center justify-center transition-transform hover:scale-110"
              >
                <img
                  src={sponsor}
                  alt={`Sponsor ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div id="redbar" className="w-48 h-1 bg-red-600 mx-auto mt-8" />
      </div>
    </section>
  );
}

export { SponsorSection };