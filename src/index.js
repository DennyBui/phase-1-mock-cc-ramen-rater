// write your code here
const ramenMenu = document.getElementById('ramen-menu');
const ramenDetail = document.getElementById('ramen-detail');
const newRamenForm = document.getElementById('new-ramen');

ramenMenu.addEventListener("DOMContentLoaded", () => {
  fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(ramenList => ramenList.forEach(ramen => addRamenImage(ramen)))
});

function addRamenImage(ramen) {
  const img = document.createElement("img");
  img.src = ramen.img;
  img.classList.add('ramen-photos');
  img.addEventListener("click", () => displayRamenDetail(ramen));
  ramenMenu.appendChild(img);
}

function displayRamenDetail(ramen) {
  const {name, img, restaurant, rating, comment} = ramen;
  document.querySelector('.name').textContent = name;
  document.querySelector('.detail-image').src = img;
  document.querySelector('.restaurant').textContent = restaurant;
  document.getElementById('rating-display').textContent = rating;
  document.getElementById('comment-display').textContent = comment;
}

newRamenForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const restaurant = document.getElementById('restaurant').value;
  const img = document.getElementById('new-image').value;
  const rating = document.getElementById('rating').value;
  const comment = document.getElementById('comment').value;
  const newRamen = { name, img, restaurant, rating, comment };
  addRamenImage(newRamen);
  newRamenForm.reset();
});
