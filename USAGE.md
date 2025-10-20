# Usage Guide / Guide d'Utilisation

## English

### Quick Integration

#### Step 1: Choose Your Animation

Navigate to the animation folder you want to use:
- `gradient-scale/` - Main featured animation with size gradient
- `fade-effect/` - Opacity-based focus effect
- `slide-effect/` - Vertical slide animation
- `rotate-effect/` - Rotation animation
- `color-transition/` - Color change animation
- `combined/` - Multiple effects together

#### Step 2: Copy Files

Copy the three files from your chosen animation folder:
- `index.html` (for reference)
- `style.css` (required)
- `script.js` (required)

#### Step 3: Include in Your Project

Add to your HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Project</title>
    <!-- Include the animation CSS -->
    <link rel="stylesheet" href="path/to/style.css">
</head>
<body>
    <!-- Your content -->
    
    <!-- Animation container -->
    <div class="items-list" id="itemsList">
        <!-- Items will be generated automatically -->
    </div>
    
    <!-- Include the animation script -->
    <script src="path/to/script.js"></script>
</body>
</html>
```

### Configuration Options

#### Method 1: CSS Variables

Customize directly in your CSS:

```css
:root {
    /* Scale & Size */
    --hover-scale: 2.0;          /* How much the item grows (default: 1.8) */
    --base-size: 80px;           /* Base size of items (default: 60px) */
    --item-spacing: 15px;        /* Space between items (default: 10px) */
    
    /* Animation */
    --transition-speed: 400ms;   /* Animation duration (default: 300ms) */
    --gradient-range: 4;         /* Neighbors affected (default: 3) */
    
    /* Colors */
    --primary-color: #3498db;    /* Main color */
    --secondary-color: #2ecc71;  /* Secondary color */
}
```

#### Method 2: JavaScript Configuration

Modify the configuration object in `script.js`:

```javascript
let config = {
    hoverScale: 2.0,           // Scale factor for hovered item
    transitionSpeed: 400,      // Animation speed in ms
    gradientRange: 4,          // Number of neighbors affected
    itemCount: 20             // Initial number of items
};
```

#### Method 3: Programmatic Control

Change settings dynamically with JavaScript:

```javascript
// Update CSS variables
document.documentElement.style.setProperty('--hover-scale', '2.5');
document.documentElement.style.setProperty('--primary-color', '#e74c3c');

// Update configuration and reinitialize
config.itemCount = 25;
initItems();
```

### Advanced Examples

#### Example 1: Custom Item Content

Modify the `initItems()` function to add custom content:

```javascript
function initItems() {
    const itemsList = document.getElementById('itemsList');
    itemsList.innerHTML = '';
    
    const icons = ['🎨', '🚀', '💡', '⭐', '🔥', '💻', '🎯', '🌟'];
    
    for (let i = 0; i < config.itemCount; i++) {
        const item = document.createElement('div');
        item.className = 'item';
        item.textContent = icons[i % icons.length]; // Use icons
        item.dataset.index = i;
        itemsList.appendChild(item);
    }
    
    attachHoverListeners();
}
```

#### Example 2: Add Click Events

Add interactivity to items:

```javascript
function attachHoverListeners() {
    const items = document.querySelectorAll('.item');
    
    items.forEach((item, index) => {
        item.addEventListener('mouseenter', () => handleItemHover(index));
        item.addEventListener('mouseleave', () => handleItemLeave());
        
        // Add click event
        item.addEventListener('click', () => {
            console.log(`Item ${index + 1} clicked!`);
            // Your custom logic here
        });
    });
}
```

#### Example 3: Integration with React

```jsx
import React, { useEffect } from 'react';
import './gradient-scale/style.css';

