// ===== PRODUCT DATA =====
const products = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        category: "electronics",
        price: 2999,
        originalPrice: 5999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        rating: 4.8,
        reviews: 234,
        badge: "sale",
        description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
        sizes: [],
        colors: ["#000000","#FFFFFF","#1E3A5F"],
        inStock: true,
        isNew: false
    },
    {
        id: 2,
        name: "Classic Leather Watch",
        category: "fashion",
        price: 3499,
        originalPrice: 6999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        rating: 4.9,
        reviews: 189,
        badge: "hot",
        description: "Elegant leather watch with premium craftsmanship, water-resistant.",
        sizes: [],
        colors: ["#8B4513","#000000","#1C1C1C"],
        inStock: true,
        isNew: false
    },
    {
        id: 3,
        name: "Running Sport Shoes",
        category: "sports",
        price: 2499,
        originalPrice: 4499,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        rating: 4.7,
        reviews: 312,
        badge: "sale",
        description: "Lightweight running shoes with cushioned sole and breathable mesh.",
        sizes: ["S","M","L","XL"],
        colors: ["#FF0000","#000000","#FFFFFF","#0000FF"],
        inStock: true,
        isNew: false
    },
    {
        id: 4,
        name: "Designer Sunglasses",
        category: "fashion",
        price: 1499,
        originalPrice: 2999,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500",
        rating: 4.6,
        reviews: 156,
        badge: "new",
        description: "UV400 protection designer sunglasses with polarized lenses.",
        sizes: [],
        colors: ["#000000","#8B4513","#FFD700"],
        inStock: true,
        isNew: true
    },
    {
        id: 5,
        name: "Smart Fitness Band",
        category: "electronics",
        price: 1999,
        originalPrice: 3999,
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500",
        rating: 4.5,
        reviews: 278,
        badge: "sale",
        description: "Track fitness with heart rate monitor, sleep tracker, 10-day battery.",
        sizes: [],
        colors: ["#000000","#1E90FF","#FF69B4"],
        inStock: true,
        isNew: false
    },
    {
        id: 6,
        name: "Ceramic Plant Pot Set",
        category: "home",
        price: 899,
        originalPrice: 1599,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500",
        rating: 4.8,
        reviews: 92,
        badge: "new",
        description: "Beautiful ceramic plant pots set of 3, perfect for indoor plants.",
        sizes: ["S","M","L"],
        colors: ["#FFFFFF","#D4A574","#6B7B3A"],
        inStock: true,
        isNew: true
    },
    {
        id: 7,
        name: "Luxury Face Serum",
        category: "beauty",
        price: 1299,
        originalPrice: 2499,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500",
        rating: 4.9,
        reviews: 445,
        badge: "hot",
        description: "Premium vitamin C face serum with hyaluronic acid for glowing skin.",
        sizes: [],
        colors: [],
        inStock: true,
        isNew: false
    },
    {
        id: 8,
        name: "Bluetooth Portable Speaker",
        category: "electronics",
        price: 1799,
        originalPrice: 3499,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
        rating: 4.6,
        reviews: 167,
        badge: "sale",
        description: "Waterproof portable speaker with 360 surround sound and 12-hour playtime.",
        sizes: [],
        colors: ["#000000","#FF4500","#4169E1"],
        inStock: true,
        isNew: false
    },
    {
        id: 9,
        name: "Yoga Mat Premium",
        category: "sports",
        price: 999,
        originalPrice: 1999,
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500",
        rating: 4.7,
        reviews: 203,
        badge: "new",
        description: "Extra thick non-slip yoga mat with carrying strap.",
        sizes: [],
        colors: ["#800080","#4169E1","#2E8B57","#FF69B4"],
        inStock: true,
        isNew: true
    },
    {
        id: 10,
        name: "Scented Candle Set",
        category: "home",
        price: 799,
        originalPrice: 1499,
        image: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=500",
        rating: 4.8,
        reviews: 134,
        badge: "hot",
        description: "Luxury scented soy candles set of 4 with natural essential oils.",
        sizes: [],
        colors: [],
        inStock: true,
        isNew: false
    },
    {
        id: 11,
        name: "Cotton Casual T-Shirt",
        category: "fashion",
        price: 699,
        originalPrice: 1299,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
        rating: 4.5,
        reviews: 456,
        badge: "sale",
        description: "Premium 100% cotton t-shirt, comfortable fit, multiple colors.",
        sizes: ["S","M","L","XL","XXL"],
        colors: ["#FFFFFF","#000000","#1C1C1C","#1E90FF","#FF6347"],
        inStock: true,
        isNew: false
    },
    {
        id: 12,
        name: "Anti-Aging Night Cream",
        category: "beauty",
        price: 1599,
        originalPrice: 2999,
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500",
        rating: 4.7,
        reviews: 289,
        badge: "hot",
        description: "Advanced anti-aging night cream with retinol and peptides.",
        sizes: [],
        colors: [],
        inStock: true,
        isNew: false
    }
];

