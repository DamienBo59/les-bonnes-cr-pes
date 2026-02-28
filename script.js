// === DATA ===
const INGREDIENTS = [
    {
        category: "Base",
        icon: "🥞",
        description: "Le fondement de toute bonne galette",
        items: [
            { id: "sarrasin", name: "Galette de sarrasin", emoji: "🥞", price: 3.00, default: true },
            { id: "sarrasin-bio", name: "Sarrasin bio", emoji: "🌾", price: 3.50 },
            { id: "extra-fine", name: "Galette extra-fine", emoji: "📄", price: 3.50 },
        ]
    },
    {
        category: "Fromages",
        icon: "🧀",
        description: "On ne lésine pas sur le fromage",
        items: [
            { id: "emmental", name: "Emmental râpé", emoji: "🧀", price: 1.00 },
            { id: "gruyere", name: "Gruyère", emoji: "🧀", price: 1.20 },
            { id: "comte", name: "Comté", emoji: "🧀", price: 1.80 },
            { id: "chevre", name: "Chèvre frais", emoji: "🐐", price: 1.50 },
            { id: "chevre-chaud", name: "Chèvre chaud", emoji: "🔥", price: 2.00 },
            { id: "raclette", name: "Raclette", emoji: "🫕", price: 1.80 },
            { id: "bleu", name: "Bleu d'Auvergne", emoji: "🔵", price: 1.80 },
            { id: "roquefort", name: "Roquefort", emoji: "🐑", price: 2.00 },
            { id: "mozzarella", name: "Mozzarella", emoji: "⚪", price: 1.50 },
            { id: "camembert", name: "Camembert", emoji: "🥧", price: 1.60 },
            { id: "brie", name: "Brie", emoji: "🤍", price: 1.50 },
            { id: "maroilles", name: "Maroilles", emoji: "🟠", price: 1.80 },
        ]
    },
    {
        category: "Viandes & Charcuteries",
        icon: "🥩",
        description: "Pour les carnivores assumés",
        items: [
            { id: "jambon-blanc", name: "Jambon blanc", emoji: "🥓", price: 1.50 },
            { id: "jambon-cru", name: "Jambon cru", emoji: "🍖", price: 2.00 },
            { id: "lardons", name: "Lardons fumés", emoji: "🥓", price: 1.50 },
            { id: "lardons-nature", name: "Lardons nature", emoji: "🥓", price: 1.30 },
            { id: "saucisse", name: "Saucisse bretonne", emoji: "🌭", price: 2.50 },
            { id: "andouille", name: "Andouille de Guémené", emoji: "🏆", price: 3.00 },
            { id: "poulet", name: "Poulet émincé", emoji: "🍗", price: 2.00 },
            { id: "merguez", name: "Merguez", emoji: "🌶️", price: 2.00 },
            { id: "chorizo", name: "Chorizo", emoji: "💃", price: 1.80 },
            { id: "bacon", name: "Bacon croustillant", emoji: "🥓", price: 1.80 },
            { id: "coppa", name: "Coppa", emoji: "🇮🇹", price: 2.20 },
            { id: "magret", name: "Magret de canard", emoji: "🦆", price: 3.50 },
        ]
    },
    {
        category: "Oeuf",
        icon: "🥚",
        description: "L'indispensable (ou pas)",
        items: [
            { id: "oeuf-plat", name: "Oeuf au plat", emoji: "🍳", price: 1.00 },
            { id: "oeuf-brouille", name: "Oeuf brouillé", emoji: "🥚", price: 1.00 },
            { id: "oeuf-miroir", name: "Oeuf miroir", emoji: "🪞", price: 1.00 },
        ]
    },
    {
        category: "Fruits de mer",
        icon: "🦐",
        description: "La mer à portée de galette",
        items: [
            { id: "saint-jacques", name: "Saint-Jacques", emoji: "🐚", price: 4.50 },
            { id: "crevettes", name: "Crevettes", emoji: "🦐", price: 3.50 },
            { id: "saumon-fume", name: "Saumon fumé", emoji: "🐟", price: 3.00 },
            { id: "thon", name: "Thon", emoji: "🐠", price: 2.00 },
            { id: "sardines", name: "Sardines", emoji: "🐟", price: 2.00 },
            { id: "moules", name: "Moules", emoji: "🦪", price: 3.00 },
            { id: "huitres", name: "Huîtres pochées", emoji: "🦪", price: 5.00 },
        ]
    },
    {
        category: "Légumes",
        icon: "🥬",
        description: "Un peu de vert, ça fait du bien",
        items: [
            { id: "champignons", name: "Champignons", emoji: "🍄", price: 1.20 },
            { id: "tomates", name: "Tomates", emoji: "🍅", price: 0.80 },
            { id: "tomates-sechees", name: "Tomates séchées", emoji: "🌞", price: 1.50 },
            { id: "oignons", name: "Oignons", emoji: "🧅", price: 0.50 },
            { id: "oignons-confits", name: "Oignons confits", emoji: "✨", price: 1.20 },
            { id: "poivrons", name: "Poivrons", emoji: "🫑", price: 0.80 },
            { id: "epinards", name: "Épinards frais", emoji: "🥬", price: 1.00 },
            { id: "artichauts", name: "Artichauts", emoji: "🌿", price: 1.50 },
            { id: "pommes-de-terre", name: "Pommes de terre", emoji: "🥔", price: 1.00 },
            { id: "salade", name: "Salade verte", emoji: "🥗", price: 0.80 },
            { id: "roquette", name: "Roquette", emoji: "🌱", price: 1.00 },
            { id: "avocat", name: "Avocat", emoji: "🥑", price: 1.50 },
            { id: "courgettes", name: "Courgettes grillées", emoji: "🟢", price: 1.20 },
            { id: "mais", name: "Maïs", emoji: "🌽", price: 0.80 },
        ]
    },
    {
        category: "Sauces & Assaisonnements",
        icon: "🧈",
        description: "Les touches finales qui changent tout",
        items: [
            { id: "beurre-sale", name: "Beurre salé", emoji: "🧈", price: 0.50 },
            { id: "beurre-doux", name: "Beurre doux", emoji: "🧈", price: 0.50 },
            { id: "creme-fraiche", name: "Crème fraîche", emoji: "🥛", price: 0.80 },
            { id: "moutarde", name: "Moutarde", emoji: "🟡", price: 0.30 },
            { id: "moutarde-ancienne", name: "Moutarde à l'ancienne", emoji: "🟤", price: 0.50 },
            { id: "sauce-tomate", name: "Sauce tomate", emoji: "🍅", price: 0.50 },
            { id: "bechamel", name: "Béchamel", emoji: "🥣", price: 0.80 },
            { id: "pesto", name: "Pesto", emoji: "🌿", price: 1.00 },
            { id: "miel", name: "Miel", emoji: "🍯", price: 0.60 },
            { id: "poivre", name: "Poivre", emoji: "🫚", price: 0.20 },
            { id: "herbes", name: "Herbes de Provence", emoji: "🌿", price: 0.30 },
            { id: "fleur-sel", name: "Fleur de sel", emoji: "💎", price: 0.30 },
            { id: "noix", name: "Noix concassées", emoji: "🥜", price: 0.80 },
            { id: "ail", name: "Ail", emoji: "🧄", price: 0.30 },
            { id: "curry", name: "Curry", emoji: "💛", price: 0.40 },
        ]
    },
    {
        category: "Extras & Originalités",
        icon: "🌟",
        description: "Pour ceux qui osent",
        items: [
            { id: "truffe", name: "Huile de truffe", emoji: "🖤", price: 3.00 },
            { id: "foie-gras", name: "Foie gras", emoji: "👑", price: 5.00 },
            { id: "confit-canard", name: "Confit de canard", emoji: "🦆", price: 4.00 },
            { id: "boudin-noir", name: "Boudin noir", emoji: "⚫", price: 2.50 },
            { id: "pommes-caramel", name: "Pommes caramélisées", emoji: "🍎", price: 1.50 },
            { id: "figues", name: "Figues", emoji: "🫐", price: 2.00 },
            { id: "algues", name: "Algues bretonnes", emoji: "🌊", price: 1.50 },
            { id: "andouillette", name: "Andouillette", emoji: "🌀", price: 2.50 },
        ]
    },
];