function AnimatedList() {
    useEffect(() => {
        // Load the animation script
        const script = document.createElement('script');
        script.src = './gradient-scale/script.js';
        script.async = true;
        document.body.appendChild(script);
        
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    
    return (
        <div>
            <h1>My Animated List</h1>
            <div className="items-list" id="itemsList"></div>
        </div>
    );
}

export default AnimatedList;
```

#### Example 4: Multiple Lists on Same Page

```html
<div class="items-list list-1" id="itemsList1"></div>
<div class="items-list list-2" id="itemsList2"></div>

<script>
// Initialize multiple lists with different configs
function initMultipleLists() {
    initListWithConfig('itemsList1', {
        hoverScale: 1.6,
        itemCount: 10
    });
    
    initListWithConfig('itemsList2', {
        hoverScale: 2.2,
        itemCount: 15
    });
}

function initListWithConfig(listId, customConfig) {
    const config = { ...defaultConfig, ...customConfig };
    const itemsList = document.getElementById(listId);
    // Initialize with custom config
    // ... initialization code
}
</script>
```

---

## Français

### Intégration Rapide

#### Étape 1 : Choisissez Votre Animation

Naviguez vers le dossier d'animation que vous souhaitez utiliser :
- `gradient-scale/` - Animation principale avec gradient de taille
- `fade-effect/` - Effet de focus basé sur l'opacité
- `slide-effect/` - Animation de glissement vertical
- `rotate-effect/` - Animation de rotation
- `color-transition/` - Animation de changement de couleur
- `combined/` - Plusieurs effets ensemble

#### Étape 2 : Copiez les Fichiers

Copiez les trois fichiers du dossier d'animation choisi :
- `index.html` (pour référence)
- `style.css` (requis)
- `script.js` (requis)

#### Étape 3 : Incluez dans Votre Projet

Ajoutez à votre fichier HTML :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Projet</title>
    <!-- Incluez le CSS de l'animation -->
    <link rel="stylesheet" href="chemin/vers/style.css">
</head>
<body>
    <!-- Votre contenu -->
    
    <!-- Conteneur de l'animation -->
    <div class="items-list" id="itemsList">
        <!-- Les éléments seront générés automatiquement -->
    </div>
    
    <!-- Incluez le script de l'animation -->
    <script src="chemin/vers/script.js"></script>
</body>
</html>
```

### Options de Configuration

#### Méthode 1 : Variables CSS

Personnalisez directement dans votre CSS :

```css
:root {
    /* Échelle & Taille */
    --hover-scale: 2.0;          /* Agrandissement de l'élément (défaut: 1.8) */
    --base-size: 80px;           /* Taille de base des éléments (défaut: 60px) */
    --item-spacing: 15px;        /* Espace entre les éléments (défaut: 10px) */
    
    /* Animation */
    --transition-speed: 400ms;   /* Durée de l'animation (défaut: 300ms) */
    --gradient-range: 4;         /* Voisins affectés (défaut: 3) */
    
    /* Couleurs */
    --primary-color: #3498db;    /* Couleur principale */
    --secondary-color: #2ecc71;  /* Couleur secondaire */
}
```

#### Méthode 2 : Configuration JavaScript

Modifiez l'objet de configuration dans `script.js` :

```javascript
let config = {
    hoverScale: 2.0,           // Facteur d'échelle pour l'élément survolé
    transitionSpeed: 400,      // Vitesse d'animation en ms
    gradientRange: 4,          // Nombre de voisins affectés
    itemCount: 20             // Nombre initial d'éléments
};
```

#### Méthode 3 : Contrôle Programmatique

Changez les paramètres dynamiquement avec JavaScript :

```javascript
// Mettre à jour les variables CSS
document.documentElement.style.setProperty('--hover-scale', '2.5');
document.documentElement.style.setProperty('--primary-color', '#e74c3c');

// Mettre à jour la configuration et réinitialiser
config.itemCount = 25;
initItems();
```

### Exemples Avancés

#### Exemple 1 : Contenu d'Élément Personnalisé

Modifiez la fonction `initItems()` pour ajouter du contenu personnalisé :

```javascript
function initItems() {
    const itemsList = document.getElementById('itemsList');
    itemsList.innerHTML = '';
    
    const icones = ['🎨', '🚀', '💡', '⭐', '🔥', '💻', '🎯', '🌟'];
    
    for (let i = 0; i < config.itemCount; i++) {
        const item = document.createElement('div');
        item.className = 'item';
        item.textContent = icones[i % icones.length]; // Utiliser des icônes
        item.dataset.index = i;
        itemsList.appendChild(item);
    }
    
    attachHoverListeners();
}
```

#### Exemple 2 : Ajouter des Événements de Clic

Ajoutez de l'interactivité aux éléments :

```javascript
function attachHoverListeners() {
    const items = document.querySelectorAll('.item');
    
    items.forEach((item, index) => {
        item.addEventListener('mouseenter', () => handleItemHover(index));
        item.addEventListener('mouseleave', () => handleItemLeave());
        
        // Ajouter un événement de clic
        item.addEventListener('click', () => {
            console.log(`Élément ${index + 1} cliqué !`);
            // Votre logique personnalisée ici
        });
    });
}
```

### Troubleshooting / Dépannage

#### Problem: Items not appearing
**Solution:** Make sure the `itemsList` div exists and the script is loaded after the DOM.

#### Problème : Les éléments n'apparaissent pas
**Solution :** Assurez-vous que la div `itemsList` existe et que le script est chargé après le DOM.

#### Problem: Animations not smooth
**Solution:** Adjust `--transition-speed` and ensure no conflicting CSS transitions.

#### Problème : Les animations ne sont pas fluides
**Solution :** Ajustez `--transition-speed` et assurez-vous qu'il n'y a pas de transitions CSS conflictuelles.

#### Problem: Colors not changing
**Solution:** Check CSS variable names and ensure they match between CSS and JavaScript.

#### Problème : Les couleurs ne changent pas
**Solution :** Vérifiez les noms des variables CSS et assurez-vous qu'ils correspondent entre CSS et JavaScript.

---

## Support

For more help, check:
- Main README.md
- Individual demo pages with interactive controls
- Source code comments

Pour plus d'aide, consultez :
- README.md principal
- Pages de démo individuelles avec contrôles interactifs
- Commentaires dans le code source
