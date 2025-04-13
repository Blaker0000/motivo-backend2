
# Motivo Backend 2

## Setup

1. Install dependencies

```bash
npm install
```

2. Create a `.env` file with the following:

```
SMARTSHEET_API_KEY=your-api-key
SMARTSHEET_SOP_SHEET_ID=your-sheet-id
```

3. Start the server

```bash
npm start
```

## Endpoint

- `GET /api/sops` — Fetches SOP data from SmartSheet