// === DIET FILTER ===
// IDs des ingredients non-vegan (viande, poisson, oeuf, produits laitiers, miel)
const NON_VEGAN_IDS = new Set([
    // Fromages (tous)
    'emmental', 'gruyere', 'comte', 'chevre', 'chevre-chaud', 'raclette',
    'bleu', 'roquefort', 'mozzarella', 'camembert', 'brie', 'maroilles',
    // Viandes & Charcuteries (tous)
    'jambon-blanc', 'jambon-cru', 'lardons', 'lardons-nature', 'saucisse',
    'andouille', 'poulet', 'merguez', 'chorizo', 'bacon', 'coppa', 'magret',
    // Oeuf (tous)
    'oeuf-plat', 'oeuf-brouille', 'oeuf-miroir',
    // Fruits de mer (tous)
    'saint-jacques', 'crevettes', 'saumon-fume', 'thon', 'sardines', 'moules', 'huitres',
    // Sauces non-vegan
    'beurre-sale', 'beurre-doux', 'creme-fraiche', 'bechamel', 'miel',
    // Extras non-vegan
    'foie-gras', 'confit-canard', 'boudin-noir', 'andouillette',
]);

// Categories entierement non-vegan (cachees en mode vegan)
const NON_VEGAN_CATEGORIES = new Set([
    'Fromages', 'Viandes & Charcuteries', 'Oeuf', 'Fruits de mer'
]);

