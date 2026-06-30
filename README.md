# FIFA World Cup 2026 — Bracket Challenge

A small app to track a bracket prediction challenge between two players (Robert and Azi) for the FIFA World Cup 2026.

## How to run it

### Requirements
- [Node.js](https://nodejs.org/) version 18 or higher (includes `npm`)

### Steps

1. **Install dependencies** (only needed the first time, or after pulling new changes that touch `package.json`):
   ```bash
   npm install
   ```

2. **Start the app**:
   ```bash
   npm run dev
   ```

3. Open the URL shown in the terminal (usually [http://localhost:5173](http://localhost:5173)) in your browser.

4. To stop the app, press `Ctrl+C` in the terminal.

### Using the app

- Each match shows input boxes for **Robert** and **Azi** to enter their predicted score.
- Predictions automatically lock 15 minutes before kickoff (shown in Rome time).
- Points are calculated automatically once a result is entered:
  - **5 pts** — exact score
  - **4 pts** — correct winner + correct goal difference
  - **3 pts** — correct winner only
  - **0 pts** — wrong winner
- To enter or edit match results, click **Admin** in the top right and enter the PIN `1234`. This unlocks a "Result" field on each match, even after predictions have locked.
- All predictions and results are saved automatically in your browser (`localStorage`), so they persist across reloads — but only on the same browser/device.

### Building for production

To create an optimized static build (e.g. to deploy somewhere):
```bash
npm run build
```
The output goes to the `dist/` folder. You can preview it locally with:
```bash
npm run preview
```
