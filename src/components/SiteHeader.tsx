import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/archive", label: "Archive" },
  { to: "/about", label: "About" },
];

const SiteHeader = () => {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-between py-4 mb-8 border-b border-foreground">
      <Link to="/" className="text-lg font-semibold tracking-tight text-foreground no-underline">
        Wajiha Batool
      </Link>
      <div className="flex gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={cn(
              "inline-flex items-center justify-center px-5 py-1.5 border rounded-full text-base font-medium text-foreground transition-all duration-200 no-underline hover:-translate-y-0.5",
              location.pathname === link.to
                ? "bg-foreground text-background border-foreground"
                : "bg-transparent border-foreground hover:bg-accent-yellow"
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default SiteHeader;
