//nav bars
let navbar=document.querySelector("ul.navbar");
let barsIcon=document.querySelector(".bars");

barsIcon.onclick=function(){
   navbar.classList.toggle("show");


}


//home section
let home=document.querySelector(".home");
let homeContent=document.querySelector(".home .content");

window.addEventListener("load",() => {
    homeContent.style.transform="translate(0,0)";
})


//section Product
let product=document.querySelector(".product")
let productImg=document.querySelector(".product .image");
let productContent=document.querySelector(".product .content");

window.addEventListener("scroll",() => {
   if(window.scrollY >= product.offsetTop -200){
      productImg.classList.add("back");
      productContent.classList.add("back");


   }
})



//labtop section
let labtop=document.querySelector(".labtop");
let labtopImg=document.querySelector(".labtop .image");
let labtopContent=document.querySelector(".labtop .content");


window.addEventListener("scroll",() => {
   if(window.scrollY >= labtop.offsetTop -200){
      labtopImg.style.transform="translate(0,0)";
      labtopContent.style.transform="translate(0,0)";

   }
})
