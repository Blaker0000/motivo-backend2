const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chatbot', (req, res) => {
  const { command } = req.body;
  if (!command) return res.status(400).json({ error: "Missing command." });

  let response;

  if (command.includes('generate')) {
    response = {
      type: "work_plan",
      mobePlan: ["Mobilize", "Safety Brief"],
      holdPoints: ["Permit Review"],
      demobePlan: ["Clean Site"]
    };
  } else {
    response = { message: "Unknown command." };
  }

  res.json(response);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`✅ Motivo backend running on port ${port}`));