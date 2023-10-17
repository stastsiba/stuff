const shoseCard = document.querySelector('.shose__card');
const btnSecond = document.querySelector('.shoce__btn-second');
const btnFirst = document.querySelector('.shoce__btn-first');

const getShoceCard = (start, end) => {
  fetch(`http://localhost:3000/products?_limit=10&_start=${start}&_end=${end}`)
    .then((res) => res.json())
    .then((res) =>
      res.forEach((item) => {
        shoseCard.innerHTML += `        
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
      </div>`;
      }),
    );
};
getShoceCard(0, 10);

btnSecond.addEventListener('click', () => {
  shoseCard.innerHTML = '';
  btnFirst.style.background = '#090909';
  btnSecond.style.background = '#6c3eb8';
  getShoceCard(10, 20);
});
btnFirst.addEventListener('click', () => {
  btnSecond.style.background = '#090909';
  btnFirst.style.background = '#6c3eb8';
  shoseCard.innerHTML = '';
  getShoceCard(0, 10);
});
