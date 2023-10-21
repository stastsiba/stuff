const shoseCard = document.querySelector('.shose__card');
const shoseBtn = document.querySelector('.shose__btn-wrapper');
const inpSearch = document.querySelector('.shoce__inp-product');
let page = 1;

const getShoceCard = (title = '') => {
  fetch(`http://localhost:3000/products?_page=${page}&_limit=5&title_like=${title}`)
    .then((res) => res.json())
    .then((res) => {
      shoseCard.innerHTML = '';
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
      });
    });
};
getShoceCard();

const getPageCount = (title = '') => {
  fetch(`http://localhost:3000/products?title_like=${title}`)
    .then((res) => res.json())
    .then((res) => {
      shoseBtn.innerHTML = '';
      for (let i = 1; i <= Math.ceil(res.length / 5); i++) {
        shoseBtn.innerHTML += `<button style="background: ${
          page === i ? '#6c3eb8' : '#090909'
        }" data-id = "${i}" class="shose__btn btn">${i}</button>`;
      }
      let paginationsBtns = document.querySelectorAll('.btn');
      Array.from(paginationsBtns).forEach((item) => {
        item.addEventListener('click', () => {
          page = +item.dataset.id;
          Array.from(paginationsBtns).forEach((el) => {
            console.log(el);
            if (el.dataset.id === item.dataset.id) {
              el.style.background = '#6c3eb8';
            } else {
              el.style.background = '#090909';
            }
          });
          getShoceCard();
        });
      });
    });
};
getPageCount();

inpSearch.addEventListener('input', (e) => {
  getPageCount(inpSearch.value);
  getShoceCard(inpSearch.value);
});
