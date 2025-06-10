
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {

  const [filterType, setFilterType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");


  const [expenses, setExpenses] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editData, setEditData] = useState({});

  const token = localStorage.getItem("token");

  const fetchExpenses = async () => {
    try {

      const queryParams = new URLSearchParams();
      if (filterType) queryParams.append("type", filterType);
      if (startDate) queryParams.append("start", startDate);
      if (endDate) queryParams.append("end", endDate);

      const res = await axios.get(`http://localhost:8000/api/expenses?${queryParams.toString()}`, {

        //const res = await axios.get("http://localhost:8000/api/expenses", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setExpenses(res.data);
    } catch (err) {
      console.error("Fetch failed", err);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const deleteExpense = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/expenses/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchExpenses(); // Refresh list
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const handleEditClick = (expense) => {
    setEditing(expense._id);
    setEditData({
      Title: expense.Title,
      Category: expense.Category,
      amount: expense.amount,
      dueDate: expense.dueDate.slice(0, 10),
      Type: expense.Type,
    });
  };

  const saveEdit = async (id) => {
    try {
      await axios.put(
        `http://localhost:8000/api/expenses/${id}`,
        editData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setEditing(null);
      fetchExpenses();
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">📋 Dashboard</h2>

      <div className="filter-container">
        <h3>🔎 Filter Expenses</h3>
        <label>Type: </label>
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="">All</option>
          <option value="Expense">Expense</option>
          <option value="Credit">Credit</option>
        </select>

        <label>Start Date: </label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />

        <label>End Date: </label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />

        <button onClick={fetchExpenses}>Apply Filter</button>
      </div>
      <h3 className="expense-heading"> Expenses List</h3>



      <div className="expense-list">
        <div className="expense-header">
          <span>Date</span>
          <span>Title</span>
          <span>Amount</span>
          <span>Type</span>
          <span>Category</span>
          <span>Actions</span>
        </div>

        {expenses.map((expense) => (
          <div className="expense-row" key={expense._id}>
            {editing === expense._id ? (
              <>
                <span>
                  <input
                    type="date"
                    value={editData.dueDate}
                    onChange={(e) =>
                      setEditData({ ...editData, dueDate: e.target.value })
                    }
                  />
                </span>
                <span>
                  <input
                    type="text"
                    value={editData.Title}
                    onChange={(e) =>
                      setEditData({ ...editData, Title: e.target.value })
                    }
                  />
                </span>
                <span>
                  <input
                    type="number"
                    value={editData.amount}
                    onChange={(e) =>
                      setEditData({ ...editData, amount: e.target.value })
                    }
                  />
                </span>
                <span>
                  <select
                    value={editData.Type}
                    onChange={(e) =>
                      setEditData({ ...editData, Type: e.target.value })
                    }
                  >
                    <option value="Expense">Expense</option>
                    <option value="Credit">Credit</option>
                  </select>
                </span>
                <span>
                  <input
                    type="text"
                    value={editData.Category}
                    onChange={(e) =>
                      setEditData({ ...editData, Category: e.target.value })
                    }
                  />
                </span>
                <span>
                  <button onClick={() => saveEdit(expense._id)}>💾</button>
                  <button onClick={() => setEditing(null)}>❌</button>
                </span>
              </>
            ) : (
              <>
                <span>{new Date(expense.dueDate).toLocaleDateString()}</span>
                <span>{expense.Title}</span>
                <span>₹{expense.amount}</span>
                <span>{expense.Type}</span>
                <span>{expense.Category}</span>
                <span>
                  <button onClick={() => handleEditClick(expense)}>✏️</button>
                  <button onClick={() => deleteExpense(expense._id)}>🗑</button>
                </span>
              </>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Dashboard;

