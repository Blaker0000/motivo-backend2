app.post('/api/chatbot', (req, res) => {
  const { command } = req.body;
  if (!command) return res.status(400).json({ error: "Missing command." });

  let response = {};

  if (command.includes('generate')) {
    response = {
      type: "work_plan",
      mobePlan: ["Mobilize", "Load", "Safety Brief"],
      holdPoints: ["Permit Review"],
      demobePlan: ["Clean Site"]
    };
  } else {
    response = { message: "Unknown command." };
  }

  res.json(response);
});
