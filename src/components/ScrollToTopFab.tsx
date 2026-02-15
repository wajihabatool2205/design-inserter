import { ArrowUp } from "lucide-react";

const ScrollToTopFab = () => {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 lg:bottom-12 lg:right-12 w-16 h-16 lg:w-20 lg:h-20 bg-foreground rounded-full flex items-center justify-center text-background text-3xl cursor-pointer border-none z-50 transition-transform duration-300 hover:scale-110 hover:-rotate-[15deg]"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-8 h-8" />
    </button>
  );
};

export default ScrollToTopFab;
