// Script para manejar la lógica de agregar y eliminar productos

// Obtén elementos del DOM
const form = document.getElementById('product-form');
const productContainer = document.getElementById('product-container');

// Escuchar el evento de envío del formulario
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Obtener los datos del formulario
    const category = document.getElementById('category').value;
    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
    const productStock = document.getElementById('product-stock').value;
    const productImage = document.getElementById('product-image').files[0];

    // Crear una tarjeta de producto
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // Si hay una imagen seleccionada, leerla y mostrarla
    if (productImage) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;
            productCard.appendChild(imgElement);
        };
        reader.readAsDataURL(productImage);
    }

    // Agregar detalles del producto
    const productDetails = `
        <h3>${productName}</h3>
        <p>Precio: $${productPrice}</p>
        <p>Stock: ${productStock}</p>
        <button class="delete-btn">Eliminar</button>
    `;
    productCard.innerHTML += productDetails;

    // Botón de eliminar
    productCard.querySelector('.delete-btn').addEventListener('click', () => {
        productCard.remove();
    });

    // Añadir la tarjeta al contenedor
    productContainer.appendChild(productCard);

    // Limpiar el formulario
    form.reset();
});

  