import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    image: project1,
    title: "SaaS Analytics Dashboard",
    category: "Web Application",
    description:
      "Built a real-time analytics platform for a fintech startup. Reduced load times by 60% and increased user engagement by 40%.",
    result: "40% increase in user engagement",
  },
  {
    image: project2,
    title: "E-Commerce Platform",
    category: "Online Store",
    description:
      "Designed and developed a modern e-commerce experience with seamless checkout flow. Conversion rate improved significantly.",
    result: "2.5x conversion rate increase",
  },
  {
    image: project3,
    title: "Startup Landing Page",
    category: "Marketing Website",
    description:
      "Created a high-converting landing page for a B2B SaaS company. Focused on clear messaging and strategic CTAs.",
    result: "85% increase in lead generation",
  },
];

const FeaturedWork = () => {
  return (
    <section id="work" className="py-24 section-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-4">
            Featured Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Projects That <span className="text-gradient">Deliver Results</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of recent projects showcasing my approach to creating
            high-impact digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass rounded-2xl overflow-hidden hover:glow transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full glass text-xs font-medium text-primary">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary text-sm font-medium">
                    {project.result}
                  </span>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
