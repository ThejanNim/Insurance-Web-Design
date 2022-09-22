import '../scss/style.scss';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Flag from '../assets/images/flag.png';

function Provide() {
    return (
        <section>
            <div className='provide__section mt-4'>
                {/*<img style={{width: '100%', opacity: '0.20', mixBlendMode: "luminosity"}} src='https://layerdrops.com/insur/main-html/assets/images/backgrounds/we-provide-bg.jpg' alt=''/>*/}
                <Container className='provide__container'>
                    
                    <Row>
                        <Col>
                            <div className='provide__main__title__body'>
                                <div className='provide__sub__title d-flex pt-5'>
                                    <div className='about__subtitle__left__shape'>
                                        <img src='https://layerdrops.com/insur/main-html/assets/images/shapes/section-title-shape-1.png' alt=''/>
                                    </div>
                                    <p className='provide__title__tag__p'>award winning company</p>    
                                    <div className='about__subtitle__right__shape'>
                                        <img src='https://layerdrops.com/insur/main-html/assets/images/shapes/section-title-shape-2.png' alt=''/>
                                    </div>
                                </div>
                                <div className='provide__main__title'>
                                    <h2 className='provide__main__title_h'>We provide better insurance<br/>for everyone</h2>
                                </div>
                            </div>
                        </Col>
    </Row>
             <Row className='mt-5'>
                        <Col>
                            <div> 
                                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                    <Row>
                                        <Col sm={3}>
                                            <Nav variant="pills" className="flex-column provide__tab__body">
                                                <Nav.Item>
                                                    <Nav.Link className='provide__nav__tab__item provide__bav__item__bb' eventKey="first">Our Values</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className='provide__nav__tab__item provide__bav__item__bb' eventKey="second">Company Mission</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className='provide__nav__tab__item provide__bav__item__bb' eventKey="third">Our Goals</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className='provide__nav__tab__item provide__bav__item__bb' eventKey="fouth">Cash Rewards</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className='provide__nav__tab__item' eventKey="fifth">Why Choose Insur</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </Col>
                                        <Col sm={9}>
                        <Tab.Content className='provide__tab__content__body'>
                            <Tab.Pane eventKey="first">
                                <div className='values__tab__body pt-5 pb-xxl-2 pb-lg-5'>
                                    <Container>
                                        <Row>
                                            <Col lg={8} xl={8}>
                                                <div className='provide__left__body'>
                                                    <div className='provide__left_icon pb-3'>
                                                        <img className='provide__left__icon__img' src={Flag} alt=''/>
                                                    </div>
                                                    <div>
                                                        <h3 className='provide__left__h3'>Our Values</h3>
                                                        <p className='provide__left__p pt-2'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
                                                        incididunt labore dolore magna aliqua enim ad minim veniam quis
                                                        nostrud.</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4} xl={4}>
                                                <div>
                                                    <img className='values__body__left__img' src='https://layerdrops.com/insur/main-html/assets/images/resources/we-provide-tab-main-content-right-img.jpg' alt=''/>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <div className='values__tab__body'>
                                    <Container>
                                        <Row>
                                            <Col lg={8} xl={8}>
                                                <div className='provide__left__body'>
                                                    <div className='provide__left_icon pb-3'>
                                                        <img className='provide__left__icon__img' src={Flag} alt=''/>
                                                    </div>
                                                    <div>
                                                        <h3 className='provide__left__h3'>Company Mission</h3>
                                                        <p className='provide__left__p pt-2'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
                                                        incididunt labore dolore magna aliqua enim ad minim veniam quis
                                                        nostrud.</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4} xl={4}>
                                                <div>
                                                    <img className='values__body__left__img' src='https://layerdrops.com/insur/main-html/assets/images/resources/we-provide-tab-main-content-right-img.jpg' alt=''/>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <div className='values__tab__body'>
                                    <Container>
                                        <Row>
                                            <Col lg={8} xl={8}>
                                                <div className='provide__left__body'>
                                                    <div className='provide__left_icon pb-3'>
                                                        <img className='provide__left__icon__img' src={Flag} alt=''/>
                                                    </div>
                                                    <div>
                                                        <h3 className='provide__left__h3'>Our Goals</h3>
                                                        <p className='provide__left__p pt-2'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
                                                        incididunt labore dolore magna aliqua enim ad minim veniam quis
                                                        nostrud.</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4} xl={4}>
                                                <div>
                                                    <img className='values__body__left__img' src='https://layerdrops.com/insur/main-html/assets/images/resources/we-provide-tab-main-content-right-img.jpg' alt=''/>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fouth">
                                <div className='values__tab__body'>
                                    <Container>
                                        <Row>
                                            <Col lg={8} xl={8}>
                                                <div className='provide__left__body'>
                                                    <div className='provide__left_icon pb-3'>
                                                        <img className='provide__left__icon__img' src={Flag} alt=''/>
                                                    </div>
                                                    <div>
                                                        <h3 className='provide__left__h3'>Cash Rewards</h3>
                                                        <p className='provide__left__p pt-2'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
                                                        incididunt labore dolore magna aliqua enim ad minim veniam quis
                                                        nostrud.</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4} xl={4}>
                                                <div>
                                                    <img className='values__body__left__img' src='https://layerdrops.com/insur/main-html/assets/images/resources/we-provide-tab-main-content-right-img.jpg' alt=''/>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                <div className='values__tab__body'>
                                    <Container>
                                        <Row>
                                            <Col lg={8} xl={8}>
                                                <div className='provide__left__body'>
                                                    <div className='provide__left_icon'> {/* pb-3 */}
                                                        <img className='provide__left__icon__img' src={Flag} alt=''/>
                                                    </div>
                                                    <div>
                                                        <h3 className='provide__left__h3'>Why Choose Insur</h3>
                                                        <p className='provide__left__p pt-2'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
                                                        incididunt labore dolore magna aliqua enim ad minim veniam quis
                                                        nostrud.</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4} xl={4}>
                                                <div>
                                                    <img className='values__body__left__img' src='https://layerdrops.com/insur/main-html/assets/images/resources/we-provide-tab-main-content-right-img.jpg' alt=''/>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
    </div>
                        </Col>
    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Provide;