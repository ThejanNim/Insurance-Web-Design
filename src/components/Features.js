import '../scss/style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'

function Features() {
    return (
        <section className='features__section'>
            <Container>
                <Row>
                    <Col sm={12} xs={12} lg={4} xl={4}>
                        <div className='features__card d-flex'>
                            <div className='feature__card__ibody'>
                                <FontAwesomeIcon className='features__card__icon' icon={faMoneyCheckDollar} size='3x' color='blue'/>
                            </div>
                            <div className='features__card__content'>
                                <p className="features__card__tag">Lorem ipsum</p>
                                <h3 className='features__card__title'>Get all claims at<br/>anytime</h3>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} xs={12} lg={4} xl={4}>
                        <div className='features__card d-flex'>
                            <div className='feature__card__ibody'>
                                <FontAwesomeIcon className='features__card__icon' icon={faMoneyCheckDollar} size='3x' color='blue'/>
                            </div>
                            <div className='features__card__content'>
                                <p className="features__card__tag">Lorem ipsum</p>
                                <h3 className='features__card__title'>Get all claims at<br/>anytime</h3>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} xs={12} lg={4} xl={4}>
                        <div className='features__card d-flex'>
                            <div className='feature__card__ibody'>
                                <FontAwesomeIcon className='features__card__icon' icon={faMoneyCheckDollar} size='3x' color='blue'/>
                            </div>
                            <div className='features__card__content'>
                                <p className="features__card__tag">Lorem ipsum</p>
                                <h3 className='features__card__title'>Get all claims at<br/>anytime</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Features;