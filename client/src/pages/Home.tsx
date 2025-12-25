import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Factory, ShieldCheck, Truck, Cog } from "lucide-react";
import { motion } from "framer-motion";

import heroBg from "@/assets/images/hero-bg.png";
import aboutImg from "@/assets/images/about-us.png";
import mouldAlignmentImg from "@/assets/images/mould_alignment.jpg";
import cncToolsImg from "@/assets/images/designer_cnc_tools.jpg";
import millingAccessoriesImg from "@/assets/images/cnc_milling.jpg";

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const CountUp = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration) {
        setCount(Math.min(end, (progress / duration) * end));
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, end, duration]);

  const formattedCount = new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1
  }).format(Math.floor(count));

  return (
    <motion.span
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true }}
    >
      {formattedCount}{suffix}
    </motion.span>
  );
};

export default function Home() {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-gray-900 overflow-hidden">
        {/* Background Image with Overlay and Parallax */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            className="w-full h-full"
          >
            <img
              src={heroBg}
              alt="Shree Ganesh Enterprise Factory"
              className="w-full h-full object-cover opacity-40"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl"
          >
            {/* Eyebrow */}
            <motion.div
              variants={fadeIn}
              className="inline-block px-3 py-1 bg-primary/20 border-l-2 border-primary text-primary text-xs sm:text-sm font-bold mb-4 sm:mb-6 tracking-widest uppercase"
            >
              Precision Manufacturing Since 2005
            </motion.div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-display mb-4 sm:mb-6 tracking-tight">
              <motion.span variants={fadeIn} className="block">Mould Accessories &</motion.span>
              <motion.span variants={fadeIn} className="block text-primary relative inline-block">
                Precision Manufacturing
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                  className="absolute bottom-1 left-0 h-1 bg-primary/50 -z-10"
                />
              </motion.span>
            </h1>

            {/* Subtext */}
            <motion.p
              variants={fadeIn}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl font-light"
            >
              Delivering high-quality industrial components and custom machining solutions with strict quality control.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="/catalog.pdf" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 border-0 rounded-none transform transition-transform hover:scale-105 duration-300">
                  View Catalog
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg border-white/30 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm rounded-none transform transition-transform hover:scale-105 duration-300">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* KEY HIGHLIGHTS / QUALITY ASSURANCE */}
      <section className="py-20 bg-white relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4">Why Choose Us?</h2>
            <p className="text-gray-600">We are committed to excellence in every part we manufacture.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Quality Assurance", desc: "Rigorous quality control at every stage of production." },
              { icon: Factory, title: "State-of-the-Art Facility", desc: "Equipped with modern CNC and precision machinery." },
              { icon: Cog, title: "Precision Engineering", desc: "High-tolerance components for complex applications." },
              { icon: Truck, title: "Timely Delivery", desc: "Committed to meeting strict project timelines." },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-gray-50 p-6 sm:p-8 border border-gray-100 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="p-4 bg-white rounded-full shadow-sm text-gray-400 group-hover:text-primary transition-colors mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={aboutImg}
                  alt="Factory Operations"
                  className="w-full h-auto object-cover"
                />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                  className="absolute bottom-0 left-0 right-0 bg-secondary/90 backdrop-blur p-4 sm:p-6 text-white"
                >
                  <div className="flex items-end gap-2">
                    <span className="text-4xl sm:text-5xl font-bold text-primary">
                      <CountUp end={20} suffix="+" />
                    </span>
                    <span className="text-base sm:text-lg font-medium mb-2">Years of Excellence</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-primary font-bold tracking-wider text-xs sm:text-sm uppercase">About Our Company</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-6 font-display text-secondary">
                Backed by Sound Infrastructure & Modern Machinery
              </h2>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.p variants={fadeIn} className="text-gray-600 mb-6 leading-relaxed">
                  We are backed by a sound infrastructure equipped with modern machinery. Our facility is divided into specialized units: Designing, Quality Control, Warehousing, and Packaging. This ensures a smooth work flow and superior quality products.
                </motion.p>
                <motion.p variants={fadeIn} className="text-gray-600 mb-8 leading-relaxed">
                  As one of the largest stock holders in the country, we pride ourselves on offering the best prices and assuring quick availability for any order volume.
                </motion.p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Specialized Quality Control Units",
                    "Modern Designing & Manufacturing",
                    "Large Stock Availability",
                    "Competitive Market Pricing"
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      variants={fadeIn}
                      className="flex items-center gap-3 text-gray-700 font-medium"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <motion.div variants={fadeIn}>
                  <Link href="/about">
                    <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 h-12">
                      Learn More About Us
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <ProductShowcase />

      {/* PRODUCT CATEGORIES */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <span className="text-primary font-bold tracking-wider text-xs sm:text-sm uppercase">Our Capabilities</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 font-display text-secondary">
              Product Categories
            </h2>
            <p className="text-gray-600 mt-4">
              Explore our wide range of manufacturing capabilities and standard components.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mould Alignment Accessories",
                img: mouldAlignmentImg,
                desc: "High-precision alignment tools for moulds and dies."
              },
              {
                title: "Designer CNC Tools",
                img: cncToolsImg,
                desc: "Custom designed CNC tools for intricate machining."
              },
              {
                title: "Milling Accessories",
                img: millingAccessoriesImg,
                desc: "Durable accessories for milling operations and efficiency."
              },
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">{cat.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{cat.desc}</p>
                  <Link href="/products" className="inline-flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    View Products <ArrowRight className="ml-2 w-4 h-4" />
                    <motion.div
                      className="absolute bottom-0 left-0 h-[1px] bg-primary w-0 group-hover:w-full transition-all duration-300"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="py-16 sm:py-20 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full -ml-32 -mb-32 blur-3xl opacity-50 animate-pulse" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 text-center">
            {[
              { value: 20, suffix: "+", label: "Years Experience" },
              { value: 500, suffix: "+", label: "Global Clients" },
              { value: 50, suffix: "+", label: "Countries Served" },
              { value: 1000000, suffix: "+", label: "Parts Delivered" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-2 sm:p-4"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2 font-display break-words">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1 + (i * 0.1) }}
                  className="text-gray-300 font-medium text-sm sm:text-base"
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer to fix color clash */}
      <div className="h-4 bg-white"></div>

      {/* CTA BANNER */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
              Contact us today for a free consultation and quote. Our team is ready to help you with your manufacturing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 h-14 px-8 text-lg font-bold border-0 shadow-lg hover:scale-105 transition-transform duration-300">
                  Get a Free Quote
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-8 text-lg font-bold hover:scale-105 transition-transform duration-300">
                  Browse Catalog
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
}
