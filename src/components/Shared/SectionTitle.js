import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class SectionTitle extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Row className="justify-content-center">
          <Col xs="12" className={this.props.isLeft ? "" : "text-center"}>
            <div className="section-title mb-4 pb-2" name="maintitle">
              <h4 className="title mb-4" name="sectiontitle">
                {" "}
                {this.props.title}{" "}
              </h4>
              <p
                className={
                  this.props.isLeft
                    ? "text-muted para-desc mb-0"
                    : "text-muted para-desc mb-0 mx-auto"
                }
                name="sectiondesc"
              >
                Start working with{" "}
                <span className="text-primary fw-bold">Landrick</span>{" "}
                {this.props.desc}
              </p>
            </div>
          </Col>
        </Row> */}
        <Row className="justify-content-center">
          <Col className={this.props.isLeft ? '' : 'col-12 text-center'}>
            <div className="section-title mb-4 pb-2">
              <h4 className="title mb-4"> {this.props.title}</h4>
              <p
                className={
                  this.props.isLeft
                    ? 'text-muted para-desc mb-0'
                    : 'text-muted para-desc mb-0 mx-auto'
                }
                name="sectiondesc"
              >
                description{' '}
                {/* <span className="text-primary fw-bold">Landrick</span>  */}
                {this.props.desc}
              </p>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default SectionTitle;
