//section Product
let product=document.querySelector(".product")
let productImg=document.querySelector(".product img");
let productContent=document.querySelector(".product .content");

window.addEventListener("scroll",() => {
   if(window.scrollY >= product.offsetTop -200){
      productImg.classList.add("back");
      productContent.classList.add("back");
      console.log(productImg);

   }
})
