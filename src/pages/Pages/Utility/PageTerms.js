// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Collapse,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

class PageTerms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      col1: true,
      col2: false,
      col3: false,
      col4: false,
      col5: false,
    };
    this.t_col1 = this.t_col1.bind(this);
    this.t_col2 = this.t_col2.bind(this);
    this.t_col3 = this.t_col3.bind(this);
    this.t_col4 = this.t_col4.bind(this);
    this.t_col5 = this.t_col5.bind(this);
  }

  t_col1() {
    this.setState({
      col1: !this.state.col1,
      col2: false,
      col3: false,
      col4: false,
      col5: false,
    });
  }
  t_col2() {
    this.setState({
      col2: !this.state.col2,
      col1: false,
      col3: false,
      col4: false,
      col5: false,
    });
  }
  t_col3() {
    this.setState({
      col3: !this.state.col3,
      col2: false,
      col1: false,
      col4: false,
      col5: false,
    });
  }
  t_col4() {
    this.setState({
      col4: !this.state.col4,
      col2: false,
      col3: false,
      col1: false,
      col5: false,
    });
  }
  t_col5() {
    this.setState({
      col5: !this.state.col5,
      col2: false,
      col3: false,
      col1: false,
      col4: false,
    });
  }

  componentDidMount() {
    document.body.classList = "";
    document.querySelector(".shoppingbtn")?.classList.add("btn-primary");
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    const navBar = document.getElementById("topnav");
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (navBar != null) {
      if (top > 80) {
        navBar.classList.add("nav-sticky");
      } else {
        navBar.classList.remove("nav-sticky");
        document.querySelector(".shoppingbtn")?.classList.add("btn-primary");
        document.querySelector(".shoppingbtn")?.classList.remove("btn-light");
        document.querySelector(".settingbtn")?.classList.add("btn-soft-primary");
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        {/* breadcrumb */}
        <section className="bg-half-170 bg-light d-table w-100">
          <Container>
            <Row className="mt-5 justify-content-center">
              <Col lg={12} className="text-center">
                <div className="pages-heading">
                  <h4 className="title mb-0"> Terms of Services </h4>
                </div>
              </Col>
            </Row>

            <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                  <li className="breadcrumb-item"><Link to="/">Landrick</Link></li>{" "}
                  <li className="breadcrumb-item"><Link to="#">Page</Link></li>{" "}
                  <li className="breadcrumb-item"><Link to="#">Utility</Link></li>{" "}
                  <li className="breadcrumb-item active" aria-current="page">Terms</li>
                </ul>
              </nav>
            </div>
          </Container>
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        <section className="section">
          <Container>
            <Row className="justify-content-center">
              <Col lg={9}>
                <Card className="shadow border-0 rounded">
                  <CardBody>
                    <h5 className="card-title">Introduction :</h5>
                    <p className="text-muted">
                      It seems that only fragments of the original text remain
                      in the Lorem Ipsum texts used today. One may speculate
                      that over the course of time certain letters were added or
                      deleted at various positions within the text.
                    </p>

                    <h5 className="card-title">User Agreements :</h5>
                    <p className="text-muted">
                      The most well-known dummy text is the 'Lorem Ipsum', which
                      is said to have <b className="text-danger">originated</b>{" "}
                      in the 16th century. Lorem Ipsum is{" "}
                      <b className="text-danger">composed</b> in a pseudo-Latin
                      language which more or less{" "}
                      <b className="text-danger">corresponds</b> to 'proper'
                      Latin. It contains a series of real Latin words. This
                      ancient dummy text is also{" "}
                      <b className="text-danger">incomprehensible</b>, but it
                      imitates the rhythm of most European languages in Latin
                      script. The <b className="text-danger">advantage</b> of
                      its Latin origin and the relative{" "}
                      <b className="text-danger">meaninglessness</b> of Lorum
                      Ipsum is that the text does not attract attention to
                      itself or distract the viewer's{" "}
                      <b className="text-danger">attention</b> from the layout.
                    </p>
                    <p className="text-muted">
                      There is now an <b className="text-danger">abundance</b>{" "}
                      of readable dummy texts. These are usually used when a
                      text is <b className="text-danger">required purely</b> to
                      fill a space. These alternatives to the classic Lorem
                      Ipsum texts are often amusing and tell short, funny or{" "}
                      <b className="text-danger">nonsensical</b> stories.
                    </p>
                    <p className="text-muted">
                      It seems that only{" "}
                      <b className="text-danger">fragments</b> of the original
                      text remain in the Lorem Ipsum texts used today. One may
                      speculate that over the course of time certain letters
                      were added or deleted at various positions within the
                      text.
                    </p>

                    <h5 className="card-title">Restrictions :</h5>
                    <p className="text-muted">
                      You are specifically restricted from all of the following
                      :
                    </p>
                    <ul className="list-unstyled feature-list text-muted">
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Digital Marketing Solutions for Tomorrow
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Our Talented & Experienced Marketing Agency
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Create your own skin to match your brand
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Digital Marketing Solutions for Tomorrow
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Our Talented & Experienced Marketing Agency
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Create your own skin to match your brand
                      </li>
                    </ul>

                    <h5 className="card-title">Users Question & Answer :</h5>
                    <div className="faq-content mt-4">
                      <div className="accordion" id="accordionExample">
                        <Card className="border-0 rounded mb-2">
                          <Link
                            to="#"
                            onClick={this.t_col1}
                            className={
                              this.state.col1
                                ? "faq position-relative text-primary"
                                : "faq position-relative text-dark"
                            }
                          >
                            <CardHeader
                              className="border-0 bg-light p-3"
                              id="headingOne"
                            >
                              <h6 className="title mb-0">
                                How does it work ?
                                <i
                                  className={
                                    this.state.col1
                                      ? "mdi mdi-chevron-up float-end"
                                      : "mdi mdi-chevron-down float-end"
                                  }
                                ></i>
                              </h6>
                            </CardHeader>
                          </Link>
                          <Collapse isOpen={this.state.col1}>
                            <CardBody>
                              <p className="text-muted mb-0 faq-ans">
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form.
                              </p>
                            </CardBody>
                          </Collapse>
                        </Card>

                        <Card className="border-0 rounded mb-2">
                          <Link
                            to="#"
                            onClick={this.t_col2}
                            className={
                              this.state.col2
                                ? "faq position-relative text-primary"
                                : "faq position-relative text-dark"
                            }
                          >
                            <CardHeader
                              className="border-0 bg-light p-3"
                              id="headingTwo"
                            >
                              <h6 className="title mb-0">
                                Do I need a designer to use Landrick ?
                                <i
                                  className={
                                    this.state.col2
                                      ? "mdi mdi-chevron-up float-end"
                                      : "mdi mdi-chevron-down float-end"
                                  }
                                ></i>
                              </h6>
                            </CardHeader>
                          </Link>
                          <Collapse isOpen={this.state.col2}>
                            <CardBody>
                              <p className="text-muted mb-0 faq-ans">
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form.
                              </p>
                            </CardBody>
                          </Collapse>
                        </Card>

                        <Card className="border-0 rounded mb-2">
                          <Link
                            to="#"
                            onClick={this.t_col3}
                            className={
                              this.state.col3
                                ? "faq position-relative text-primary"
                                : "faq position-relative text-dark"
                            }
                          >
                            <CardHeader
                              className="border-0 bg-light p-3"
                              id="headingfive"
                            >
                              <h6 className="title mb-0">
                                What do I need to do to start selling ?
                                <i
                                  className={
                                    this.state.col3
                                      ? "mdi mdi-chevron-up float-end"
                                      : "mdi mdi-chevron-down float-end"
                                  }
                                ></i>
                              </h6>
                            </CardHeader>
                          </Link>
                          <Collapse isOpen={this.state.col3}>
                            <CardBody>
                              <p className="text-muted mb-0 faq-ans">
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form.
                              </p>
                            </CardBody>
                          </Collapse>
                        </Card>

                        <Card className="border-0 rounded mb-2">
                          <Link
                            to="#"
                            onClick={this.t_col4}
                            className={
                              this.state.col4
                                ? "faq position-relative text-primary"
                                : "faq position-relative text-dark"
                            }
                          >
                            <CardHeader
                              className="border-0 bg-light p-3"
                              id="headingfive"
                            >
                              <h6 className="title mb-0">
                                What happens when I receive an order ?
                                <i
                                  className={
                                    this.state.col4
                                      ? "mdi mdi-chevron-up float-end"
                                      : "mdi mdi-chevron-down float-end"
                                  }
                                ></i>
                              </h6>
                            </CardHeader>
                          </Link>
                          <Collapse isOpen={this.state.col4}>
                            <CardBody>
                              <p className="text-muted mb-0 faq-ans">
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form.
                              </p>
                            </CardBody>
                          </Collapse>
                        </Card>                        
                      </div>
                    </div>

                    <div className="mt-3">
                      <Link to="#" className="btn btn-primary mt-2 me-2">
                        Accept
                      </Link>{" "}
                      <Link to="#" className="btn btn-outline-primary mt-2">
                        Decline
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default PageTerms;