const categories = [
    { name: "Electronics", count: "120+ Items", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400", filter: "electronics" },
    { name: "Fashion", count: "200+ Items", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400", filter: "fashion" },
    { name: "Home & Living", count: "80+ Items", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400", filter: "home" },
    { name: "Beauty", count: "150+ Items", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400", filter: "beauty" },
    { name: "Sports", count: "90+ Items", image: "https://images.unsplash.com/photo-1461896836934-bd45ba3b84f2?w=400", filter: "sports" }
];

const customerReviews = [
    { name: "Priya Sharma", initial: "P", rating: 5, text: "Amazing quality products! Delivery was super fast and packaging was excellent. Will definitely shop again!", verified: true },
    { name: "Rahul Kumar", initial: "R", rating: 5, text: "Best online shopping experience I have ever had. Products are exactly as shown. Customer service is top-notch!", verified: true },
    { name: "Sneha Patel", initial: "S", rating: 4, text: "Great collection and reasonable prices. The quality exceeded my expectations. Highly recommend ShopElite!", verified: true },
    { name: "Amit Singh", initial: "A", rating: 5, text: "Shopping here for months. Never disappointed! The deals are incredible and delivery is always on time.", verified: true },
    { name: "Divya Reddy", initial: "D", rating: 5, text: "Love the variety of products. Website is easy to navigate and checkout process is smooth. 10/10!", verified: true },
    { name: "Karan Mehta", initial: "K", rating: 4, text: "Ordered multiple times and every order has been perfect. Great quality and amazing customer support.", verified: true }
];

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('shopelite_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('shopelite_wishlist')) || [];
let currentFilter = 'all';
let currentSort = 'featured';
let displayedProducts = 8;
let currentSlide = 0;
let appliedCoupon = null;
let currentQuickViewProduct = null;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 1500);
    renderCategories();
    renderProducts();
    renderTrending();
    renderReviews();
    updateCartUI();
    updateWishlistUI();
    initSlider();
    initCountdown();
    initEventListeners();
    initScrollEffects();
});

// ===== RENDER FUNCTIONS =====
function renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    grid.innerHTML = categories.map(cat => `
        <div class="category-card" onclick="filterByCategory('${cat.filter}')">
            <img src="${cat.image}" alt="${cat.name}" loading="lazy">
            <div class="category-overlay">
                <h3>${cat.name}</h3>
                <span>${cat.count}</span>
            </div>
        </div>
    `).join('');
}

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    let filtered = currentFilter === 'all' ? [...products] : products.filter(p => p.category === currentFilter);
    switch(currentSort) {
        case 'price-low': filtered.sort((a,b) => a.price - b.price); break;
        case 'price-high': filtered.sort((a,b) => b.price - a.price); break;
        case 'rating': filtered.sort((a,b) => b.rating - a.rating); break;
        case 'newest': filtered.sort((a,b) => (b.isNew ? 1:0) - (a.isNew ? 1:0)); break;
    }
    const toShow = filtered.slice(0, displayedProducts);
    grid.innerHTML = toShow.map(product => {
        const discount = Math.round((1 - product.price / product.originalPrice) * 100);
        const isWishlisted = wishlist.includes(product.id);
        const badgeClass = product.badge === 'sale' ? 'badge-sale' : product.badge === 'new' ? 'badge-new' : 'badge-hot';
        const badgeText = product.badge === 'sale' ? discount + '% OFF' : product.badge === 'new' ? 'NEW' : 'HOT';
        return `
            <div class="product-card" data-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <div class="product-badges">
                        <span class="badge-label ${badgeClass}">${badgeText}</span>
                    </div>
                    <div class="product-actions">
                        <button class="product-action-btn ${isWishlisted ? 'wishlisted':''}" onclick="toggleWishlist(${product.id})">
                            <i class="fas fa-heart"></i>
                        </button>
                        <button class="product-action-btn" onclick="openQuickView(${product.id})">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="product-action-btn" onclick="shareProduct(${product.id})">
                            <i class="fas fa-share-alt"></i>
                        </button>
                    </div>
                    <div class="product-quick-add">
                        <button onclick="addToCart(${product.id})">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                    </div>
                </div>
                <div class="product-info" onclick="openQuickView(${product.id})">
                    <div class="product-category-label">${product.category}</div>
                    <h3>${product.name}</h3>
                    <div class="product-rating">
                        <span class="stars">${getStars(product.rating)}</span>
                        <span class="count">(${product.reviews})</span>
                    </div>
                    <div class="product-price">
                        <span class="current-price">Rs.${product.price.toLocaleString()}</span>
                        <span class="original-price">Rs.${product.originalPrice.toLocaleString()}</span>
                        <span class="discount-badge">${discount}% off</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (displayedProducts >= filtered.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
    }
}

function renderTrending() {
    const scroll = document.getElementById('trendingScroll');
    const trending = [...products].sort((a,b) => b.reviews - a.reviews).slice(0, 8);
    scroll.innerHTML = trending.map(p => `
        <div class="trending-card" onclick="openQuickView(${p.id})">
            <img src="${p.image}" alt="${p.name}" loading="lazy">
            <div class="trending-info">
                <h4>${p.name}</h4>
                <div class="trending-price">
                    <strong>Rs.${p.price.toLocaleString()}</strong>
                    <span>Rs.${p.originalPrice.toLocaleString()}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderReviews() {
    const grid = document.getElementById('reviewsGrid');
    grid.innerHTML = customerReviews.map(r => `
        <div class="review-card">
            <div class="review-header">
                <div class="review-avatar">${r.initial}</div>
                <div>
                    <div class="review-name">${r.name}</div>
                    <div class="review-stars">${getStars(r.rating)}</div>
                </div>
            </div>
            <p class="review-text">"${r.text}"</p>
            ${r.verified ? '<span class="review-verified"><i class="fas fa-check-circle"></i> Verified Purchase</span>' : ''}
        </div>
    `).join('');
}

// ===== CART FUNCTIONS =====
function addToCart(productId, qty = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += qty;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: qty
        });
    }
    saveCart();
    updateCartUI();
    showToast('success', product.name + ' added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    showToast('warning', 'Item removed from cart');
}

function updateCartQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('shopelite_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItemCount = document.getElementById('cartItemCount');
    const cartItems = document.getElementById('cartItems');
    const cartFooter = document.getElementById('cartFooter');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartItemCount.textContent = totalItems;
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <p>Your cart is empty</p>
                <a href="#products" class="btn btn-primary" onclick="closeCart()">Continue Shopping</a>
            </div>`;
        cartFooter.style.display = 'none';
        return;
    }
    cartFooter.style.display = 'block';
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <div class="cart-item-price">Rs.${item.price.toLocaleString()}</div>
                <div class="cart-item-qty">
                    <button onclick="updateCartQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateCartQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    `).join('');
    updateCartSummary();
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 499 ? 0 : 49;
    let discount = 0;
    if (appliedCoupon === 'FIRST10') {
        discount = Math.round(subtotal * 0.1);
    }
    const total = subtotal + shipping - discount;
    document.getElementById('cartSubtotal').textContent = 'Rs.' + subtotal.toLocaleString();
    document.getElementById('cartShipping').textContent = shipping === 0 ? 'FREE' : 'Rs.' + shipping;
    document.getElementById('cartDiscount').textContent = '-Rs.' + discount.toLocaleString();
    document.getElementById('cartTotal').textContent = 'Rs.' + total.toLocaleString();
}

