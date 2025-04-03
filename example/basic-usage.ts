import { loadHaComponents } from '@kipk/load-ha-components';

// Example 1: Load default components
async function loadDefaultComponents() {
  try {
    await loadHaComponents();
    console.log('Default Home Assistant components loaded successfully');
  } catch (error) {
    console.error('Failed to load default components:', error);
  }
}

// Example 2: Load custom component list
async function loadCustomComponents() {
  try {
    const myComponents = [
      'ha-form',
      'ha-icon',
      'ha-selector',
      'ha-textfield'
    ];
    
    await loadHaComponents(myComponents);
    console.log('Custom component list loaded successfully');
  } catch (error) {
    console.error('Failed to load custom components:', error);
  }
}

// Example usage in a custom card
class MyCustomCard extends HTMLElement {
  async connectedCallback() {
    // Load required components before rendering
    await loadHaComponents(['ha-form', 'ha-icon-button']);
    
    // Now it's safe to use these components
    this.innerHTML = `
      <div>
        <ha-icon-button icon="mdi:refresh"></ha-icon-button>
        <ha-form .schema=${[/* your schema */]}></ha-form>
      </div>
    `;
  }
}

// Register the custom element
customElements.define('my-custom-card', MyCustomCard);
