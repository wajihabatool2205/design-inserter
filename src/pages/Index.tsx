import Pill from "@/components/Pill";
import ProjectRow from "@/components/ProjectRow";
import ScrollToTopFab from "@/components/ScrollToTopFab";
import SiteHeader from "@/components/SiteHeader";

const Index = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-16">
      <SiteHeader />

      {/* Header */}
      <header className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 lg:mb-24 items-start">
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-medium tracking-[-0.04em] leading-[0.9] mb-4">
            Wajiha Batool<br />© 2024
          </h1>
          <div className="flex flex-wrap gap-2 mt-4">
            <Pill variant="green" href="https://www.upwork.com/freelancers/~0114a742487a1b4aea">Available for work</Pill>
            <Pill href="mailto:wajihabatool2205@gmail.com">Email</Pill>
            <Pill href="https://github.com/wajihabatool2205">GitHub</Pill>
            <Pill href="https://www.upwork.com/freelancers/~0114a742487a1b4aea">Upwork</Pill>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 mb-8">
            <Pill>React</Pill>
            <Pill>Next.js</Pill>
            <Pill>Tailwind CSS</Pill>
            <Pill>Figma to Code</Pill>
            <Pill>Vibe Coding</Pill>
          </div>
          <p className="text-xl font-normal leading-relaxed max-w-[60ch]">
            Wajiha Batool is a Frontend Developer and Vibe Coder with 3+ years of experience specializing in modern, high-performance web interfaces. Building clean, scalable, and responsive front-end applications using React, Next.js, Tailwind CSS, and pixel-perfect Figma-to-code workflows. Leveraging AI-powered tools like Lovable.dev, Bolt.new, and Cursor for rapid, production-level development.
          </p>
        </div>
      </header>

      {/* Projects */}
      <main>
        <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-semibold tracking-[-0.03em] mb-6">Selected Works</h2>

        <section className="border-t-2 border-foreground pt-8 lg:pt-16">
          <ProjectRow
            number="001"
            name="Apex Finance"
            tags={[
              { text: "Lead Designer", variant: "cyan" },
              { text: "2023", variant: "pink" },
            ]}
            rows={[
              { label: "Scope", value: "End-to-end trading terminal redesign, design system architecture, real-time data visualization shaders." },
              { label: "Stack", value: "React, WebGL, D3.js, Figma Variables" },
              { label: "Link", value: <a href="#" className="text-foreground underline">apex-trade.io/beta</a> },
            ]}
          />

          <ProjectRow
            number="002"
            name="Oculus Archive"
            tags={[
              { text: "Developer", variant: "green" },
              { text: "UI/UX", variant: "cyan" },
            ]}
            rows={[
              { label: "Scope", value: "Digital preservation archive for a contemporary photography museum. Built with a custom headless CMS and infinite canvas navigation." },
              { label: "Location", value: <>Portland, OR<br />Remote</> },
              { label: "Link", value: <a href="#" className="text-foreground underline">oculus-museum.org</a> },
            ]}
          />

          <ProjectRow
            number="003"
            name="Carbon/Zero"
            tags={[
              { text: "Co-Founder", variant: "green" },
            ]}
            rows={[
              { label: "Scope", value: "A SaaS platform for tracking supply chain carbon emissions. Developed the \"Impact Grid\" layout engine." },
              { label: "Year", value: "2021 — Present" },
              { label: "Status", value: "Series A Funding Acquired" },
            ]}
          />
        </section>
      </main>

      <ScrollToTopFab />
    </div>
  );
};

export default Index;
