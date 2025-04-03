# Home Assistant Components Loader

A utility package for dynamically loading Home Assistant UI components in custom cards and panels.

## Installation

```bash
npm install @kipk/load-ha-components
```

## Usage

```typescript
import { loadHaComponents, DEFAULT_HA_COMPONENTS } from '@kipk/load-ha-components';

// Use the default list of components
await loadHaComponents();

// Or specify your own list of components to load
await loadHaComponents([
  'ha-form',
  'ha-icon',
  'ha-selector'
]);

// Access the default components list
console.log(DEFAULT_HA_COMPONENTS);
```

## How It Works

This utility uses Home Assistant's internal loading mechanism to dynamically load UI components that may not be loaded by default in custom cards or panels. It attempts to load components through:

1. Home Assistant's panel resolver system
2. A fallback event-based approach

## Default Components

The following components are included in the default list:

- ha-form
- ha-icon
- ha-icon-button
- ha-selector
- ha-textfield
- ha-icon-picker
- ha-entity-picker
- ha-select
- ha-dialog
- ha-sortable
- ha-svg-icon
- ha-alert
- mwc-button

## License

MIT
