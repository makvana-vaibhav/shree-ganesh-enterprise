import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

import item1 from "@/assets/images/item1.jpeg";
import item2 from "@/assets/images/item2.jpeg";
import item3 from "@/assets/images/item3.jpeg";
import item4 from "@/assets/images/item4.jpeg";
import item5 from "@/assets/images/item5.jpeg";
import item6 from "@/assets/images/item6.jpeg";
import item7 from "@/assets/images/item7.jpeg";
import item8 from "@/assets/images/item8.jpeg";

const products = [
    { id: 1, img: item1, title: "Precision Component" },
    { id: 2, img: item2, title: "Industrial Tool" },
    { id: 3, img: item3, title: "Mould Accessory" },
    { id: 4, img: item4, title: "CNC Part" },
    { id: 5, img: item5, title: "Machined Unit" },
    { id: 6, img: item6, title: "Factory Tooling" },
    { id: 7, img: item7, title: "High-Tolerance Part" },
    { id: 8, img: item8, title: "Custom Fabrication" },
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

                <div className="relative overflow-hidden" ref={emblaRef}>
                    <div className="flex -ml-4">
                        {products.map((item) => (
                            <div key={item.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 min-w-0">
                                <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                            <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded w-fit mb-2 inline-block">
                                                Showcase
                                            </span>
                                            <h3 className="text-white font-bold text-xl">{item.title}</h3>
                                        </div>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 translate-y-2 group-hover:translate-y-0">
                                        <ZoomIn className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
