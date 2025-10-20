// Configuration
let config = {
    slideDistance: 15,
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
    config.slideDistance = parseInt(document.getElementById('slideDistance').value);
    config.transitionSpeed = parseInt(document.getElementById('transitionSpeed').value);
    
    // Update CSS variables
    document.documentElement.style.setProperty('--slide-distance', `${config.slideDistance}px`);
    document.documentElement.style.setProperty('--transition-speed', `${config.transitionSpeed}ms`);
}

// Setup control listeners
function setupControls() {
    // Slide Distance
    const slideDistanceInput = document.getElementById('slideDistance');
    const slideDistanceValue = document.getElementById('slideDistanceValue');
    slideDistanceInput.addEventListener('input', (e) => {
        slideDistanceValue.textContent = e.target.value;
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
