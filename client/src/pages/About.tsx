import { Layout } from "@/components/Layout";
import { CheckCircle2, Award, Users, Globe } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-gray-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/50" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">About Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A legacy of precision, quality, and innovation in the manufacturing industry.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="/images/WhatsApp_Image_2025-12-22_at_12.06.15_PM_1766386161459.jpeg" 
                  alt="Our Facility" 
                  className="rounded-2xl shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-xl shadow-lg hidden md:block">
                  <p className="text-white font-bold text-xl">Since 2005</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-secondary mb-6 font-display">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to revolutionize the precision manufacturing landscape, Modern Industrial has grown from a small workshop to a state-of-the-art manufacturing facility serving global clients.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We specialize in producing high-quality mould accessories, CNC machined parts, and custom industrial components. Our commitment to technology investment and workforce training has allowed us to maintain the highest standards of quality and efficiency.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start gap-3">
                  <Award className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-secondary">Certified Quality</h4>
                    <p className="text-sm text-gray-500">ISO 9001:2015</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-secondary">Expert Team</h4>
                    <p className="text-sm text-gray-500">50+ Engineers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To provide superior manufacturing solutions that empower our clients to build better products, faster and more efficiently.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be the global leader in precision industrial components, recognized for innovation, quality, and sustainability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Core Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Precision in every detail</li>
                <li>• Integrity in business</li>
                <li>• Innovation in processes</li>
                <li>• Customer-centric approach</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Image/Banner */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-secondary mb-12">Trusted by Industry Leaders</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale">
            {/* Placeholders for logos */}
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400">LOGO 1</div>
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400">LOGO 2</div>
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400">LOGO 3</div>
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400">LOGO 4</div>
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400">LOGO 5</div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
