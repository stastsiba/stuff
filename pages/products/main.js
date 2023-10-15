const shoseCard = document.querySelector('.shose__card');

const getShoceCard = () => {
  fetch('http://localhost:3000/products?category=electronics&_limit=5')
    .then((res) => res.json())
    .then((res) =>
      res.forEach((item) => {
        shoseCard.innerHTML += `        <div class="tranding__card-wrapper">
        <div class="tranding__card">
          <img class="tranding__card-image" src="${item.image}" alt="sneakers" />
          <div class="tranding__card-body">
            <div class="tranding__card-title">${item.title}</div>
            <div class="tranding__card-category">${item.category}</div>
            <div class="tranding__card-price-wrapper">
              <div>
                <span class="tranding__card-price">${item.price}$</span>
                <span class="tranding__card-price-sale">${item.price}$</span>
              </div>
              <div class="tranding__card-price-count">${item.rating.count} people purchased</div>
            </div>
          </div>
        </div>
      </div>`;
      }),
    );
};
getShoceCard();
