import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './HomeSectionOne.module.css'


const HomeSectionOne = () => {
    return (
        <div>
            
             <div className={css.formsSectionOne}>
            <div className={css.forms}>
            <h3>BOOK A TABLE</h3>
                <Form>
                    <Row>
                        <Col>
                        <div className={css.formone}>
                        <input type="text" placeholder='First name' />
                        <input type="text" placeholder='Last name' />
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div className={css.formTwo}>
                        <input type="date" placeholder='Date' />
                        <input type="time" placeholder='Time' />
                        <input type="phone" placeholder='Phone' />
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div className={css.formThree}>
                        <input type="mass" placeholder='Message' />
                        <button>Appointment</button>
                        </div>
                        </Col>
                    </Row>
                </Form>
            </div>
           
     

            </div>

            <div className={css.TextSectionOne}>
                <div className={css.text}>
                <h5>000 (123) 456 7890</h5>
                <h6>A small river named Duden flows by their place and supplies.</h6>
                </div>
                <div className={css.text}>
                    <h5>198 West 21th Street</h5>
                    <h6>203 Fake St. Mountain View, San Francisco, California, USA</h6>
                </div>
                <div className={css.text}>
                    <h5>Open Monday-Friday</h5>
                    <h6>8:00am - 9:00pm</h6>

                </div>
                
            </div>
        </div>
    );
}

export default HomeSectionOne;
