let message = document.querySelector(".message")
let length = document.getElementById("length")
let cartProduct = document.querySelector(".container")
let total = document.querySelector(".total")
let box = document.querySelector(".box")
let details = document.querySelector(".details")
let hold = document.querySelector(".hold")
const category = new URLSearchParams(window.location.search)
const itemCat = category.get('category')

let data = localStorage.getItem('data');
data = JSON.parse(data)



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
length.innerText = cart.length;


  

  
function generateItem(){
    for(i in cart){
        hold.innerHTML += `
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
              <p class="remove" onclick="removeItem(${cart[i].id})">Remove</p>
            </div>
    
            <p>${cart[i].Price}</p>
        </div>
          `
        }

        let result = cart.reduce((sum, item) => { 
          return sum + item.Price
        } , 0)
        
        total.innerHTML = `
          <div class="numbers">
            <div class="number">
              <p>Subtotal</p>
              <p>${result}</p>
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
              <p>${result + 5.00 + 34.00}</p>
            </div>
          </div>
          <button class="submit">Submit</button>
    
    `


    console.log('$' + result)
}

generateItem()


if(cart.length == 0){
    message.innerText = "You cart is empty"
}



function removeItem(id){
  let selectedItem = cart.find(item => item.id == id);
  cart = cart.filter(item => item.id !== selectedItem.id);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload(); 
}

// function removeItem(id) {
//   cart = cart.filter(item => item.id !== id);
//   localStorage.setItem("cart", JSON.stringify(cart));
//   location.reload(); // Re-render the page
// }



let result ;



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