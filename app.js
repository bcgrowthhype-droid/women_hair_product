/* ===== PRODUCT DATA ===== */
const products = [
  {
    id: 1,
    name: "Radiance Repair Elixir",
    subtitle: "Intensive Bonding Treatment",
    category: "Treatment",
    price: 68,
    rating: 4.9,
    reviews: 312,
    badge: "Best Seller",
    badgeType: "",
    emoji: "🧴",
    color: "#f5e8d4",
    description: "Our hero product. A concentrated blend of Argan Oil, Keratin Peptides, and Moroccan Rose Water that rebuilds bonds within the hair shaft, reversing years of heat and chemical damage in just four weeks.",
    benefits: ["Rebuilds broken disulfide bonds", "Reduces breakage by up to 87%", "Restores natural shine and elasticity", "Suitable for all hair types"],
    ingredients: "Aqua, Argan Oil (Argania Spinosa), Keratin Hydrolysate, Rosa Damascena Flower Water, Panthenol, Glycerin, Behentrimonium Chloride, Cetearyl Alcohol.",
    howToUse: "Apply 3–5 drops to damp or dry hair, focusing on mid-lengths to ends. No rinse needed. Style as usual. Use daily or as a finishing serum.",
    sizes: ["30ml", "60ml", "100ml"],
    featured: true
  },
  {
    id: 2,
    name: "Overnight Renewal Mask",
    subtitle: "Deep Restorative Hair Masque",
    category: "Mask",
    price: 54,
    rating: 4.8,
    reviews: 247,
    badge: "New",
    badgeType: "new",
    emoji: "🌙",
    color: "#e8e0f0",
    description: "Wake up to transformed hair. This overnight masque harnesses the power of Bakuchiol, Blue Tansy Oil, and Hyaluronic Acid to deeply hydrate, strengthen, and restore hair while you sleep.",
    benefits: ["8-hour deep conditioning", "Increases moisture retention by 3x", "Reduces frizz and flyaways", "Cruelty-free & vegan"],
    ingredients: "Aqua, Bakuchiol, Tanacetum Annuum (Blue Tansy) Flower Oil, Hyaluronic Acid, Shea Butter, Biotin, Niacinamide, Coconut Oil.",
    howToUse: "Apply generously to clean, damp hair from roots to ends. Wrap in a silk turban or sleep with it loose. Rinse thoroughly in the morning.",
    sizes: ["150ml", "250ml"],
    featured: true
  },
  {
    id: 3,
    name: "Scalp Revive Serum",
    subtitle: "Microbiome-Balancing Formula",
    category: "Scalp",
    price: 72,
    rating: 4.7,
    reviews: 189,
    badge: "Best Seller",
    badgeType: "",
    emoji: "💧",
    color: "#d4eae8",
    description: "Target dandruff, excess oil, and thinning at the root. Formulated with Niacinamide, Salicylic Acid, and Peppermint Extract to rebalance your scalp microbiome and stimulate healthy follicle activity.",
    benefits: ["Clinically reduces dandruff by 90%", "Stimulates hair growth", "Balances scalp oil production", "Fragrance-free formula"],
    ingredients: "Aqua, Niacinamide 5%, Salicylic Acid 2%, Mentha Piperita (Peppermint) Leaf Extract, Zinc PCA, Prebiotics, Caffeine, Allantoin.",
    howToUse: "Apply directly to the scalp using the dropper. Massage in with fingertips for 2 minutes. Leave on — do not rinse. Use morning or evening.",
    sizes: ["50ml", "100ml"],
    featured: true
  },
  {
    id: 4,
    name: "Velvet Volume Mousse",
    subtitle: "Weightless Volumising Foam",
    category: "Styling",
    price: 38,
    rating: 4.6,
    reviews: 155,
    badge: "",
    badgeType: "",
    emoji: "✨",
    color: "#fce8e0",
    description: "Body without burden. A featherlight mousse infused with Rice Protein and Bamboo Extract that builds long-lasting volume without the crunch — giving every hair type cloud-like fullness.",
    benefits: ["Adds visible volume without weight", "Heat-protective up to 230°C", "Humidity-resistant formula", "Alcohol-free"],
    ingredients: "Aqua, Oryza Sativa (Rice) Protein, Bambusa Vulgaris Extract, PVP, Panthenol, Glycerin, Dimethicone, Tocopheryl Acetate.",
    howToUse: "Dispense a golf-ball amount onto palm. Scrunch through damp hair and blow-dry for maximum lift. Can also be used on dry hair for refresh.",
    sizes: ["150ml", "250ml"],
    featured: false
  },
  {
    id: 5,
    name: "Silk Finish Shampoo",
    subtitle: "Sulfate-Free Daily Cleanser",
    category: "Cleanser",
    price: 42,
    rating: 4.8,
    reviews: 428,
    badge: "",
    badgeType: "",
    emoji: "🫧",
    color: "#e8f0f5",
    description: "The perfect foundation. A gentle, sulfate-free cleanser enriched with Oat Milk, Camellia Oil, and Pro-Vitamin B5 that cleanses without stripping natural oils, leaving hair impossibly soft.",
    benefits: ["Sulfate & paraben free", "pH-balanced for healthy scalp", "Safe for colour-treated hair", "Recyclable packaging"],
    ingredients: "Aqua, Sodium Cocoyl Isethionate, Avena Sativa (Oat) Kernel Extract, Camellia Sinensis Seed Oil, Panthenol, Biotin, Glycerin.",
    howToUse: "Apply to wet hair and massage into a rich lather. Rinse thoroughly. Follow with LUMIÈRE Conditioner for best results. Use daily.",
    sizes: ["200ml", "400ml", "800ml"],
    featured: false
  },
  {
    id: 6,
    name: "Hydra Melt Conditioner",
    subtitle: "Melting Moisture Conditioner",
    category: "Cleanser",
    price: 44,
    rating: 4.9,
    reviews: 376,
    badge: "Best Seller",
    badgeType: "",
    emoji: "🧖‍♀️",
    color: "#f0ead8",
    description: "Melts into your hair like silk. A rich conditioner powered by Mongongo Oil, Fermented Rice Water, and Ceramides that detangles, seals the cuticle, and builds lasting strength.",
    benefits: ["Reduces tangles and breakage", "Seals cuticle for mirror shine", "Strengthens hair shaft", "Vegan formula"],
    ingredients: "Aqua, Schinziophyton Rautanenii (Mongongo) Seed Oil, Oryza Sativa (Rice) Ferment Filtrate, Ceramide NP, Behentrimonium Methosulfate, Shea Butter.",
    howToUse: "Apply from mid-lengths to ends after shampooing. Leave for 2–5 minutes. For deeper conditioning, apply heat. Rinse well.",
    sizes: ["200ml", "400ml"],
    featured: false
  },
  {
    id: 7,
    name: "Heat Shield Mist",
    subtitle: "Thermal Protectant Spray",
    category: "Styling",
    price: 35,
    rating: 4.7,
    reviews: 210,
    badge: "New",
    badgeType: "new",
    emoji: "🌿",
    color: "#e4f0e0",
    description: "Your armour against heat damage. A fine mist combining Flaxseed Extract, Hydrolysed Quinoa, and Silicone-Free Polymers that protects up to 230°C and adds a soft, glossy finish.",
    benefits: ["Protects against heat up to 230°C", "Silicone-free formula", "Adds gloss without weight", "Prevents frizz during styling"],
    ingredients: "Aqua, Linum Usitatissimum (Flaxseed) Seed Extract, Chenopodium Quinoa Seed Protein, VP/VA Copolymer, Glycerin, Panthenol.",
    howToUse: "Spray evenly through damp hair before blow-drying or using hot tools. Hold 15cm away from hair. Can be used on dry hair to refresh shine.",
    sizes: ["125ml", "200ml"],
    featured: false
  },
  {
    id: 8,
    name: "Curl Define Cream",
    subtitle: "Sculpting & Defining Cream",
    category: "Styling",
    price: 46,
    rating: 4.8,
    reviews: 192,
    badge: "",
    badgeType: "",
    emoji: "🌀",
    color: "#f5e8f0",
    description: "For every curl pattern. A creamy formula packed with Sweet Almond Oil, Agave Nectar, and Coconut Milk that defines curls, eliminates frizz, and provides long-lasting flexible hold.",
    benefits: ["Defines curl pattern without crunching", "Anti-frizz for 48 hours", "Moisturises as it styles", "For curly, coily & wavy hair"],
    ingredients: "Aqua, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Agave Tequilana Leaf Extract, Cocos Nucifera (Coconut) Milk, Glycerin, PEG-40 Hydrogenated Castor Oil.",
    howToUse: "Apply a small amount to soaking wet hair. Scrunch into curls. Diffuse on low heat or air dry. Scrunch out any crunch once fully dry.",
    sizes: ["150ml", "300ml"],
    featured: false
  }
];

