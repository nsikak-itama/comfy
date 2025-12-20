 let message = document.querySelector(".message")
let length = document.getElementById("length")
let cartProduct = document.querySelector(".container")
let box = document.querySelector(".box")

const category = new URLSearchParams(window.location.search)
const itemCat = category.get('category')

let data = localStorage.getItem('data');
data = JSON.parse(data)

let product = data.find(item => item.category == itemCat)
 


let cart1 = [
    //   {
    //     name: "Avant-Garde Lamp",
    //     Price: 179.9,
    //     image: "images/pexels-photo-2082090.jpeg",
    //     id: 1,
    //     category: "Lamp",
    //     Company:"Modenza"
    // }
] 


let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
function addToCart(){
  
  
}
  
function generateItem(){
    for(i in cart){
        cartProduct.innerHTML = `
              <div class="details">
            <div>
              <img src=${cart[i].image} alt="" />
            </div>
    
            <div class="colum">
              <strong>${cart[i].name}</strong>
    
              <p>${cart[i].Company}</p>
    
              <p>Color:</p>
            </div>
    
            <div class="column">
              <p>Amount</p>
              <input type="text" class="input" />
            </div>
    
            <p>${cart[i].Price}</p>
          </div>
    
          <div class="total">
            <div class="numbers">
              <div class="number">
                <p>Subtotal</p>
                <p>$339.99</p>
              </div>
              <div class="number">
                <p>Shipping</p>
                <p>$5.00</p>
              </div>
              <div class="number">
                <p>Tax</p>
                <p>$34.00</p>
              </div>
    
              <div class="number">
                <p>Order Total</p>
                <p>$378.99</p>
              </div>
            </div>
            <button class="submit">Submit</button>
          </div>
        `

    }
}

generateItem()


if(cart.length == 0){
    message.innerText = "You cart is empty"
}


let items = [{
    name: "Avant-Garde Lamp",
    Price: 179.9,
    image: "images/pexels-photo-2082090.jpeg",
    id: 1,
    category: "Lamp",
    Company:"Modenza"
},
{
    name: "Chic char", 
    Price: 339.9,
    image: "images/pexels-photo-6758398.jpeg",
    id: 2,
    category: "Chairs",
    Company:"Modenza"

}]