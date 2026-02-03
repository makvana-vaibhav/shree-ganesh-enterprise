import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Link as LinkIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

import item1 from "@/assets/images/item1.jpeg";
import item2 from "@/assets/images/item2.jpeg";
import item3 from "@/assets/images/item3.jpeg";
import item4 from "@/assets/images/item4.jpeg";
import item7 from "@/assets/images/item7.jpeg";
import item8 from "@/assets/images/item8.jpeg";

const products = [
    { id: 1, img: item1 },
    { id: 2, img: item2 },
    { id: 3, img: item3 },
    { id: 4, img: item4 },
    { id: 5, img: item7 }, // Remapped
    { id: 6, img: item8 }, // Remapped
    { id: 7, img: item7 },
    { id: 8, img: item8 },
];

export function ProductShowcase() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback((api: any) => {
        setPrevBtnDisabled(!api.canScrollPrev());
        setNextBtnDisabled(!api.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect(emblaApi);
        emblaApi.on("reInit", onSelect);
        emblaApi.on("select", onSelect);

        // Auto-scroll implementation
        const intervalId = setInterval(() => {
            if (emblaApi.canScrollNext()) {
                emblaApi.scrollNext();
            } else {
                emblaApi.scrollTo(0);
            }
        }, 3000); // Scroll every 3 seconds

        return () => clearInterval(intervalId);
    }, [emblaApi, onSelect]);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-primary font-bold tracking-wider text-sm uppercase">Our Gallery</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 font-display text-secondary">
                            Product Spotlight
                        </h2>
                        <p className="text-gray-600 mt-4 max-w-xl">
                            A closer look at some of our precision-manufactured components and industrial tools.
                        </p>
                    </div>

                    <div className="flex gap-2 mt-6 md:mt-0">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={scrollPrev}
                            disabled={prevBtnDisabled}
                            className="rounded-full hover:bg-primary hover:text-white border-primary/20"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={scrollNext}
                            disabled={nextBtnDisabled}
                            className="rounded-full hover:bg-primary hover:text-white border-primary/20"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                <div className="relative overflow-hidden mb-12" ref={emblaRef}>
                    <div className="flex -ml-4">
                        {products.map((item) => (
                            <div key={item.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 min-w-0">
                                <Link href="/products">
                                    <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
                                        <img
                                            src={item.img}
                                            alt="Product Spotlight"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        {/* Simplified Overlay - Icon Only */}
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="bg-white/90 backdrop-blur p-4 rounded-full transform scale-50 group-hover:scale-100 transition-transform duration-300">
                                                <LinkIcon className="w-6 h-6 text-primary" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <Link href="/products">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-12 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            View All Products
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
