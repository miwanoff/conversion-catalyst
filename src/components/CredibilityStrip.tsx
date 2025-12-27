import { motion } from "framer-motion";
import { Code, Briefcase, Award, Zap } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "5+", label: "Years Experience" },
  { icon: Code, value: "50+", label: "Projects Delivered" },
  { icon: Award, value: "100%", label: "Client Satisfaction" },
  { icon: Zap, value: "< 2s", label: "Avg. Load Time" },
];

const CredibilityStrip = () => {
  return (
    <section className="py-16 border-y border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl glass mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CredibilityStrip;
