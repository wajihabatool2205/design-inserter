import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Play } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import ScrollToTopFab from "@/components/ScrollToTopFab";
import Pill from "@/components/Pill";

const ProjectDetail = () => {
  const { slug } = useParams();
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 4;

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-16">
      <SiteHeader />

      {/* Nav header */}
      <div className="flex justify-between items-start mb-16">
        <Link to="/archive" className="text-xl font-medium text-foreground no-underline flex items-center gap-2">
          ← Back to Index
        </Link>
        <Pill>2023 Showcase</Pill>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-semibold tracking-[-0.04em] leading-[0.9] mb-8">
        Oculus Archive
      </h1>

      {/* Meta grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 border-t-2 border-foreground pt-8 mb-16">
        <div>
          <p className="text-xl leading-relaxed max-w-[50ch]">
            Digital preservation archive for a contemporary photography museum. Built with a custom headless CMS and infinite canvas navigation. The project focused on sub-100ms interaction latency and high-fidelity asset rendering.
          </p>
        </div>
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            <Pill variant="green">Developer</Pill>
            <Pill variant="cyan">UI/UX</Pill>
            <Pill>Next.js</Pill>
            <Pill>Three.js</Pill>
            <Pill>Prismic</Pill>
          </div>
          <div className="flex items-baseline gap-4 mt-4">
            <span className="font-semibold">Status</span>
            <span>Live / v2.4.0</span>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="relative w-full h-[80vh] bg-muted mb-8 overflow-hidden border border-foreground">
        {/* Prototype overlay */}
        <div className="absolute top-8 right-8 bg-background p-4 border border-foreground font-semibold text-xs uppercase tracking-widest z-10">
          Live Interactive Prototype
        </div>

        {/* Slide */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="grid grid-cols-4 gap-2 opacity-30 mb-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="w-16 h-16 bg-foreground/10 border border-foreground/20" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground font-mono">COORD: 45.322 / -12.903</p>
          </div>
        </div>

        {/* Nav dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-10">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`w-3 h-3 rounded-full border-2 border-foreground cursor-pointer ${
                activeSlide === i ? "bg-foreground" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Interaction grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 mt-8">
        {/* Video */}
        <div>
          <div className="aspect-video bg-foreground flex items-center justify-center relative">
            <div className="w-20 h-20 border-2 border-background rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110 hover:bg-background/10">
              <Play className="w-8 h-8 text-background" />
            </div>
            <p className="absolute bottom-4 left-4 text-background text-sm font-mono">DEMO: Transition Physics 0:45</p>
          </div>
          <div className="border-t border-foreground pt-6 mt-8">
            <h3 className="text-2xl font-semibold mb-4">Spatial Navigation</h3>
            <p className="text-lg leading-relaxed">
              Instead of traditional pagination, Oculus Archive uses a spatial grid. Users navigate via momentum-based panning, allowing for serendipitous discovery of the 12,000+ item collection. The system utilizes worker threads to pre-fetch image tiles based on velocity vectors.
            </p>
          </div>
        </div>

        {/* Caption side */}
        <div>
          <div className="border-t border-foreground pt-6">
            <h3 className="text-2xl font-semibold mb-4">Adaptive Filtering</h3>
            <p className="text-lg leading-relaxed mb-8">
              The sidebar allows for real-time intersection of metadata tags. Selecting 'Monochrome' and 'Portrait' instantly reflows the canvas, maintaining the user's relative position within the filtered set. Designed for accessibility with full keyboard focus management.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <Pill>Filtering UI</Pill>
            <Pill>Component Documentation</Pill>
          </div>
        </div>
      </div>

      <ScrollToTopFab />
    </div>
  );
};

export default ProjectDetail;
