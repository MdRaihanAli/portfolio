let manuButn = document.getElementById('manu_btn');
let modeCheng = document.getElementById('mode_chend');
let body = document.querySelector('body');
let headerArea = document.querySelector('.header');
manuButn.onclick=()=>{
    manuButn.classList.toggle('fa-times');
    headerArea.classList.toggle('active')
}

modeCheng.onclick=()=>{
    modeCheng.classList.toggle('fa-sun');
   body.classList.toggle('active')
}