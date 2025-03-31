"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState, Dispatch, SetStateAction } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
  setCarouselApi?: Dispatch<SetStateAction<CarouselApi | undefined>>;
  indicatorCount?: number;
}

const Gallery4 = ({
  title = "",
  description = "",
  items,
  setCarouselApi: externalSetCarouselApi,
  indicatorCount,
}: Gallery4Props) => {
  const [internalCarouselApi, setInternalCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Calculate even distribution of indicators
  const getIndicatorMapping = () => {
    if (!indicatorCount || indicatorCount >= items.length) {
      return Array.from({ length: items.length }, (_, i) => i);
    }
    
    // Create mapping where each indicator represents a section of slides
    const result = [];
    const step = items.length / indicatorCount;
    
    for (let i = 0; i < indicatorCount; i++) {
      result.push(Math.min(Math.floor(i * step), items.length - 1));
    }
    
    return result;
  };
  
  const indicatorMapping = getIndicatorMapping();
  
  // Get active indicator based on which section the slide belongs to
  const getActiveIndicator = (slideIndex: number) => {
    if (!indicatorCount || indicatorCount >= items.length) {
      return slideIndex;
    }
    
    // Create segments of equal length
    const segmentSize = items.length / indicatorCount;
    
    // Determine which segment the current slide belongs to
    const segmentIndex = Math.min(Math.floor(slideIndex / segmentSize), indicatorCount - 1);
    
    return segmentIndex;
  };

  const setCarouselApiHandler = (api: CarouselApi | undefined) => {
    setInternalCarouselApi(api);
    if (externalSetCarouselApi) {
      externalSetCarouselApi(api);
    }
  };

  useEffect(() => {
    if (!internalCarouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(internalCarouselApi.canScrollPrev());
      setCanScrollNext(internalCarouselApi.canScrollNext());
      setCurrentSlide(internalCarouselApi.selectedScrollSnap());
    };
    updateSelection();
    internalCarouselApi.on("select", updateSelection);
    return () => {
      internalCarouselApi.off("select", updateSelection);
    };
  }, [internalCarouselApi]);

  return (
    <section className="py-8">
      {(title || description) && (
        <div className="container mx-auto">
          <div className="mb-8 flex items-end justify-between md:mb-10">
            <div className="flex flex-col gap-4">
              {title && (
                <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
                  {title}
                </h2>
              )}
              {description && (
                <p className="max-w-lg text-muted-foreground">{description}</p>
              )}
            </div>
            <div className="hidden shrink-0 gap-2 md:flex">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => {
                  internalCarouselApi?.scrollPrev();
                }}
                disabled={!canScrollPrev}
                className="disabled:pointer-events-auto"
              >
                <ArrowLeft className="size-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => {
                  internalCarouselApi?.scrollNext();
                }}
                disabled={!canScrollNext}
                className="disabled:pointer-events-auto"
              >
                <ArrowRight className="size-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
      <div className="w-full">
        <Carousel
          setApi={setCarouselApiHandler}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <a href={item.href} className="group rounded-xl">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-gradient-to-t from-black via-black/60 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        {item.title}
                      </div>
                      <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
                        {item.description}
                      </div>
                      <div className="flex items-center text-sm">
                        Read more{" "}
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center items-center gap-4">
          <Button
            size="icon"
            variant="secondary"
            onClick={() => internalCarouselApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="h-10 w-10 rounded-full disabled:opacity-40 flex items-center justify-center bg-gray-200 dark:bg-gray-700"
          >
            <ArrowLeft className="h-6 w-6" strokeWidth={3} />
            <span className="sr-only">Previous slides</span>
          </Button>
          
          <div className="flex gap-2">
            {indicatorMapping.map((targetSlide, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  getActiveIndicator(currentSlide) === index ? "bg-primary" : "bg-primary/20"
                }`}
                onClick={() => internalCarouselApi?.scrollTo(targetSlide)}
                aria-label={`Go to slide group ${index + 1}`}
              />
            ))}
          </div>
          
          <Button
            size="icon"
            variant="secondary"
            onClick={() => internalCarouselApi?.scrollNext()}
            disabled={!canScrollNext}
            className="h-10 w-10 rounded-full disabled:opacity-40 flex items-center justify-center bg-gray-200 dark:bg-gray-700"
          >
            <ArrowRight className="h-6 w-6" strokeWidth={3} />
            <span className="sr-only">Next slides</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