/* ===== STATE ===== */
let cart = [];
let currentFilter = "All";
let currentProduct = null;
let currentQty = 1;
let selectedSize = null;
let shippingCost = 5.99;
let shippingType = "Standard Shipping";

/* ===== PAGE ROUTING ===== */
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  if (pageId === 'products') renderProductsPage();
  if (pageId === 'cart') renderCart();
  if (pageId === 'checkout') renderCheckout();
}

/* ===== MOBILE MENU ===== */
document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.add('open');
  document.getElementById('menuOverlay').classList.add('visible');
});
function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('menuOverlay').classList.remove('visible');
}
document.getElementById('closeMenu').addEventListener('click', closeMobileMenu);

/* ===== NAVBAR SCROLL ===== */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

/* ===== UPDATE CART COUNT ===== */
function updateCartCount() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const el = document.getElementById('cartCount');
  el.textContent = count;
  el.setAttribute('data-count', count);
}

/* ===== ADD TO CART ===== */
function addToCart(productId, qty = 1, size = null) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const itemSize = size || product.sizes[0];
  const existing = cart.find(i => i.id === productId && i.size === itemSize);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...product, qty, size: itemSize });
  }
  updateCartCount();
  showToast(`${product.name} added to cart`);
}

/* ===== TOAST NOTIFICATION ===== */
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.cssText = `
      position:fixed; bottom:2rem; left:50%; transform:translateX(-50%) translateY(100px);
      background:var(--charcoal); color:var(--cream);
      padding:1rem 2rem; font-size:0.8rem; letter-spacing:0.15em; text-transform:uppercase;
      z-index:999; transition:transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
      font-family:var(--font-sans); white-space:nowrap;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = '✦  ' + message;
  toast.style.transform = 'translateX(-50%) translateY(0)';
  setTimeout(() => { toast.style.transform = 'translateX(-50%) translateY(100px)'; }, 2500);
}

/* ===== PRODUCT CARD HTML ===== */
function createProductCard(product, size = 'normal') {
  const badgeHtml = product.badge
    ? `<div class="product-badge ${product.badgeType}">${product.badge}</div>` : '';
  return `
    <div class="product-card" onclick="showDetail(${product.id})">
      <div class="product-card-img" style="background:${product.color}20">
        ${badgeHtml}
        <div class="product-card-img-inner">${product.emoji}</div>
      </div>
      <div class="product-card-info">
        <p class="product-card-category">${product.category}</p>
        <h3 class="product-card-name">${product.name}</h3>
        <p class="product-card-tagline">${product.subtitle}</p>
        <div class="product-card-footer">
          <span class="product-price">$${product.price}</span>
          <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})" title="Add to cart">+</button>
        </div>
      </div>
    </div>
  `;
}

/* ===== HOME: FEATURED GRID ===== */
function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  const featured = products.filter(p => p.featured);
  grid.innerHTML = featured.map(p => createProductCard(p)).join('');
}

/* ===== PRODUCTS PAGE ===== */
function renderProductsPage() {
  renderFilterPills();
  renderProductGrid();
}

function renderFilterPills() {
  const pills = document.getElementById('filterPills');
  if (!pills) return;
  const categories = ['All', ...new Set(products.map(p => p.category))];
  pills.innerHTML = categories.map(cat => `
    <button class="filter-pill ${cat === currentFilter ? 'active' : ''}"
      onclick="setFilter('${cat}')">${cat}</button>
  `).join('');
}

function setFilter(cat) {
  currentFilter = cat;
  renderFilterPills();
  renderProductGrid();
}

function renderProductGrid() {
  const grid = document.getElementById('productsGrid');
  const countEl = document.getElementById('productCount');
  if (!grid) return;
  const filtered = currentFilter === 'All' ? products : products.filter(p => p.category === currentFilter);
  countEl.textContent = `${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;
  grid.innerHTML = filtered.map(p => createProductCard(p)).join('');
}

