// Configuration
let config = {
    fadeOpacity: 0.3,
    transitionSpeed: 300,
    itemCount: 15
};

// Initialize the items list
function initItems() {
    const itemsList = document.getElementById('itemsList');
    itemsList.innerHTML = '';
    
    for (let i = 0; i < config.itemCount; i++) {
        const item = document.createElement('div');
        item.className = 'item';
        item.textContent = i + 1;
        item.style.setProperty('--item-index', i);
        itemsList.appendChild(item);
    }
}

// Update configuration from controls
function updateConfig() {
    config.fadeOpacity = parseFloat(document.getElementById('fadeOpacity').value);
    config.transitionSpeed = parseInt(document.getElementById('transitionSpeed').value);
    
    // Update CSS variables
    document.documentElement.style.setProperty('--fade-opacity', config.fadeOpacity);
    document.documentElement.style.setProperty('--transition-speed', `${config.transitionSpeed}ms`);
}

// Setup control listeners
function setupControls() {
    // Fade Opacity
    const fadeOpacityInput = document.getElementById('fadeOpacity');
    const fadeOpacityValue = document.getElementById('fadeOpacityValue');
    fadeOpacityInput.addEventListener('input', (e) => {
        fadeOpacityValue.textContent = e.target.value;
        updateConfig();
    });
    
    // Transition Speed
    const transitionSpeedInput = document.getElementById('transitionSpeed');
    const transitionSpeedValue = document.getElementById('transitionSpeedValue');
    transitionSpeedInput.addEventListener('input', (e) => {
        transitionSpeedValue.textContent = e.target.value;
        updateConfig();
    });
    
    // Item Count
    const itemCountInput = document.getElementById('itemCount');
    const itemCountValue = document.getElementById('itemCountValue');
    itemCountInput.addEventListener('input', (e) => {
        itemCountValue.textContent = e.target.value;
        config.itemCount = parseInt(e.target.value);
        initItems();
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initItems();
    setupControls();
    updateConfig();
});
