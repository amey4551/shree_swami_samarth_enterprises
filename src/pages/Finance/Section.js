import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Typist from 'react-typist-component';

//import images
import ctaImg from '../../assets/images/finance/bg.jpg';

export default class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-half-260 d-table w-100"
          data-jarallax='{"speed": 0.5}'
          style={{ background: `url(${ctaImg}) right` }}
        >
          <div className="bg-overlay opacity-6"></div>
          <Container>
            <Row>
              <Col xs={12}>
                <div className="title-heading">
                  <span className="alert bg-light alert-pills" role="alert">
                    <span className="badge rounded-pill bg-primary me-1">
                      Trusted
                    </span>
                    <span className="content">
                      {' '}
                      Funds held securely and relibly
                    </span>
                  </span>
                  <h1 className="heading fw-bold mb-0">
                    Help your &nbsp;
                    <Typist typingDelay={100} loop={true}>
                      <span className="text-primary text-decoration-underline typewrite">
                        Agency
                      </span>
                      <Typist.Delay ms={1200} />
                      <Typist.Backspace count={7} />

                      <span className="text-primary text-decoration-underline typewrite">
                        Business
                      </span>
                      <Typist.Delay ms={1200} />
                      <Typist.Backspace count={8} />

                      <span className="text-primary text-decoration-underline typewrite">
                        Startups
                      </span>
                      <Typist.Delay ms={1200} />
                      <Typist.Backspace count={10} />
                    </Typist>
                  </h1>
                  <h1 className="heading fw-bold mb-3">
                    Growth up to high level
                  </h1>
                  <p className="para-desc text-white-50">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                  <div className="mt-4 pt-2">
                    <Link to="#" className="btn btn-primary">
                      Contact us
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
