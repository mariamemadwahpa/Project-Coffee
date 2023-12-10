import React from 'react';
import css from './Footer.module.css'
import pastaOne from '../img/image_1.jpg';
import pastaTow from '../img/image_2.jpg';


const Footer = () => {
    return (
        <div className={css.Footer}>
            <div className={css.FooterContaner}>

            <div className={css.Section}>
                <h5>ABOUT US</h5><br />
                <h6>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h6>
                <div>

                </div>
            </div>

            <div className={css.Section}>
                <h5>RECENT BLOG</h5><br />

                
                <div className={css.pastaOne}>
                    <img src={pastaOne} alt="" />
                <div className=''>
                    <h6>Even the all-powerful Pointing has no control about</h6>
                    <span>Sept 15,2018</span>
                    <span>Admin</span>
                    <span>19</span>
                    </div>
                </div>

                <div className={css.pastaTow}>
                    <img src={pastaTow} alt="" />
                    <div className="">
                    <h6>Even the all-powerful Pointing has no control about</h6>
                   <span>Sept 15,2018</span>
                    <span>Admin</span>
                    <span>19</span>
                    </div>
                </div>
            </div>
            <div className={css.SectionThree}>
                <h5>SERVICES</h5><br />
                <h6>Cooked</h6>
                <h6>Deliver</h6>
                <h6>Quality Foods</h6>
                <h6>Mixed</h6>

            </div>
            <div className={css.Section}>
                <h5>HAVE A QUESTIONS?</h5> <br />
                <h6>203 Fake st, Mountain View, San Francisco, California USA</h6>
                <h6>+20 10 062 134 68</h6>
                <h6>mariamemadwahpa@gmail.com</h6>

            </div>

            </div>
            <div className={css.by}>
            <h6>Copyright ©2023 All rights reserved | This template is made with  by MaRiam E wahpa</h6>
            </div>

        </div>
    );
}

export default Footer;
