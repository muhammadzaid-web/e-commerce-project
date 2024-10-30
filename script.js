const products=document.getElementById("products");                     //
const nav =document.getElementsByTagName("nav");                      //
const addToCartButtons = document.querySelectorAll(".add-to-cart");   //
const cartIcon = document.querySelector(".cart-icon");                //
const cartQuantity = document.querySelector(".cart-quantity");      //      ACCESSING ELEMENTS
const cartPopup = document.querySelector(".cart-popup");              //
const closeCartButton = document.querySelector(".close-cart");        //
const cartItems = document.querySelector(".cart-items");              //
const cartTotal = document.querySelector(".cart-total span");           //

//-------variable to store product details--------
let cart = [];
let total = 0;

//--------add to cart button function ----------
addToCartButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const productCard = event.target.closest(".product-card");
    const productName = productCard.querySelector("h2").innerText;
    const productPrice = parseInt(productCard.querySelector("p").innerText.replace("Price: $", ""));
    
    cart.push({ name: productName, price: productPrice });
    total += productPrice;
    
    updateCart();

    // console.log(cart);---checking
    // console.log(total);---checking
  });
});
//----------cart button function-------------
cartIcon.addEventListener("click", () => {
  cartPopup.classList.add("active");
  document.body.classList.add("cart-active");
  products.classList.add('dark');
});

//---------------popup close button function-----------------
closeCartButton.addEventListener("click", () => {
   cartPopup.classList.remove("active");
   document.body.classList.remove("cart-active");
   products.classList.remove('dark');
});

//------cart quantity updation----------
function updateCart() {
  cartQuantity.innerText = "(" + cart.length + ")";
  cartItems.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name}:$${item.price}`;
    cartItems.appendChild(li);
  });
  cartTotal.innerText = total;
}