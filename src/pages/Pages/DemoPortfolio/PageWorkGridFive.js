import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import NavBar from './Portfolio/NavBar';

//Import Light box
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

//Import components

//Import Images
import work1 from '../../../assets/images/work/1.jpg';
import work2 from '../../../assets/images/work/2.jpg';
import work3 from '../../../assets/images/work/3.jpg';
import work4 from '../../../assets/images/work/4.jpg';
import work5 from '../../../assets/images/work/5.jpg';
import work6 from '../../../assets/images/work/6.jpg';
import work7 from '../../../assets/images/work/7.jpg';
import work8 from '../../../assets/images/work/8.jpg';
import work9 from '../../../assets/images/work/9.jpg';
import work10 from '../../../assets/images/work/10.jpg';
import work11 from '../../../assets/images/work/11.jpg';
import work12 from '../../../assets/images/work/12.jpg';
import Footer4 from '../PageFooterLayouts/Footer4';
import ThemeSwitcher from '../../../components/Layout/ThemeSwitcher';

const images = [
  work1,
  work2,
  work3,
  work4,
  work5,
  work6,
  work7,
  work8,
  work9,
  work10,
  work11,
  work12,
];

class PageWorkGridFive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: 'Landrick', link: '/index' },
        { id: 2, name: 'Pages', link: '#' },
        { id: 3, name: 'Work', link: '#' },
        { id: 4, name: 'Grid' },
      ],
      works: [
        {
          image: work1,
          title: 'Iphone mockup',
          subtitle: 'Branding',
          category: 'Branding',
        },
        {
          image: work2,
          title: 'Mockup Collection',
          subtitle: 'Mockup',
          category: 'Designing',
        },
        {
          image: work3,
          title: 'Abstract images',
          subtitle: 'Abstract',
          category: 'Photography',
        },
        {
          image: work4,
          title: 'Yellow bg with Books',
          subtitle: 'Company V-card',
          category: 'Development',
        },
        {
          image: work5,
          title: 'Company V-card',
          subtitle: 'V-card',
          category: 'Branding',
        },
        {
          image: work6,
          title: 'Mockup box with paints',
          subtitle: 'Photography',
          category: 'Branding',
        },
        {
          image: work7,
          title: 'Coffee cup',
          subtitle: 'Cups',
          category: 'Designing',
        },
        {
          image: work8,
          title: 'Pen and article',
          subtitle: 'Article',
          category: 'Development',
        },
        {
          image: work9,
          title: 'White mockup box',
          subtitle: 'Color',
          category: 'Photography',
        },
        {
          image: work10,
          title: 'Logo Vectors',
          subtitle: 'Logos',
          category: 'Photography',
        },
        {
          image: work11,
          title: 'Black and white T-shirt',
          subtitle: 'Clothes',
          category: 'Branding',
        },
        {
          image: work12,
          title: 'Yellow bg with cellphone',
          subtitle: 'Cellphone',
          category: 'Branding',
        },
      ],
      displayCategory: 'All',
      photoIndex: 0,
      isOpen: false,
    };
  }

  setCategory(category) {
    this.setState({
      displayCategory: category,
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    var topnav = document.getElementById('topnav');
    if (top > 80 && topnav) {
      topnav.classList.add('nav-sticky');
    } else if (topnav) {
      topnav.classList.remove('nav-sticky');
    }
  };

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <React.Fragment>
        <NavBar />
        {/* breadcrumb */}
        <section className="bg-half-170 bg-light d-table w-100">
          <Container>
            <Row className="mt-5 justify-content-center">
              <Col lg={12} className="text-center">
                <div className="pages-heading">
                  <h4 className="title mb-0"> Work Grid </h4>
                </div>
              </Col>
            </Row>

            <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                <ul className="breadcrumb bg-white rounded shadow mb-0 px-4 py-2">
                  <li className="breadcrumb-item">
                    <Link to="/">Landrick</Link>
                  </li>{' '}
                  <li className="breadcrumb-item">
                    <Link to="#">Pages</Link>
                  </li>{' '}
                  <li className="breadcrumb-item">
                    <Link to="#">Work</Link>
                  </li>{' '}
                  <li className="breadcrumb-item active" aria-current="page">
                    Grid
                  </li>
                </ul>
              </nav>
            </div>
          </Container>
        </section>

        <section className="section">
          <Container fluid>
            <Row className="justify-content-center">
              <div className="col-12 filters-group-wrap">
                <div className="filters-group">
                  <ul
                    className="container-filter list-inline mb-0 filter-options text-center"
                    id="filter"
                  >
                    <li
                      onClick={() => this.setCategory('All')}
                      className={
                        this.state.displayCategory === 'All'
                          ? 'list-inline-item categories-name border text-dark rounded active'
                          : 'list-inline-item categories-name border text-dark rounded'
                      }
                    >
                      All
                    </li>{' '}
                    <li
                      onClick={() => this.setCategory('Branding')}
                      className={
                        this.state.displayCategory === 'Branding'
                          ? 'list-inline-item categories-name border text-dark rounded active'
                          : 'list-inline-item categories-name border text-dark rounded'
                      }
                    >
                      Branding
                    </li>{' '}
                    <li
                      onClick={() => this.setCategory('Designing')}
                      className={
                        this.state.displayCategory === 'Designing'
                          ? 'list-inline-item categories-name border text-dark rounded active'
                          : 'list-inline-item categories-name border text-dark rounded'
                      }
                    >
                      Designing
                    </li>{' '}
                    <li
                      onClick={() => this.setCategory('Photography')}
                      className={
                        this.state.displayCategory === 'Photography'
                          ? 'list-inline-item categories-name border text-dark rounded active'
                          : 'list-inline-item categories-name border text-dark rounded'
                      }
                    >
                      Photography
                    </li>{' '}
                    <li
                      onClick={() => this.setCategory('Development')}
                      className={
                        this.state.displayCategory === 'Development'
                          ? 'list-inline-item categories-name border text-dark rounded active'
                          : 'list-inline-item categories-name border text-dark rounded'
                      }
                    >
                      Development
                    </li>
                  </ul>
                </div>
              </div>
            </Row>

            <Row id="grid" className="row-cols-md-2 row-cols-lg-5 mt-4 pt-2">
              {this.state.works
                .filter(
                  ({ category }) =>
                    this.state.displayCategory === category ||
                    this.state.displayCategory === 'All',
                )
                .map(({ title, image, subtitle }, key) => (
                  <Col key={key} className="spacing picture-item">
                    <Card className="border-0 work-container work-grid position-relative d-block overflow-hidden rounded">
                      <CardBody className="p-0">
                        <Link
                          className="mfp-image d-inline-block"
                          to="#"
                          onClick={(event) => {
                            event.preventDefault();
                            this.setState({ isOpen: true, photoIndex: key });
                          }}
                          title=""
                        >
                          <img src={image} className="img-fluid" alt="work" />
                        </Link>
                        <div className="content bg-white p-3">
                          <h5 className="mb-0">
                            <Link
                              to="page-work-detail"
                              className="text-dark title"
                            >
                              {title}
                            </Link>
                          </h5>
                          <h6 className="text-muted tag mb-0">{subtitle}</h6>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                ))}

              {/* lightbox for portfolio images */}
              {isOpen && (
                <Lightbox
                  open={isGallery}
                  close={() => setisGallery(false)}
                  index={photoIndex}
                  slides={images.map((image) => ({ src: image }))}
                  // mainSrc={images[photoIndex]}
                  // nextSrc={images[(photoIndex + 1) % images.length]}
                  // prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                  // imagePadding={100}
                  // onCloseRequest={() => this.setState({ isOpen: false })}
                  // onMovePrevRequest={() =>
                  //     this.setState({
                  //         photoIndex: (photoIndex + images.length - 1) % images.length,
                  //     })
                  // }
                  // onMoveNextRequest={() =>
                  //     this.setState({
                  //         photoIndex: (photoIndex + 1) % images.length,
                  //     })
                  // }
                />
              )}
            </Row>
          </Container>
          <Col xs={12} className="mt-4 pt-2">
            <Pagination listClassName="justify-content-center mb-0">
              <PaginationItem>
                <PaginationLink href="#" aria-label="Previous">
                  Prev
                </PaginationLink>
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" aria-label="Next">
                  Next
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </Col>
        </section>
        {/* import Footer5 */}
        <Footer4 />
        <ThemeSwitcher />
      </React.Fragment>
    );
  }
}

export default PageWorkGridFive;
