
// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { AuthContext } from "../context/AuthContext";

// const AddExpense = () => {
//   const { token } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     Title: "",
//     Category: "",
//     amount: "",
//     dueDate: "",
//     Type: "Expense",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:8000/api/expenses",
//         form,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       console.log("✅ Expense Added:", res.data);

//       // Redirect to dashboard
//       navigate("/dashboard");
//     } catch (err) {
//       console.error("❌ Failed to add expense:", err.response?.data || err.message);
//       alert("Failed to add expense. Please try again.");
//     }
//   };

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h2>Add Expense</h2>
//       <form onSubmit={handleSubmit}>
//          <input
//           type="text"
//           name="Title"
//           placeholder="Title"
//           value={form.Title}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="Category"
//           placeholder="Category"
//           value={form.Category}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="number"
//           name="amount"
//           placeholder="Amount"
//           value={form.amount}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="date"
//           name="dueDate"
//           value={form.dueDate}
//           onChange={handleChange}
//           required
//         />
//         <select
//           name="Type"
//           value={form.Type}
//           onChange={handleChange}
//         >
//           <option value="Credit">Credit</option>
//           <option value="Expense">Expense</option>
//         </select>
//         <button type="submit">Add Expense</button>
//       </form>
//     </div>
//   );
// };

// export default AddExpense;
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const AddExpense = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    Title: "",
    Category: "",
    amount: "",
    dueDate: "",
    Type: "Expense",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/expenses",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("✅ Expense Added:", res.data);
      navigate("/dashboard");
    } catch (err) {
      console.error("❌ Failed to add expense:", err.response?.data || err.message);
      alert("Failed to add expense. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.heading}>Add Expense</h2>
        <input
          type="text"
          name="Title"
          placeholder="Title"
          value={form.Title}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="Category"
          placeholder="Category"
          value={form.Category}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="date"
          name="dueDate"
          value={form.dueDate}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <select
          name="Type"
          value={form.Type}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="Credit">Credit</option>
          <option value="Expense">Expense</option>
        </select>
        <button type="submit" style={styles.button}>Add Expense</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#0d1b21",
    color: "#ffcc00",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  },
  form: {
    backgroundColor: "#1a2a30",
    padding: "2rem",
    borderRadius: "10px",
    //boxShadow: "0 0 10px rgba(255, 204, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
    maxWidth: "400px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "1rem",
    fontSize: "1.8rem",
    color: "#908986",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #444",
    backgroundColor: "#0d1b21",
    color: "#908986",
  },
  select: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #444",
    backgroundColor: "#0d1b21",
    color: "#908986",
  },
  button: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    backgroundColor: "#908986",
    color: "#0d1b21",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s ease",
  },
};

export default AddExpense;
