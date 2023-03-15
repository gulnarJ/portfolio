let menu = document.querySelector("#menu-bars");
let header = document.querySelector('header');

menu.onclick = () =>{
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active', target=== header);
}
