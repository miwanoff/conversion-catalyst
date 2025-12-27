import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTASection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 section-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative glass rounded-3xl p-12 md:p-16 text-center overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-sm text-primary font-medium mb-6">
                Ready to Get Started?
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            >
              Let's Build Something{" "}
              <span className="text-gradient">Amazing Together</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground mb-10"
            >
              Whether you need a new website, a landing page, or help optimizing
              your existing site, I'm here to help. Let's discuss your project
              and turn your vision into reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="hero" size="xl" onClick={scrollToContact}>
                <Calendar className="w-5 h-5" />
                Book a Free Call
              </Button>
              <Button variant="heroOutline" size="lg" onClick={scrollToContact}>
                Send a Message
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 text-sm text-muted-foreground"
            >
              No commitment required. Let's just chat about your goals.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
