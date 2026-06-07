const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
});

function filterGallery(category){

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        if(category === "all"){
            card.style.display = "block";
        }
        else if(card.classList.contains(category)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

}

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card => {

        const name = card.dataset.name;

        if(name.includes(value)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

});

const cards = document.querySelectorAll(".card");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;

cards.forEach((card,index)=>{

    card.addEventListener("click",()=>{

        currentIndex=index;

        lightbox.style.display="flex";

        lightboxImg.src=
        card.querySelector("img").src;

    });

});

document.querySelector(".close")
.addEventListener("click",()=>{

    lightbox.style.display="none";

});

document.getElementById("next")
.addEventListener("click",()=>{

    currentIndex=
    (currentIndex+1)%cards.length;

    lightboxImg.src=
    cards[currentIndex]
    .querySelector("img").src;

});

document.getElementById("prev")
.addEventListener("click",()=>{

    currentIndex=
    (currentIndex-1+cards.length)%cards.length;

    lightboxImg.src=
    cards[currentIndex]
    .querySelector("img").src;

});