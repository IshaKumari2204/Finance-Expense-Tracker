

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={styles.navbar}>
      <div style={styles.left}>
        <Link to="/" style={styles.link}>Home</Link>
        {user && (
          <>
            <Link to="/dashboard" style={styles.link}>Dashboard</Link>
            <Link to="/add-expense" style={styles.link}>Add Expense</Link>
          </>
        )}
      </div>
      <div style={styles.right}>
        {user ? (
          <button onClick={logout} style={styles.logoutButton}>Logout</button>
        ) : (
          <>
            <Link to="/signup" style={styles.link}>Signup</Link>
            <Link to="/login" style={styles.link}>Login</Link>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0d0f21", // Dark background
    padding: "10px 30px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
  },
  left: {
    display: "flex",
    gap: "20px",
  },
  right: {
    display: "flex",
    gap: "15px",
  },
  link: {
    color: "#a6a19e",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem",
    transition: "color 0.3s",
  },
  logoutButton: {
    backgroundColor: "#a6a19e",
    color: "#1f1f1f",
    border: "none",
    padding: "6px 14px",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background 0.3s",
  },
};

export default Navbar;

