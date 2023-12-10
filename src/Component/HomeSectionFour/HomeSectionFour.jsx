import React from 'react';
import css from './HomeSectionFour.module.css';

const HomeSectionFour = () => {
    return (
        <div>
            <div className={css.cardContanerSectionFive}>

             <div className={css.OurMenu}>
                <div className={css.Menu}>
                <div className={css.OurMenutext}>
                <h2>Discover</h2>
                <h1>OUR MENU</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <button>View Full Menu</button>
                </div>
                <div className={css.OurMenuImg}>
                <div className={css.imgOur}>
                <div className={css.imgOurOne}></div>
                <div className={css.imgOurTwo}></div>
                </div>
                <div className={css.imgOur}>
                <div className={css.imgOurThree}></div>
                <div className={css.imgOurFour}></div>
                </div>
                </div>
            </div>
            </div> 

            <div className={css.sectionSex}>
                <div className={css.contanerSectionSex}>
                     
                </div>
            </div>
        </div>
        </div>
    );
}

export default HomeSectionFour;
