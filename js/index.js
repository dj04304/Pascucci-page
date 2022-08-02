const nav = document.querySelectorAll("nav li");
const subMn = document.querySelector(".sub_mn");
const subMnText = document.querySelector(".sub_mn_in");

console.log(nav);
console.log(subMn);

// 마우스를 올렸을 때
for(let i = 0; i < nav.length; i++) {
    nav[i].onmouseover = () => {
        subMn.classList.add("on");
        subMnText.classList.add("act");
   }
}

// 마우스를 땠을 때
for(let i = 0; i < nav.length; i++) {
    subMn.onmouseleave = () => {
        subMn.classList.remove("on");
        subMnText.classList.remove("act");
   }
}

const mobileNav = document.querySelector(".mobile_nav");
const mobileMenu = document.querySelector(".mobile_menu");

console.log(mobileNav);


mobileNav.onclick = () => {
    mobileMenu.classList.toggle("moblie_act")
}