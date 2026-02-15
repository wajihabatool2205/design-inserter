import { useEffect, useRef, useState } from "react";
import Pill from "./Pill";

interface DataRow {
  label: string;
  value: React.ReactNode;
}

interface ProjectTag {
  text: string;
  variant: "cyan" | "green" | "pink";
}

interface ProjectRowProps {
  number: string;
  name: string;
  tags: ProjectTag[];
  rows: DataRow[];
}

const ProjectRow = ({ number, name, tags, rows }: ProjectRowProps) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-[0.5fr_2fr] gap-4 lg:gap-8 mb-16 lg:mb-24 transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
    >
      <div>
        <span className="text-6xl lg:text-7xl font-normal tracking-tight leading-none block mb-4">{number}</span>
      </div>
      <div className="flex flex-col border-t border-foreground">
        {/* Client row */}
        <div className="grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] py-5 border-b border-foreground items-baseline">
          <span className="font-semibold text-lg">Client</span>
          <div className="flex flex-wrap justify-between items-center w-full gap-2">
            <span className="text-2xl font-bold">{name}</span>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Pill key={tag.text} variant={tag.variant}>{tag.text}</Pill>
              ))}
            </div>
          </div>
        </div>
        {/* Data rows */}
        {rows.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] py-5 items-baseline ${i === rows.length - 1 ? "border-b-2 border-foreground" : "border-b border-foreground"}`}
          >
            <span className="font-semibold text-lg">{row.label}</span>
            <span className="text-lg">{row.value}</span>
          </div>
        ))}
      </div>
    </article>
  );
};

export default ProjectRow;
