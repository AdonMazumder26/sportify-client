import { useState } from "react";

const slides = [
    {
        image:
            "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=1400&q=80",
        title: "Gear Up for Victory",
        description: "Find premium footballs, rackets & all sports essentials.",
    },
    {
        image:
            "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1400&q=80",
        title: "Run Faster, Run Smarter",
        description: "Explore top-quality running shoes and apparel.",
    },
    {
        image:
            "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1400&q=80",
        title: "Fitness Gear for Champions",
        description: "Equip your workout zone with the best gym accessories.",
    },
    {
        image:
            "https://unsplash.com/photos/silhouette-of-people-playing-basketball-during-sunset-0NaQQsLWLkA",
        title: "Train Like a Pro",
        description: "High-performance sportswear for all athletes.",
    },
    {
        image:
            "https://images.unsplash.com/photo-1517642185040-1e0aa1c6d4ab?auto=format&fit=crop&w=1400&q=80",
        title: "Gear for Every Sport",
        description: "From basketballs to yoga mats, we have you covered.",
    },
    {
        image:
            "https://images.unsplash.com/photo-1502904550040-7f35e8847f26?auto=format&fit=crop&w=1400&q=80",
        title: "Accessories You Can Trust",
        description: "Durable, reliable, and stylish sports accessories.",
    },
    {
        image:
            "https://images.unsplash.com/photo-1503424886300-092c5af7dfb7?auto=format&fit=crop&w=1400&q=80",
        title: "Shop with Sportify Today",
        description: "Your one-stop shop for all sports accessories.",
    },
];

export default function Banner() {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    return (
        <div className="relative w-full h-96 md:h-[500px] overflow-hidden select-none">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover brightness-75"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16 text-white max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold drop-shadow-lg mb-3">
                            {slide.title}
                        </h2>
                        <p className="text-lg md:text-xl drop-shadow-md">{slide.description}</p>
                    </div>
                </div>
            ))}

            {/* Arrows */}
            <button
                onClick={prevSlide}
                className="absolute z-20 top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition"
                aria-label="Previous Slide"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute z-20 top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition"
                aria-label="Next Slide"
            >
                &#10095;
            </button>
        </div>
    );
}
