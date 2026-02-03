import { Layout } from "@/components/Layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

// Import images
import img1 from "@/assets/images/item1.jpeg";
import img2 from "@/assets/images/item2.jpeg";
import img3 from "@/assets/images/item3.jpeg";
import img4 from "@/assets/images/item4.jpeg";
import img7 from "@/assets/images/item7.jpeg";
import img8 from "@/assets/images/item8.jpeg";

const products = [
  { id: 1, name: "SHOULDER GUIDE PIN", image: img1 },
  { id: 2, name: "PLAIN GUIDE PIN", image: img2 },
  { id: 3, name: "SHOULDER GUIDE BUSH", image: img3 },
  { id: 4, name: "PLAIN GUIDE BUSH", image: img4 },
  { id: 7, name: "EJECTOR PIN", image: img7 },
  { id: 8, name: "SLEEVE EJECTOR PIN", image: img8 },
  { id: 9, name: "BLADE EJECTOR PIN", image: img1 },
  { id: 10, name: "STEP EJECTOR PIN", image: img2 },
  { id: 11, name: "DIE SPRING", image: img3 },
  { id: 12, name: "SPRUE BUSH", image: img4 },
  { id: 13, name: "AIR EJECTOR", image: img7 },
  { id: 14, name: "GAS VENTS", image: img8 },
  { id: 15, name: "MOULD SPARES", image: img1 },
  { id: 16, name: "TAPER INTERLOCK", image: img2 },
  { id: 17, name: "BALL CAGE", image: img3 },
  { id: 18, name: "BALL PLUNGER", image: img4 },
  { id: 19, name: "MOULD DATE INDICATOR", image: img7 },
  { id: 20, name: "LATCHES", image: img8 },
  { id: 21, name: "SQUARE INTER LOCKS", image: img1 },
  { id: 22, name: "HSS PUNCHES", image: img2 },
  { id: 23, name: "GUIDE POSTS", image: img3 },
  { id: 24, name: "CLAMPS & BOLTS", image: img4 },
  { id: 25, name: "OILLESS BUSH", image: img7 },
  { id: 26, name: "COOLING ACCESSORIES", image: img8 }
];

export default function Products() {
  return (
    <Layout>
      <section className="bg-gray-900 py-16 relative">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">Our Products</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Browse our comprehensive catalog of high-precision mould accessories.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group"
              >
                <div className="h-48 overflow-hidden relative bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow text-center">
                  <h3 className="text-lg font-bold text-secondary mb-4 flex-grow">{product.name}</h3>
                  <Link href="/contact" className="w-full">
                    <Button className="w-full bg-white text-secondary border border-gray-200 hover:bg-secondary hover:text-white hover:border-secondary transition-all">
                      Request Quote
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-secondary mb-6 font-display">Need more details?</h3>
            <a href="/catalog.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-12 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                View Full Catalog
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
