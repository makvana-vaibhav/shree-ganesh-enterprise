import { Layout } from "@/components/Layout";
import { useProducts } from "@/hooks/use-products";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Loader2, AlertCircle } from "lucide-react";
import { useState } from "react";

import img1 from "@/assets/images/WhatsApp_Image_2025-12-22_at_12.02.55_PM_1766386139493.jpeg";
import img2 from "@/assets/images/WhatsApp_Image_2025-12-22_at_12.04.09_PM_1766386151677.jpeg";
import img3 from "@/assets/images/WhatsApp_Image_2025-12-22_at_12.02.56_PM_1766386143449.jpeg";
import img4 from "@/assets/images/WhatsApp_Image_2025-12-22_at_12.00.19_PM_1766386134790.jpeg";
import img5 from "@/assets/images/WhatsApp_Image_2025-12-22_at_12.08.40_PM_1766386177412.jpeg";
import img6 from "@/assets/images/WhatsApp_Image_2025-12-22_at_12.03.44_PM_1766386148076.jpeg";

// Fallback data if API returns empty
const staticProducts = [
  {
    id: 1,
    name: "Precision Guide Pin",
    category: "Mould Alignment Accessories",
    description: "High-precision guide pin ensuring perfect alignment for mould bases. Durable and wear-resistant.",
    imageUrl: img1
  },
  {
    id: 2,
    name: "Square Support Block",
    category: "Mould Alignment Accessories",
    description: "Robust support blocks for mould assembly stability during operation.",
    imageUrl: img2
  },
  {
    id: 3,
    name: "Custom CNC End Mill",
    category: "Designer CNC Tools",
    description: "Specially designed end mills for intricate cutting and shaping of industrial components.",
    imageUrl: img3
  },
  {
    id: 4,
    name: "Precision Collet Chuck",
    category: "Milling Accessories",
    description: "High-grip collet chucks for securing tools during high-speed milling operations.",
    imageUrl: img4
  },
  {
    id: 5,
    name: "Clamping Kit",
    category: "Milling Accessories",
    description: "Comprehensive clamping kit for securing workpieces on milling tables.",
    imageUrl: img5
  },
  {
    id: 6,
    name: "Ejector Sleeve",
    category: "Mould Alignment Accessories",
    description: "Precision-ground ejector sleeves for smooth mould ejection processes.",
    imageUrl: img6
  }
];

export default function Products() {
  const { data, isLoading, isError } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = (data && data.length > 0) ? data : staticProducts;

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <Layout>
      <section className="bg-gray-900 py-16 relative">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">Our Products</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Browse our catalog of high-precision components and accessories.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat
                  ? "bg-primary text-white shadow-md shadow-primary/25"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-10 h-10 text-primary animate-spin" />
            </div>
          ) : isError ? (
            <div className="text-center py-20 text-red-500 flex flex-col items-center">
              <AlertCircle className="w-10 h-10 mb-2" />
              <p>Failed to load products. Please try again later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group"
                >
                  <div className="h-64 overflow-hidden relative bg-gray-100">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-secondary uppercase tracking-wider">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-secondary mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-6 flex-grow">{product.description}</p>
                    <Link href="/contact" className="w-full">
                      <Button className="w-full bg-white text-secondary border border-gray-200 hover:bg-secondary hover:text-white hover:border-secondary transition-all">
                        Request Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
