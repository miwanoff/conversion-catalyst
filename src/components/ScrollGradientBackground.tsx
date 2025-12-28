import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollGradientBackground = () => {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Create smooth color transitions based on scroll position
  // Deep navy → Teal → Blue-green → Deep teal → Navy
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
    [
      "hsl(220, 60%, 6%)",      // Hero - Deep navy
      "hsl(200, 55%, 10%)",     // Credibility - Slightly lighter
      "hsl(185, 50%, 14%)",     // Problem/Solution - Teal shift
      "hsl(175, 45%, 16%)",     // Services - More teal
      "hsl(190, 50%, 12%)",     // Process - Back to blue-teal
      "hsl(180, 45%, 15%)",     // Featured Work - Balanced
      "hsl(195, 50%, 10%)",     // Testimonials/About - Deeper
      "hsl(220, 60%, 6%)",      // CTA/Footer - Back to navy
    ]
  );

  // Secondary gradient layer for depth
  const gradientOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0.3, 0.5, 0.4, 0.5, 0.3]
  );

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ backgroundColor }}
    >
      {/* Primary gradient overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: gradientOpacity,
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, hsla(175, 70%, 45%, 0.15), transparent 50%)",
        }}
      />
      
      {/* Secondary ambient glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: gradientOpacity,
          background: "radial-gradient(ellipse 60% 40% at 80% 20%, hsla(190, 80%, 50%, 0.08), transparent 40%)",
        }}
      />
      
      {/* Bottom gradient fade */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: gradientOpacity,
          background: "radial-gradient(ellipse 70% 30% at 20% 100%, hsla(175, 60%, 40%, 0.1), transparent 40%)",
        }}
      />
    </motion.div>
  );
};

export default ScrollGradientBackground;
