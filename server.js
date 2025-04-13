
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/sops', async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.smartsheet.com/2.0/sheets/${process.env.SMARTSHEET_SOP_SHEET_ID}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.SMARTSHEET_API_KEY}`
        }
      }
    );
    const rows = response.data.rows.map(row => {
      const rowData = {};
      row.cells.forEach(cell => {
        if (cell.columnId && cell.displayValue !== undefined) {
          rowData[cell.columnId] = cell.displayValue;
        }
      });
      return rowData;
    });
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch SOPs' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
