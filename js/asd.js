const images = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

const title = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
];

const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
];

console.log(images);


const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

console.log(images);


const slider = document.querySelector(".slider");
const mdsColumn = document.querySelector(".mds-column");

for(let i = 0; i < images.length; i++){
  const imageContainer = document.createElement("div");
  const imageContainerRight = document.createElement("div");
  slider.append(imageContainer);
  mdsColumn.append(imageContainerRight);

  imageContainer.className = "item";
  imageContainerRight.className = "item-right col";


  imageContainer.innerHTML= `
  <img src=${images[i]} alt="immagine">
  <div class="text-title"><h5>${title[i]}</h5>
  ${text[i]}</div>
  `
  ;

  imageContainerRight.innerHTML=`
  <img class="img-item" src=${images[i]} alt="">   
  `
  ;
  console.log(imageContainer);
  

  if(i == 0){
    imageContainer.classList += (" active");
  }

}

const counter = document.getElementsByClassName("item");
const counterRight = document.getElementsByClassName("img-item");


let index = 0;

if(index == 0){
  counterRight[0].classList += (" border-active");
}

next.addEventListener("click", function(){
  counter[index].classList.remove("active");

  counterRight[index].classList.remove("border-active");
  index++;

  if(index > counter.length -1) index = 0;

  counter[index].classList += (" active");

  counterRight[index].classList += (" border-active");
});

prev.addEventListener("click", function(){
  counter[index].classList.remove("active");

  counterRight[index].classList.remove("border-active");

  index--;

  if(index < 0) index = counter.length -1;

  counter[index].classList += (" active");

  counterRight[index].classList += (" border-active");

});

