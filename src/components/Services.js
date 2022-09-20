import '../scss/style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Services() {
    return (
        <section className='services__section'>
            <Container>
                <Row>
                    <Col xl={3} lg={3}>
                        <div className='services__title'>
                            <div className='services__sub__title d-flex'>
                                <div className='about__subtitle__left__shape'>
                                    <img src='https://layerdrops.com/insur/main-html/assets/images/shapes/section-title-shape-1.png' alt=''/>
                                </div>
                                <p className='about__right__subtitle__p'>Our Services</p>    
                                <div className='about__subtitle__right__shape'>
                                    <img src='https://layerdrops.com/insur/main-html/assets/images/shapes/section-title-shape-2.png' alt=''/>
                                </div>
                            </div>
                            <div className='services__main__title'>
                                <h2 className='services__main__titke__h'>Covering all insurance fields</h2>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={3}>
                        <div className='services__card__body'>
                            <div className='services__card__img'>
                                <img src='https://layerdrops.com/insur/main-html/assets/images/services/services-3-1.jpg' alt=''/>
                                <div className='services__card__content'>
                                    <h3>Car<br/>Insurance</h3>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={3}>
                        <div className='services__card__body'>
                            <div className='services__card__img'>
                                <img src='https://layerdrops.com/insur/main-html/assets/images/services/services-3-2.jpg' alt=''/>
                                <div className='services__card__content'>
                                    <h3>Life<br/>Insurance</h3>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={3}>
                        <div className='services__card__body'>
                            <div className='services__card__img'>
                                <img src='https://layerdrops.com/insur/main-html/assets/images/services/services-3-3.jpg' alt=''/>
                                <div className='services__card__content'>
                                    <h3>Home<br/>Insurance</h3>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={3}>
                        <div className='services__card__body mt-4'>
                            <div className='services__card__img'>
                                <img src='https://layerdrops.com/insur/main-html/assets/images/services/services-3-4.jpg' alt=''/>
                                <div className='services__card__content'>
                                    <h3>Health<br/>Insurance</h3>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={3}>
                        <div className='services__card__body mt-4'>
                            <div className='services__card__img'>
                                <img src='https://layerdrops.com/insur/main-html/assets/images/services/services-3-5.jpg' alt=''/>
                                <div className='services__card__content'>
                                    <h3>Business<br/>Insurance</h3>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={6} lg={6}>
                        <div className='servicess_card__body__des mt-4'>
                            <div className='services__card__des__con'>
                                <p className='service__card__des__tag'>Lorem ipsum text</p>
                                <h3 className='service__card__des__h3'>You can compare quotes and get your insurance in right way.</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Services;