/* ===== PRODUCT DETAIL ===== */
function showDetail(productId) {
  currentProduct = products.find(p => p.id === productId);
  currentQty = 1;
  selectedSize = currentProduct.sizes[0];
  if (!currentProduct) return;

  const container = document.getElementById('detailContainer');
  container.innerHTML = `
    <button class="detail-back" onclick="showPage('products')">← Back to Collection</button>
    <div class="detail-layout">
      <div class="detail-images">
        <div class="detail-main-img" id="mainImg" style="background:${currentProduct.color}25">
          ${currentProduct.emoji}
        </div>
        <div class="detail-thumbnails">
          ${['🔬','🌿','✨'].map((icon, i) => `
            <div class="detail-thumb ${i === 0 ? 'active' : ''}" onclick="selectThumb(this, '${icon}')">
              ${icon}
            </div>
          `).join('')}
        </div>
      </div>

      <div class="detail-info">
        <p class="detail-breadcrumb">
          <a onclick="showPage('home')">Home</a> /
          <a onclick="showPage('products')">Shop</a> /
          ${currentProduct.name}
        </p>
        <p class="detail-category">${currentProduct.category}</p>
        <h1 class="detail-title">${currentProduct.name}</h1>
        <p class="detail-subtitle">${currentProduct.subtitle}</p>
        <div class="detail-rating">
          <span class="detail-stars">${'★'.repeat(Math.floor(currentProduct.rating))}${'☆'.repeat(5 - Math.floor(currentProduct.rating))}</span>
          <span class="detail-reviews">${currentProduct.rating} · ${currentProduct.reviews} reviews</span>
        </div>
        <div class="detail-price">$${currentProduct.price}</div>

        <p class="detail-size-label">Size</p>
        <div class="detail-sizes" id="detailSizes">
          ${currentProduct.sizes.map((s, i) => `
            <button class="size-btn ${i === 0 ? 'active' : ''}"
              onclick="selectSize('${s}', this)">${s}</button>
          `).join('')}
        </div>

        <div class="detail-qty">
          <label>Quantity</label>
          <div class="qty-control">
            <button class="qty-btn" onclick="changeQty(-1)">−</button>
            <span class="qty-val" id="qtyVal">1</span>
            <button class="qty-btn" onclick="changeQty(1)">+</button>
          </div>
        </div>

        <div class="detail-actions">
          <button class="btn-primary" onclick="addDetailToCart()">Add to Cart</button>
          <button class="detail-wishlist" title="Wishlist">♡</button>
        </div>

        <div class="detail-accordion">
          ${[
            { title: 'Description', content: currentProduct.description },
            { title: 'Benefits', content: '<ul>' + currentProduct.benefits.map(b => `<li style="margin-bottom:0.5rem">✦ ${b}</li>`).join('') + '</ul>' },
            { title: 'Ingredients', content: currentProduct.ingredients },
            { title: 'How to Use', content: currentProduct.howToUse }
          ].map((item, i) => `
            <div class="accordion-item">
              <button class="accordion-header ${i === 0 ? 'open' : ''}" onclick="toggleAccordion(this)">
                ${item.title}
                <span class="accordion-icon">+</span>
              </button>
              <div class="accordion-body ${i === 0 ? 'open' : ''}">${item.content}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  showPage('detail');
}

