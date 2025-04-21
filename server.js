const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ CHATBOT COMMAND ROUTE
app.post('/api/chatbot', (req, res) => {
  const { command } = req.body;

  if (!command) {
    return res.status(400).json({ error: "Missing command." });
  }

  let response;

  if (command.includes('generate')) {
    response = {
      type: "work_plan",
      mobePlan: ["Mobilize crew", "Load dye & flow monitor", "Safety briefing"],
      holdPoints: ["Permit confirmed", "Vac check-in"],
      demobePlan: ["Site cleanup", "Signout"],
      assignedTo: "Kaleb",
      exportable: true
    };
  } else if (command.includes('predict')) {
    response = {
      type: "maintenance_report",
      equipment: "VacTruck-07",
      overdueBy: "147 hours",
      status: "Recommended for service",
      notify: "Kaleb"
    };
  } else if (command.includes('revise')) {
    response = {
      type: "sop_revision",
      sop: "Confined Space Entry",
      updatedBy: "AI",
      status: "Revision draft generated",
      escalatedTo: "Ethan"
    };
  } else {
    response = {
      message: "❌ Unknown command. Try: /generate work plan, /predict maintenance, or /revise sop"
    };
  }

  return res.json(response);
});

// ✅ SERVER STATUS ROUTE (optional)
app.get('/', (req, res) => {
  res.send('✅ Motivo AI Backend is running. Try POST /api/chatbot');
});

app.listen(port, () => {
  console.log(`✅ Motivo AI Backend is live on port ${port}`);
});
