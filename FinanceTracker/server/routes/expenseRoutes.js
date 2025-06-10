// routes/expenseRoutes.js
import express from "express";
const router = express.Router();
import authMiddleware from "../middleware/auth.js";
import Expense from "../models/Expense.js";

// POST: Add new expense
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { Category, amount, dueDate, Title, Type } = req.body;
// Log the request body and decoded user
    console.log("✅ BODY:", req.body);
    console.log("✅ USER:", req.user);

    const expense = new Expense({
      Category,
      amount,
      dueDate,
      Title,
      Type,
      user: req.user.userId,
    });

    const saved = await expense.save();
    res.status(201).json(saved);
    console.log("✅ Expense added:", saved);
  } catch (err) {
    res.status(500).json({ error: "Failed to add expense" });
  }
});

//Get all expenses of logged in user
router.get("/", authMiddleware, async (req, res) => {
  try {

const query = { user: req.user.userId };

if (req.query.type) {
  query.Type = req.query.type;
}

if (req.query.start || req.query.end) {
  query.dueDate = {};
  if (req.query.start) query.dueDate.$gte = new Date(req.query.start);
  if (req.query.end) query.dueDate.$lte = new Date(req.query.end);
}

const expenses = await Expense.find(query).sort({ createdAt: -1 });



    //const expenses = await Expense.find({ user: req.user.userId }).sort({ createdAt: -1 });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch expenses" });
  }
});

router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const updated = await Expense.findOneAndUpdate(
      { _id: req.params.id, user: req.user.userId },
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update expense" });
  }
});
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await Expense.findOneAndDelete({
      _id: req.params.id,
      user: req.user.userId,
    });
    res.json({ message: "Expense deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete expense" });
  }
});

export default router;