function selectThumb(el, icon) {
  document.querySelectorAll('.detail-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('mainImg').textContent = icon;
}

function selectSize(size, btn) {
  selectedSize = size;
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function changeQty(delta) {
  currentQty = Math.max(1, currentQty + delta);
  document.getElementById('qtyVal').textContent = currentQty;
}

function addDetailToCart() {
  addToCart(currentProduct.id, currentQty, selectedSize);
}

function toggleAccordion(header) {
  const body = header.nextElementSibling;
  const isOpen = header.classList.contains('open');
  // close all
  document.querySelectorAll('.accordion-header').forEach(h => {
    h.classList.remove('open');
    h.nextElementSibling.classList.remove('open');
  });
  if (!isOpen) {
    header.classList.add('open');
    body.classList.add('open');
  }
}

/* ===== CART ===== */
function renderCart() {
  const itemsEl = document.getElementById('cartItems');
  const summaryEl = document.getElementById('cartSummary');
  const subtitleEl = document.getElementById('cartSubtitle');

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛍</div>
        <h3>Your cart is empty</h3>
        <p>Discover our luxurious hair care collection.</p>
        <button class="btn-primary" onclick="showPage('products')">Shop the Collection</button>
      </div>
    `;
    summaryEl.innerHTML = '';
    subtitleEl.textContent = '0 items';
    return;
  }

  const itemCount = cart.reduce((s, i) => s + i.qty, 0);
  subtitleEl.textContent = `${itemCount} item${itemCount !== 1 ? 's' : ''}`;

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">${item.emoji}</div>
      <div>
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-variant">${item.size}</p>
        <div class="cart-item-qty-row">
          <div class="qty-control">
            <button class="qty-btn" onclick="updateCartQty(${item.id}, '${item.size}', -1)">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty(${item.id}, '${item.size}', 1)">+</button>
          </div>
          <button class="cart-item-remove" onclick="removeCartItem(${item.id}, '${item.size}')">Remove</button>
        </div>
      </div>
      <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
    </div>
  `).join('');

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal > 100 ? 0 : 5.99;
  const total = subtotal + shipping;

  summaryEl.innerHTML = `
    <div class="cart-summary-box">
      <h3>Order Summary</h3>
      <div class="summary-line"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
      <div class="summary-line"><span>Shipping</span><span>${shipping === 0 ? 'Free' : '$' + shipping.toFixed(2)}</span></div>
      ${shipping === 0 ? '<div class="summary-line" style="color:var(--gold);font-size:0.78rem"><span>✦ Free shipping applied</span></div>' : '<div class="summary-line" style="font-size:0.78rem;color:var(--mid-gray)"><span>Free shipping on orders over $100</span></div>'}
      <div class="promo-row">
        <input type="text" placeholder="Promo code" id="promoInput"/>
        <button onclick="applyPromo()">Apply</button>
      </div>
      <div class="summary-line total">
        <span>Total</span><span>$${total.toFixed(2)}</span>
      </div>
      <button class="btn-primary full-width" onclick="showPage('checkout')" style="margin-top:1.5rem">
        Proceed to Checkout →
      </button>
      <p class="checkout-notice">🔒 Secure checkout · Free returns · 30-day guarantee</p>
    </div>
  `;
}

function updateCartQty(id, size, delta) {
  const item = cart.find(i => i.id === id && i.size === size);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  updateCartCount();
  renderCart();
}

function removeCartItem(id, size) {
  cart = cart.filter(i => !(i.id === id && i.size === size));
  updateCartCount();
  renderCart();
}

function applyPromo() {
  const code = document.getElementById('promoInput').value.trim().toUpperCase();
  if (code === 'LUMIERE10') {
    showToast('10% discount applied!');
  } else if (code === 'WELCOME') {
    showToast('Free shipping applied!');
  } else {
    showToast('Invalid promo code');
  }
}

/* ===== CHECKOUT ===== */
function renderCheckout() {
  renderCheckoutSidebar();
}

function renderCheckoutSidebar() {
  const sidebar = document.getElementById('checkoutSidebar');
  if (!sidebar) return;
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const total = subtotal + shippingCost;
  sidebar.innerHTML = `
    <h3>Order Summary</h3>
    ${cart.map(item => `
      <div class="sidebar-item">
        <div class="sidebar-item-img">${item.emoji}</div>
        <div class="sidebar-item-info">
          <p class="sidebar-item-name">${item.name}</p>
          <p class="sidebar-item-qty">Qty: ${item.qty} · ${item.size}</p>
        </div>
        <span class="sidebar-item-price">$${(item.price * item.qty).toFixed(2)}</span>
      </div>
    `).join('')}
    <div class="summary-line" style="margin-top:1rem"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
    <div class="summary-line"><span>${shippingType}</span><span>$${shippingCost.toFixed(2)}</span></div>
    <div class="summary-line total"><span>Total</span><span>$${total.toFixed(2)}</span></div>
  `;
}

function goToCheckoutStep(step) {
  // Validate step 1
  if (step === 2) {
    const email = document.getElementById('email').value.trim();
    const firstName = document.getElementById('firstName').value.trim();
    const address = document.getElementById('address').value.trim();
    if (!email || !firstName || !address) {
      showToast('Please fill in all required fields');
      return;
    }
  }

  // Validate step 3
  if (step === 4) {
    const card = document.getElementById('cardNumber').value.trim();
    const expiry = document.getElementById('expiry').value.trim();
    if (!card || !expiry) {
      showToast('Please fill in payment details');
      return;
    }
  }

  // Hide all steps
  document.querySelectorAll('.checkout-step').forEach(s => s.classList.add('hidden'));

  // Show target step
  const target = document.getElementById(`checkoutStep${step}`);
  if (target) target.classList.remove('hidden');

  // Update step indicators
  document.querySelectorAll('.step').forEach((el, i) => {
    el.classList.remove('active', 'completed');
    if (i + 1 < step) el.classList.add('completed');
    if (i + 1 === step) el.classList.add('active');
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectShipping(input) {
  document.querySelectorAll('.shipping-option').forEach((el, i) => {
    el.classList.remove('selected');
  });
  input.closest('.shipping-option').classList.add('selected');

  const costs = { standard: 5.99, express: 12.99, overnight: 24.99 };
  const names = { standard: 'Standard Shipping', express: 'Express Shipping', overnight: 'Overnight Shipping' };
  shippingCost = costs[input.value] || 5.99;
  shippingType = names[input.value] || 'Standard Shipping';
  renderCheckoutSidebar();
}

function formatCard(input) {
  let val = input.value.replace(/\D/g, '').substring(0, 16);
  input.value = val.match(/.{1,4}/g)?.join(' ') || val;
}

function formatExpiry(input) {
  let val = input.value.replace(/\D/g, '').substring(0, 4);
  if (val.length >= 3) val = val.slice(0, 2) + ' / ' + val.slice(2);
  input.value = val;
}

function placeOrder() {
  const cardNumber = document.getElementById('cardNumber').value.trim();
  const cardName = document.getElementById('cardName').value.trim();
  if (!cardNumber || cardNumber.length < 19) {
    showToast('Please enter a valid card number');
    return;
  }
  if (!cardName) {
    showToast('Please enter the name on your card');
    return;
  }

  const orderNum = 'LUM-' + Math.random().toString(36).substring(2,7).toUpperCase();
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const total = subtotal + shippingCost;

  // Render confirmation
  document.getElementById('orderNumber').innerHTML = `Order <strong>#${orderNum}</strong>`;
  document.getElementById('confirmationItems').innerHTML = `
    <div style="padding:0.5rem 0 1rem; font-size:0.7rem; letter-spacing:0.25em; text-transform:uppercase; color:var(--mid-gray); margin-bottom:0.5rem">
      Your Order
    </div>
    ${cart.map(item => `
      <div class="confirmation-item">
        <span class="confirmation-item-name">${item.emoji} ${item.name} (${item.size}) × ${item.qty}</span>
        <span class="confirmation-item-price">$${(item.price * item.qty).toFixed(2)}</span>
      </div>
    `).join('')}
    <div class="confirmation-item" style="font-weight:500">
      <span>Total</span>
      <span class="confirmation-item-price">$${total.toFixed(2)}</span>
    </div>
  `;

  // Clear cart
  cart = [];
  updateCartCount();
  goToCheckoutStep(1);

  showPage('confirmation');
}

function continueShopping() {
  currentFilter = 'All';
  showPage('products');
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  renderFeatured();
  updateCartCount();
});
