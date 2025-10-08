let products = [
  { condition: "", img: "public/img/product.png", name: "Google", price: 300 },
  { condition: "", img: "public/img/product.png", name: "Google", price: 300 },
  { condition: "new", img: "public/img/product1.png", name: "Apple", price: 500 },
  { condition: "sale", img: "public/img/product.png", name: "Samsung", price: 250 },
  { condition: "limited", img: "public/img/product1.png", name: "Sony", price: 700 },
  { condition: "", img: "public/img/product.png", name: "Dell", price: 450 },
  { condition: "", img: "public/img/product1.png", name: "Dell", price: 450 },
  { condition: "", img: "public/img/product.png", name: "Dell", price: 450 }
];

let container = document.querySelector('.All_product');

products.forEach(p => {
  let body = `
  <div class="product">
            <div class="box">
              <div class="heart">
                <span>${p.condition}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="1.5" d="M22 8.862a5.95 5.95 0 0 1-1.654 4.13c-2.441 2.531-4.809 5.17-7.34 7.608c-.581.55-1.502.53-2.057-.045l-7.295-7.562c-2.205-2.286-2.205-5.976 0-8.261a5.58 5.58 0 0 1 8.08 0l.266.274l.265-.274A5.6 5.6 0 0 1 16.305 3c1.52 0 2.973.624 4.04 1.732A5.95 5.95 0 0 1 22 8.862Z"/></svg>
              </div>
              <img src="${p.img}" alt="image product">
            </div>
            <div class="prices">
              <div class="price">
                <h6>${p.name}</h6>
                <strong>$${p.price}.00</strong>
              </div>
              <img src="public/icon/cart.svg" alt="icon">
            </div>
          </div>
  `;
  container.insertAdjacentHTML("beforeend", body);
});