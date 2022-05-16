let manuButn = document.getElementById('manu_btn');
let modeCheng = document.getElementById('mode_chend');
let body = document.querySelector('body');
let headerArea = document.querySelector('.header');
let navItem = document.querySelectorAll('#nav_item a');

manuButn.onclick=()=>{
    manuButn.classList.toggle('fa-times');
    headerArea.classList.toggle('active')
}

modeCheng.onclick=()=>{
    modeCheng.classList.toggle('fa-sun');
   body.classList.toggle('active')
}

for(var i = 0; i<navItem.length;i++){
   let left0 = navItem[i]
    left0.onclick=()=>{
        headerArea.classList.remove('active')
        manuButn.classList.toggle('fa-times');
      }
}
