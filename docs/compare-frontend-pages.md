# Composable Storefront Compare UI (Angular-first) – Siemens Energy Mock

This static page (`/compare.html`) demonstrates the Angular component model described in the compare concept using mocked OCC data and Siemens Energy-inspired styling. The markup mirrors standard Spartacus components (toggle, tray, comparison matrix) so it can be used as a visual reference or as HTML prototypes during Angular implementation.

## Angular component mapping
- **CompareToggleComponent** (PLP/PDP): rendered as buttons on the product grid cards. In Angular, bind to a `CompareFacade` method and show `aria-pressed` state.
- **CompareTrayComponent:** persistent bottom tray that shows selected products, remove buttons, and quick actions (clear, open compare page). In Spartacus this would live in a CMS slot.
- **ComparePageComponent:** hosts the comparison matrix, sticky controls for difference-only toggle, clear-all, and add-more CTA.
- **AttributeGroupAccordionComponent:** modeled via grouped table rows; in Angular you can swap the table for accordions while keeping the grouping logic from the mock normalizer.
- **DifferenceToggleComponent:** simple switch flipping the derived selector to hide identical rows.

## Mock data + state
- Data is seeded from `mockProducts` with **classification groups** (`specs`, `mechanical`, `services`), preserving positional order to emulate OCC feature groups. It now includes two **Siemens Energy 3EL2 surge arrestor variants** (96 kV hybrid and 72.5 kV AC) with core electrical ratings, creepage, mounting, and standards to exercise difference-only rendering.
- State keeps `codes` and `showDifferencesOnly`; max items enforced at 4 like the Spartacus facade would.
- Difference-only rendering filters rows when all product values match.

## Styling and scripts
- `public/compare-styles.css` uses Siemens Energy-inspired gradients, iris/teal accents, and pill buttons to mimic their shop look-and-feel.
- `public/compare.js` handles tray and matrix rendering, mimicking Angular selectors/adapters with plain TypeScript-like logic for quick demos.

## How to run locally
1. Start the static server with `node server.js`.
2. Navigate to `http://localhost:3000/compare.html`.
3. Use **Add to compare** buttons to populate the tray and open the matrix.

## Integration hints
- Replace the mock array with calls to a Spartacus `CompareConnector` that requests `products?fields=code,name,price,images,classifications(FULL)`.
- Drop the DOM listeners in favor of Angular templates + RxJS selectors; reuse the grouping/difference logic from the mock when wiring selectors.
- Keep Siemens Energy color tokens in a global SCSS theme to match the rest of the storefront.
