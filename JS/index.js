
let container = document.querySelector(".container")
let image = document.querySelector(".image")
let anchors = document.querySelector(".anchors")
let actions = document.querySelector(".actions")
let image2 = document.querySelector(".image2")
let imageTrack = document.querySelector(".img-box")
let box = document.querySelector(".carousel")


let data = localStorage.getItem('data') || [];
data = JSON.parse(data)


function toggleMenu(){
    anchors.classList.toggle("hide")
    actions.classList.toggle("hide")
}


const generate = (data) => {
  
  console.log(data)
    container.innerHTML = "";
    for(i = 0; i < data.length; i++){
      container.innerHTML += 
      `
        <a href="description.html" class="product">
          <div >
            <img src=${data[i].image} alt="" />
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



let caroulImages = [
  "/images/pexels-photo-6758398.jpeg",
  "/images/carousel pic 2.jpeg",
  "/images/pexels-photo-1571459.jpeg",
  "/images/pexels-photo-1571452.jpeg",
  "/images/pexels-photo-2177482.jpeg"
]
console.log(caroulImages)

let imageIndex = 0;

imageTrack.innerHTML = "";
for(let i = 0; i < caroulImages.length + 1; i++){
  imageTrack.innerHTML +=`
  <img src=${caroulImages[i]} alt="" class="image"/>
  `
}


function updateCarousel(){
  imageTrack.style.transform = `translateX(-${imageIndex * 100}%)`
};

box.addEventListener("click", () => {
  imageIndex = (imageIndex + 1) % caroulImages.length;
  updateCarousel();
})
 