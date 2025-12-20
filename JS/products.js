let products = document.getElementById("products");
let images = document.querySelector(".images");
let container = document.querySelector(".container")
let searchInput = document.querySelector(".Search");
let searchMessage = document.querySelector(".searchMessage")
let cart = document.querySelector(".cart_img")
let cartPage = document.querySelector(".cartPage")
let menu = document.querySelector(".menu-icon")
let anchors = document.querySelector(".anchors")
let actions = document.querySelector(".actions")


function toggleMenu(){
    anchors.classList.toggle("hide")
    actions.classList.toggle("hide")
}




let data = localStorage.getItem('data') || [];
data = JSON.parse(data)
console.log(data);

const generate = (data) => {

  container.innerHTML = "";

  for(i = 0; i < data.length; i++){
    container.innerHTML += 
    `
        <a href="description.html?name=${data[i].name}" class="product" >
          <div >
            <img src=${data[i].image} alt="image loading" />
            <div class="desc">
              <p><strong>${data[i].name}</strong></p>
              <p>${data[i].Price}</p>
            </div>
          </div>
        </a>
    `
  }


}

generate(data)




const Categories = (data) => {
    let input = document.querySelector(".input");
    let selectedCategory = input.value;
    console.log("selected category is:", selectedCategory);
    if(selectedCategory == "All"){
      return data;
    }
    let filtered = data.filter((item) => item.category === selectedCategory) 
    console.log(" the number of ", selectedCategory , "is", filtered.length )
    generate(filtered);
    return filtered
}
  
    

const Company = (data) => {
  let input2 = document.querySelector(".input2");
  let selectedCompany = input2.value;
  console.log("the selected compny is:", selectedCompany);
  if(selectedCompany == "All"){
    return data;
  }
  let company = data.filter((item) => item.Company === selectedCompany);
  console.log("the number of items for this company is", company.length);
  generate(company);
  return company;
}



function Search() {
  let searched = [];
  let searchedItem = searchInput.value;

  searched = data.filter((item) => item.name.toLowerCase().includes(searchedItem));
  if (data.length == 0) {
    return; 
  } else if( searched.length == 0){
    searchMessage.innerText = "Item not found";
  } else {
    searchMessage.innerText = "";
  }
  

  generate(searched);

}