// ===== WISHLIST =====
function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast('warning', 'Removed from wishlist');
    } else {
        wishlist.push(productId);
        showToast('success', 'Added to wishlist!');
    }
    localStorage.setItem('shopelite_wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
    renderProducts();
}

function updateWishlistUI() {
    document.getElementById('wishlistCount').textContent = wishlist.length;
}

// ===== QUICK VIEW =====
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    currentQuickViewProduct = product;
    const discount = Math.round((1 - product.price / product.originalPrice) * 100);
    document.getElementById('quickViewImage').src = product.image;
    document.getElementById('qvCategory').textContent = product.category.toUpperCase();
    document.getElementById('qvName').textContent = product.name;
    document.getElementById('qvRating').innerHTML = '<span class="stars">' + getStars(product.rating) + '</span><span class="count">' + product.rating + ' (' + product.reviews + ' reviews)</span>';
    document.getElementById('qvPrice').textContent = 'Rs.' + product.price.toLocaleString();
    document.getElementById('qvOriginal').textContent = 'Rs.' + product.originalPrice.toLocaleString();
    document.getElementById('qvDiscount').textContent = discount + '% off';
    document.getElementById('qvDescription').textContent = product.description;
    document.getElementById('qvQuantity').value = 1;
    const sizesDiv = document.getElementById('qvSizes');
    if (product.sizes.length > 0) {
        sizesDiv.innerHTML = '<h4>Size</h4><div class="size-options">' + product.sizes.map((s,i) =>
            '<button class="size-option ' + (i === 0 ? 'active' : '') + '" onclick="selectSize(this)">' + s + '</button>'
        ).join('') + '</div>';
        sizesDiv.style.display = 'block';
    } else {
        sizesDiv.style.display = 'none';
    }
    const colorsDiv = document.getElementById('qvColors');
    if (product.colors.length > 0) {
        colorsDiv.innerHTML = '<h4>Color</h4><div class="color-options">' + product.colors.map((c,i) =>
            '<button class="color-option ' + (i === 0 ? 'active' : '') + '" style="background:' + c + '" onclick="selectColor(this)"></button>'
        ).join('') + '</div>';
        colorsDiv.style.display = 'block';
    } else {
        colorsDiv.style.display = 'none';
    }
    document.getElementById('quickViewModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function selectSize(el) {
    el.parentElement.querySelectorAll('.size-option').forEach(s => s.classList.remove('active'));
    el.classList.add('active');
}

