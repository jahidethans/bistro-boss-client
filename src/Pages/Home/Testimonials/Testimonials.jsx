import SectionTitles from "../../../Components/SectionTitles/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { FaQuoteLeft } from "react-icons/fa";


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
   

    return (
        <section className="my-20">
            <SectionTitles
                subHeading={'What our client says'}
                heading={'testimonials'}
            ></SectionTitles>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center my-16 mx-24 space-y-8">
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                            />
                            <FaQuoteLeft size={60}></FaQuoteLeft>

                            <p>{review.details}</p>
                            <h3 className="text-2xl text-[#CD9003]">{review.name}</h3>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;