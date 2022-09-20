import '../scss/style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import handShake from '../assets/images/charity.png'

function About() {
    return (
        <section className='about__section'>
            <Container>
                <Row>
                    <Col xl={6} lg={6}>
                        <div className='about__left' style={{textAlign: "left"}}>
                            <div className='about__left__img'>
                                <img src='https://layerdrops.com/insur/main-html/assets/images/resources/about-three-img-1.png' alt=''/>
                            </div>
                            <div className='about__left__shape'>
                                <img src='https://layerdrops.com/insur/main-html/assets/images/shapes/about-three-shape-1.png' alt=''/>
                            </div>
                        </div>
                    </Col>
                    <Col xl={6} lg={6} style={{marginLeft: '-30px'}}>
                        <div className='about__right' style={{textAlign: 'left'}}>
                            <div className='about__right__title'>
                                <div className='about__right__subtitle d-flex'>
                                    <div className='about__subtitle__left__shape'>
                                        <img src='https://layerdrops.com/insur/main-html/assets/images/shapes/section-title-shape-1.png' alt=''/>
                                    </div>
                                    <p className='about__right__subtitle__p'>About Company</p>
                                    
                                    <div className='about__subtitle__right__shape'>
                                        <img src='https://layerdrops.com/insur/main-html/assets/images/shapes/section-title-shape-2.png' alt=''/>
                                    </div>
                                </div>
                                <div className='about__right__main__title'>
                                    <h2 className='about__right__main__title__text'>Creating a better future for<br/>your loved once</h2>
                                </div>
                            </div>
                            <div className='about__right__icon__title d-flex'>
                                <div className='arit__icon me-5'>
                                    <img style={{width: "120%"}} src={handShake} alt=''/>
                                </div>
                                <div className='arit__title__text'>
                                    <p> We’re in this business since<span>1983</span>and we<br/>provide the best services.</p>
                                </div>
                            </div>
                            <div className='about__right__icon__des mt-3'>
                                <p>Nullam eu nibh vitae est tempor molestie id sed ex. Quisque
                                dignissim maximus ipsum, sed rutrum metus tincidunt et. Sed eget tincidunt ipsum. There
                                are many variations of passages of psum available, but the majority have alteration in
                                some form, by injected humour, or randomised words look even slightly believable.</p>
                            </div>
                            <div className='about__right__icon__founder'>
                                <div className='arif__founder__sec d-flex'>
                                    <div className='arif__founder__img me-4'>
                                        <img src='https://layerdrops.com/insur/main-html/assets/images/resources/about-three-founder-img.jpg' alt=''/>
                                    </div>
                                    <div className='arif__founder__sign mt-2'>
                                        <h3 className='founder__sign'>David Hardson</h3>
                                        <p className='founder__sign__tag'>Founder of insur</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;