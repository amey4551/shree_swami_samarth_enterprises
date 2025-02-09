import React, { Component } from "react";
import {
  Col,
  Container,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

// Import images
import sand from "../../assets/pictures/Images/Sand/1736272782316.jpg";
import chisel from "../../assets/pictures/Images/Chisel (khadi)/1736272453853.jpg";
import limestone from "../../assets/pictures/Images/Red limestone/1736268896188.jpg";

export default class  Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
    };
    this.toggleTab = this.toggleTab.bind(this);
  }
  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-end mb-4 pb-2">
            <Col md={8}>
              <div className="section-title text-center text-md-start">
                <h4 className="text-primary">Services</h4>
                {/* <h4 className="title mb-4">Our Services</h4> */}
                {/* <p className="text-muted mb-0 para-desc">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p> */}
              </div>
            </Col>

            <Col md={4} className="mt-4 mt-sm-0 d-none d-md-block">
              <div className="text-center text-md-end">
                <Link to="#" className="text-primary h6">
                  See More{" "}
                  <i>
                    <FeatherIcon icon="arrow-right" className="fea icon-sm" />{" "}
                  </i>
                </Link>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={4} className="mt-4 pt-2">
              <ul
                className="nav nav-pills nav-justified flex-column rounded shadow p-3 mb-0 sticky-bar"
                id="pills-tab"
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    to="#"
                    className={classnames(
                      { active: this.state.activeTab === "1" },
                      "rounded"
                    )}
                    onClick={() => {
                      this.toggleTab("1");
                    }}
                  >
                    <div className="text-start py-1 px-2">
                      <h6 className="mb-0">Sand</h6>
                    </div>
                  </NavLink>
                </NavItem>

                <NavItem className="mt-2">
                  <NavLink
                    to="#"
                    className={classnames(
                      { active: this.state.activeTab === "2" },
                      "rounded"
                    )}
                    onClick={() => {
                      this.toggleTab("2");
                    }}
                  >
                    <div className="text-start py-1 px-2">
                      <h6 className="mb-0">Chisel (Khadi)</h6>
                    </div>
                  </NavLink>
                </NavItem>

                <NavItem className="mt-2">
                  <NavLink
                    to="#"
                    className={classnames(
                      { active: this.state.activeTab === "3" },
                      "rounded"
                    )}
                    onClick={() => {
                      this.toggleTab("3");
                    }}
                  >
                    <div className="text-start py-1 px-2">
                      <h6 className="mb-0">Red limestone (Chire)</h6>
                    </div>
                  </NavLink>
                </NavItem>

                
              </ul>
            </Col>

            <Col md={8} xs={12} className="mt-4 pt-2">
              <TabContent
                id="pills-tabContent"
                activeTab={this.state.activeTab}
              >
                <TabPane
                  className="fade show bg-white  p-4 rounded shadow"
                  tabId="1"
                >
                  <img
                    src={sand}
                    className="img-fluid rounded shadow"
                    alt=""
                  />
                  <div className="mt-2">
                    <h5>Sand</h5>
                    <p className="text-muted my-3">
                      Best quality sand.
                    </p>
                   
                  </div>
                </TabPane>

                <TabPane
                  className="fade show bg-white p-4 rounded shadow"
                  tabId="2"
                >
                  <img
                    src={chisel}
                    className="img-fluid rounded shadow"
                    alt=""
                  />
                  <div className="mt-4">
                    <h5>Chisel (Khadi)</h5>
                    <p className="text-muted my-3">
                      Good quality chisel.
                    </p>
                   
                  </div>
                </TabPane>

                <TabPane
                  className="fade show bg-white p-4 rounded shadow"
                  tabId="3"
                >
                  <img
                    src={limestone}
                    className="img-fluid rounded shadow"
                    alt=""
                  />
                  <div className="mt-4">
                    <h5>Red limestone (Chire)</h5>
                    <p className="text-muted my-3">
                      Red limestone.
                    </p>
                    
                  </div>
                </TabPane>

                <TabPane
                  className="fade show bg-white p-4 rounded shadow"
                  tabId="4"
                >
                  {/* <img
                    src={medical4}
                    className="img-fluid rounded shadow"
                    alt=""
                  /> */}
                  <div className="mt-4">
                    <h5>General Body Checkup</h5>
                    <p className="text-muted my-3">
                      This is required when, for example, the final text is not
                      yet available. Dummy text is also known as 'fill text'. It
                      is said that song composers of the past used dummy texts
                      as lyrics.
                    </p>
                    <Link to="#" className="text-primary">
                      Learn More{" "}
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />{" "}
                      </i>
                    </Link>
                  </div>
                </TabPane>

                <TabPane
                  className="fade show bg-white p-4 rounded shadow"
                  tabId="5"
                >
                  {/* <img
                    src={medical5}
                    className="img-fluid rounded shadow"
                    alt=""
                  /> */}
                  <div className="mt-4">
                    <h5>Medicine Services</h5>
                    <p className="text-muted my-3">
                      This is required when, for example, the final text is not
                      yet available. Dummy text is also known as 'fill text'. It
                      is said that song composers of the past used dummy texts
                      as lyrics.
                    </p>
                    <Link to="#" className="text-primary">
                      Learn More{" "}
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />{" "}
                      </i>
                    </Link>
                  </div>
                </TabPane>

                <TabPane
                  className="fade show bg-white p-4 rounded shadow"
                  tabId="6"
                >
                  {/* <img
                    src={medical6}
                    className="img-fluid rounded shadow"
                    alt=""
                  /> */}
                  <div className="mt-4">
                    <h5>Orthopadic Service</h5>
                    <p className="text-muted my-3">
                      This is required when, for example, the final text is not
                      yet available. Dummy text is also known as 'fill text'. It
                      is said that song composers of the past used dummy texts
                      as lyrics.
                    </p>
                    <Link to="#" className="text-primary">
                      Learn More{" "}
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />{" "}
                      </i>
                    </Link>
                  </div>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
