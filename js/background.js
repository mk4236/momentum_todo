let images;

document.addEventListener("DOMContentLoaded", function() {
    setImage();
    printBackgroundImage();
});

function setImage() {
    images = [
        "bg00001.jpg",
        "bg00002.jpg",
        "bg00003.jpg",
        "bg00004.jpg",
        "bg00005.jpg",
    ];
}

function printBackgroundImage() {
    const todayBg = images[Math.floor(Math.random() * images.length)];
    const body = document.querySelector("body");

    document.body.style.backgroundImage = `url('img/${todayBg}')`;
}




