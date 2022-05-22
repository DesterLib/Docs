import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slider = (props) => {
    return (
        <Swiper
            spaceBetween={props.spaceBetween || 50}
            slidesPerView={props.slidesPerView || 2}
        >
            {props.items.map((item) => {
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