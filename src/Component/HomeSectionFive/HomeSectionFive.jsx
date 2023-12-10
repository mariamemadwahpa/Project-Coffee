import React from 'react';
import css from './HomeSectionFive.module.css'

import galleryOne from '../img/gallery-1.jpg'
import galleryTow from '../img/gallery-2.jpg'
import galleryThree from '../img/gallery-3.jpg'
import galleryFour from '../img/gallery-4.jpg'


const HomeSectionFive = () => {
    return (
        <div>
            <div className={css.cardContanerSectionFive}>
                <div className={css.imgsGallery}>
                    <img src={galleryOne} alt="" />
                    <img src={galleryTow} alt="" />
                    <img src={galleryThree} alt="" />
                    <img src={galleryFour} alt="" />
                </div>
                </div>
                </div>
    );
}

export default HomeSectionFive;
