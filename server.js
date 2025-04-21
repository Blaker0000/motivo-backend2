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
      mobePlan: ["Mobilize crew", "Load equipment", "Pre-check"],
      holdPoints: ["Permit signoff", "Vac check"],
      demobePlan: ["Clean site", "Packout"]
    };
  } else if (command.includes('predict')) {
    response = {
      type: "maintenance_report",
      equipment: "JetTrailer-03",
      overdue: "142 hours",
      status: "Recommended for service"
    };
  } else if (command.includes('revise')) {
    response = {
      sop: "Confined Space Entry",
      updatedBy: "AI",
      status: "Draft revision logged"
    };
  } else {
    response = { message: "Unknown command." };
  }

  res.json(response);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`✅ Backend running on port ${port}`));
