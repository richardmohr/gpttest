import { createServer } from 'http';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.join(__dirname, 'public');
const CONFIG_PATH = path.join(__dirname, 'config', 'custom.txt');

async function readConfig() {
  try {
    const raw = await fs.readFile(CONFIG_PATH, 'utf-8');
    return raw
      .split(/\r?\n/)
      .filter((line) => line.trim() && !line.trim().startsWith('#'))
      .reduce((acc, line) => {
        const [key, ...rest] = line.split('=');
        if (key) {
          acc[key.trim()] = rest.join('=').trim();
        }
        return acc;
      }, {});
  } catch (error) {
    console.warn('Could not read config file:', error.message);
    return {};
  }
}

async function callOpenAI(query) {
  const config = await readConfig();
  const apiKey = process.env.OPENAI_API_KEY || config.OPENAI_API_KEY;
  const model = config.MODEL || process.env.OPENAI_MODEL || 'gpt-4o-mini';

  if (!apiKey) {
    return {
      source: 'local-fallback',
      summary: 'No API key configured. Displaying locally generated sample data.',
      products: sampleProducts(query)
    };
  }

  const body = {
    model,
    temperature: 0.4,
    response_format: { type: 'json_object' },
    messages: [
      {
        role: 'system',
        content:
          'You are a B2B sourcing analyst. Always respond with JSON: {"summary": string, "products": [ {"name": string, "manufacturer": string, "price_usd": number, "currency": "USD", "availability": string, "lead_time": string, "specifications": [string], "image_url": string, "unit_packaging": string, "sku": string, "notes": string} ] }'
      },
      {
        role: 'user',
        content: `Provide wholesale pricing intelligence for industrial optical sensors manufactured by OptiSense Technologies. Focus on the query: ${query}.`
      }
    ]
  };

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      let hint = '';
      if (response.status === 401) {
        hint =
          ' — verify OPENAI_API_KEY in config/custom.txt or the OPENAI_API_KEY environment variable is a valid key.';
      }
      throw new Error(`OpenAI request failed: ${response.status} ${response.statusText}${hint}`);
    }

    const data = await response.json();
    const message = data?.choices?.[0]?.message?.content;
    const parsed = JSON.parse(message);
    return { source: 'openai', ...parsed };
  } catch (error) {
    console.error('OpenAI call failed:', error.message);
    return {
      source: 'local-fallback',
      summary: 'OpenAI request failed. Displaying locally generated sample data.',
      products: sampleProducts(query),
      error: error.message
    };
  }
}

function sampleProducts(query) {
  const base = [
    {
      name: 'OptiSense LumenTrack Pro',
      manufacturer: 'OptiSense Technologies',
      price_usd: 1825,
      currency: 'USD',
      availability: 'In stock (450 units)',
      lead_time: 'Ships within 5 business days',
      specifications: [
        'Spectral sensitivity: 350-900 nm',
        'Modbus TCP & PROFINET ready',
        'IP67 industrial aluminum housing'
      ],
      image_url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80',
      unit_packaging: 'Box of 5 sensors',
      sku: 'OPT-LTP-450',
      notes: 'Best suited for robotic inspection cells'
    },
    {
      name: 'OptiSense ForgeView 2.0',
      manufacturer: 'OptiSense Technologies',
      price_usd: 2490,
      currency: 'USD',
      availability: 'Built-to-order',
      lead_time: '3 weeks including burn-in',
      specifications: [
        'Dual-channel fiber input',
        'Embedded ML anomaly alerts',
        'Operates -20°C to 70°C'
      ],
      image_url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80',
      unit_packaging: 'Single unit in anti-static crate',
      sku: 'OPT-FV2-1200',
      notes: 'Includes remote commissioning service'
    }
  ];

  if (!query) return base;
  return base.map((item) => ({ ...item, notes: `${item.notes} | Query focus: ${query}` }));
}

async function serveStatic(req, res, pathname) {
  let filePath = path.join(PUBLIC_DIR, pathname);
  if (pathname === '/' || pathname === '') {
    filePath = path.join(PUBLIC_DIR, 'index.html');
  }

  try {
    const data = await fs.readFile(filePath);
    const ext = path.extname(filePath);
    const type =
      ext === '.html'
        ? 'text/html'
        : ext === '.css'
        ? 'text/css'
        : ext === '.js'
        ? 'application/javascript'
        : 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type });
    res.end(data);
  } catch (error) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
  }
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === '/api/search' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', async () => {
      const { query } = JSON.parse(body || '{}');
      const result = await callOpenAI(query || 'industrial optical sensors');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result));
    });
    return;
  }

  await serveStatic(req, res, url.pathname);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
