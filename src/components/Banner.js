import '../scss/style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Banner() {
    return (
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <Container fluid className='con__caro__w'>
                    <Row>
                        <Col className='px-0'>
                            <div className='bgo__img'>
                                <img style={{height: "100%"}} src="https://layerdrops.com/insur/main-html/assets/images/backgrounds/main-slider-3-1.jpg" class="d-block w-100 img-fluid" alt=""/>
                            </div>
                            <div className='caro__content'>
                                <h2 className='caro__title'>Insur is Protecting<br/>Your Future.</h2>
                                <p className='caro__des'>Phasellus condimentum laoreet turpis, ut tincid sodales in. Integer leo arcu, mollis sit amet tempor.</p>
                                <Button className='caro__start_btn'>Let's Get Started</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div class="carousel-item">
                <Container fluid className='con__caro__w'>
                    <Row>
                        <Col className='px-0'>
                            <div className='bgo__img'>
                                <img style={{height: "100%"}} src="https://layerdrops.com/insur/main-html/assets/images/backgrounds/main-slider-3-2.jpg" class="d-block w-100" alt="..."/>
                            </div>
                            <div className='caro__content'>
                                <h2 className='caro__title'>Insur is Protecting<br/>Your Future.</h2>
                                <p className='caro__des'>Phasellus condimentum laoreet turpis, ut tincid sodales in. Integer leo arcu, mollis sit amet tempor.</p>
                                <Button className='caro__start_btn'>Let's Get Started</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div class="carousel-item">
                <Container fluid className='con__caro__w'>
                    <Row>
                        <Col className='px-0'>
                            <div className='bgo__img'>
                                <img style={{height: "100%"}} src="https://layerdrops.com/insur/main-html/assets/images/backgrounds/main-slider-3-3.jpg" class="d-block w-100" alt="..."/>
                            </div>
                            <div className='caro__content'>
                                <h2 className='caro__title'>Insur is Protecting<br/>Your Future.</h2>
                                <p className='caro__des'>Phasellus condimentum laoreet turpis, ut tincid sodales in. Integer leo arcu, mollis sit amet tempor.</p>
                                <Button className='caro__start_btn'>Let's Get Started</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        {/*<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>*/}
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    )
}

export default Banner;