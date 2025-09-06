import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ImageTemplate from "../../components/imagetemp/ImageTemplate";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";

export default function Headerbottom() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menus = [
    {
      title: "HOME FRAGRANCE",
      menuItems: [
        { id: 1, name: "Sandalwood, Lavender, Rose, Ocean", link: "" },
        { id: 2, name: "Rose-Sandalwood", link: "" },
        { id: 3, name: "Rose-Lavender-Pacific Blu", link: "" },
      ],
      imageUrls: [
        { path: "/pictures/pic1.jpg", alt: "home1" },
        { path: "/pictures/pic2.jpg", alt: "home2" },
      ],
    },
    {
      title: "BODY CARE",
      menuItems: [
        { id: 1, name: "Body Lotion", link: "" },
        { id: 2, name: "Shower Gel", link: "" },
        { id: 3, name: "Hand Cream", link: "" },
      ],
      imageUrls: [
        { path: "/pictures/pic1.jpg", alt: "home1" },
        { path: "/pictures/pic2.jpg", alt: "home2" },
      ],
    },
   
  ];

  // Window resize check for mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    headerBottomContainer: {
      
      display: "flex",
      justifyContent: "center",
      background: "#fff",
      borderTop: "1px solid #eaeaea",
      borderBottom: "1px solid #c8c5c5ff",
      position: "relative",
      zIndex: 100,
      padding: "10px 0",
      
    },
    ul: {
      listStyle: "none",
      display: isMobile ? "block" : "flex",
      gap: isMobile ? "10px" : "30px",
      margin: 0,
      padding: 0,
    },
    li: { position: "relative" },
    link: {
      textDecoration: "none",
      fontFamily: "Arial, sans-serif",
      fontSize: "14px",
      fontWeight: 600,
      letterSpacing: "1px",
      textTransform: "uppercase",
      color: "#000",
      display: "flex",
      padding: "10px",
      alignItems: "center",
      gap: "5px",
      transition: "color 0.3s ease",
    },
    dropdownContent: {
      position: isMobile ? "relative" : "absolute",
      top: isMobile ? "0" : "100%",
      left: isMobile ? "0" : "50%",
      transform: isMobile ? "none" : "translateX(-50%)",
      maxWidth: "1000px",
      width: isMobile ? "100%" : "90vw",
      backgroundColor: "white",
      boxShadow: "0 0px 8px rgba(0,0,0,0.1)",
      padding: "10px",
      zIndex: 1000,
      overflow: "hidden",
    },
    mobileMenuBtn: {
      position: "absolute",
      left: "10px",
      
      fontSize: "24px",
      cursor: "pointer",
      padding: "6px",
      height: "40px",
      width: "40px",
      borderRadius: "4px",
      color: "#000",
      background: "#fff",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    
      
    },
    mobileMenu: {
      position: "absolute",
      top: "50px",
      left: 0,
      width: "100%",
      background: "#fff",
      padding: "15px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    },
  };

  return (
    <div style={styles.headerBottomContainer}>
      {isMobile ? (
        <>
          {/* Mobile menu button */}
          {isMobileMenuOpen ? (
            <FiX style={styles.mobileMenuBtn} onClick={() => setIsMobileMenuOpen(false)} />
          ) : (
            <FiMenu style={styles.mobileMenuBtn} onClick={() => setIsMobileMenuOpen(true)} />
          )}

          {/* Mobile dropdown */}
          {isMobileMenuOpen && (
            <div style={styles.mobileMenu}>
              <ul style={styles.ul}>
                {menus.map((menu, index) => (
                  <li key={index} style={styles.li}>
                    <div
                      style={styles.link}
                      onClick={() => setActiveMenu(activeMenu === index ? null : index)}
                    >
                      {menu.title} <IoMdArrowDropdown />
                    </div>

                    {activeMenu === index && (
                      <div style={styles.dropdownContent}>
                        <ImageTemplate manuitem={menu.menuItems} imageurl={menu.imageUrls} />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      ) : (
        <>
          {/* Desktop menu */}
          <ul style={styles.ul}>
            {menus.map((menu, index) => (
              <li
                key={index}
                style={styles.li}
                onMouseEnter={() => setActiveMenu(index)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  to=""
                  style={styles.link}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#b48b57")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#000")}
                >
                  {menu.title} <IoMdArrowDropdown />
                </Link>
              </li>
            ))}
          </ul>

          {activeMenu !== null && (
            <div
              style={styles.dropdownContent}
              onMouseEnter={() => setActiveMenu(activeMenu)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <ImageTemplate
                manuitem={menus[activeMenu].menuItems}
                imageurl={menus[activeMenu].imageUrls}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
