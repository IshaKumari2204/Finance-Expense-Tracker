// models/Expense.js
import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Category: { type: String, required: true },
  amount: { type: Number, required: true },
  dueDate: { type: Date, required: true },
  Type: { type: String, enum: ["Expense", "Credit"], default: "Expense" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
}, {
  timestamps: true
});

const Expense = mongoose.model("Expense", expenseSchema);
export default Expense;