import { motion } from "framer-motion";
import { Globe, Rocket, Gauge, HeartHandshake } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom websites built with modern technologies. Clean code, fast performance, and scalable architecture that grows with your business.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description:
      "High-converting landing pages designed to capture leads and drive sales. Optimized for maximum impact and conversion rates.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Speed up your existing website. Faster load times mean better user experience, higher SEO rankings, and more conversions.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description:
      "Reliable maintenance and updates to keep your site secure, fresh, and performing at its best. Peace of mind included.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 section-medium">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-4">
            Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="text-gradient">Succeed Online</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to launch and beyond, I provide comprehensive web
            development services tailored to your business goals.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass rounded-2xl p-6 hover:glow transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
