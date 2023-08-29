import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselSection = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-8 text-center">
                   Team PVGCOET
                </h2>
                <div className="lg:max-w-4xl mx-auto">
                    <Carousel
                        showArrows={true}
                        showIndicators={false}
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={5000} // 5 seconds interval
                    >
                        <div>
                            <img
                                src="https://resources.pulse.icc-cricket.com/ICC/photo/2022/05/21/dd35b61d-8110-4a31-b3be-29c5c8d6834c/IndiaTeam.png"
                                alt="Ima"
                            />
                        </div>
                        <div>
                            <img
                                src="https://resources.pulse.icc-cricket.com/ICC/photo/2022/05/21/dd35b61d-8110-4a31-b3be-29c5c8d6834c/IndiaTeam.png"
                                alt="Ima"
                            />
                        </div>
                        {/* Add more images */}
                    </Carousel>
                </div>
                <div className="text-center mt-1 text-justify text-justify  text-center max-w-[1240px] mx-auto px-8 sm:px-16 lg:px-32 py-16">
                    <p className="text-gray-600">
                        Explore our team's journey through these captivating
                        images. Explore our team's journey through these
                        captivating images. Explore our team's journey through
                        these captivating images. Explore our team's journey
                        through these captivating images. Explore our team's
                        journey through these captivating images. Explore our
                        team's journey through these captivating images.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CarouselSection;
