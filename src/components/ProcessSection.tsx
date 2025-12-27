import { motion } from "framer-motion";
import { MessageSquare, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery & Planning",
    description:
      "We discuss your goals, target audience, and vision. I create a clear roadmap for your project.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Design & Prototype",
    description:
      "I design a beautiful, user-focused interface that aligns with your brand and converts visitors.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Development & Testing",
    description:
      "Clean, efficient code brings the design to life. Rigorous testing ensures everything works perfectly.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Support",
    description:
      "Your site goes live with my full support. I'm here for updates, improvements, and ongoing care.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 section-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-4">
            My Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent,{" "}
            <span className="text-gradient">Effective</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A streamlined process designed to deliver results without the
            complexity or confusion.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl glass mb-6">
                <step.icon className="w-8 h-8 text-primary" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
