import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, TechStart",
    content:
      "Working with this developer was a game-changer for our startup. The website he built not only looks stunning but has significantly improved our conversion rates. Highly recommend!",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "CEO, GrowthLabs",
    content:
      "Incredibly responsive and detail-oriented. He understood our vision from day one and delivered a website that exceeded our expectations. Our online presence has never been stronger.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, Bloom Co.",
    content:
      "The attention to performance and user experience was exceptional. Our page load times dropped dramatically, and we've seen a noticeable increase in user engagement since launch.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 border-y border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What Clients <span className="text-gradient">Say About Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take my word for it. Here's what some of my clients have
            to say about working together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              <div>
                <div className="font-display font-semibold">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
