import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}> Expense Tracking - Made Simple!</h1>
      <p style={styles.subtitle}>
       <p>Track your spending,</p><p>Analyze trends,</p> <p>& Take control of your finances.</p>
      </p>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "#0d1b21",
    color: "#ffcc00",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "0 20px",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#a6a19e",
    maxWidth: "600px",
    lineHeight: "1.6",
  },
};

export default Home;
