import { useState } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import Pill from "@/components/Pill";

const skills = [
  "React & Next.js",
  "Tailwind CSS",
  "Figma to Code",
  "Vibe Coding",
  "AI-Enhanced Dev",
  "Responsive Design",
  "Performance Optimization",
  "Accessibility",
];

const workHistory = [
  { period: "2024 — Pres.", role: "Freelance Frontend Developer", context: "Upwork / Remote" },
  { period: "2022 — 2024", role: "Frontend Developer", context: "Web Applications" },
  { period: "2021 — 2022", role: "Junior Frontend Developer", context: "Agency / Creative" },
];

const highlights = [
  { type: "Certification", title: "Certified Frontend Developer", detail: "3+ Years Experience" },
  { type: "Specialty", title: "Figma to Pixel-Perfect Code", detail: "React, Next.js, Tailwind" },
  { type: "Tools", title: "AI-Enhanced Workflow", detail: "Lovable.dev, Bolt.new, Cursor" },
];

const availableDays = [1, 3, 5, 8, 10, 12, 15, 17, 19, 22, 24, 26];
const bookedDays = [2, 9, 16, 23];

const About = () => {
  const [formData, setFormData] = useState({ name: "", inquiry: "", message: "" });

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-16">
      <SiteHeader />

      <Link to="/" className="inline-block mb-16 text-foreground font-medium text-lg border-b-2 border-foreground no-underline">
        ← Back to Index
      </Link>

      {/* Hero */}
      <header className="mb-16">
        <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-medium tracking-[-0.04em] leading-[0.9] mb-8">
          Bridging the gap between design and high-fidelity code.
        </h1>
      </header>

      {/* Bio + Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
        <div>
          <p className="text-[1.75rem] leading-[1.3] font-normal tracking-[-0.01em] mb-8">
            Wajiha Batool is a Frontend Developer and Vibe Coder with over 3 years of experience building clean, scalable, and responsive web applications. Specializing in pixel-perfect Figma-to-code workflows and AI-enhanced development.
          </p>
          <p className="text-[1.75rem] leading-[1.3] font-normal tracking-[-0.01em]">
            I build modern, high-performance interfaces using React, Next.js, and Tailwind CSS. I leverage AI-powered tools to speed up development while maintaining production-level quality and deliver SEO-friendly, accessible, and cross-browser compatible builds.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold uppercase tracking-wider mb-4">Core Competencies</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>
        </div>
      </div>

      {/* Work History */}
      <section className="border-t-2 border-foreground pt-8 mb-24">
        <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-semibold tracking-[-0.03em] mb-6">Work History</h2>
        {workHistory.map((item, i) => (
          <div
            key={i}
            className={`grid grid-cols-[150px_1fr_200px] py-6 items-baseline ${
              i === workHistory.length - 1 ? "border-b-2 border-foreground" : "border-b border-foreground"
            }`}
          >
            <span className="text-muted-foreground">{item.period}</span>
            <span className="font-semibold text-xl">{item.role}</span>
            <span className="text-right">{item.context}</span>
          </div>
        ))}
      </section>

      {/* Highlights */}
      <section className="border-t-2 border-foreground pt-8 mb-24">
        <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-semibold tracking-[-0.03em] mb-6">Highlights</h2>
        {highlights.map((item, i) => (
          <div
            key={i}
            className={`grid grid-cols-[150px_1fr_200px] py-6 items-baseline ${
              i === highlights.length - 1 ? "border-b-2 border-foreground" : "border-b border-foreground"
            }`}
          >
            <span className="text-muted-foreground">{item.type}</span>
            <span className="font-semibold text-xl">{item.title}</span>
            <span className="text-right">{item.detail}</span>
          </div>
        ))}
      </section>

      {/* Contact */}
      <section className="bg-muted p-8 md:p-16 -mx-4 md:-mx-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-semibold tracking-[-0.03em] mb-8">Let's build.</h2>
          <div className="space-y-8">
            <div className="border-b-2 border-foreground">
              <label className="block font-semibold mb-2 uppercase text-xs tracking-wider">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border-none bg-transparent py-4 text-2xl font-normal outline-none"
              />
            </div>
            <div className="border-b-2 border-foreground">
              <label className="block font-semibold mb-2 uppercase text-xs tracking-wider">Inquiry Type</label>
              <input
                type="text"
                value={formData.inquiry}
                onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                className="w-full border-none bg-transparent py-4 text-2xl font-normal outline-none"
              />
            </div>
            <div className="border-b-2 border-foreground">
              <label className="block font-semibold mb-2 uppercase text-xs tracking-wider">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border-none bg-transparent py-4 text-2xl font-normal outline-none resize-none min-h-[100px]"
              />
            </div>
            <button className="bg-foreground text-background px-12 py-6 border-none text-xl font-semibold cursor-pointer transition-transform duration-200 hover:-translate-y-1 hover:bg-foreground/90">
              Send Message
            </button>
          </div>
        </div>

        <div>
          <div className="border-2 border-foreground p-8 bg-background">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-semibold m-0">Availability: FEB 2026</h3>
              <Pill variant="green">Available for New Projects</Pill>
            </div>
            <div className="grid grid-cols-7 gap-[10px] text-center">
              {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                <div key={i} className="p-[10px] aspect-square flex items-center justify-center text-sm font-bold text-muted-foreground">
                  {d}
                </div>
              ))}
              {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => (
                <div
                  key={day}
                  className={`p-[10px] aspect-square flex items-center justify-center text-sm ${
                    availableDays.includes(day)
                      ? "bg-accent-green rounded-full cursor-pointer"
                      : bookedDays.includes(day)
                      ? "text-muted-foreground line-through"
                      : ""
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              * Highlighted dates indicate open slots for initial discovery calls. Current lead time for project kick-off: 1 week.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
