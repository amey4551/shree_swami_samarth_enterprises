import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

//import bg image
import bg_image from '../../assets/images/construction/bg.jpg';

export default class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-half-260 d-table w-100"
          style={{ background: `url(${bg_image}) center center` }}
        >
          <div className="bg-overlay" style={{ opacity: '0.65' }}></div>
          <Container>
            <Row className="mt-5 mt-md-4">
              <Col xs={12}>
                <div className="title-heading">
                  <h4 className="display-4 mb-4 fw-bold text-white title-dark">
                    Building Your Dreams,
                    <br /> One Brick at a Time
                  </h4>
                  <p className="para-desc text-white-50">
                    Quality Materials for Lasting Structures.
                    {/* <br />
                    At Shree Swami Samarth Enterprises, we take pride in being a
                    trusted supplier of top-quality construction materials in
                    Goa for the past 6 years. Specializing in river sand sourced
                    from Maharashtra, we cater to the needs of professional
                    builders, local contractors, and individual customers across
                    Goa. In addition to river sand, we supply premium limestone
                    and chisels, all carefully sourced from Maharashtra to
                    ensure consistent quality. Our commitment to delivering the
                    best materials without compromise has earned us the trust of
                    our diverse clientele. Whether you're a builder managing
                    large-scale projects or a local customer with smaller
                    requirements, we are here to meet your needs with excellence
                    and reliability. */}
                  </p>
                  <div className="mt-4 pt-2">
                    <Link to="#" className="btn btn-primary">
                    <i className="mdi mdi-phone mr-2"></i> 
                      <span>Contact us </span>
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
