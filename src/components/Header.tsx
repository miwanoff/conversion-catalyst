import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-bold text-foreground">
          DevPortfolio
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("services")}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("work")}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            About
          </button>
        </nav>

        <Button
          variant="outline"
          size="sm"
          onClick={() => scrollToSection("contact")}
        >
          Get in Touch
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;
