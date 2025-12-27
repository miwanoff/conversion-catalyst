import { motion } from "framer-motion";
import { Code, Heart, Lightbulb } from "lucide-react";
import developerPortrait from "@/assets/developer-portrait.jpg";

const values = [
  {
    icon: Code,
    title: "Clean Code",
    description: "I write maintainable, scalable code that your future developers will thank you for.",
  },
  {
    icon: Lightbulb,
    title: "Strategic Thinking",
    description: "Every design decision is driven by your business goals and user needs.",
  },
  {
    icon: Heart,
    title: "Genuine Care",
    description: "Your success is my success. I'm invested in delivering results you can be proud of.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 section-dark">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
              <img
                src={developerPortrait}
                alt="Web Developer Portrait"
                className="relative rounded-3xl w-full h-full object-cover glass"
              />
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 glow"
              >
                <div className="font-display text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Exp.</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-4">
              About Me
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Passionate About Building{" "}
              <span className="text-gradient">Digital Experiences</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a web developer who believes that great websites are more than just
              code—they're strategic tools that drive business growth. With over 5
              years of experience, I've helped startups and small businesses
              transform their online presence.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              My approach combines technical expertise with a deep understanding of
              user psychology and business strategy. I don't just build websites; I
              craft digital experiences that connect with your audience and convert
              them into loyal customers.
            </p>

            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
