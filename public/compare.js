const MAX_ITEMS = 4;

const mockProducts = [
  {
    code: '3EL2-096-HYB',
    name: '3EL2 Surge Arrestor 96 kV Hybrid',
    manufacturer: 'Siemens Energy',
    price: 12800,
    currency: 'EUR',
    availability: 'In stock (ships in 2 days)',
    leadTime: 'Factory routine test included',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80',
    groups: [
      {
        id: 'surge-core',
        name: 'Surge Arrestor Core',
        attributes: [
          { id: 'systemVoltage', name: 'System Voltage (Us)', value: '110 kV', comparable: true },
          { id: 'ratedVoltage', name: 'Rated Voltage (Ur)', value: '96 kV', comparable: true },
          { id: 'lineDischargeClass', name: 'Line Discharge Class', value: 'Class 3', comparable: true },
          { id: 'nominalDischarge', name: 'Nominal Discharge Current (In)', value: '10 kA', comparable: true },
          { id: 'residualVoltage', name: 'Residual Voltage @ In', value: '≤ 320 kV', comparable: true },
          { id: 'energyCapability', name: 'Energy Capability', value: '11 kJ/kV Ur', comparable: true }
        ]
      },
      {
        id: 'mechanical-env',
        name: 'Mechanical & Environmental',
        attributes: [
          { id: 'housing', name: 'Housing', value: 'Silicone polymer, hydrophobic', comparable: true },
          { id: 'creepage', name: 'Creepage Distance', value: '31 mm/kV', comparable: true },
          { id: 'mounting', name: 'Mounting', value: 'Live tank, vertical', comparable: true },
          { id: 'weight', name: 'Weight', value: '18 kg', comparable: true },
          { id: 'altitude', name: 'Altitude Rating', value: 'Up to 1800 m', comparable: true }
        ]
      },
      {
        id: 'services',
        name: 'Standards & Service',
        attributes: [
          { id: 'standard', name: 'Standards', value: 'IEC 60099-4 / IEEE C62.11', comparable: false },
          { id: 'monitoring', name: 'Monitoring', value: 'Counter + leakage sensor ready', comparable: false },
          { id: 'warranty', name: 'Warranty', value: '36 months', comparable: false }
        ]
      }
    ]
  },
  {
    code: '3EL2-072-AC',
    name: '3EL2 Surge Arrestor 72.5 kV AC',
    manufacturer: 'Siemens Energy',
    price: 10150,
    currency: 'EUR',
    availability: 'In stock (ships next day)',
    leadTime: 'Routine and type test data provided',
    image:
      'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=600&q=80',
    groups: [
      {
        id: 'surge-core',
        name: 'Surge Arrestor Core',
        attributes: [
          { id: 'systemVoltage', name: 'System Voltage (Us)', value: '72.5 kV', comparable: true },
          { id: 'ratedVoltage', name: 'Rated Voltage (Ur)', value: '60 kV', comparable: true },
          { id: 'lineDischargeClass', name: 'Line Discharge Class', value: 'Class 2', comparable: true },
          { id: 'nominalDischarge', name: 'Nominal Discharge Current (In)', value: '10 kA', comparable: true },
          { id: 'residualVoltage', name: 'Residual Voltage @ In', value: '≤ 210 kV', comparable: true },
          { id: 'energyCapability', name: 'Energy Capability', value: '8 kJ/kV Ur', comparable: true }
        ]
      },
      {
        id: 'mechanical-env',
        name: 'Mechanical & Environmental',
        attributes: [
          { id: 'housing', name: 'Housing', value: 'Si-polymer, pollution class IV ready', comparable: true },
          { id: 'creepage', name: 'Creepage Distance', value: '25 mm/kV', comparable: true },
          { id: 'mounting', name: 'Mounting', value: 'Pedestal, flexible connectors', comparable: true },
          { id: 'weight', name: 'Weight', value: '14 kg', comparable: true },
          { id: 'altitude', name: 'Altitude Rating', value: 'Up to 1500 m', comparable: true }
        ]
      },
      {
        id: 'services',
        name: 'Standards & Service',
        attributes: [
          { id: 'standard', name: 'Standards', value: 'IEC 60099-4 / IEEE C62.11', comparable: false },
          { id: 'monitoring', name: 'Monitoring', value: 'Counter optional', comparable: false },
          { id: 'warranty', name: 'Warranty', value: '30 months', comparable: false }
        ]
      }
    ]
  },
  {
    code: 'SE-EL-400',
    name: 'SIPROTEC Edge Line 400',
    manufacturer: 'Siemens Energy',
    price: 24250,
    currency: 'EUR',
    availability: 'In stock (ships in 3 days)',
    leadTime: 'Standard lead: 5 business days',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
    groups: [
      {
        id: 'specs',
        name: 'Electrical Specs',
        attributes: [
          { id: 'voltage', name: 'Voltage Range', value: '480V ±10%', comparable: true },
          { id: 'current', name: 'Rated Current', value: '80A', comparable: true },
          { id: 'efficiency', name: 'Efficiency', value: '97%', comparable: true }
        ]
      },
      {
        id: 'mechanical',
        name: 'Mechanical',
        attributes: [
          { id: 'housing', name: 'Housing', value: 'IP65 anodized aluminum', comparable: true },
          { id: 'dimensions', name: 'Dimensions', value: '420×190×130 mm', comparable: true }
        ]
      },
      {
        id: 'services',
        name: 'Services',
        attributes: [
          { id: 'warranty', name: 'Warranty', value: '36 months', comparable: false },
          { id: 'commissioning', name: 'Commissioning', value: 'Remote + onsite', comparable: false }
        ]
      }
    ]
  },
  {
    code: 'SE-TR-820',
    name: 'Sensformer TrafoGuard 820',
    manufacturer: 'Siemens Energy',
    price: 28810,
    currency: 'EUR',
    availability: 'Built-to-order',
    leadTime: '4–6 weeks including factory test',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    groups: [
      {
        id: 'specs',
        name: 'Electrical Specs',
        attributes: [
          { id: 'voltage', name: 'Voltage Range', value: '400/690V', comparable: true },
          { id: 'current', name: 'Rated Current', value: '100A', comparable: true },
          { id: 'efficiency', name: 'Efficiency', value: '96%', comparable: true }
        ]
      },
      {
        id: 'mechanical',
        name: 'Mechanical',
        attributes: [
          { id: 'housing', name: 'Housing', value: 'IP66 powder-coated steel', comparable: true },
          { id: 'dimensions', name: 'Dimensions', value: '460×205×160 mm', comparable: true },
          { id: 'noise', name: 'Acoustic Noise', value: '48 dB(A)', comparable: true }
        ]
      },
      {
        id: 'services',
        name: 'Services',
        attributes: [
          { id: 'warranty', name: 'Warranty', value: '24 months', comparable: false }
        ]
      }
    ]
  },
  {
    code: 'SE-HV-250',
    name: 'Blue GIS HV 250',
    manufacturer: 'Siemens Energy',
    price: 32740,
    currency: 'EUR',
    availability: 'Low stock (12 units)',
    leadTime: 'Ships in 7 business days',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
    groups: [
      {
        id: 'specs',
        name: 'Electrical Specs',
        attributes: [
          { id: 'voltage', name: 'Voltage Range', value: '250 kV', comparable: true },
          { id: 'current', name: 'Rated Current', value: '125A', comparable: true },
          { id: 'efficiency', name: 'Efficiency', value: '99%', comparable: true }
        ]
      },
      {
        id: 'mechanical',
        name: 'Mechanical',
        attributes: [
          { id: 'housing', name: 'Housing', value: 'SF6-free sealed cabinet', comparable: true },
          { id: 'dimensions', name: 'Dimensions', value: '510×260×170 mm', comparable: true },
          { id: 'noise', name: 'Acoustic Noise', value: '41 dB(A)', comparable: true }
        ]
      },
      {
        id: 'services',
        name: 'Services',
        attributes: [
          { id: 'warranty', name: 'Warranty', value: '48 months', comparable: false },
          { id: 'commissioning', name: 'Commissioning', value: 'Remote only', comparable: false }
        ]
      }
    ]
  },
  {
    code: 'SE-HYB-120',
    name: 'HyGrid Converter 120',
    manufacturer: 'Siemens Energy',
    price: 18990,
    currency: 'EUR',
    availability: 'In stock (24 units)',
    leadTime: 'Ships in 3 business days',
    image:
      'https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=600&q=80',
    groups: [
      {
        id: 'specs',
        name: 'Electrical Specs',
        attributes: [
          { id: 'voltage', name: 'Voltage Range', value: '1200V DC', comparable: true },
          { id: 'current', name: 'Rated Current', value: '60A', comparable: true },
          { id: 'efficiency', name: 'Efficiency', value: '95%', comparable: true }
        ]
      },
      {
        id: 'mechanical',
        name: 'Mechanical',
        attributes: [
          { id: 'housing', name: 'Housing', value: 'NEMA 4X stainless steel', comparable: true },
          { id: 'dimensions', name: 'Dimensions', value: '300×160×120 mm', comparable: true }
        ]
      }
    ]
  }
];

