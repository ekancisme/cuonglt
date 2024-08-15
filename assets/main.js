// menu

const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
})

overlay.addEventListener("click", () => {
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
})

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const viewMoreButton = document.getElementById('view-more-btn');

    viewMoreButton.addEventListener('click', (event) => {
        event.preventDefault();
        const confirmation = confirm("Bạn chắc chắn muốn xem thêm chứ?");
        if (confirmation) {
            window.location.href = "https://www.instagram.com/ltcuong_24/"; 
        } else {
            
            alert("Bạn đã chọn không xem thêm.Vậy tôi cho bạn xem tiktok vậy =)))");
            window.location.href = "https://www.tiktok.com/@ekanc_";
        }
    });
});


