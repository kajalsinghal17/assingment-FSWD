const toggled = document.querySelector('.toggle_btn');
const menu = document.querySelector('.dropdown-menu');
const hell = document.querySelector('#cross');

toggled.onclick=() =>{
    menu.classList.add('active');
}
hell.onclick=() =>{
   menu.classList.remove('active'); 

};