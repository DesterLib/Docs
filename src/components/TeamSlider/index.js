import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const TeamSlider = (props) => {
    return (
        <Swiper
            spaceBetween={props.spaceBetween || 50}
            slidesPerView={props.slidesPerView || 2}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
        >
            {props.items.map((item) => {
                return (
                    <SwiperSlide
                        key={item.id}
                        style={{ display: 'inline-flex', flexDirection: 'column' }}
                    >
                        <img
                            style={{ borderRadius: '10px', flex: '1' }}
                            src={useBaseUrl(item.img)}
                            alt={item.title}
                        />
                        <h3 style={{ textAlign: 'center', margin: '10px' }}>{item.title}</h3>
                        <p style={{ textAlign: 'center', flex: '2' }}>{item.caption}</p>
                        <div style={{ textAlign: 'center' }}>
                            <iframe
                                src={`https://ghbtns.com/github-btn.html?user=${item.github}&type=follow&count=true`}
                                frameborder='0'
                                scrolling='0'
                                width='170'
                                height='20'
                                title='GitHub'
                            ></iframe>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default TeamSlider;
