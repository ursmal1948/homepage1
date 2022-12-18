let button = document.querySelector(".section__button");
let body = document.querySelector(".body");
let buttonName = document.querySelector(".section__buttonName");
let songTitle = document.querySelector(".table__songTitle");


button.addEventListener("click", () => {
    body.classList.toggle("blue");

    buttonName.innerText = body.classList.contains("blue")
        ? "jasny" :
        "niebieski";

    if (body.classList.contains("blue")) {
        songTitle.innerText = "Afterski";
    } else {
        songTitle.innerText = "Mythos";
    }
});



let favoriteSong = document.querySelector(".section__favoriteSong");

let songButton = document.querySelector(".section__songButton");
songButton.addEventListener("click", () => {
    favoriteSong.innerText;
    switch (songTitle.innerText) {
        case "Vi kan kjøpe hele Sverige":
            favoriteSong.innerText = ("Vi kan kjøpe hele Sverige");
            break;
        case "Mythos":
            favoriteSong.innerText = ("Mythos");
            break;
        default:
            favoriteSong.innerText = ("Afterski");
            break;
    }
})