const state = {
  codes: new Set(mockProducts.slice(0, 2).map((p) => p.code)),
  showDifferencesOnly: false
};

const productGrid = document.getElementById('product-grid');
const tray = document.getElementById('compare-tray');
const matrix = document.getElementById('compare-matrix');
const diffToggle = document.getElementById('diff-toggle');
const clearAllBtn = document.getElementById('clear-all');
const emptyState = document.getElementById('empty-state');

const currency = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });

diffToggle.addEventListener('change', (event) => {
  state.showDifferencesOnly = event.target.checked;
  renderMatrix();
});

clearAllBtn.addEventListener('click', () => {
  state.codes.clear();
  renderAll();
});

function renderProductGrid() {
  productGrid.innerHTML = mockProducts
    .map((product) => {
      const isSelected = state.codes.has(product.code);
      return `
        <article class="card" aria-label="${product.name}">
          <p class="badge">${product.manufacturer}</p>
          <h3>${product.name}</h3>
          <p class="meta">Code ${product.code}</p>
          <p class="price">${currency.format(product.price)}</p>
          <p class="meta">${product.availability} · ${product.leadTime}</p>
          <button class="${isSelected ? 'is-active' : ''}" aria-pressed="${isSelected}" data-code="${
        product.code
      }">${isSelected ? 'Remove from compare' : 'Add to compare'}</button>
        </article>
      `;
    })
    .join('');

  productGrid.querySelectorAll('button[data-code]').forEach((btn) => {
    btn.addEventListener('click', () => toggleCode(btn.dataset.code));
  });
}

