// ===========================
// Products Data
// ===========================
const products = [
    { id: 1, name: "SHOULDER GUIDE PIN", image: "./assets/images/item1.jpeg" },
    { id: 2, name: "PLAIN GUIDE PIN", image: "./assets/images/item2.jpeg" },
    { id: 3, name: "SHOULDER GUIDE BUSH", image: "./assets/images/item3.jpeg" },
    { id: 4, name: "PLAIN GUIDE BUSH", image: "./assets/images/item4.jpeg" },
    { id: 5, name: "EJECTOR PIN", image: "./assets/images/item7.jpeg" },
    { id: 6, name: "SLEEVE EJECTOR PIN", image: "./assets/images/item8.jpeg" },
    { id: 7, name: "BLADE EJECTOR PIN", image: "./assets/images/item1.jpeg" },
    { id: 8, name: "STEP EJECTOR PIN", image: "./assets/images/item2.jpeg" },
    { id: 9, name: "DIE SPRING", image: "./assets/images/item3.jpeg" },
    { id: 10, name: "SPRUE BUSH", image: "./assets/images/item4.jpeg" },
    { id: 11, name: "AIR EJECTOR", image: "./assets/images/item7.jpeg" },
    { id: 12, name: "GAS VENTS", image: "./assets/images/item8.jpeg" },
    { id: 13, name: "MOULD SPARES", image: "./assets/images/item1.jpeg" },
    { id: 14, name: "TAPER INTERLOCK", image: "./assets/images/item2.jpeg" },
    { id: 15, name: "BALL CAGE", image: "./assets/images/item3.jpeg" },
    { id: 16, name: "BALL PLUNGER", image: "./assets/images/item4.jpeg" },
    { id: 17, name: "MOULD DATE INDICATOR", image: "./assets/images/item7.jpeg" },
    { id: 18, name: "LATCHES", image: "./assets/images/item8.jpeg" },
    { id: 19, name: "SQUARE INTER LOCKS", image: "./assets/images/item1.jpeg" },
    { id: 20, name: "HSS PUNCHES", image: "./assets/images/item2.jpeg" },
    { id: 21, name: "GUIDE POSTS", image: "./assets/images/item3.jpeg" },
    { id: 22, name: "CLAMPS & BOLTS", image: "./assets/images/item4.jpeg" },
    { id: 23, name: "OILLESS BUSH", image: "./assets/images/item7.jpeg" },
    { id: 24, name: "COOLING ACCESSORIES", image: "./assets/images/item8.jpeg" }
];

// ===========================
// Render Products Grid
// ===========================
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = `
            <div class="col-md-6 col-lg-3">
                <div class="product-item">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                    </div>
                    <div class="p-3">
                        <h3 class="product-name h6 mb-3">${product.name}</h3>
                        <a href="contact.html" class="btn btn-outline-secondary btn-sm w-100">
                            Request Quote
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        productsGrid.innerHTML += productCard;
    });
}

// ===========================
// Initialize on Page Load
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
});

// ===========================
// Product Search/Filter (Optional Enhancement)
// ===========================
function filterProducts(searchTerm) {
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="col-12 text-center py-5">
                <p class="text-muted">No products found matching your search.</p>
            </div>
        `;
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = `
            <div class="col-md-6 col-lg-3">
                <div class="product-item">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                    </div>
                    <div class="p-3">
                        <h3 class="product-name h6 mb-3">${product.name}</h3>
                        <a href="contact.html" class="btn btn-outline-secondary btn-sm w-100">
                            Request Quote
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        productsGrid.innerHTML += productCard;
    });
}

// To enable search functionality, add this to your products.html:
// <input type="text" class="form-control mb-4" id="productSearch" placeholder="Search products...">
// And add this event listener:
const productSearch = document.getElementById('productSearch');
if (productSearch) {
    productSearch.addEventListener('input', function(e) {
        filterProducts(e.target.value);
    });
}
