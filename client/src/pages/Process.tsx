import { Layout } from "@/components/Layout";
import { PenTool, Cog, Microscope, PackageCheck, Truck } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: PenTool,
      title: "Design & Consultation",
      desc: "We work closely with you to understand your requirements, offering design optimization for manufacturability."
    },
    {
      icon: Cog,
      title: "Precision Machining",
      desc: "Utilizing advanced CNC milling, turning, and grinding machines to produce parts with tight tolerances."
    },
    {
      icon: Microscope,
      title: "Quality Inspection",
      desc: "Rigorous testing using CMM and optical measurement tools to ensure every part meets specifications."
    },
    {
      icon: PackageCheck,
      title: "Surface Finishing",
      desc: "Polishing, anodizing, plating, or heat treatment according to your specific needs."
    },
    {
      icon: Truck,
      title: "Packaging & Delivery",
      desc: "Secure packaging and reliable logistics partners ensure your products arrive safely and on time."
    }
  ];

  return (
    <Layout>
      <section className="bg-secondary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Manufacturing Process</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            From concept to delivery, our streamlined workflow ensures quality and efficiency at every step.
          </p>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        {/* Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -z-10 transform -translate-x-1/2" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} mb-12 lg:mb-24 last:mb-0`}>
                
                {/* Content Side */}
                <div className="flex-1 text-center lg:text-left">
                  <div className={`flex items-center gap-4 mb-4 justify-center lg:justify-start ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                    <span className="text-5xl font-bold text-gray-100 font-display">0{index + 1}</span>
                    <h3 className="text-2xl font-bold text-secondary">{step.title}</h3>
                  </div>
                  <p className={`text-gray-600 text-lg leading-relaxed ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                    {step.desc}
                  </p>
                </div>

                {/* Icon/Image Side */}
                <div className="relative flex-none">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white border-4 border-primary shadow-xl flex items-center justify-center z-10 relative">
                    <step.icon className="w-10 h-10 md:w-12 md:h-12 text-secondary" />
                  </div>
                </div>

                {/* Empty Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-12">Our Capabilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["CNC Milling (3, 4, 5 Axis)", "CNC Turning", "Wire EDM", "Surface Grinding", "Laser Marking", "Anodizing", "Heat Treatment", "Assembly"].map(cap => (
              <div key={cap} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 font-medium text-gray-700 hover:text-primary hover:border-primary transition-colors cursor-default">
                {cap}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
