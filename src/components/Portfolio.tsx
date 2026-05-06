import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Disaster Relief Drone",
    desc: "An AI-powered drone system designed for emergency response, capable of autonomously scanning disaster zones to detect survivors in real time. Combines computer vision with aerial mobility to assist rescue teams where access is dangerous or limited.",
    tags: ["TensorFlow", "OpenCV", "Python", "Image Processing"],
    year: "2025",
  },
  {
    title: "Smart Parking System",
    desc: "A mobile application that helps drivers discover and book parking spots in real time. Features live availability tracking, dynamic pricing, and turn-by-turn GPS navigation to the chosen spot — reducing the hassle of finding parking in busy areas.",
    tags: ["Kotlin", "Firebase", "SQLite", "Google Maps"],
    year: "2024",
  },
  {
    title: "MediCare Platform",
    desc: "An interactive healthcare platform that simplifies appointment scheduling and medical record tracking for patients. Provides a unified interface for managing visits, prescriptions, and health history with secure cloud-backed storage.",
    tags: ["Java", "Kotlin", "Firebase", "REST APIs"],
    year: "2024",
  },
];

const skills = [
  "Full Stack Development",
  "UI / UX Design",
  "Problem Solving",
  "Teamwork",
  "Leadership",
  "Communication",
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* scroll progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-50"
      />

      {/* ambient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-30"
          style={{ background: "var(--accent-glow)" }}
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 80, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
          style={{ background: "var(--primary)" }}
        />
      </div>

      {/* nav */}
      <nav className="fixed top-0 w-full z-40 px-8 py-6 flex justify-between items-center backdrop-blur-md bg-background/30">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-sm tracking-widest"
        >
          NV<span className="text-primary">.</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-8 text-sm font-mono"
        >
          <a href="#work" className="hover:text-primary transition-colors">work</a>
          <a href="#about" className="hover:text-primary transition-colors">about</a>
          <a href="#contact" className="hover:text-primary transition-colors">contact</a>
        </motion.div>
      </nav>

      {/* HERO with animated marquee name */}
      <section className="relative min-h-screen flex flex-col justify-center px-8 pt-24">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-mono text-sm text-primary mb-6 tracking-widest"
        >
          ◆ FULL STACK DEVELOPER · INDIA
        </motion.p>

        <div className="overflow-hidden">
          {["NAVEEN", "KUMAR V"].map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.4 + i * 0.15, ease: [0.33, 1, 0.68, 1] }}
                className="text-[18vw] md:text-[14vw] leading-[0.9] font-bold tracking-tighter"
                style={{
                  background: "var(--gradient-hero)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="max-w-xl mt-10 text-lg text-foreground/70 leading-relaxed"
        >
          I build end-to-end web applications with a focus on clean, scalable code
          and thoughtful interfaces. Currently studying engineering at KPRIET.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 right-8 font-mono text-xs text-foreground/40"
        >
          ↓ SCROLL
        </motion.div>
      </section>

      {/* Marquee strip */}
      <div className="border-y border-foreground/10 py-6 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap text-4xl md:text-6xl font-bold"
        >
          {Array(6).fill(0).map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              REACT <span className="text-primary">✦</span>
              NODE <span className="text-primary">✦</span>
              TYPESCRIPT <span className="text-primary">✦</span>
              UI/UX <span className="text-primary">✦</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* WORK */}
      <section id="work" className="px-8 py-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="font-mono text-sm text-primary mb-3">/ SELECTED WORK</p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Projects.</h2>
        </motion.div>

        <div className="space-y-px">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover="hover"
              className="group relative block border-t border-foreground/10 py-8 md:py-12"
            >
              <motion.div
                variants={{ hover: { opacity: 1 } }}
                initial={{ opacity: 0 }}
                className="absolute inset-0 -z-10"
                style={{ background: "var(--gradient-radial)" }}
              />
              <div className="flex items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-baseline gap-6 mb-3">
                    <span className="font-mono text-xs text-foreground/40">
                      0{i + 1}
                    </span>
                    <motion.h3
                      variants={{ hover: { x: 20, color: "oklch(0.85 0.18 90)" } }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="text-3xl md:text-5xl font-bold"
                    >
                      {p.title}
                    </motion.h3>
                    <span className="font-mono text-xs text-foreground/40 ml-auto hidden md:inline">
                      {p.year}
                    </span>
                  </div>
                  <p className="text-foreground/60 max-w-2xl ml-12 leading-relaxed">{p.desc}</p>
                  <div className="flex gap-2 mt-4 ml-12">
                    {p.tags.map((t) => (
                      <span key={t} className="font-mono text-xs px-3 py-1 rounded-full border border-foreground/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <motion.div
                  variants={{ hover: { rotate: 45, scale: 1.2 } }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 text-primary" />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-8 py-32 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-primary mb-3">/ ABOUT</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Building things, breaking things, learning fast.
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            Currently a Full Stack Developer Intern at NextLogic, where I built web
            applications using HTML, CSS, JavaScript and backend APIs — improving UX,
            squashing bugs and shipping features.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            Recognized at KPR-Innovcense 2025 (Top 25 teams) and won 1st Prize in
            Paper Presentation at Tech Blast — KPRCAS.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-primary mb-3">/ CAPABILITIES</p>
          <div className="space-y-3">
            {skills.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between border-b border-foreground/10 pb-3 group cursor-default"
              >
                <span className="text-xl group-hover:text-primary transition-colors">{s}</span>
                <span className="font-mono text-xs text-foreground/40">0{i + 1}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-8 py-32 max-w-7xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-primary mb-6"
        >
          / GET IN TOUCH
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-9xl font-bold tracking-tighter mb-12"
          style={{
            background: "var(--gradient-hero)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Let's talk.
        </motion.h2>

        <motion.a
          href="mailto:naveenkumar7070v@gmail.com"
          whileHover={{ scale: 1.05 }}
          className="inline-block text-2xl md:text-4xl underline underline-offset-8 decoration-primary decoration-2"
        >
          naveenkumar7070v@gmail.com
        </motion.a>

        <div className="flex justify-center gap-6 mt-16">
          {[
            { Icon: Mail, href: "mailto:naveenkumar7070v@gmail.com" },
            { Icon: Phone, href: "tel:7867993007" },
            { Icon: Github, href: "#" },
            { Icon: Linkedin, href: "#" },
          ].map(({ Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              whileHover={{ y: -5, scale: 1.1 }}
              className="w-14 h-14 rounded-full border border-foreground/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </section>

      <footer className="border-t border-foreground/10 px-8 py-8 flex justify-between font-mono text-xs text-foreground/40">
        <span>© 2026 NAVEEN KUMAR V</span>
        <span>BUILT WITH ◆ IN INDIA</span>
      </footer>
    </div>
  );
}