function toggleCode(code) {
  if (state.codes.has(code)) {
    state.codes.delete(code);
  } else if (state.codes.size < MAX_ITEMS) {
    state.codes.add(code);
  } else {
    alert(`Max ${MAX_ITEMS} items allowed`);
  }
  renderAll();
}

function renderTray() {
  const items = Array.from(state.codes).map((code) => mockProducts.find((p) => p.code === code));
  tray.innerHTML = `
    <div class="tray__items">
      ${
        items.length
          ? items
              .map(
                (item) => `
            <div class="tray__item">
              <img src="${item.image}" alt="${item.name}" />
              <div>
                <strong>${item.name}</strong>
                <p class="meta">${item.code}</p>
              </div>
              <button aria-label="Remove ${item.name}" data-code="${item.code}">×</button>
            </div>
          `
              )
              .join('')
          : '<p class="muted">No items selected</p>'
      }
    </div>
    <div class="tray__actions">
      <button class="ghost" id="tray-clear">Clear</button>
      <a class="pill" href="#compare">Open compare (${state.codes.size}/${MAX_ITEMS})</a>
    </div>
  `;

  tray.querySelectorAll('button[data-code]').forEach((btn) =>
    btn.addEventListener('click', () => toggleCode(btn.dataset.code))
  );

  const clearBtn = tray.querySelector('#tray-clear');
  clearBtn?.addEventListener('click', () => {
    state.codes.clear();
    renderAll();
  });
}

function renderMatrix() {
  const items = Array.from(state.codes)
    .map((code) => mockProducts.find((p) => p.code === code))
    .filter(Boolean);

  emptyState.hidden = items.length > 0;
  matrix.innerHTML = '';
  if (!items.length) return;

  const groups = mergeGroups(items);
  const header = `
    <thead>
      <tr>
        <th class="attribute">Attribute</th>
        ${items
          .map(
            (item) => `
              <th scope="col">
                <div>${item.name}</div>
                <p class="meta">${item.code}</p>
              </th>`
          )
          .join('')}
      </tr>
    </thead>
  `;

  const body = groups
    .map((group) => {
      const rows = group.attributes
        .map((attr) => {
          const values = items.map((item) => lookupValue(item, attr.id));
          const allSame = values.every((val) => val === values[0]);
          if (state.showDifferencesOnly && allSame) return '';
          return `
            <tr class="${!allSame ? 'diff' : ''}">
              <th class="attribute" scope="row">${attr.name}</th>
              ${values.map((val) => `<td>${val || '—'}</td>`).join('')}
            </tr>
          `;
        })
        .join('');
      return `
        <tr class="group-row"><th colspan="${items.length + 1}">${group.name}</th></tr>
        ${rows}
      `;
    })
    .join('');

  matrix.innerHTML = `<table class="table" aria-describedby="compare">${header}<tbody>${body}</tbody></table>`;
}

function mergeGroups(items) {
  const groupMap = new Map();
  items.forEach((item) => {
    item.groups.forEach((group, groupIndex) => {
      if (!groupMap.has(group.id)) {
        groupMap.set(group.id, {
          id: group.id,
          name: group.name,
          position: groupIndex,
          attributes: []
        });
      }
      group.attributes.forEach((attr, attrIndex) => {
        const key = `${group.id}:${attr.id}`;
        const existing = groupMap.get(group.id).attributes.find((a) => a.key === key);
        if (!existing) {
          groupMap.get(group.id).attributes.push({
            key,
            id: attr.id,
            name: attr.name,
            position: attrIndex
          });
        }
      });
    });
  });
  return Array.from(groupMap.values())
    .map((group) => ({
      ...group,
      attributes: group.attributes.sort((a, b) => a.position - b.position)
    }))
    .sort((a, b) => a.position - b.position);
}

function lookupValue(item, attributeId) {
  for (const group of item.groups) {
    const found = group.attributes.find((attr) => attr.id === attributeId);
    if (found) return found.value;
  }
  return null;
}

function renderAll() {
  renderProductGrid();
  renderTray();
  renderMatrix();
}

renderAll();
