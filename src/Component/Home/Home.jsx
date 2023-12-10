import React, { Fragment }  from 'react';

// import css from './Home.module.css'

import NavBar from '../NavBar/NavBar.jsx';
import HomeSectionOne from '../HomeSectionOne/HomeSectionOne.jsx';
import HomeSectionTwo from '../HomeSectionTwo/HomeSectionTwo.jsx';
import Api from "../Api/Api.jsx"
import Footer from '../Footer/Footer.jsx';
import HomeSectionThree from '../HomeSectionThree/HomeSectionThree.jsx';
import HomeSectionFour from '../HomeSectionFour/HomeSectionFour.jsx';
import HomeSectionFive from '../HomeSectionFive/HomeSectionFive.jsx'
import ApiHomeSectionSix from '../ApiHomeSectionSix/ApiHomeSectionSix.jsx'

const Home = () => {
    return (
        <div>
    <Fragment>
      <NavBar/>
      <HomeSectionOne/>
      <HomeSectionTwo/>
      <HomeSectionThree/>
      <HomeSectionFour/>
      <Api/>
      <HomeSectionFive/>
      <ApiHomeSectionSix/>
      <Footer/>
    </Fragment>
        </div>

    );
}

export default Home;
