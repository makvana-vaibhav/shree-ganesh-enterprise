import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Factory, ShieldCheck, Truck, Cog } from "lucide-react";
import { motion } from "framer-motion";

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

export default function Home() {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center bg-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/WhatsApp_Image_2025-12-22_at_12.03.44_PM_1766386148076.jpeg" 
            alt="Industrial Factory Floor" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-bold mb-6 backdrop-blur-sm">
              ISO 9001:2015 CERTIFIED
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight font-display mb-6">
              Precision <span className="text-primary">Manufacturing</span> & Mould Accessories
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
              Delivering high-quality industrial components and custom machining solutions with strict quality control and on-time delivery for global industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 border-0">
                  View Our Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/30 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KEY HIGHLIGHTS */}
      <section className="py-10 -mt-10 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "Quality Assurance", desc: "Strict QC processes & ISO certified standards." },
              { icon: Factory, title: "Custom Design", desc: "Tailored manufacturing solutions for your needs." },
              { icon: Cog, title: "Precision CNC", desc: "High-tolerance machining capabilities." },
              { icon: Truck, title: "Global Delivery", desc: "Efficient logistics and on-time shipping." },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-xl shadow-black/5 border border-gray-100 flex flex-col items-start hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-lg text-primary mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="/images/WhatsApp_Image_2025-12-22_at_12.05.35_PM_1766386157153.jpeg" 
                  alt="Factory Operations" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-secondary/90 backdrop-blur p-6 text-white">
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-bold text-primary">20+</span>
                    <span className="text-lg font-medium mb-2">Years of Excellence</span>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-primary font-bold tracking-wider text-sm uppercase">About Our Company</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 font-display text-secondary">
                Your Trusted Partner in Industrial Manufacturing
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Since our establishment, we have been dedicated to providing top-tier manufacturing solutions. We specialize in mould accessories, CNC machining parts, and custom industrial components.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our facility is equipped with state-of-the-art machinery and staffed by experienced engineers committed to precision and quality. We serve clients across automotive, medical, and aerospace industries.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Advanced CNC Milling & Turning Centers",
                  "Comprehensive Quality Control Lab",
                  "Expert Engineering & Design Team",
                  "Cost-Effective Production Strategies"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 h-12">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider text-sm uppercase">Our Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 font-display text-secondary">
              Product Categories
            </h2>
            <p className="text-gray-600 mt-4">
              Explore our wide range of manufacturing capabilities and standard components.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Mould Accessories", 
                img: "/images/WhatsApp_Image_2025-12-22_at_12.02.55_PM_1766386139493.jpeg",
                desc: "High-precision components for injection moulds and die casting." 
              },
              { 
                title: "CNC Components", 
                img: "/images/WhatsApp_Image_2025-12-22_at_12.02.56_PM_1766386143449.jpeg",
                desc: "Custom machined parts with tight tolerances and fine finishes." 
              },
              { 
                title: "Custom Metal Parts", 
                img: "/images/WhatsApp_Image_2025-12-22_at_12.00.19_PM_1766386134790.jpeg",
                desc: "Fabricated and machined metal parts for various applications." 
              },
              { 
                title: "Industrial Tools", 
                img: "/images/WhatsApp_Image_2025-12-22_at_12.04.09_PM_1766386151677.jpeg",
                desc: "Durable tooling and fixtures for manufacturing processes." 
              },
            ].map((cat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                  <img 
                    src={cat.img} 
                    alt={cat.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">{cat.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{cat.desc}</p>
                  <Link href="/products" className="inline-flex items-center text-primary font-semibold text-sm hover:underline">
                    View Products <ArrowRight className="ml-2 w-4 h-4" />
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
      <section className="py-16 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full -ml-32 -mb-32 blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "20+", label: "Years Experience" },
              { value: "500+", label: "Global Clients" },
              { value: "50+", label: "Countries Served" },
              { value: "1M+", label: "Parts Delivered" },
            ].map((stat, i) => (
              <div key={i} className="p-4">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-display">{stat.value}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
            Contact us today for a free consultation and quote. Our team is ready to help you with your manufacturing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 h-14 px-8 text-lg font-bold border-0 shadow-lg">
                Get a Free Quote
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-8 text-lg font-bold">
                Browse Catalog
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
