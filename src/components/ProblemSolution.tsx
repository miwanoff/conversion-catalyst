import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const problems = [
  "Your website loads slowly and loses visitors",
  "Your design looks outdated and unprofessional",
  "Visitors leave without taking action",
  "You're not sure if your site works on mobile",
];

const solutions = [
  "Lightning-fast performance that keeps users engaged",
  "Modern, polished design that builds trust",
  "Strategic CTAs and layouts that drive conversions",
  "Fully responsive across all devices and screens",
];

const ProblemSolution = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-4">
            The Problem
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Your Website Should Be Your{" "}
            <span className="text-gradient">Best Salesperson</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            But if it's slow, outdated, or confusing, you're leaving money on
            the table.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="font-display text-xl font-semibold mb-6 text-destructive/80">
              Common Website Problems
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center mt-0.5">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{problem}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 glow"
          >
            <h3 className="font-display text-xl font-semibold mb-6 text-primary">
              How I Solve Them
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{solution}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
