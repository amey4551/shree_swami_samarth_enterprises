import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
    Form,
    Input,
    Pagination,
    PaginationItem,
    PaginationLink,
    Card,
    CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import components

//Import Images
import product1 from "../../../../assets/images/shop/product/s1.jpg";
import product2 from "../../../../assets/images/shop/product/s2.jpg";
import product3 from "../../../../assets/images/shop/product/s3.jpg";
import product4 from "../../../../assets/images/shop/product/s4.jpg";
import product5 from "../../../../assets/images/shop/product/s5.jpg";
import product6 from "../../../../assets/images/shop/product/s6.jpg";
import product7 from "../../../../assets/images/shop/product/s7.jpg";
import product8 from "../../../../assets/images/shop/product/s8.jpg";
import product9 from "../../../../assets/images/shop/product/s9.jpg";
import product10 from "../../../../assets/images/shop/product/s10.jpg";
import product11 from "../../../../assets/images/shop/product/s11.jpg";
import product12 from "../../../../assets/images/shop/product/s12.jpg";
import product13 from "../../../../assets/images/shop/product/s13.jpg";
import product14 from "../../../../assets/images/shop/product/s14.jpg";
import product15 from "../../../../assets/images/shop/product/s15.jpg";

import prodtctOverlay1 from "../../../../assets/images/shop/product/s-1.jpg";
import prodtctOverlay2 from "../../../../assets/images/shop/product/s-2.jpg";
import prodtctOverlay3 from "../../../../assets/images/shop/product/s-3.jpg";
import prodtctOverlay4 from "../../../../assets/images/shop/product/s-4.jpg";
import prodtctOverlay5 from "../../../../assets/images/shop/product/s-5.jpg";
import prodtctOverlay6 from "../../../../assets/images/shop/product/s-6.jpg";
import prodtctOverlay7 from "../../../../assets/images/shop/product/s-7.jpg";
import prodtctOverlay8 from "../../../../assets/images/shop/product/s-8.jpg";
import prodtctOverlay9 from "../../../../assets/images/shop/product/s-9.jpg";
import prodtctOverlay10 from "../../../../assets/images/shop/product/s-10.jpg";
import prodtctOverlay11 from "../../../../assets/images/shop/product/s-11.jpg";
import prodtctOverlay12 from "../../../../assets/images/shop/product/s-12.jpg";
import prodtctOverlay13 from "../../../../assets/images/shop/product/s-13.jpg";
import prodtctOverlay14 from "../../../../assets/images/shop/product/s-14.jpg";
import prodtctOverlay15 from "../../../../assets/images/shop/product/s-15.jpg";

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    image: product1,
                    imgOverlay: prodtctOverlay1,
                    name: "Branded T-Shirt",
                    price: "16.00",
                    oldPrice: "21.00",
                    isFeatures: true,
                    isLogo: true,
                    isOverlay: true
                },
                {
                    id: 2,
                    image: product2,
                    imgOverlay: prodtctOverlay2,
                    name: "Shopping Bag",
                    price: "21.00",
                    oldPrice: "25.00",
                    outofstock: true,
                    isLogo: false,
                    isOverlay: false
                },
                {
                    id: 3,
                    image: product3,
                    imgOverlay: prodtctOverlay3,
                    name: "Elegent Watch",
                    price: "5.00",
                    desc: "30% off",
                    isLogo: true,
                    isOverlay: true
                },
                {
                    id: 4,
                    image: product4,
                    imgOverlay: prodtctOverlay4,
                    name: "Casual Shoes",
                    price: "18.00",
                    oldPrice: "22.00",
                    isLogo: true,
                    isOverlay: true
                },
                {
                    id: 5,
                    image: product5,
                    imgOverlay: prodtctOverlay5,
                    name: "Earphones",
                    price: "3.00",
                    isSale: true,
                    isLogo: true,
                    isOverlay: true
                },
                {
                    id: 6,
                    image: product6,
                    imgOverlay: prodtctOverlay6,
                    name: "Elegent Mug",
                    price: "4.50",
                    oldPrice: "6.50",
                    isNew: true,
                    isFeatures: true,
                    isSale: true,
                    outofstock: true
                },
                {
                    id: 7,
                    image: product7,
                    imgOverlay: prodtctOverlay7,
                    name: "Sony Headphones",
                    price: "9.99",
                    desc: "20% off",
                    isLogo: true,
                    isOverlay: true
                },
                {
                    id: 8,
                    image: product8,
                    imgOverlay: prodtctOverlay8,
                    name: "Wooden Stools",
                    price: "22.00",
                    oldPrice: "25.00",
                    isNew: true,
                    isFeatures: true,
                    isSale: true,
                    isLogo: true,
                    isOverlay: true
                },
                {
                    id: 9,
                    image: product9,
                    imgOverlay: prodtctOverlay9,
                    name: "Coffee Cup / Mug",
                    price: "16.00",
                    oldPrice: "21.00",
                    isFeatures: true,
                    isLogo: true,
                    isOverlay: true
                },
                {
                    id: 10,
                    image: product10,
                    imgOverlay: prodtctOverlay10,
                    name: "Sunglasses",
                    price: "5.00",
                    oldPrice: "25.00",
                    isNew: true,
                    outofstock: true
                },
                {
                    id: 11,
                    image: product11,
                    imgOverlay: prodtctOverlay11,
                    name: "Loafer Shoes",
                    price: "22.00",
                    desc: "30% off",
                    isFeatures: true,
                    isLogo: true,
                    isOverlay: true
                },
                {
                    id: 12,
                    image: product12,
                    imgOverlay: prodtctOverlay12,
                    name: "T-Shirts",
                    price: "22.00",
                    oldPrice: "25.00",
                    isNew: true,
                    isFeatures: true,
                    isSale: true,
                    isLogo: true,
                    isOverlay: true
                },
                {
                    id: 13,
                    image: product13,
                    imgOverlay: prodtctOverlay13,
                    name: "Wooden Chair",
                    price: "16.00",
                    oldPrice: "21.00",
                    isLogo: true,
                    isOverlay: true
                },
                {
                    id: 14,
                    image: product14,
                    imgOverlay: prodtctOverlay14,
                    name: "Women Block Heels",
                    price: "21.00",
                    oldPrice: "25.00",
                    isLogo: true,
                    isOverlay: true
                },
                {
                    id: 15,
                    image: product15,
                    imgOverlay: prodtctOverlay15,
                    name: "T-Shirts",
                    price: "22.00",
                    desc: "30% off",
                    isLogo: true,
                    isOverlay: true
                },
            ],
            topProducts: [
                {
                    image: product1,
                    name: "T-Shirt",
                    oldPrice: "$22.00",
                    NewPrice: "$18.00 ",
                },
                {
                    image: product3,
                    name: "Watch",
                    oldPrice: "$22.00",
                    NewPrice: "$18.00 ",
                },
                {
                    image: product6,
                    name: "Coffee Cup",
                    oldPrice: "$22.00",
                    NewPrice: "$18.00 ",
                },
                {
                    image: product8,
                    name: "Wooden Stools",
                    oldPrice: "$22.00",
                    NewPrice: "$18.00 ",
                },
            ],
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById("topnav")?.classList.add("nav-sticky");
        } else {
            document.getElementById("topnav")?.classList.remove("nav-sticky");
        }
    };

    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        <Row>
                            <Col lg={3} md={4} xs={12}>
                                <Card className="border-0 sidebar sticky-bar">
                                    <CardBody className="p-0">
                                        <div className="widget">
                                            <div id="search2" className="widget-search mb-0">
                                                <Form
                                                    role="search"
                                                    method="get"
                                                    id="searchform"
                                                >
                                                    <div className="input-group mb-3 border rounded">
                                                        <Input
                                                            type="text"
                                                            className="form-control border-0"
                                                            name="s"
                                                            id="s"
                                                            placeholder="Search Keywords..."
                                                        />
                                                        <button type="submit" className="input-group-text bg-white border-0" id="searchsubmit">
                                                            <i className="uil uil-search"></i>
                                                        </button>
                                                        {/* <FeatherIcon icon="search" /> */}
                                                    </div>
                                                </Form>
                                            </div>
                                        </div>

                                        <div className="widget mt-4 pt-2">
                                            <h5 className="widget-title">Categories</h5>
                                            <ul className="list-unstyled mt-4 mb-0 blog-categories">
                                                <li>
                                                    <Link to="#">Men</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Women</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Electronics</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Jewellery</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Shoes</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Kid’s Wear</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Sports</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Toys</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Gift Corners</Link>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="widget mt-4 pt-2">
                                            <h5 className="widget-title">Color</h5>
                                            <ul className="list-unstyled mt-4 mb-0">
                                                <li className="list-inline-item">
                                                    <Link
                                                        to="#"
                                                        className="btn btn-sm btn-icon btn-pills bg-primary"
                                                    ><span className="d-none">.</span></Link>
                                                </li>{" "}
                                                <li className="list-inline-item">
                                                    <Link
                                                        to="#"
                                                        className="btn btn-sm btn-icon btn-pills bg-danger"
                                                    ><span className="d-none">.</span></Link>
                                                </li>{" "}
                                                <li className="list-inline-item">
                                                    <Link
                                                        to="#"
                                                        className="btn btn-sm btn-icon btn-pills bg-success"
                                                    ><span className="d-none">.</span></Link>
                                                </li>{" "}
                                                <li className="list-inline-item">
                                                    <Link
                                                        to="#"
                                                        className="btn btn-sm btn-icon btn-pills bg-info"
                                                    ><span className="d-none">.</span></Link>
                                                </li>{" "}
                                                <li className="list-inline-item">
                                                    <Link
                                                        to="#"
                                                        className="btn btn-sm btn-icon btn-pills bg-secondary"
                                                    ><span className="d-none">.</span></Link>
                                                </li>{" "}
                                                <li className="list-inline-item">
                                                    <Link
                                                        to="#"
                                                        className="btn btn-sm btn-icon btn-pills bg-warning"
                                                    ><span className="d-none">.</span></Link>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="widget mt-4 pt-2">
                                            <h5 className="widget-title">Top Products</h5>
                                            <ul className="list-unstyled mt-4 mb-0">
                                                {this.state.topProducts.map((product, key) => (
                                                    <li
                                                        key={key}
                                                        className={
                                                            key + 1 === 1
                                                                ? "d-flex align-items-center"
                                                                : "d-flex align-items-center mt-2"
                                                        }
                                                    >
                                                        <Link to="#">
                                                            <img
                                                                src={product.image}
                                                                className="img-fluid avatar avatar-small rounded shadow"
                                                                style={{ height: "auto" }}
                                                                alt="Landrick"
                                                            />
                                                        </Link>
                                                        <div className="flex-1 content ms-3">
                                                            <Link to="#" className="text-dark h6">
                                                                {product.name}
                                                            </Link>
                                                            <h6 className="text-dark small fst-italic mb-0 mt-1">
                                                                {product.NewPrice}{" "}
                                                                <del className="text-danger ms-2">
                                                                    {product.oldPrice}
                                                                </del>{" "}
                                                            </h6>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg={9} md={8} xs={12} className="mt-5 pt-2 mt-sm-0 pt-sm-0">
                                <Row className="align-items-center">
                                    <Col lg={8} md={7}>
                                        <div className="section-title">
                                            <h5 className="mb-0">Showing 1–15 of 47 results</h5>
                                        </div>
                                    </Col>

                                    <Col lg={4} md={5} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                        <div className="d-flex justify-content-md-between align-items-center">
                                            <div className="form custom-form">
                                                <div className="mb-0">
                                                    <select
                                                        className="form-select form-control"
                                                        id="Sortbylist-job"
                                                    >
                                                        <option>Sort by latest</option>
                                                        <option>Sort by popularity</option>
                                                        <option>Sort by rating</option>
                                                        <option>Sort by price: low to high</option>
                                                        <option>Sort by price: high to low</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="mx-2">
                                                <Link to="shop-grids" className="h5 text-muted">
                                                    <i className="uil uil-apps"></i>
                                                </Link>
                                            </div>

                                            <div>
                                                <Link to="shop-lists" className="h5 text-muted">
                                                    <i className="uil uil-list-ul"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    {this.state.products.map((product, key) => (
                                        <Col key={key} lg={4} md={6} xs={12} className="mt-4 pt-2">
                                            <Card className="shop-list border-0 position-relative">
                                                <ul className="label list-unstyled mb-0">
                                                    {product.isNew && (
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="badge badge-link rounded-pill bg-primary"
                                                            >
                                                                New
                                                            </Link>
                                                        </li>
                                                    )}
                                                    {product.isFeatures && (
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="badge badge-link rounded-pill bg-success"
                                                            >
                                                                Featured
                                                            </Link>
                                                        </li>
                                                    )}

                                                    {product.isSale && (
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="badge badge-link rounded-pill bg-warning"
                                                            >
                                                                Sale
                                                            </Link>
                                                        </li>
                                                    )}
                                                </ul>
                                                <div className="shop-image position-relative overflow-hidden rounded shadow">
                                                    <Link to="shop-product-detail">
                                                        <img
                                                            src={product.image}
                                                            className="img-fluid"
                                                            alt="Landrick"
                                                        />
                                                    </Link>
                                                    {product.isOverlay ? <Link
                                                        to="shop-product-detail"
                                                        className="overlay-work"
                                                    >
                                                        <img
                                                            src={product.imgOverlay}
                                                            className="img-fluid"
                                                            alt="Landrick"
                                                        />
                                                    </Link>
                                                    :
                                                    null
                                                    }
                                                    {product.isLogo ? <ul className="list-unstyled shop-icons">
                                                        <li>
                                                            <Link to="#" className="btn btn-icon btn-pills btn-soft-danger">
                                                                <FeatherIcon
                                                                    icon="heart"
                                                                    className="icons"
                                                                />
                                                            </Link>
                                                        </li>
                                                        <li className="mt-2">
                                                            <Link
                                                                to="#"
                                                                data-toggle="modal"
                                                                data-target="#productview"
                                                                className="btn btn-icon btn-pills btn-soft-primary"
                                                            >
                                                                <FeatherIcon icon="eye" className="icons" />
                                                            </Link>
                                                        </li>
                                                        <li className="mt-2">
                                                            <Link to="shop-cart" className="btn btn-icon btn-pills btn-soft-warning">
                                                                <FeatherIcon
                                                                    icon="shopping-cart"
                                                                    className="icons"
                                                                />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                        :
                                                        null
                                                    }
                                                    {product.outofstock && (
                                                        <div className="overlay-work">
                                                            <div className="py-2 bg-soft-dark rounded-bottom out-stock">
                                                                <h6 className="mb-0 text-center">Out of stock</h6>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                <CardBody className="content pt-4 p-2">
                                                    <Link
                                                        to="shop-product-detail"
                                                        className="text-dark product-name h6"
                                                    >
                                                        {product.name}
                                                    </Link>
                                                    <div className="d-flex justify-content-between mt-1">
                                                        <h6 className="text-dark small fst-italic mb-0 mt-1">
                                                            ${product.price}{" "}
                                                            {product.oldPrice ? (
                                                                <del className="text-danger ms-2">
                                                                    ${product.oldPrice}
                                                                </del>
                                                            ) : null}
                                                            {product.desc ? (
                                                                <span className="text-success ms-1">
                                                                    {product.desc}
                                                                </span>
                                                            ) : null}
                                                        </h6>
                                                        <ul className="list-unstyled text-warning mb-0">
                                                            <li className="list-inline-item ">
                                                                <i className="mdi mdi-star"></i>
                                                            </li>{" "}
                                                            <li className="list-inline-item ">
                                                                <i className="mdi mdi-star"></i>
                                                            </li>{" "}
                                                            <li className="list-inline-item ">
                                                                <i className="mdi mdi-star"></i>
                                                            </li>{" "}
                                                            <li className="list-inline-item ">
                                                                <i className="mdi mdi-star"></i>
                                                            </li>{" "}
                                                            <li className="list-inline-item">
                                                                <i className="mdi mdi-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    ))}

                                    <Col xs={12} className="mt-4 pt-2">
                                        <Pagination listClassName="justify-content-center mb-0">
                                            <PaginationItem>
                                                <PaginationLink to="#">
                                                    <i className="mdi mdi-arrow-left"></i> Prev
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem active>
                                                <PaginationLink to="#">1</PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink to="#">2</PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink to="#">3</PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink to="#">
                                                    Next <i className="mdi mdi-arrow-right"></i>
                                                </PaginationLink>
                                            </PaginationItem>
                                        </Pagination>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Grid;