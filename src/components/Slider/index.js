import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slider = () => {
    const items = [
        {
            id: 1,
            title: 'My first item',
            img: '/img/preview/movie-page.png',
        },
        {
            id: 2,
            title: 'My second item',
            img: '/img/preview/movie-page.png',
        },
        {
            id: 3,
            title: 'My third item',
            img: '/img/preview/movie-page.png',
        },
    ]
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {items.map((item) => {
                return (
                    <SwiperSlide key={item.id}>
                        <img style={{borderRadius: "10px"}} src={useBaseUrl(item.img)} alt={item.title} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
};

export default Slider;