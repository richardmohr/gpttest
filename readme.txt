# SAP Commerce Cloud OCC Endpoint Helper

Use this repository to keep short how-to notes for SAP Commerce Cloud customization work.

- [Creating a New OCC Endpoint](docs/occ-endpoint-guide.md)
- [Composable Storefront Compare Feature (frontend concept)](docs/compare-frontend-concept.md)
- [Compare UI prototype (Siemens Energy-inspired)](docs/compare-frontend-pages.md)

## B2B Industrial Price Search Prototype

This prototype ships a static frontend and a lightweight Node.js backend-for-frontend that calls the OpenAI Chat Completions API and streams JSON data back to the UI.

### Quick start

1. (Optional) Update `config/custom.txt` with your OpenAI API key and preferred model.
2. Run `node server.js` (or `npm start`).
3. Open `http://localhost:3000` and run a query such as `robotic welding cell`.

If the API key is missing or the OpenAI call fails, the UI will render curated fallback data so that the interface remains functional for demos.

## Compare prototype quick start (now file:// friendly)

The compare prototype script no longer uses the `type="module"` loader, so you can open `public/compare.html` directly from your file system for a quick demo. For a closer match to Spartacus hosting (and to avoid mixed-content console warnings), run the lightweight Node server over HTTP:

1. Install Node 18+.
2. From the repo root, run `npm start` (or `node server.js`).
3. Open `http://localhost:3000/compare.html` to use the Siemens Energy compare mock with the same paths and caching headers a storefront would provide.

### Configuring the OpenAI key

The backend reads key/value pairs from `config/custom.txt`. Set your key in that file (or via the `OPENAI_API_KEY` environment variable) using the following format:

```
OPENAI_API_KEY=sk-your-secret-key
MODEL=gpt-4o-mini
```

> **Tip:** A `401 Unauthorized` message in the UI or server logs usually means the key is missing, expired, or spelled incorrectly. Update `config/custom.txt` (or re-export `OPENAI_API_KEY` in your shell) and restart `node server.js` after saving changes.
