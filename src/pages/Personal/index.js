// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

// Import Generic components
import Section from "./Section";
import About from "./About";
import Testi from "./Testi";
import Blog from "./Blog";
import Popup from "../../components/Layout/popup";

//Import Images
import img1 from "../../assets/images/client/amazon.svg";
import img2 from "../../assets/images/client/google.svg";
import img3 from "../../assets/images/client/lenovo.svg";
import img4 from "../../assets/images/client/paypal.svg";
import img5 from "../../assets/images/client/shopify.svg";
import img6 from "../../assets/images/client/spotify.svg";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partners: [
        { image: img1 },
        { image: img2 },
        { image: img3 },
        { image: img4 },
        { image: img5 },
        { image: img6 },
      ],
    };
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
        {/* Hero Start */}
        <Section />

        {/* About */}
        <About />

        {/* Testi */}
        <Testi />

        {/* Partner */}
        <section className="py-4 border-bottom">
          <Container>
            <Row className="justify-content-center">
              {this.state.partners.map((partner, key) => (
                <Col
                  lg={2}
                  md={2}
                  xs={6}
                  key={key}
                  className="text-center py-4"
                >
                  <img
                    src={partner.image}
                    className="avatar avatar-ex-sm"
                    alt="Landrick"
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Blog */}
        <Blog />

        {/* Popup */}
        <Popup />
      </React.Fragment>
    );
  }
}

export default Index;
