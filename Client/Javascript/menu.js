const burger = './Assets/burger.jpg'
const menuContainer = document.querySelector('.menu')

const getProducts = () => {
    axios
      .get("https://lepetitplatserver.000webhostapp.com/menu")
      .then((response) => {
        const products = response.data;
        menuContainer.innerHTML = products.map(item => `
        <div class="menu-item">
            <img src=${item.imageURL} alt=${item.names} />
            <h2>${item.names}</h2>
            <p>${item.descriptions?.substring(0, 70) + '...'}</p>
            <div class='price-container'>
                <button>Add to Cart</button>
                <p>${item.amount} Rwf</p>
            </div>
        </div>
    `).join('')
      })
      .catch((error) => console.error(error));
  };
  
  getProducts();