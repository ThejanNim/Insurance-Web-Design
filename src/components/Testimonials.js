import "../scss/style.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons' 

function Testimonials() {
    return (
        <section className="testimonials__section">
            <Container>
                <Row className='mb-5'>
                    <Col sm={12} lg={6} xl={6}>
                        <div className="testi__left">
                        <div className='benefit__title pt-5'>
                            <div className='benefit__sub__title d-flex'>
                                <div className='about__subtitle__left__shape'>
                                    <img src='https://layerdrops.com/insur/main-html/assets/images/shapes/section-title-shape-1.png' alt=''/>
                                </div>
                                <p className='benefit__title__tag__p'>Testimonials</p>    
                                <div className='about__subtitle__right__shape'>
                                    <img src='https://layerdrops.com/insur/main-html/assets/images/shapes/section-title-shape-2.png' alt=''/>
                                </div>
                            </div>
                            <h2 className='services__main__titke__h testi__mobile__title'>What our customers are talking about</h2>
                       </div>
                        </div>
                    </Col>
                    <Col sm={12} lg={6} xl={6} className='pt-5'> 
                        <div className="testi__right pt-5 pe-3">
                            <p className="testi__right__p">Pellentesque habitant morbi tristique senectus netus et malesuada fames ac turp egestas. Aliquam viverra arcu. Donec aliquet blandit enim feugiat mattis.</p>
                        </div>
                    </Col>
                </Row>
                <Row className='testi__client__row pt-5 pb-5'>
                    <Col className="testi__client__col" sm={12} xl={4} lg={4}>
                        <div className='testi__client__body'>
                            <div className='testi__client__img__box'>
                                <div className="testi__client__img">
                                    <img src='https://layerdrops.com/insur/main-html/assets/images/testimonial/testimonial-3-3.jpg' alt=''/>
                                </div>
                                <div className='test__client__quote'>
                                    <img src="https://layerdrops.com/insur/main-html/assets/images/testimonial/testimonial-1-quote.png" alt=''/>
                                </div>
                            </div>
                            <div className="testi__client__stars">
                                <FontAwesomeIcon className='testi__card__icon' icon={faStar}/>
                                <FontAwesomeIcon className='testi__card__icon' icon={faStar}/>
                                <FontAwesomeIcon className='testi__card__icon' icon={faStar}/>
                                <FontAwesomeIcon className='testi__card__icon' icon={faStar}/>
                                <FontAwesomeIcon className='testi__card__icon' icon={faStar}/>
                            </div>
                            <div className="testi__client__text ps-4 pe-4 pt-3">
                                <p>Pellentesque habitant morbi tristique senectus et malesuada fames ac turp egestas. Aliquam viverra arcu. Donec aliquet blandit enim feugiat mattis.</p>
                            </div>
                            <div className="testi__client__details">
                                <h6>Thejan Nimsara</h6>
                                <p>Director</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="testi__client__col" sm={12} xl={4} lg={4}>
                        <div className='testi__client__body'>
                            <div className='testi__client__img__box'>
                                <div className="testi__client__img">
                                    <img src='https://layerdrops.com/insur/main-html/assets/images/testimonial/testimonial-3-3.jpg' alt=''/>
                                </div>
                                <div className='test__client__quote'>
                                    <img src="https://layerdrops.com/insur/main-html/assets/images/testimonial/testimonial-1-quote.png" alt=''/>
                                </div>
                            </div>
                            <div className="testi__client__stars">
                                <FontAwesomeIcon className='testi__card__icon' icon={faStar}/>
                                <FontAwesomeIcon className='testi__card__icon' icon={faStar}/>
                                <FontAwesomeIcon className='testi__card__icon' icon={faStar}/>
                                <FontAwesomeIcon className='testi__card__icon' icon={faStar}/>
                                <FontAwesomeIcon className='testi__card__icon' icon={faStar}/>
                            </div>
                            <div className="testi__client__text ps-4 pe-4 pt-3">
                                <p>Pellentesque habitant morbi tristique senectus et malesuada fames ac turp egestas. Aliquam viverra arcu. Donec aliquet blandit enim feugiat mattis.</p>
                            </div>
                            <div className="testi__client__details">
                                <h6>Thejan Nimsara</h6>
                                <p>Director</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} xl={4} lg={4}>
                        <div className='testi__client__body'>
                            <div className='testi__client__img__box'>
                                <div className="testi__client__img">
                                    <img src='https://layerdrops.com/insur/main-html/assets/images/testimonial/testimonial-3-3.jpg' alt=''/>
                                </div>
                                <div className='test__client__quote'>
                                    <img src="https://layerdrops.com/insur/main-html/assets/images/testimonial/testimonial-1-quote.png" alt=''/>
                                </div>
                            </div>
                            <div className="testi__client__stars">
                                <FontAwesomeIcon className='testi__card__icon' icon={faStar}/>
                                <FontAwesomeIcon className='testi__card__icon' icon={faStar}/>
                                <FontAwesomeIcon className='testi__card__icon' icon={faStar}/>
                                <FontAwesomeIcon className='testi__card__icon' icon={faStar}/>
                                <FontAwesomeIcon className='testi__card__icon' icon={faStar}/>
                            </div>
                            <div className="testi__client__text ps-4 pe-4 pt-3">
                                <p>Pellentesque habitant morbi tristique senectus et malesuada fames ac turp egestas. Aliquam viverra arcu. Donec aliquet blandit enim feugiat mattis.</p>
                            </div>
                            <div className="testi__client__details">
                                <h6>Thejan Nimsara</h6>
                                <p>Director</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonials;