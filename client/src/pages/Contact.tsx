import { Layout } from "@/components/Layout";
import { InquiryForm } from "@/components/InquiryForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">Contact Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Get in touch with our team for quotes, inquiries, or technical support.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Contact Info Side */}
            <div className="lg:w-1/3 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-secondary mb-6 font-display">Get in Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Our Location</h4>
                      <p className="text-gray-600 text-sm">
                        Jivraj Park Industrial area,<br />
                        Plot No. 8, Vavdi Survey No. 47,<br />
                        Rajkot, Gujarat - 360004
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600 text-sm mb-1">+91 97239 79439</p>
                      <p className="text-gray-400 text-xs">Mon-Sat 9am-8pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600 text-sm">shriganeshenterprise1234@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Working Hours</h4>
                      <p className="text-gray-600 text-sm">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600 text-sm">Saturday: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 h-64 rounded-2xl overflow-hidden relative shadow-md">
                <img
                  src="/images/WhatsApp_Image_2025-12-22_at_12.06.15_PM_1766386161459.jpeg"
                  className="w-full h-full object-cover opacity-80"
                  alt="Map Location"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-sm font-bold shadow-lg flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" /> View on Google Maps
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:w-2/3">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
