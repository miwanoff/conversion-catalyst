const ScrollGradientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Base animated gradient */}
      <div 
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background: `linear-gradient(
            -45deg,
            hsl(220, 60%, 8%),
            hsl(200, 55%, 12%),
            hsl(175, 50%, 14%),
            hsl(190, 55%, 10%),
            hsl(180, 45%, 16%),
            hsl(195, 50%, 12%),
            hsl(220, 60%, 8%)
          )`,
          backgroundSize: "400% 400%",
        }}
      />

      {/* Floating blob 1 - Teal */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-40 animate-blob-float-1"
        style={{
          background: "radial-gradient(circle, hsla(175, 70%, 45%, 0.5) 0%, transparent 70%)",
          left: "10%",
          top: "20%",
        }}
      />

      {/* Floating blob 2 - Cyan */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-35 animate-blob-float-2"
        style={{
          background: "radial-gradient(circle, hsla(190, 80%, 50%, 0.45) 0%, transparent 70%)",
          right: "10%",
          top: "40%",
        }}
      />

      {/* Floating blob 3 - Deep teal */}
      <div 
        className="absolute w-[450px] h-[450px] rounded-full blur-[90px] opacity-30 animate-blob-float-3"
        style={{
          background: "radial-gradient(circle, hsla(180, 60%, 40%, 0.4) 0%, transparent 70%)",
          left: "40%",
          bottom: "10%",
        }}
      />

      {/* Floating blob 4 - Blue accent */}
      <div 
        className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-25 animate-blob-float-4"
        style={{
          background: "radial-gradient(circle, hsla(200, 70%, 50%, 0.35) 0%, transparent 70%)",
          right: "20%",
          bottom: "30%",
        }}
      />

      {/* Subtle ambient overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(ellipse 100% 60% at 50% 0%, hsla(175, 50%, 50%, 0.15), transparent 60%)",
        }}
      />
    </div>
  );
};

export default ScrollGradientBackground;
