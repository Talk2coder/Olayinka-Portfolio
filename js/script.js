function _$(item) {
    return document.querySelector(item);
}
// Toggle readmore function
const moreText = _$(".moretext");
const readMoreBtn = _$(".readmore_btn");
const scrollBtn = _$(".scrollup_btn");
const year = _$(".year");
const headerMenuIcon = _$(".header__menu");
const headerNavBar = _$(".header_list");

if (readMoreBtn) {
    readMoreBtn.addEventListener("click", () => {
        if (moreText.style.display === "none" || moreText.style.display === "") {
            moreText.style.display = "block";
            readMoreBtn.textContent = "Read Less";
        }
        else {
            moreText.style.display = "none";
            readMoreBtn.textContent = "Read More";
        }
    });
}
window.onscroll = ()=>{
    if(window.scrollY > 100){
        scrollBtn.style.display = "flex"
    }
    else{
        scrollBtn.style.display = "none"

    }
}
if(year){
    year.innerHTML = new Date().getFullYear()
}

headerMenuIcon.addEventListener("click", () => {
  headerNavBar.classList.toggle("header_menu-active");
});