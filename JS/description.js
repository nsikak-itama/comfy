// import { itemData } from "./data";
let length = document.getElementById("cart")
let section = document.querySelector(".section")
let link = document.querySelector(".pageLink")
let cartImage = document.querySelector(".cart_img")

function toggleMenu(){
    anchors.classList.toggle("hide")
}


 

function generateImage(){
  cartImage.innerHTML = `
  <a href="cart.html?category=Lamp" class="pageLink" >
  <img src="images/3f4e372e-1fb4-49bf-a7a6-66d97b773e0a.svg" alt="" />
  </a>
  `
}

generateImage()

//remember that this javascript gets the information from the other html page(product.html)

let data = localStorage.getItem('data');
data = JSON.parse(data)

const name = new URLSearchParams(window.location.search)
const itemName = name.get('name');
console.log(itemName);

let product = data.find(item => item.name == itemName)
console.log(product)



section.innerHTML = `
      <div class="container">
    <div class="img">
      <img src=${product.image} alt="image loading" />
    </div>
    
    <div class="description">
      <h2>${product.name}</h2>
      <strong>${product.Company}</strong>
      <p>
      ${product.description}
      </p>
      <p>Colors</p>
      <div class="circle"></div>

      <div class="inputs">
        <p>Amount</p>
        
        <select name="" id="" class="input">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>

      <button onclick="addToCart()">ADD TO BAG</button>
    </div>
  </div>
`





let cart = JSON.parse(localStorage.getItem("cart")) || [];
length.innerText = cart.length;

function addToCart(){
  
  cart.push(product)
  length.innerText = cart.length;
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(cart.length)
  console.log(cart)
}





