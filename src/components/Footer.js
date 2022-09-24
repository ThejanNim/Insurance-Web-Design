import '../scss/style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../assets/images/logobg2.png'

function Footer() {
    return (
        <section className='footer__section'>
            <div className='footer__dv'>
            <Container>
                <Row>
                    <Col xl={3}>
                        <div className='footer__details'>
                            <div className='footer__details__logo'>
                                <img src='https://layerdrops.com/insur/main-html/assets/images/resources/footer-logo.png' alt=''/>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3}>
                        Thejan
                    </Col>
                    <Col xl={3}>
                        Thejan
                    </Col>
                    <Col xl={3}>
                        Thejan
                    </Col>
                </Row>
            </Container>
            </div>
        </section>
    )
}

export default Footer;