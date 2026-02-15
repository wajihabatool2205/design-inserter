import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import Pill from "@/components/Pill";
import ScrollToTopFab from "@/components/ScrollToTopFab";

const serviceOfferings = [
  {
    title: "AI-Powered MVP Development",
    description: "Transform your startup idea into a production-ready MVP in record time using Lovable.dev, Supabase, and modern AI-assisted workflows.",
    deliverables: ["SaaS products", "CRM / CMS systems", "Real-time dashboards", "Client portals", "Stripe-integrated systems"],
    tags: ["Lovable.dev", "Supabase", "React"],
  },
  {
    title: "Figma to Production Code",
    description: "Pixel-perfect conversion from Figma, XD, or PSD designs into clean, responsive, and high-performance code.",
    deliverables: ["Figma → React / Next.js", "Figma → Tailwind CSS", "Figma → Svelte / SvelteKit", "Figma → ShadCN UI", "XD / PSD → HTML"],
    tags: ["Figma to Code", "Pixel-Perfect"],
  },
  {
    title: "Vibe Code Bug Fixing",
    description: "Expert debugging and fixing of AI-generated code from Bolt.new, Lovable.dev, and Cursor. Clean up, optimize, and ship.",
    deliverables: ["Bug diagnosis & fixing", "Performance optimization", "Code cleanup", "Deployment support"],
    tags: ["Bolt.new", "Lovable.dev", "Cursor"],
  },
  {
    title: "Frontend Development",
    description: "Build modern, high-performance web interfaces with clean architecture, responsive design, and 95+ performance scores.",
    deliverables: ["Landing pages", "E-commerce frontends", "Portfolio websites", "Web applications", "API integrations"],
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
];

const techStack = {
  "Languages": ["HTML5", "CSS3", "JavaScript", "TypeScript", "SCSS", "Sass"],
  "Frameworks": ["React", "Next.js", "Svelte", "SvelteKit", "Gatsby.js", "Nuxt.js"],
  "Styling": ["Tailwind CSS", "Bootstrap", "Material UI", "ShadCN", "Styled Components", "CSS Grid", "Flexbox"],
  "AI & Tools": ["Lovable.dev", "Bolt.new", "Cursor", "Replit", "Supabase", "OpenAI API"],
  "DevOps": ["Git", "GitHub", "GitLab", "Docker", "Vercel", "Netlify", "webpack", "npm"],
};

const projectCatalog = [
  { title: "Fix Vibe Code Bugs", subtitle: "Bolt.new, Lovable.dev, Supabase & Lovable Expert", price: "From $50", delivery: "2 days delivery" },
  { title: "Lovable.dev Expert", subtitle: "Vibe Coding Expert, AI-Powered no-code Development", price: "From $50", delivery: "4 days delivery" },
];

const Services = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-16">
      <SiteHeader />

      <Link to="/" className="inline-block mb-16 text-foreground font-medium text-lg border-b-2 border-foreground no-underline">
        ← Back to Index
      </Link>

      {/* Hero */}
      <header className="mb-16">
        <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-medium tracking-[-0.04em] leading-[0.9] mb-6">
          What I Can Build For You
        </h1>
        <p className="text-xl leading-relaxed max-w-[60ch]">
          ⚡ Launch 10x Faster · 💰 Reduce dev costs · 🧠 AI + Real Engineering · 📈 Built to scale from MVP to growth
        </p>
      </header>

      {/* Service Offerings */}
      <section className="border-t-2 border-foreground pt-8 mb-24">
        <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-semibold tracking-[-0.03em] mb-8">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-foreground border-2 border-foreground">
          {serviceOfferings.map((service, i) => (
            <div key={i} className="bg-background p-8 md:p-12 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.map((tag) => (
                  <Pill key={tag} variant="cyan">{tag}</Pill>
                ))}
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] mb-4">{service.title}</h3>
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">{service.description}</p>
              <ul className="space-y-2">
                {service.deliverables.map((d) => (
                  <li key={d} className="text-base font-medium">✔ {d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Project Catalog */}
      <section className="border-t-2 border-foreground pt-8 mb-24">
        <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-semibold tracking-[-0.03em] mb-8">Project Catalog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectCatalog.map((item, i) => (
            <div key={i} className="border-2 border-foreground p-8">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground mb-6">{item.subtitle}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">{item.price}</span>
                <Pill variant="green">{item.delivery}</Pill>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-t-2 border-foreground pt-8 mb-24">
        <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-semibold tracking-[-0.03em] mb-8">Tech Stack</h2>
        {Object.entries(techStack).map(([category, items]) => (
          <div key={category} className="mb-8">
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-3">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* What You Get */}
      <section className="bg-muted p-8 md:p-16 -mx-4 md:-mx-8">
        <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-semibold tracking-[-0.03em] mb-8">What You Get</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: "🔐", title: "Secure Auth & RLS", desc: "Role-based access control with Supabase" },
            { icon: "🤖", title: "AI-Driven Features", desc: "Intelligent automations & AI integrations" },
            { icon: "🧹", title: "Clean Code", desc: "Maintainable, scalable architecture" },
            { icon: "🎯", title: "Pixel-Perfect UI", desc: "Figma → production with zero drift" },
            { icon: "⚡", title: "95+ Performance", desc: "Optimized Lighthouse scores" },
            { icon: "📦", title: "Full Handover", desc: "Documentation & deployment support" },
          ].map((item, i) => (
            <div key={i} className="border-2 border-foreground p-6 bg-background">
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <ScrollToTopFab />
    </div>
  );
};

export default Services;
