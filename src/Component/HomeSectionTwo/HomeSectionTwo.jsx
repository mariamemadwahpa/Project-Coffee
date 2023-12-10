import React from 'react';
import css from './HomeSectionTwo.module.css';
import sectionthree from '../img/about.jpg'


const HomeSectionTwo = () => {
    return (
        <div>
              <div className={css.Discover}>
                <div className={css.backgroundDiscover}>
                    <img src={sectionthree} alt="" />
                </div>
                <div className={css.backgroundDiscover}>
                    <div className={css.background}>
                        <div className={css.OurStory}>
                            <h2>Discover</h2>
                            <h1>OUR STORY</h1>
                            <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default HomeSectionTwo;
