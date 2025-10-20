// Configuration
let config = {
    hoverScale: 1.8,
    transitionSpeed: 300,
    gradientRange: 3,
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
        item.dataset.index = i;
        itemsList.appendChild(item);
    }
    
    attachHoverListeners();
}

// Attach hover listeners to items
function attachHoverListeners() {
    const items = document.querySelectorAll('.item');
    
    items.forEach((item, index) => {
        item.addEventListener('mouseenter', () => handleItemHover(index));
        item.addEventListener('mouseleave', () => handleItemLeave());
    });
}

// Handle item hover
function handleItemHover(hoveredIndex) {
    const items = document.querySelectorAll('.item');
    
    items.forEach((item, index) => {
        const distance = Math.abs(index - hoveredIndex);
        let scale = 1;
        
        if (distance === 0) {
            // The hovered item
            scale = config.hoverScale;
        } else if (distance <= config.gradientRange) {
            // Items within gradient range
            // Calculate scale with exponential decay for smoother gradient
            const factor = 1 - (distance / (config.gradientRange + 1));
            scale = 1 + (config.hoverScale - 1) * Math.pow(factor, 1.5);
        }
        
        item.style.transform = `scale(${scale})`;
        item.style.transition = `transform ${config.transitionSpeed}ms ease`;
    });
}

// Handle item leave
function handleItemLeave() {
    const items = document.querySelectorAll('.item');
    
    items.forEach(item => {
        item.style.transform = 'scale(1)';
    });
}

// Update configuration from controls
function updateConfig() {
    config.hoverScale = parseFloat(document.getElementById('hoverScale').value);
    config.transitionSpeed = parseInt(document.getElementById('transitionSpeed').value);
    config.gradientRange = parseInt(document.getElementById('gradientRange').value);
    
    // Update CSS variables
    document.documentElement.style.setProperty('--hover-scale', config.hoverScale);
    document.documentElement.style.setProperty('--transition-speed', `${config.transitionSpeed}ms`);
    document.documentElement.style.setProperty('--gradient-range', config.gradientRange);
}

// Setup control listeners
function setupControls() {
    // Hover Scale
    const hoverScaleInput = document.getElementById('hoverScale');
    const hoverScaleValue = document.getElementById('hoverScaleValue');
    hoverScaleInput.addEventListener('input', (e) => {
        hoverScaleValue.textContent = e.target.value;
        updateConfig();
    });
    
    // Transition Speed
    const transitionSpeedInput = document.getElementById('transitionSpeed');
    const transitionSpeedValue = document.getElementById('transitionSpeedValue');
    transitionSpeedInput.addEventListener('input', (e) => {
        transitionSpeedValue.textContent = e.target.value;
        updateConfig();
    });
    
    // Gradient Range
    const gradientRangeInput = document.getElementById('gradientRange');
    const gradientRangeValue = document.getElementById('gradientRangeValue');
    gradientRangeInput.addEventListener('input', (e) => {
        gradientRangeValue.textContent = e.target.value;
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
