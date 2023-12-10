import React from 'react';
import css from './HomeSectionThree.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


import { FaHandPointer } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiCoffeeBean } from "react-icons/ci";

const HomeSectionThree = () => {
    return (
        <div>
              <div className={css.cardContaner}>
            <div className={css.CardsSetionThree}>
                <div className={css.cardContaner}>
                    <div className="icon">
                    <FaClipboardList  style={{paddingBottom:20 ,fontSize :80 , color:'#fff'}}/>
                    <FaHandPointer style={{paddingBottom:5 ,fontSize:30 , marginLeft:-40 ,marginTop:30    }}/>
                    </div>
                <Card.Body>
                    <h5>EASY TO ORDER</h5>
                    <Card.Text>
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                    </Card.Text>
                </Card.Body>
                </div>
                <div className={css.cardContaner}>
                    <div className="icon">
                    <CiDeliveryTruck  style={{paddingBottom:20,fontSize :80 , color:'#fff'}}/>
                    </div>
                <Card.Body>
                    <h5>FASTEST DELIVERY</h5>
                    <Card.Text>
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                    </Card.Text>
                </Card.Body>
                </div>
                <div className={css.cardContaner}>
                    <div className="icon">
                    <CiCoffeeBean  style={{paddingBottom:5 ,fontSize :40 , color:'#fff'}}/>
                    <CiCoffeeBean  style={{paddingBottom:5 ,fontSize :40, color:'#fff'}}/>
                    <br/><CiCoffeeBean  style={{paddingBottom:20 ,fontSize :60 , color:'#fff'}}/>
                    </div>
                <Card.Body>
                    <h5>QUALITY COFFEE</h5>
                    <Card.Text>
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                    </Card.Text>
                </Card.Body>
                </div>
                
            </div>
            </div>
        </div>
    );
}

export default HomeSectionThree;