function selectColor(el) {
    el.parentElement.querySelectorAll('.color-option').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
}

// ===== FILTER =====
function filterByCategory(category) {
    currentFilter = category;
    displayedProducts = 8;
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.filter === category);
    });
    renderProducts();
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// ===== HELPERS =====
function getStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

function showToast(type, message) {
    const container = document.getElementById('toastContainer');
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle'
    };
    const toast = document.createElement('div');
    toast.className = 'toast ' + type;
    toast.innerHTML = '<i class="fas ' + icons[type] + ' toast-icon"></i><span class="toast-message">' + message + '</span><button class="toast-close" onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>';
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('active');
    document.getElementById('cartOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

function shareProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    if (navigator.share) {
        navigator.share({
            title: product.name,
            text: 'Check out ' + product.name + ' at Rs.' + product.price + ' on ShopElite!',
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(window.location.href);
        showToast('success', 'Link copied to clipboard!');
    }
                                        }

// ===== SLIDER =====
function initSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dots .dot');
    function goToSlide(index) {
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }
    document.querySelector('.hero-next').addEventListener('click', () => {
        goToSlide((currentSlide + 1) % slides.length);
    });
    document.querySelector('.hero-prev').addEventListener('click', () => {
        goToSlide((currentSlide - 1 + slides.length) % slides.length);
    });
    dots.forEach(dot => {
        dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.slide)));
    });
    setInterval(() => goToSlide((currentSlide + 1) % slides.length), 5000);
}

