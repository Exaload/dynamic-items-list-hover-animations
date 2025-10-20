// Configuration
let config = {
    hoverScale: 1.8,
    gradientRange: 3,
    rotationAngle: 10,
    transitionSpeed: 300,
    itemCount: 15,
    enableColorTransition: true,
    enableRotation: true
};

// Initialize the items list
function initItems() {
    const itemsList = document.getElementById('itemsList');
    itemsList.innerHTML = '';
    
    for (let i = 0; i < config.itemCount; i++) {
        const item = document.createElement('div');
        item.className = 'item';
        if (config.enableColorTransition) {
            item.classList.add('color-transition');
        }
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
        let rotation = 0;
        
        if (distance === 0) {
            // The hovered item
            scale = config.hoverScale;
            rotation = config.enableRotation ? config.rotationAngle : 0;
        } else if (distance <= config.gradientRange) {
            // Items within gradient range
            const factor = 1 - (distance / (config.gradientRange + 1));
            scale = 1 + (config.hoverScale - 1) * Math.pow(factor, 1.5);
            rotation = config.enableRotation ? config.rotationAngle * Math.pow(factor, 2) : 0;
        }
        
        let transform = `scale(${scale})`;
        if (rotation !== 0) {
            transform += ` rotate(${rotation}deg)`;
        }
        
        item.style.transform = transform;
        item.style.transition = `transform ${config.transitionSpeed}ms ease, ` +
                                `box-shadow ${config.transitionSpeed}ms ease, ` +
                                `background ${config.transitionSpeed}ms ease`;
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
    config.gradientRange = parseInt(document.getElementById('gradientRange').value);
    config.rotationAngle = parseInt(document.getElementById('rotationAngle').value);
    config.transitionSpeed = parseInt(document.getElementById('transitionSpeed').value);
    config.enableColorTransition = document.getElementById('enableColorTransition').checked;
    config.enableRotation = document.getElementById('enableRotation').checked;
    
    // Update CSS variables
    document.documentElement.style.setProperty('--hover-scale', config.hoverScale);
    document.documentElement.style.setProperty('--gradient-range', config.gradientRange);
    document.documentElement.style.setProperty('--rotation-angle', `${config.rotationAngle}deg`);
    document.documentElement.style.setProperty('--transition-speed', `${config.transitionSpeed}ms`);
    
    // Re-initialize items if color transition changed
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        if (config.enableColorTransition) {
            item.classList.add('color-transition');
        } else {
            item.classList.remove('color-transition');
        }
    });
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
    
    // Gradient Range
    const gradientRangeInput = document.getElementById('gradientRange');
    const gradientRangeValue = document.getElementById('gradientRangeValue');
    gradientRangeInput.addEventListener('input', (e) => {
        gradientRangeValue.textContent = e.target.value;
        updateConfig();
    });
    
    // Rotation Angle
    const rotationAngleInput = document.getElementById('rotationAngle');
    const rotationAngleValue = document.getElementById('rotationAngleValue');
    rotationAngleInput.addEventListener('input', (e) => {
        rotationAngleValue.textContent = e.target.value;
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
    
    // Color Transition Toggle
    const enableColorTransition = document.getElementById('enableColorTransition');
    enableColorTransition.addEventListener('change', updateConfig);
    
    // Rotation Toggle
    const enableRotation = document.getElementById('enableRotation');
    enableRotation.addEventListener('change', updateConfig);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initItems();
    setupControls();
    updateConfig();
});
