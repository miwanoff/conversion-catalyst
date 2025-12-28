import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollGradientBackground = () => {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Smooth color transitions based on scroll
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
    [
      "hsl(220, 60%, 6%)",
      "hsl(200, 55%, 10%)",
      "hsl(185, 50%, 14%)",
      "hsl(175, 45%, 16%)",
      "hsl(190, 50%, 12%)",
      "hsl(180, 45%, 15%)",
      "hsl(195, 50%, 10%)",
      "hsl(220, 60%, 6%)",
    ]
  );

  // Animated gradient blob positions
  const blob1X = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "60%", "20%"]);
  const blob1Y = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "30%", "80%"]);
  const blob1Scale = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [1, 1.3, 0.9, 1.1]);

  const blob2X = useTransform(scrollYProgress, [0, 0.5, 1], ["80%", "20%", "70%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 0.5, 1], ["20%", "60%", "10%"]);
  const blob2Scale = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [1.2, 0.8, 1.4, 1]);

  const blob3X = useTransform(scrollYProgress, [0, 0.5, 1], ["40%", "80%", "10%"]);
  const blob3Y = useTransform(scrollYProgress, [0, 0.5, 1], ["70%", "20%", "50%"]);
  const blob3Scale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.9, 1.2, 1, 1.3]);

  const blob4X = useTransform(scrollYProgress, [0, 0.5, 1], ["90%", "40%", "60%"]);
  const blob4Y = useTransform(scrollYProgress, [0, 0.5, 1], ["90%", "50%", "30%"]);
  const blob4Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 0.8]);

  // Gradient opacity pulsing
  const gradientOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0.4, 0.6, 0.5, 0.7, 0.4]
  );

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
      style={{ backgroundColor }}
    >
      {/* Animated gradient blob 1 - Teal */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
        style={{
          left: blob1X,
          top: blob1Y,
          scale: blob1Scale,
          opacity: gradientOpacity,
          background: "radial-gradient(circle, hsla(175, 70%, 45%, 0.4) 0%, transparent 70%)",
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Animated gradient blob 2 - Cyan */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px]"
        style={{
          left: blob2X,
          top: blob2Y,
          scale: blob2Scale,
          opacity: gradientOpacity,
          background: "radial-gradient(circle, hsla(190, 80%, 50%, 0.35) 0%, transparent 70%)",
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Animated gradient blob 3 - Deep teal */}
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full blur-[90px]"
        style={{
          left: blob3X,
          top: blob3Y,
          scale: blob3Scale,
          opacity: gradientOpacity,
          background: "radial-gradient(circle, hsla(180, 60%, 40%, 0.3) 0%, transparent 70%)",
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Animated gradient blob 4 - Blue accent */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[80px]"
        style={{
          left: blob4X,
          top: blob4Y,
          scale: blob4Scale,
          opacity: gradientOpacity,
          background: "radial-gradient(circle, hsla(200, 70%, 50%, 0.25) 0%, transparent 70%)",
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Subtle ambient overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: 0.3,
          background: "radial-gradient(ellipse 100% 60% at 50% 0%, hsla(175, 50%, 50%, 0.1), transparent 60%)",
        }}
      />
    </motion.div>
  );
};

export default ScrollGradientBackground;
