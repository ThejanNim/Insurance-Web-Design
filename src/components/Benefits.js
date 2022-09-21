import '../scss/style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons'

function Benefits() {
    return (
        <section className='benefits__section'>
            <div className='banefits__bg__left'>
                <img style={{width: '100%'}} src='https://layerdrops.com/insur/main-html/assets/images/backgrounds/benefits-bg-2.jpg' alt=''/>
            </div>
            <div className='benefits__bg__right'>
                <img src="https://layerdrops.com/insur/main-html/assets/images/backgrounds/benefits-bg.png" alt=''/>
            </div>
            <Container className='benefit__content__container'>
                <Row>
                    <Col xl={6}>
                       <div className='benefit__title'>
                            <div className='services__sub__title d-flex'>
                                <div className='about__subtitle__left__shape'>
                                    <img src='https://layerdrops.com/insur/main-html/assets/images/shapes/section-title-shape-1.png' alt=''/>
                                </div>
                                <p className='benefit__title__tag__p'>Our Services</p>    
                                <div className='about__subtitle__right__shape'>
                                    <img src='https://layerdrops.com/insur/main-html/assets/images/shapes/section-title-shape-2.png' alt=''/>
                                </div>
                            </div>
                            <h2 className='services__main__titke__h'>We inspire and help our customers</h2>
                       </div>
                       <div className='benefit__des__p mt-4'>
                            <p>Pellentesque habitant morbi tristique senectus netus et<br/>malesuada fames ac turp egestas. Aliquam viverra arcu. Donec<br/> aliquet blandit enim feugiat mattis.</p>
                        </div>
                        <Row>
                            <Col xl={6}>
                                <div className='benefit__4cards__body mt-5'>
                                    <div className='benefit__body__fcontent d-flex'>
                                        <div className='benefit__card__icon pe-2'>
                                            <FontAwesomeIcon icon={faCircleCheck} color='blue'/>
                                        </div>
                                        <div className='benefit__card__text'>Prosper in this volatile</div>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={6}>
                                <div className='benefit__4cards__body mt-5'>
                                    <div className='benefit__body__fcontent d-flex'>
                                        <div className='benefit__card__icon pe-2'>
                                            <FontAwesomeIcon icon={faCircleCheck} color='blue'/>
                                        </div>
                                        <div className='benefit__card__text'>Prosper in this volatile</div>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={6}>
                                <div className='benefit__4cards__body mt-3'>
                                    <div className='benefit__body__fcontent d-flex'>
                                        <div className='benefit__card__icon pe-2'>
                                            <FontAwesomeIcon icon={faCircleCheck} color='blue'/>
                                        </div>
                                        <div className='benefit__card__text'>Prosper in this volatile</div>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={6}>
                                <div className='benefit__4cards__body mt-3'>
                                    <div className='benefit__body__fcontent d-flex'>
                                        <div className='benefit__card__icon pe-2'>
                                            <FontAwesomeIcon icon={faCircleCheck} color='blue'/>
                                        </div>
                                        <div className='benefit__card__text'>Prosper in this volatile</div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Benefits;