// ===== COUNTDOWN =====
function initCountdown() {
    function updateCountdown() {
        const now = new Date();
        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);
        const diff = endOfDay - now;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ===== CHECKOUT =====
function initiateCheckout() {
    if (cart.length === 0) {
        showToast('error', 'Your cart is empty!');
        return;
    }
    closeCart();
    document.getElementById('checkoutModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    showStep(1);
}

function showStep(stepNum) {
    document.querySelectorAll('.checkout-step-content').forEach(s => s.style.display = 'none');
    document.getElementById('step' + stepNum).style.display = 'block';
    document.querySelectorAll('.step').forEach(s => {
        const sNum = parseInt(s.dataset.step);
        s.classList.remove('active', 'completed');
        if (sNum === stepNum) s.classList.add('active');
        if (sNum < stepNum) s.classList.add('completed');
    });
}

function showReview() {
    const name = document.getElementById('shipName').value;
    const phone = document.getElementById('shipPhone').value;
    const email = document.getElementById('shipEmail').value;
    const address = document.getElementById('shipAddress').value;
    const city = document.getElementById('shipCity').value;
    const state = document.getElementById('shipState').value;
    const pincode = document.getElementById('shipPincode').value;
    document.getElementById('reviewItems').innerHTML = cart.map(item => `
        <div class="review-item">
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h4>${item.name}</h4>
                <p>Qty: ${item.quantity} x Rs.${item.price.toLocaleString()}</p>
                <strong>Rs.${(item.price * item.quantity).toLocaleString()}</strong>
            </div>
        </div>
    `).join('');
    document.getElementById('reviewAddress').innerHTML = `
        <h4><i class="fas fa-map-marker-alt"></i> Shipping Address</h4>
        <p>${name}<br>${address}<br>${city}, ${state} - ${pincode}<br>
        Phone: ${phone}<br>Email: ${email}</p>
    `;
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 499 ? 0 : 49;
    let discount = 0;
    if (appliedCoupon === 'FIRST10') discount = Math.round(subtotal * 0.1);
    const total = subtotal + shipping - discount;
    document.getElementById('reviewSummary').innerHTML = `
        <div class="summary-row"><span>Subtotal</span><span>Rs.${subtotal.toLocaleString()}</span></div>
        <div class="summary-row"><span>Shipping</span><span>${shipping === 0 ? 'FREE' : 'Rs.' + shipping}</span></div>
        ${discount > 0 ? '<div class="summary-row"><span>Discount</span><span class="discount-text">-Rs.' + discount.toLocaleString() + '</span></div>' : ''}
        <div class="summary-row total"><span>Total</span><span>Rs.${total.toLocaleString()}</span></div>
    `;
    showStep(2);
}

function processPayment() {
    showStep(3);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 499 ? 0 : 49;
    let discount = 0;
    if (appliedCoupon === 'FIRST10') discount = Math.round(subtotal * 0.1);
    const total = subtotal + shipping - discount;
    const name = document.getElementById('shipName').value;
    const email = document.getElementById('shipEmail').value;
    const phone = document.getElementById('shipPhone').value;
    const options = {
        key: 'rzp_test_YourTestKeyHere',
        amount: total * 100,
        currency: 'INR',
        name: 'ShopElite',
        description: 'Order - ' + cart.length + ' items',
        image: 'https://img.icons8.com/fluency/96/shopping-bag.png',
        handler: function(response) {
            orderSuccess(response.razorpay_payment_id);
        },
        prefill: { name: name, email: email, contact: phone },
        theme: { color: '#6C5CE7' },
        modal: {
            ondismiss: function() {
                showStep(2);
                showToast('warning', 'Payment cancelled');
            }
        }
    };
    try {
        const razorpay = new Razorpay(options);
        razorpay.open();
    } catch(err) {
        setTimeout(() => {
            orderSuccess('demo_' + Date.now());
        }, 2000);
    }
}

function orderSuccess(paymentId) {
    document.getElementById('checkoutModal').classList.remove('active');
    const orderId = 'SE' + Date.now().toString().slice(-8);
    document.getElementById('orderId').textContent = orderId;
    document.getElementById('successModal').classList.add('active');
    const orderData = {
        orderId: orderId,
        paymentId: paymentId,
        items: cart,
        customer: {
            name: document.getElementById('shipName').value,
            email: document.getElementById('shipEmail').value,
            phone: document.getElementById('shipPhone').value,
            address: document.getElementById('shipAddress').value,
            city: document.getElementById('shipCity').value,
            state: document.getElementById('shipState').value,
            pincode: document.getElementById('shipPincode').value
        },
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        date: new Date().toISOString()
    };
    let orders = JSON.parse(localStorage.getItem('shopelite_orders') || '[]');
    orders.push(orderData);
    localStorage.setItem('shopelite_orders', JSON.stringify(orders));
    cart = [];
    saveCart();
    updateCartUI();
    appliedCoupon = null;
}

// ===== SEARCH =====
function searchProducts(query) {
    const results = document.getElementById('searchResults');
    if (!query.trim()) { results.innerHTML = ''; return; }
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
    );
    if (filtered.length === 0) {
        results.innerHTML = '<p style="padding:20px;text-align:center;color:#999;">No products found</p>';
        return;
    }
    results.innerHTML = filtered.map(p => `
        <div class="search-result-item" onclick="openQuickView(${p.id}); closeSearch();">
            <img src="${p.image}" alt="${p.name}">
            <div class="info">
                <h4>${p.name}</h4>
                <span>Rs.${p.price.toLocaleString()}</span>
            </div>
        </div>
    `).join('');
}

function closeSearch() {
    document.getElementById('searchOverlay').classList.remove('active');
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').innerHTML = '';
}

// ===== EVENT LISTENERS =====
function initEventListeners() {
    document.getElementById('cartToggle').addEventListener('click', () => {
        document.getElementById('cartSidebar').classList.add('active');
        document.getElementById('cartOverlay').classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    document.getElementById('cartClose').addEventListener('click', closeCart);
    document.getElementById('cartOverlay').addEventListener('click', closeCart);
    document.getElementById('searchToggle').addEventListener('click', () => {
        document.getElementById('searchOverlay').classList.toggle('active');
        document.getElementById('searchInput').focus();
    });
    document.getElementById('searchClose').addEventListener('click', closeSearch);
    document.getElementById('searchInput').addEventListener('input', (e) => searchProducts(e.target.value));
    document.getElementById('searchBtn').addEventListener('click', () => {
        searchProducts(document.getElementById('searchInput').value);
    });
    document.getElementById('mobileMenuBtn').addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.add('active');
        document.getElementById('mobileOverlay').classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    const closeMobileMenu = () => {
        document.getElementById('mobileMenu').classList.remove('active');
        document.getElementById('mobileOverlay').classList.remove('active');
        document.body.style.overflow = '';
    };
    document.getElementById('mobileMenuClose').addEventListener('click', closeMobileMenu);
    document.getElementById('mobileOverlay').addEventListener('click', closeMobileMenu);
    document.querySelectorAll('.mobile-nav-links a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    document.getElementById('userToggle').addEventListener('click', () => {
        document.getElementById('authModal').classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    document.getElementById('authClose').addEventListener('click', () => {
        document.getElementById('authModal').classList.remove('active');
        document.body.style.overflow = '';
    });
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById('loginForm').style.display = tab.dataset.tab === 'login' ? 'block' : 'none';
            document.getElementById('registerForm').style.display = tab.dataset.tab === 'register' ? 'block' : 'none';
        });
    });
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('success', 'Logged in successfully!');
        document.getElementById('authModal').classList.remove('active');
        document.body.style.overflow = '';
    });
    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('success', 'Registration successful!');
        document.getElementById('authModal').classList.remove('active');
        document.body.style.overflow = '';
    });
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            currentFilter = tab.dataset.filter;
            displayedProducts = 8;
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderProducts();
        });
    });
    document.getElementById('sortSelect').addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderProducts();
    });
    document.getElementById('loadMoreBtn').addEventListener('click', () => {
        displayedProducts += 4;
        renderProducts();
    });
    document.getElementById('quickViewClose').addEventListener('click', () => {
        document.getElementById('quickViewModal').classList.remove('active');
        document.body.style.overflow = '';
    });
    document.getElementById('qvMinus').addEventListener('click', () => {
        const input = document.getElementById('qvQuantity');
        if (parseInt(input.value) > 1) input.value = parseInt(input.value) - 1;
    });
    document.getElementById('qvPlus').addEventListener('click', () => {
        const input = document.getElementById('qvQuantity');
        input.value = parseInt(input.value) + 1;
    });
    document.getElementById('qvAddToCart').addEventListener('click', () => {
        if (currentQuickViewProduct) {
            addToCart(currentQuickViewProduct.id, parseInt(document.getElementById('qvQuantity').value));
            document.getElementById('quickViewModal').classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    document.getElementById('qvBuyNow').addEventListener('click', () => {
        if (currentQuickViewProduct) {
            addToCart(currentQuickViewProduct.id, parseInt(document.getElementById('qvQuantity').value));
            document.getElementById('quickViewModal').classList.remove('active');
            document.body.style.overflow = '';
            initiateCheckout();
        }
    });
    document.getElementById('applyCoupon').addEventListener('click', () => {
        const code = document.getElementById('couponInput').value.trim().toUpperCase();
        if (code === 'FIRST10') {
            appliedCoupon = 'FIRST10';
            updateCartSummary();
            showToast('success', 'Coupon applied! 10% discount added');
        } else {
            showToast('error', 'Invalid coupon code');
        }
    });
    document.getElementById('checkoutBtn').addEventListener('click', initiateCheckout);
    document.getElementById('checkoutClose').addEventListener('click', () => {
        document.getElementById('checkoutModal').classList.remove('active');
        document.body.style.overflow = '';
    });
    document.getElementById('shippingForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showReview();
    });
    document.getElementById('backToShipping').addEventListener('click', () => showStep(1));
    document.getElementById('proceedToPayment').addEventListener('click', processPayment);
    document.getElementById('successClose').addEventListener('click', () => {
        document.getElementById('successModal').classList.remove('active');
        document.body.style.overflow = '';
    });
    document.getElementById('newsletterForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('success', 'Subscribed! Check email for 10% off code.');
        e.target.reset();
    });
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('success', 'Message sent! We will get back to you soon.');
        e.target.reset();
    });
    document.getElementById('backToTop').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.getElementById('wishlistToggle').addEventListener('click', () => {
        if (wishlist.length === 0) {
            showToast('warning', 'Your wishlist is empty');
            return;
        }
        showToast('success', 'You have ' + wishlist.length + ' items in wishlist');
    });
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    document.getElementById('mobileLogin').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('mobileMenu').classList.remove('active');
        document.getElementById('mobileOverlay').classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            document.getElementById('authModal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }, 300);
    });
}

// ===== SCROLL EFFECTS =====
function initScrollEffects() {
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.product-card, .category-card, .review-card, .feature-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}
