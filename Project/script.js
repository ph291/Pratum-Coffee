async function loadCoffeeData() {
    try {
        const response = await fetch('data/coffee.json');
        const data = await response.json();
        
        // Populate company info
        document.getElementById('companyName').textContent = data.companyName;
        document.getElementById('tagline').textContent = data.tagline;

        // Populate products
        const productsContainer = document.getElementById('productsContainer');
        data.products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">$${product.price}</p>
            `;
            productsContainer.appendChild(productCard);
        });

        // Populate locations
        const locationsContainer = document.getElementById('locationsContainer');
        data.locations.forEach(location => {
            const locationDiv = document.createElement('div');
            locationDiv.innerHTML = `
                <h3>${location.name}</h3>
                <p>${location.address}</p>
                <p>${location.hours}</p>
            `;
            locationsContainer.appendChild(locationDiv);
        });

        // Populate contact info
        const contactInfo = document.getElementById('contactInfo');
        contactInfo.innerHTML = `
            <p>Email: ${data.contact.email}</p>
            <p>Phone: ${data.contact.phone}</p>
            <div class="social">
                <p>Instagram: ${data.contact.social.instagram}</p>
                <p>Facebook: ${data.contact.social.facebook}</p>
            </div>
        `;

    } catch (error) {
        console.error('Error loading coffee data:', error);
    }
}

// Load data when the page loads
document.addEventListener('DOMContentLoaded', loadCoffeeData); 