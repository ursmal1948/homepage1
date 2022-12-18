{
    const songTitle = document.querySelector(".table__songTitle");

    onChangeBackgroundClick = () => {
        const body = document.querySelector(".body");
        const buttonName = document.querySelector(".section__buttonName");

        body.classList.toggle("blue");

        buttonName.innerText = body.classList.contains("blue")
            ? "jasny" :
            "niebieski";

        if (body.classList.contains("blue")) {
            songTitle.innerText = "Afterski";
        } else {
            songTitle.innerText = "Mythos";
        }
    }
    const button = document.querySelector(".section__button");

    button.addEventListener("click", onChangeBackgroundClick);




    onChangeFavoriteSongClick = () => {
        const song1 = "Vi kan kjøpe hele Sverige"
        const song2 = "Mythos"
        const song3 = "Afterski"

        const favoriteSong = document.querySelector(".section__favoriteSong");

        favoriteSong.innerText;
        switch (songTitle.innerText) {
            case "Vi kan kjøpe hele Sverige":
                return favoriteSong.innerText = song1;

            case "Mythos":
                return favoriteSong.innerText = song2;

            default:
                return favoriteSong.innerText = song3;

        }
    };
    const songButton = document.querySelector(".section__songButton");


    songButton.addEventListener("click", onChangeFavoriteSongClick);


}