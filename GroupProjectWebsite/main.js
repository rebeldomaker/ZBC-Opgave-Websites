const contentDiv = document.getElementById("contentDiv");

function appendImg(src, className, container, styles = {}) {
    const img = document.createElement("img");
    img.src = src;
    img.className = className;

    // Apply custom styles if provided
    if (styles.width) img.style.width = styles.width + "px";
    if (styles.height) img.style.height = styles.height + "px";

    container.appendChild(img);
}

// carousel aka infinite Slideshow in Belt Loop form
const slideshow = document.createElement("div");
slideshow.className = "slideshow";
const mover = document.createElement("div");
mover.className = "mover-1";

for (let i = 0; i < 12; i++) {
    const slideImg = document.createElement("img");
    slideImg.src = "peepy.gif";
    slideImg.alt = "moving image";
    mover.appendChild(slideImg);
}
slideshow.appendChild(mover);
contentDiv.appendChild(slideshow);

// appendImg("/about/purpleblood.gif", "divider", contentDiv);
// appendImg("/about/beanie3.gif", "decoration", contentDiv);

/* Bullshit extras go here*/
// peepy badge

appendImg("peepy.gif", "scroll button", contentDiv, {
    width: 100,
    height: 30,
});