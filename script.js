let mainbtn = document.getElementById('openbtn');
let box = document.querySelector('.container');
box.style.display = "none";

let hideOk = document.getElementById('okbtn');

mainbtn.addEventListener('click', ()=>{
  box.style.display = "block";
})

hideOk.addEventListener('click', ()=>{
  box.style.display = "none";
})


