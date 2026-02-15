import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Image } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import ScrollToTopFab from "@/components/ScrollToTopFab";

interface ProjectCard {
  index: string;
  year: string;
  title: string;
  tags: string[];
  slug: string;
}

const projects: ProjectCard[] = [
  { index: "001", year: "2023", title: "Apex Finance", tags: ["Systems", "Frontend"], slug: "apex-finance" },
  { index: "002", year: "2023", title: "Oculus Archive", tags: ["Creative Direction", "Frontend"], slug: "oculus-archive" },
  { index: "003", year: "2022", title: "Carbon/Zero", tags: ["Strategy", "Systems"], slug: "carbon-zero" },
  { index: "004", year: "2022", title: "Vector Space", tags: ["R&D", "Creative Direction"], slug: "vector-space" },
  { index: "005", year: "2021", title: "Kinetic UI", tags: ["Frontend", "Systems"], slug: "kinetic-ui" },
  { index: "006", year: "2021", title: "Nebula OS", tags: ["R&D", "Systems"], slug: "nebula-os" },
];

const allFilters = ["All", "Creative Direction", "Systems", "Strategy", "Frontend", "R&D"];

const Archive = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");

  const filtered = useMemo(() => {
    let result = activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

    if (sortOrder === "oldest") result = [...result].reverse();
    if (sortOrder === "alpha") result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    return result;
  }, [activeFilter, sortOrder]);

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-16">
      <SiteHeader />

      <header className="mb-8">
        <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-medium tracking-[-0.04em] leading-[0.9] mb-4">
          Index<br />© 2024
        </h1>
        <p className="text-xl max-w-[60ch]">
          A comprehensive archive of design systems, technical explorations, and product launches.
        </p>
      </header>

      {/* Controls */}
      <div className="border-t-2 border-foreground py-8 flex flex-wrap justify-between items-center gap-8 mb-8">
        <div className="flex items-center gap-4">
          <span className="font-semibold text-sm uppercase tracking-wider">Filter By</span>
          <div className="flex flex-wrap gap-2">
            {allFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`inline-flex items-center justify-center px-5 py-2 border rounded-full text-[0.95rem] font-medium transition-all duration-200 cursor-pointer ${
                  activeFilter === f
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent border-foreground text-foreground hover:bg-foreground hover:text-background"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-semibold text-sm uppercase tracking-wider">Sort</span>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border-0 border-b border-foreground bg-transparent font-semibold text-base cursor-pointer outline-none"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="alpha">Alphabetical</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[2px] bg-foreground border-2 border-foreground">
        {filtered.map((project) => (
          <Link
            key={project.index}
            to={`/project/${project.slug}`}
            className="bg-background aspect-[4/5] p-8 flex flex-col justify-between relative overflow-hidden transition-colors duration-300 hover:bg-muted no-underline text-foreground group"
          >
            <div className="flex justify-between items-start z-[2]">
              <span className="text-2xl font-normal">{project.index}</span>
              <span className="font-semibold">{project.year}</span>
            </div>

            {/* Image placeholder */}
            <div className="absolute top-[20%] left-[10%] right-[10%] bottom-[25%] bg-muted z-[1] opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] flex items-center justify-center border border-muted">
              <Image className="w-10 h-10 opacity-20" />
            </div>

            <div className="z-[2]">
              <h3 className="text-[2.25rem] font-semibold tracking-[-0.02em] leading-[1.1] mb-4">{project.title}</h3>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs uppercase tracking-wider font-bold border border-foreground px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <ScrollToTopFab />
    </div>
  );
};

export default Archive;
