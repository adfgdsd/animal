let btn=document.querySelector("#btn");
let ul=document.querySelector("#ul");

btn.addEventListener("click",()=>{
    ul.classList.toggle('active');
    btn.classList.toggle('fa-times')
})
