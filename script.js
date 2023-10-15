const trendingBlock = document.querySelector('.tranding__card-wrapper');
const trendingBtn = document.querySelector('.tranding__btn');
const upTo = document.querySelector('.upTo__wrapper');
const upToBtn = document.querySelector('.upTo__footer-btn');

const getTrendingItems = (limit = 5) => {
  fetch(`http://localhost:3000/products?_sort=rating.rate&_order=desc&_limit=${limit}`)
    .then((res) => res.json())
    .then((res) => {
      trendingBlock.innerHTML = '';
      res.forEach((item) => {
        trendingBlock.innerHTML += `
        <div class="tranding__card-wrapper">
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
        </div></div>`;
      });
    });
};
getTrendingItems();

trendingBtn.addEventListener('click', () => {
  if (trendingBtn.textContent === 'See more') {
    getTrendingItems(10);
    trendingBtn.textContent = 'Hide';
  } else {
    getTrendingItems();
    trendingBtn.textContent = 'See more';
  }
});

const getUpTo = (limit = 5) => {
  fetch(`http://localhost:3000/products?price_lte=100&_limit=${limit}`)
    .then((res) => res.json())
    .then((res) => {
      upTo.innerHTML = '';
      res.forEach((item) => {
        upTo.innerHTML += `
        <div class="tranding__card-wrapper">
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
        </div>
        `;
      });
    });
};
getUpTo();

upToBtn.addEventListener('click', () => {
  if (upToBtn.textContent === 'See more') {
    getUpTo(10);
    upToBtn.textContent = 'Hide';
  } else {
    getUpTo();
    upToBtn.textContent = 'See more';
  }
});
