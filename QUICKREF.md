# Quick Reference / Référence Rapide

## CSS Variables Quick Reference

### Gradient Scale Effect
```css
:root {
    --hover-scale: 1.8;          /* Scale factor (1.2 - 2.5) */
    --gradient-range: 3;         /* Neighbors affected (1 - 5) */
    --transition-speed: 300ms;   /* Animation speed */
    --base-size: 60px;          /* Item size */
    --item-spacing: 10px;       /* Space between items */
    --primary-color: #4a90e2;   /* Primary color */
    --secondary-color: #50c878; /* Secondary color */
}
```

### Fade Effect
```css
:root {
    --fade-opacity: 0.3;        /* Non-hovered opacity (0 - 0.8) */
    --transition-speed: 300ms;
    --primary-color: #e74c3c;
    --secondary-color: #c0392b;
}
```

### Slide Effect
```css
:root {
    --slide-distance: 15px;     /* Vertical slide (5px - 30px) */
    --transition-speed: 300ms;
    --primary-color: #3498db;
    --secondary-color: #2980b9;
}
```

### Rotate Effect
```css
:root {
    --rotation-angle: 15deg;    /* Rotation (5deg - 360deg) */
    --transition-speed: 300ms;
    --primary-color: #9b59b6;
    --secondary-color: #8e44ad;
}
```

### Color Transition
```css
:root {
    --transition-speed: 300ms;
    --base-color-1: #16a085;    /* Base gradient start */
    --base-color-2: #1abc9c;    /* Base gradient end */
    --hover-color-1: #f39c12;   /* Hover gradient start */
    --hover-color-2: #f1c40f;   /* Hover gradient end */
}
```

### Combined Effects
```css
:root {
    --hover-scale: 1.8;
    --gradient-range: 3;
    --rotation-angle: 10deg;
    --transition-speed: 300ms;
    --base-color-1: #6c5ce7;
    --base-color-2: #a29bfe;
    --hover-color-1: #fd79a8;
    --hover-color-2: #fdcb6e;
}
```

## JavaScript Configuration

### Basic Config Object
```javascript
let config = {
    hoverScale: 1.8,          // Scale factor
    transitionSpeed: 300,     // Animation speed (ms)
    gradientRange: 3,         // Neighbors affected
    itemCount: 15,           // Number of items
    fadeOpacity: 0.3,        // For fade effect
    slideDistance: 15,       // For slide effect (px)
    rotationAngle: 15,       // For rotate effect (deg)
    enableColorTransition: true,  // For combined
    enableRotation: true     // For combined
};
```

### Updating Configuration
```javascript
// Update CSS variables
document.documentElement.style.setProperty('--hover-scale', '2.0');
document.documentElement.style.setProperty('--transition-speed', '400ms');

// Update config and reinitialize
config.itemCount = 20;
initItems();
```

## Common Code Snippets

### Custom Item Content
```javascript
function initItems() {
    const itemsList = document.getElementById('itemsList');
    itemsList.innerHTML = '';
    
    for (let i = 0; i < config.itemCount; i++) {
        const item = document.createElement('div');
        item.className = 'item';
        item.textContent = `Item ${i + 1}`;
        item.dataset.index = i;
        itemsList.appendChild(item);
    }
    
    attachHoverListeners();
}
```

### Add Click Handler
```javascript
item.addEventListener('click', () => {
    console.log(`Clicked item ${index}`);
    // Your code here
});
```

### Custom Gradient Calculation
```javascript
function handleItemHover(hoveredIndex) {
    const items = document.querySelectorAll('.item');
    
    items.forEach((item, index) => {
        const distance = Math.abs(index - hoveredIndex);
        let scale = 1;
        
        if (distance === 0) {
            scale = config.hoverScale;
        } else if (distance <= config.gradientRange) {
            const factor = 1 - (distance / (config.gradientRange + 1));
            scale = 1 + (config.hoverScale - 1) * Math.pow(factor, 1.5);
        }
        
        item.style.transform = `scale(${scale})`;
    });
}
```

## HTML Structure

### Basic Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="path/to/style.css">
</head>
<body>
    <div class="items-list" id="itemsList"></div>
    <script src="path/to/script.js"></script>
</body>
</html>
```

### With Custom Styling
```html
<style>
    :root {
        --hover-scale: 2.0;
        --primary-color: #3498db;
    }
    
    .items-list {
        padding: 20px;
    }
</style>
```

## Recommended Values

### Scale Factor
- **Subtle**: 1.2 - 1.4
- **Moderate**: 1.5 - 1.8 (default)
- **Dramatic**: 1.9 - 2.5

### Transition Speed
- **Fast**: 150ms - 250ms
- **Normal**: 300ms - 400ms (default)
- **Slow**: 450ms - 600ms

### Gradient Range
- **Narrow**: 1 - 2 items
- **Medium**: 3 - 4 items (default)
- **Wide**: 5+ items

### Item Size
- **Small**: 40px - 50px
- **Medium**: 60px - 80px (default)
- **Large**: 90px - 120px

## Color Schemes

### Professional
```css
--primary-color: #2c3e50;
--secondary-color: #34495e;
```

### Vibrant
```css
--primary-color: #e74c3c;
--secondary-color: #c0392b;
```

### Cool
```css
--primary-color: #3498db;
--secondary-color: #2980b9;
```

### Warm
```css
--primary-color: #f39c12;
--secondary-color: #e67e22;
```

### Nature
```css
--primary-color: #27ae60;
--secondary-color: #229954;
```

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| CSS Variables | ✅ | ✅ | ✅ | ✅ |
| Transform | ✅ | ✅ | ✅ | ✅ |
| Transitions | ✅ | ✅ | ✅ | ✅ |
| Flexbox | ✅ | ✅ | ✅ | ✅ |
| CSS Grid | ✅ | ✅ | ✅ | ✅ |

## Performance Tips

1. **Limit item count**: Keep under 30 items for best performance
2. **Use CSS transforms**: Better performance than changing position properties
3. **Avoid layout shifts**: Use fixed sizes when possible
4. **GPU acceleration**: Transforms automatically use GPU
5. **Debounce rapid changes**: If updating config frequently

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Items not appearing | Check if `itemsList` div exists |
| No animation | Verify CSS file is loaded |
| Laggy animation | Reduce `itemCount` or `transitionSpeed` |
| Colors not updating | Use `updateConfig()` after changes |
| Layout breaks on mobile | Check viewport meta tag |

---

**Need more help?** Check README.md or USAGE.md for detailed documentation.
