const form = document.getElementById('search-form');
const cards = document.getElementById('cards');
const statusEl = document.getElementById('status');
const yearEl = document.getElementById('year');
yearEl.textContent = new Date().getFullYear();

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const query = formData.get('query');

  statusEl.textContent = 'Running OpenAI price scan…';
  cards.innerHTML = '';

  try {
    const response = await fetch('/api/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    });

    const data = await response.json();
    statusEl.textContent = `${data.summary || 'Ready'} (source: ${data.source})`;
    renderCards(data.products || []);
  } catch (error) {
    statusEl.textContent = 'Unable to load data. Showing cached UI only.';
    console.error(error);
  }
});

function renderCards(products) {
  if (!products.length) {
    cards.innerHTML = '<p>No products returned. Try a broader search.</p>';
    return;
  }

  cards.innerHTML = products
    .map((product) => {
      const specs = (product.specifications || [])
        .map((spec) => `<li>${spec}</li>`)
        .join('');
      return `
        <article class="card">
          <img src="${product.image_url}" alt="${product.name}" loading="lazy" />
          <div>
            <h3>${product.name}</h3>
            <p class="meta">${product.manufacturer} • SKU ${product.sku || 'TBD'}</p>
          </div>
          <div class="price">${formatter.format(product.price_usd || 0)} <span class="meta">/${
        product.unit_packaging || 'unit'
      }</span></div>
          <p class="meta">${product.availability || 'Availability TBD'} · ${
        product.lead_time || 'Lead time TBD'
      }</p>
          <ul class="spec-list">${specs}</ul>
          <p class="meta">${product.notes || ''}</p>
        </article>
      `;
    })
    .join('');
}
