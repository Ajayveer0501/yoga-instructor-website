import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic route to test if backend is running
app.get("/", (req, res) => {
  res.json({ message: "Yoga Instructor Backend is Running Successfully" });
});

// Example contact endpoint (optional)
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("New contact form submission:", { name, email, message });

  res.json({ success: true, message: "Form submitted successfully" });
});

// Render or local port handling
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
