// React Basic and Bootstrap
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Components
import CourseBox from "./course-box";
import SectionTitle from "../../components/Shared/SectionTitle";
import TeamBox from "../../components/Shared/TeamBox";
import {coursesData, candidatesData} from "../../common/data";

const Services = () => {
    return (
      <React.Fragment>
        <section className="section" id="courses">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Our products"
            />

            <Row>
              {/* coursebox */}
              <CourseBox courses={coursesData} />

            </Row>
          </Container>

        </section>
      </React.Fragment>
    );  
};

export default Services;
