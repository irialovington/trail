// i ate dinner at 6 pm, stayed at my kitchen with my roommate for 
// hmm 3 hours and i lowkey dont want to do this anymore sobs

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

document.addEventListener("mousemove", function(banana) {
    const stuff = document.createElement("div");
    stuff.className = "trail";

    stuff.style.left = (banana.clientX - 7) + "px";
    stuff.style.top = (banana.clientY - 7) + "px";

    document.body.appendChild(stuff);
    setTimeout(() => {
        stuff.style.transform = `scale(0)`;
        stuff.style.opacity = `0`;
    }, 10); // is a semi colon supposed to be there.. maybe hmm idk

    setTimeout(() => {
        stuff.remove();
    }, 700)
});