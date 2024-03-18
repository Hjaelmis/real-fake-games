const buyButton = document.querySelector('.add_to_cart_button');
const platformButtons = document.querySelectorAll('.platform_buttons button');

platformButtons.forEach(button => {
  button.addEventListener('click', function() {
    platformButtons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  });
});

buyButton.addEventListener('click', function() {
  const activeButton = [...platformButtons].find(button => button.classList.contains('active'));
  
  if (activeButton) {
    addGameToCart();
    this.innerHTML = 'Sorry, nothing here at the back end of things..';
  } else {
    this.innerHTML = 'Please pick a platform first';
  }
});

function addGameToCart() {
    console.log('Game added to cart! Or something..')
}