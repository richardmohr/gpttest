# Composable Storefront Angular Compare Feature Concept

This document outlines a frontend-first approach for enabling product comparison of classification attributes in SAP Commerce Cloud Composable Storefront (Spartacus). It focuses on Angular UI composition, state handling, and OCC integration required to capture and render classification attributes across compared products.

## Goals and Scope
- **Scope:** Angular components, NgRx slice/facade, routing, OCC connectors/normalizers, caching, and UX behaviors for compare.
- **Out of scope:** Backoffice authoring, indexing configuration, and search services beyond the OCC contract.

## User Journey
1. Shopper taps **Add to Compare** on a PLP/PDP card for products that expose classification attributes.
2. A **compare tray** shows the selected items (with image/name/price) and allows removal or navigation to the dedicated **comparison page**.
3. The comparison page normalizes classification attribute groups and renders side-by-side values with an optional **difference-only** toggle.
4. Users can remove items, clear all, or navigate back to PLP/PDP while preserving the compare state (via storage + routing).

## Component Model
- **CompareToggleComponent:** Button used on PLP tiles and PDP that dispatches add/remove actions; label includes product name for accessibility.
- **CompareTrayComponent:** Mini summary anchored to header/footer; shows selected items, remove buttons, clear-all, and CTA to open comparison page.
- **ComparePageComponent:** Full comparison matrix view with sticky header controls (difference toggle, clear-all, add-more link) and product cards.
- **AttributeGroupAccordionComponent:** Renders grouped classification attributes; supports expand/collapse and pinning of key groups (e.g., Specs).
- **DifferenceToggleComponent:** Simple UI control that flips derived selector to hide rows where all values match.

## State Management
- Add a **compare** NgRx feature slice (or Spartacus facade) storing:
  - `codes: string[]` (max 4 items, persisted to session storage)
  - `products: { [code: string]: NormalizedProduct }` (classification-enriched product cache)
  - `ui: { showDifferencesOnly: boolean; expandedGroups: string[] }`
- Effects:
  - Fetch classification-enriched product details in parallel on add/load actions.
  - Handle errors per item with toast feedback and keep state consistent.
- Selectors:
  - `selectComparisonMatrix` merges groups/attributes into a stable order.
  - `selectDifferencesOnlyMatrix` filters rows where at least one product differs.
  - `selectMissingValues` flags products lacking classification data for inline notices.

## Routing and Guards
- Route: `/compare?codes=code1,code2,code3`.
- **Resolver/Guard:** Loads product data before activation; redirects to PLP if no codes resolved. Rehydrates codes from session storage when query params are missing.
- Deep links reconstruct compare state for sharing; language change triggers data refetch using current OCC language.

## Data Normalization
- Extend the Spartacus `ProductAdapter` or create a dedicated `CompareConnector` that calls `GET /products/{code}?fields=code,name,price,images(FULL),classifications(FULL)`.
- **Normalizer responsibilities:**
  - Map OCC `Feature` → `{ groupId, groupName, attributeId, attributeName, comparable, position }`.
  - Map OCC `FeatureValue` → `{ value, unit, comparable }`; support multi-valued lists, numbers, and text.
  - Group by `FeatureGroup` and sort by `position` to keep matrix columns/rows aligned.
  - Mark missing/unavailable attributes so the UI can render `—` placeholders.
- Memoize normalized products by code to avoid duplicate OCC calls when toggling between PLP/PDP/compare.

## OCC Integration Layer
- **Endpoint:** Prefer `GET /products/{code}` with a lightweight field set; fall back to `FULL` classifications when no projection is available.
- **Batch fetching:** Trigger parallel requests for selected codes; enforce max compare items (e.g., 4) before dispatching calls.
- **Error handling:**
  - On `404` or missing classifications, keep the product shell in state and surface an inline banner plus toast.
  - Skip failed items when building the matrix so the page still renders.
- **Caching/Performance:**
  - Use CDN-friendly media URLs from OCC responses; rely on HTTP caching for images.
  - Avoid refetching already cached codes unless language/site context changes.

## UX and Accessibility
- **Header cards:** Show image, name, price, and remove buttons with `aria-label` including product names.
- **Table semantics:** Use `<th scope="row">` for attribute names and `<th scope="col">` for product headers; connect with `aria-describedby` for screen readers.
- **Keyboard/focus:** Move focus into the tray when it opens; ensure remove buttons are reachable; maintain focus after item deletion.
- **Responsive layout:** Grid layout with sticky attribute column; collapse to stacked cards on mobile while preserving comparison labels.
- **Difference highlighting:** Toggle hides rows where all values match; visually mark differing cells.

## Behavior and Edge Cases
- Products without classifications show a notice and can be removed; they are excluded from the difference-only view.
- Mixed catalog versions include catalog/version parameters in OCC requests; gracefully handle unavailable codes.
- Enforce max items with inline feedback; do not dispatch fetches when the limit is reached.
- Sanitize HTML in feature values before rendering; no PII is stored in compare state.

## CMS and Slot Integration
- Register CMS components for compare toggle and tray so they can be placed on PLP, PDP, and header slots via SmartEdit.
- Expose an **Add more products** CTA that routes back to the last PLP context while preserving current codes.

## Testing Strategy
- **Unit tests:**
  - Normalizers converting OCC `Feature`/`FeatureValue` into grouped UI models.
  - Facade selectors for difference-only matrix and missing-value indicators.
  - Connector ensuring correct field-set usage and max-items enforcement.
- **Component tests:**
  - Tray rendering, add/remove/clear interactions, and max-limit messaging.
  - Comparison matrix showing `—` for missing values and respecting group/attribute order.
- **E2E (Cypress):**
  - PLP/PDP add-to-compare flow, tray persistence across navigation, deep-link `/compare?codes=...` hydration, and language switch refetch.

## Extensibility Hooks
- Allow custom renderers per attribute group (e.g., rich media for specs) via content projection or outlet tokens.
- Provide analytics events for add/remove/compare-view to feed personalization.
- Surface a facade method to prefetch comparison data for search result carousels.

## Integration Checklist
- OCC field set includes `classifications(FULL)` or an equivalent projection.
- CMS slots contain compare toggle/tray components on PLP, PDP, and header.
- Session storage persistence enabled for the compare slice; query param hydration tested.
- Accessibility validated with screen reader and keyboard-only navigation.
- Performance budget verified (max 4 items, parallel fetches, cached responses).
