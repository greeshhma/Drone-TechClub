//skye eye working demo

document.addEventListener("DOMContentLoaded", function() {
    const openDemoButton = document.getElementById("openDemo");
    const popupOverlay = document.getElementById("popupOverlay");
    const closeBtn = document.getElementById("closeBtn");

    openDemoButton.addEventListener("click", function() {
        popupOverlay.style.display = "flex";
    });

    closeBtn.addEventListener("click", function() {
        popupOverlay.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === popupOverlay) {
            popupOverlay.style.display = "none";
        }
    });
});


//skye eye drone images

document.addEventListener("DOMContentLoaded", function() {
    const openImagesButton = document.getElementById("openImages");
    const imgpopupOverlay = document.getElementById("imgpopupOverlay");
    const imgcloseBtn = document.getElementById("imgcloseBtn");

    openImagesButton.addEventListener("click", function() {
        imgpopupOverlay.style.display = "flex";
    });

    imgcloseBtn.addEventListener("click", function() {
        imgpopupOverlay.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === imgpopupOverlay) {
            imgpopupOverlay.style.display = "none";
        }
    });
});

//proj 2 working demo

document.addEventListener("DOMContentLoaded", function() {
    const openDemoButton = document.getElementById("openDemo1");
    const popupOverlay1 = document.getElementById("popupOverlay1");
    const closeBtn1 = document.getElementById("closeBtn1");

    openDemoButton.addEventListener("click", function() {
        popupOverlay1.style.display = "flex";
    });

    closeBtn1.addEventListener("click", function() {
        popupOverlay1.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === popupOverlay1) {
            popupOverlay1.style.display = "none";
        }
    });
});

//proj 2 drone imgs

document.addEventListener("DOMContentLoaded", function() {
    const openImagesButton = document.getElementById("openImages1");
    const imgpopupOverlay1 = document.getElementById("imgpopupOverlay1");
    const imgcloseBtn1 = document.getElementById("imgcloseBtn1");

    openImagesButton.addEventListener("click", function() {
        imgpopupOverlay1.style.display = "flex";
    });

    imgcloseBtn1.addEventListener("click", function() {
        imgpopupOverlay1.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === imgpopupOverlay1) {
            imgpopupOverlay1.style.display = "none";
        }
    });
});