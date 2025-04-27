import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#2e2e2e",  // Matte black background
        padding: "0 40px",
        height: "70px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: 1000,
        borderBottom: "3px solid #6a1b9a", // Purple border for an elegant look
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      {/* Logo or Brand Name */}
      <div style={{ fontSize: "24px", fontWeight: "700", color: "#6a1b9a" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#6a1b9a" }}>
          Admin Dashboard
        </Link>
      </div>

      {/* Navigation Links */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link
          to="/"
          className={pathname === "/" ? "active" : ""}
          style={{
            color: "#fff",
            textDecoration: "none",
            padding: "14px 20px",
            margin: "0 15px",
            fontSize: "16px",
            fontWeight: "500",
            transition: "all 0.3s ease",
            borderRadius: "30px",
            backgroundColor: pathname === "/" ? "#6a1b9a" : "transparent", // Purple for active
            textAlign: "center",
            textTransform: "uppercase",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          Add Product
        </Link>
        <Link
          to="/products"
          className={pathname === "/products" ? "active" : ""}
          style={{
            color: "#fff",
            textDecoration: "none",
            padding: "14px 20px",
            margin: "0 15px",
            fontSize: "16px",
            fontWeight: "500",
            transition: "all 0.3s ease",
            borderRadius: "30px",
            backgroundColor: pathname === "/products" ? "#6a1b9a" : "transparent",
            textAlign: "center",
            textTransform: "uppercase",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          Product List
        </Link>

        {/* Dropdown Menu for Admin Options */}
        <div
          style={{
            position: "relative",
            display: "inline-block",
            marginLeft: "30px",
          }}
        >
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            style={{
              color: "#fff",
              backgroundColor: "#2e2e2e",  // Matte black button background
              border: "2px solid #6a1b9a", // Purple border
              padding: "14px 20px",
              fontSize: "16px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "all 0.3s ease",
              textTransform: "uppercase",
              borderRadius: "30px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            Admin Settings
          </button>
          {isDropdownOpen && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                right: "0",
                backgroundColor: "#333", // Dark background for dropdown
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                width: "200px",
                zIndex: 1,
                padding: "10px 0",
              }}
            >
              <Link
                to="/settings"
                style={{
                  display: "block",
                  color: "#fff",
                  padding: "10px 20px",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "400",
                  transition: "background-color 0.3s",
                  borderRadius: "8px",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#6a1b9a")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "")}
              >
                Settings
              </Link>
              <Link
                to="/profile"
                style={{
                  display: "block",
                  color: "#fff",
                  padding: "10px 20px",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "400",
                  transition: "background-color 0.3s",
                  borderRadius: "8px",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#6a1b9a")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "")}
              >
                Profile
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
