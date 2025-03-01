import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import FeatherIcon from "feather-icons-react";


import RightSidebar from "../../../../components/Layout/RightSidebar";

//import images
import logoDark from "../../../../assets/images/logo-dark.png";
import logoLight from "../../../../assets/images/logo-light.png";
import { Offcanvas } from 'reactstrap';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [position, setPosition] = useState('right');
  
    const toggleRightDrawer = () => {
      setPosition('right');
      setOpen(!open);
    };
  
    const onDrawerClose = () => {
      setOpen(false);
    };
  
    const activateMenu = () => {
      var menuItems = document.getElementsByClassName("sub-menu-item");
      if (menuItems) {
        var matchingMenuItem = null;
        for (var idx = 0; idx < menuItems.length; idx++) {
          if (menuItems[idx].href === window.location.href) {
            matchingMenuItem = menuItems[idx];
          }
        }
        if (matchingMenuItem) {
          matchingMenuItem.classList.add('active');
          const immediateParent = matchingMenuItem.closest('li');
          if (immediateParent) {
            immediateParent.classList.add('active');
            const parent = immediateParent.closest(".parent-parent-menu-item");
            if (parent) {
              parent.classList.add("active");
            }
          }
        }
      }
    };
  
    useEffect(() => {
      window.scrollTo(0, 0);
      activateMenu();
      document.body.classList = "";
      window.addEventListener("scroll", scrollNavigation, true);
  
      return () => {
        window.removeEventListener("scroll", scrollNavigation, true);
      };
    }, []);
  
    const scrollNavigation = () => {
      var doc = document.documentElement;
      const navBar = document.getElementById("topnav");
      var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      if (navBar != null) {
        if (top > 80) {
          navBar.classList.add("nav-sticky");
        } else {
          navBar.classList.remove("nav-sticky");
        }
      }
    };
  
    const isToogleMenu = () => {
      const isToggle = document.getElementById("isToggle");
      isToggle.classList.toggle("open");
      var isOpen = document.getElementById('navigation');
      if (isOpen.style.display === "block") {
        isOpen.style.display = "none";
      } else {
        isOpen.style.display = "block";
      }
    };
  
    return (
      <React.Fragment>
        <header id="topnav" className="defaultscroll sticky">
          <div className="container">
            <Link className="logo" to="/">
              <img src={logoDark} height="24" className="logo-light-mode" alt="" />
              <img src={logoLight} height="24" className="logo-dark-mode" alt="" />
            </Link>
            <div className="menu-extras">
              <div className="menu-item">
                <Link to="#" className="navbar-toggle" id="isToggle" onClick={isToogleMenu}>
                  <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </Link>
              </div>
            </div>
            <ul className="buy-button list-inline mb-0">
              <li className="list-inline-item mb-0">
                <Link to="#" onClick={toggleRightDrawer} disabled={open}>
                  <div id="buyButton" className="btn btn-icon btn-pills btn-soft-primary settingbtn">
                    <FeatherIcon
                      icon="settings"
                      className="fea icon-sm"
                    />
                  </div>
                </Link>
              </li>{" "}
              <li className="list-inline-item ps-1 mb-0">
                <Link to="//1.envato.market/landrickreactjs" target="_blank">
                  <div id="buyButton" className="btn btn-icon btn-pills btn-primary shoppingbtn">
                    <FeatherIcon
                      icon="shopping-cart"
                      className="fea icon-sm"
                    />
                  </div>
                </Link>
              </li>
            </ul>
            <div id="navigation">
              <ul className="navigation-menu">
                {/* ... (Menu items) ... */}
                <li><Link to="/index-portfolio" className="sub-menu-item">Home</Link></li>
                <li className="has-submenu parent-parent-menu-item">
                    <Link to="#">Portfolio</Link><span className="menu-arrow"></span>
                    <ul className="submenu megamenu">
                        <li>
                            <ul>
                                <li className="megamenu-head">Modern Portfolio</li>
                                <li><Link to="/portfolio-modern-two" className="sub-menu-item">Two Column</Link></li>
                                <li><Link to="/portfolio-modern-three" className="sub-menu-item">Three Column</Link></li>
                                <li><Link to="/portfolio-modern-four" className="sub-menu-item">Four Column</Link></li>
                                <li><Link to="/portfolio-modern-five" className="sub-menu-item">Five Column</Link></li>
                                <li><Link to="/portfolio-modern-six" className="sub-menu-item">Six Column</Link></li>
                            </ul>
                        </li>

                        <li>
                            <ul>
                                <li className="megamenu-head">Classic Portfolio</li>
                                <li><Link to="/portfolio-classic-two" className="sub-menu-item">Two Column</Link></li>
                                <li><Link to="/portfolio-classic-three" className="sub-menu-item">Three Column</Link></li>
                                <li><Link to="/portfolio-classic-four" className="sub-menu-item">Four Column</Link></li>
                                <li><Link to="/portfolio-classic-five" className="sub-menu-item">Five Column</Link></li>
                                <li><Link to="/portfolio-classic-six" className="sub-menu-item">Six Column</Link></li>
                            </ul>
                        </li>

                        <li>
                            <ul>
                                <li className="megamenu-head">Grid Portfolio</li>
                                <li><Link to="/portfolio-grid-two" className="sub-menu-item">Two Column</Link></li>
                                <li><Link to="/portfolio-grid-three" className="sub-menu-item">Three Column</Link></li>
                                <li><Link to="/portfolio-grid-four" className="sub-menu-item">Four Column</Link></li>
                                <li><Link to="/portfolio-grid-five" className="sub-menu-item">Five Column</Link></li>
                                <li><Link to="/portfolio-grid-six" className="sub-menu-item">Six Column</Link></li>
                            </ul>
                        </li>

                        <li>
                    <ul>
                        <li className="megamenu-head">Masonry Portfolio</li>
                        <li><Link to="/portfolio-page-masonry-two" className="sub-menu-item">Two Column</Link></li>
                        <li><Link to="/portfolio-masonry-three" className="sub-menu-item">Three Column</Link></li>
                        <li><Link to="/portfolio-masonry-four" className="sub-menu-item">Four Column</Link></li>
                        <li><Link to="/portfolio-masonry-five" className="sub-menu-item">Five Column</Link></li>
                        <li><Link to="/portfolio-masonry-six" className="sub-menu-item">Six Column</Link></li>
                    </ul>
                </li>

                        <li>
                            <ul>
                                <li className="megamenu-head">Portfolio Detail</li>
                                <li><Link to="/portfolio-detail-one" className="sub-menu-item">Portfolio One</Link></li>
                                <li><Link to="/portfolio-detail-two" className="sub-menu-item">Portfolio Two</Link></li>
                                <li><Link to="/portfolio-detail-three" className="sub-menu-item">Portfolio Three</Link></li>
                                <li><Link to="/portfolio-detail-four" className="sub-menu-item">Portfolio Four</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li><Link to="/portfolio-about" className="sub-menu-item">About us</Link></li>

                <li><Link to="/portfolio-service" className="sub-menu-item">Services</Link></li>
              </ul>
            </div>
          </div>
        </header>
        <Offcanvas
          isOpen={open}
          position={position}
          direction="end"
          toggle={toggleRightDrawer}
        >
          <RightSidebar onClose={onDrawerClose} />
        </Offcanvas>
      </React.Fragment>
    );
  };
  
export default NavBar;
