# Taste

## UI / Design

- Prefers UI elements to use their conventional, native-looking visual pattern rather than custom button/pill styling — e.g. tab strips should read as real tabs (full-height, clear bottom indicator, active-tab background) instead of chips that look like buttons. Confidence: 0.6
- Expects detail-level layout/ordering of controls inside a component to be intentional and tidy (icon placement, ordering of name/status/close affordances). Confidence: 0.5
- Wants hover/active feedback on interactive controls to use a consistent primary-color tint at reduced opacity (e.g. `bg-primary/10` + primary text) rather than neutral gray/surface tints, applied uniformly to all sibling controls in a component. Confidence: 0.5
- In a selected/active state, text and icons should render in the primary color (`text-primary`) rather than the default foreground color, so the whole active element reads as one primary-colored unit. Confidence: 0.55
- Prefers interactive elements to size themselves from their parent layout (e.g. inherit full row height via `items-stretch`/`h-full`) instead of hard-coded fixed dimensions, keeping adjacent controls the same shape. Confidence: 0.45