// === STATE ===
let selectedIngredients = new Set();
let currentDiet = 'all';

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
    loadFromURL();
    renderCategories();
    updateRecap();
    bindGlobalEvents();
});

// === RENDER ===
function renderCategories() {
    const container = document.getElementById('categories');
    container.innerHTML = INGREDIENTS.map((cat, i) => `
        <div class="category ${i < 2 ? 'open' : ''}" data-category="${cat.category}">
            <div class="category-header" onclick="toggleCategory(this)">
                <div class="category-icon">${cat.icon}</div>
                <div class="category-info">
                    <div class="category-name">${cat.category}</div>
                    <div class="category-count">${cat.items.length} choix &middot; <span class="cat-selected" data-cat="${cat.category}">0 sélectionné</span></div>
                </div>
                <div class="category-toggle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"/>
                    </svg>
                </div>
            </div>
            <div class="category-items">
                <div class="items-grid">
                    ${cat.items.map(item => `
                        <div class="ingredient ${selectedIngredients.has(item.id) ? 'selected' : ''}"
                             data-id="${item.id}"
                             onclick="toggleIngredient('${item.id}')">
                            <div class="ingredient-check">
                                <svg viewBox="0 0 24 24" fill="none" stroke="#0f0f14" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"/>
                                </svg>
                            </div>
                            <span class="ingredient-emoji">${item.emoji}</span>
                            <div class="ingredient-details">
                                <div class="ingredient-name">${item.name}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// === INTERACTIONS ===
function toggleCategory(header) {
    header.closest('.category').classList.toggle('open');
}

function toggleIngredient(id) {
    if (selectedIngredients.has(id)) {
        selectedIngredients.delete(id);
    } else {
        selectedIngredients.add(id);
    }
    updateIngredientUI(id);
    updateRecap();
    updateURL();
}

function removeIngredient(id) {
    selectedIngredients.delete(id);
    updateIngredientUI(id);
    updateRecap();
    updateURL();
}

function updateIngredientUI(id) {
    const el = document.querySelector(`.ingredient[data-id="${id}"]`);
    if (el) {
        el.classList.toggle('selected', selectedIngredients.has(id));
    }
}

function resetAll() {
    selectedIngredients.clear();
    document.querySelectorAll('.ingredient.selected').forEach(el => {
        el.classList.remove('selected');
    });
    updateRecap();
    updateURL();
    showToast('Galette remise à zéro !');
}

function randomGalette() {
    selectedIngredients.clear();
    document.querySelectorAll('.ingredient.selected').forEach(el => {
        el.classList.remove('selected');
    });

    // Toujours une base
    const bases = INGREDIENTS[0].items;
    const randomBase = bases[Math.floor(Math.random() * bases.length)];
    selectedIngredients.add(randomBase.id);

    // 3 à 6 ingredients aleatoires (respecte le filtre vegan)
    const allItems = INGREDIENTS.slice(1).flatMap(cat => cat.items)
        .filter(item => currentDiet === 'all' || !NON_VEGAN_IDS.has(item.id));
    const count = 3 + Math.floor(Math.random() * 4);
    const shuffled = allItems.sort(() => Math.random() - 0.5);
    shuffled.slice(0, count).forEach(item => selectedIngredients.add(item.id));

    selectedIngredients.forEach(id => updateIngredientUI(id));
    updateRecap();
    updateURL();

    // Ouvrir les categories qui ont des ingredients selectionnes
    document.querySelectorAll('.category').forEach(cat => {
        const hasSelected = cat.querySelector('.ingredient.selected');
        if (hasSelected && !cat.classList.contains('open')) {
            cat.classList.add('open');
        }
    });

    showToast('Galette aleatoire generee !');
}

// === RECAP ===
function updateRecap() {
    const items = getSelectedItems();

    // Placeholder
    const placeholder = document.getElementById('galette-placeholder');
    const ingredientsContainer = document.getElementById('galette-ingredients');

    if (items.length === 0) {
        placeholder.style.display = 'block';
        ingredientsContainer.innerHTML = '';
    } else {
        placeholder.style.display = 'none';
        ingredientsContainer.innerHTML = items.map(item =>
            `<span class="galette-emoji" title="${item.name}">${item.emoji}</span>`
        ).join('');
    }

    // List
    const recapEmpty = document.getElementById('recap-empty');
    const recapItems = document.getElementById('recap-items');

    if (items.length === 0) {
        recapEmpty.style.display = 'block';
        recapItems.innerHTML = '';
    } else {
        recapEmpty.style.display = 'none';
        recapItems.innerHTML = items.map(item => `
            <li>
                <span class="recap-item-left">
                    <span class="recap-item-emoji">${item.emoji}</span>
                    <span class="recap-item-name">${item.name}</span>
                </span>
                <button class="recap-item-remove" onclick="removeIngredient('${item.id}')" title="Retirer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
            </li>
        `).join('');
    }

    // Stats
    document.getElementById('stat-count').textContent = items.length;

    // Mobile bar
    updateMobileBar(items);

    // Category counts
    INGREDIENTS.forEach(cat => {
        const countEl = document.querySelector(`.cat-selected[data-cat="${cat.category}"]`);
        if (countEl) {
            const count = cat.items.filter(item => selectedIngredients.has(item.id)).length;
            countEl.textContent = count === 0 ? '0 sélectionné' : `${count} sélectionné${count > 1 ? 's' : ''}`;
        }
    });
}

function getSelectedItems() {
    const all = INGREDIENTS.flatMap(cat => cat.items);
    return all.filter(item => selectedIngredients.has(item.id));
}

// === URL STATE ===
function updateURL() {
    const ids = Array.from(selectedIngredients);
    if (ids.length > 0) {
        const hash = '#' + ids.join(',');
        history.replaceState(null, '', hash);
    } else {
        history.replaceState(null, '', window.location.pathname);
    }
}

function loadFromURL() {
    const hash = window.location.hash.slice(1);
    if (hash) {
        const ids = hash.split(',');
        const allIds = new Set(INGREDIENTS.flatMap(cat => cat.items.map(i => i.id)));
        ids.forEach(id => {
            if (allIds.has(id)) {
                selectedIngredients.add(id);
            }
        });
    }
}

// === SHARE ===
function shareGalette() {
    const items = getSelectedItems();
    if (items.length === 0) {
        showToast('Ajoute des ingredients d\'abord !');
        return;
    }

    const url = window.location.href;
    const text = `Ma galette bretonne parfaite : ${items.map(i => i.name).join(', ')} !`;

    if (navigator.share) {
        navigator.share({ title: 'Ma Galette Bretonne', text, url })
            .catch(() => copyToClipboard(url));
    } else {
        copyToClipboard(url);
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Lien copie dans le presse-papier !');
    }).catch(() => {
        showToast('Impossible de copier le lien');
    });
}

// === TOAST ===
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// === DIET FILTER ===
function setDiet(diet) {
    currentDiet = diet;

    // Toggle active button
    document.getElementById('diet-all').classList.toggle('active', diet === 'all');
    document.getElementById('diet-vegan').classList.toggle('active', diet === 'vegan');

    // Deselect hidden ingredients when switching to vegan
    if (diet === 'vegan') {
        const removed = [];
        selectedIngredients.forEach(id => {
            if (NON_VEGAN_IDS.has(id)) {
                removed.push(id);
            }
        });
        removed.forEach(id => {
            selectedIngredients.delete(id);
            updateIngredientUI(id);
        });
        if (removed.length > 0) {
            updateRecap();
            updateURL();
        }
    }

    // Show/hide categories and ingredients
    document.querySelectorAll('.category').forEach(catEl => {
        const catName = catEl.dataset.category;
        if (diet === 'vegan' && NON_VEGAN_CATEGORIES.has(catName)) {
            catEl.classList.add('hidden-by-diet');
        } else {
            catEl.classList.remove('hidden-by-diet');
        }
    });

    // Show/hide individual non-vegan ingredients in mixed categories
    document.querySelectorAll('.ingredient').forEach(el => {
        const id = el.dataset.id;
        if (diet === 'vegan' && NON_VEGAN_IDS.has(id)) {
            el.classList.add('hidden-by-diet');
        } else {
            el.classList.remove('hidden-by-diet');
        }
    });

    const label = diet === 'vegan' ? 'Mode vegan active !' : 'Tous les ingredients affiches !';
    showToast(label);
}

// === SEND TO CHEF (MODAL) ===
function sendToChef() {
    const items = getSelectedItems();
    if (items.length === 0) {
        showToast('Ajoute des ingredients d\'abord !');
        return;
    }

    const ingredientList = items.map(i => `${i.emoji} ${i.name}`).join(', ');
    const shareUrl = window.location.href;

    // Remplir le recap dans la modale
    document.getElementById('modal-recap').textContent = ingredientList;

    // Remplir les champs caches
    document.getElementById('form-galette').value = ingredientList;
    document.getElementById('form-lien').value = shareUrl;

    // Ouvrir la modale
    document.getElementById('modal-overlay').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal(event) {
    if (event && event.target !== event.currentTarget && !event.target.closest('.modal-close')) return;
    document.getElementById('modal-overlay').classList.remove('show');
    document.body.style.overflow = '';
}

function initForm() {
    const form = document.getElementById('galette-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const btn = document.getElementById('btn-submit');
        btn.disabled = true;
        btn.textContent = 'Envoi en cours...';

        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                closeModal();
                form.reset();
                showToast('Galette envoyee au chef !');
            } else {
                showToast('Erreur, reessaie !');
            }
        }).catch(() => {
            showToast('Erreur reseau, reessaie !');
        }).finally(() => {
            btn.disabled = false;
            btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Envoyer !`;
        });
    });
}

// === MOBILE BAR ===
function updateMobileBar(items) {
    const bar = document.getElementById('mobile-bar');
    if (!bar) return;

    if (items.length > 0) {
        bar.classList.add('visible');
        document.getElementById('mobile-bar-count').textContent =
            `${items.length} ingredient${items.length > 1 ? 's' : ''}`;
        document.getElementById('mobile-bar-emojis').textContent =
            items.slice(0, 8).map(i => i.emoji).join('');
    } else {
        bar.classList.remove('visible');
    }
}

function scrollToRecap() {
    const recap = document.getElementById('recap');
    if (recap) {
        recap.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// === GLOBAL EVENTS ===
function bindGlobalEvents() {
    document.getElementById('btn-reset').addEventListener('click', resetAll);
    document.getElementById('btn-share').addEventListener('click', shareGalette);
    document.getElementById('btn-random').addEventListener('click', randomGalette);
    document.getElementById('btn-send').addEventListener('click', sendToChef);
    initForm();
}
