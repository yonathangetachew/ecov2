window.onload = function () {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
        let productsHtml = "";
        for (let i = 0; i < data.length; i++) {
          let item = data[i];
  
          let product = `
              
              <div class="product">
        <img src="${item.img}"alt="">
        <h3>${item.title}</h3>
        <p class="price">${item.price}</p>
        <p class="description">${item.description}</p>
      </div>
              
              
              `;
  
          productsHtml += product;
        }
  
        let products = document.getElementsByClassName("products")[0];
        products.innerHTML = productsHtml;
      })
      .catch((err) => console.log(err));
  };