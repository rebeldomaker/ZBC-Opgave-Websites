// carousel aka infinite Slideshow in Belt Loop form
const slideshow = document.createElement("div");
slideshow.className = "slideshow";
const mover = document.createElement("div");
mover.className = "mover-1";

for (let i = 0; i < 12; i++) {
    const slideImg = document.createElement("img");
    slideImg.src = "/about/image_2023-07-30_10-08-06.png";
    slideImg.alt = "3d text";
    mover.appendChild(slideImg);
}
slideshow.appendChild(mover);
contentDiv.appendChild(slideshow);

appendImg("/about/purpleblood.gif", "divider", contentDiv);
appendImg("/about/beanie3.gif", "decoration", contentDiv);

/* Bullshit extras go here*/
// peepy badge
appendImg("peepy.gif", "scroll button", contentDiv, {
    width: 140,
    height: 35,
});