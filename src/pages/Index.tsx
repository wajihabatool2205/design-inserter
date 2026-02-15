import Pill from "@/components/Pill";
import ProjectRow from "@/components/ProjectRow";
import ScrollToTopFab from "@/components/ScrollToTopFab";

const Index = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-16">
      {/* Header */}
      <header className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 lg:mb-24 items-start">
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-medium tracking-[-0.04em] leading-[0.9] mb-4">
            Alex M. Vance<br />© 2024
          </h1>
          <div className="flex flex-wrap gap-2 mt-4">
            <Pill variant="green" href="#">Available for work</Pill>
            <Pill href="#">Email</Pill>
            <Pill href="#">LinkedIn</Pill>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 mb-8">
            <Pill>Creative Direction</Pill>
            <Pill>Systems</Pill>
            <Pill>Strategy</Pill>
            <Pill>Frontend</Pill>
            <Pill>R&amp;D</Pill>
          </div>
          <p className="text-xl font-normal leading-relaxed max-w-[60ch]">
            Alex M. Vance is a multidisciplinary digital architect and principal designer based in Seattle, WA. Specializing in high-fidelity interface systems, component architecture, and interaction design for fintech and aerospace sectors. Previously Lead Product Designer at Vector Space. Certified Accessibility Specialist by IAAP.
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
