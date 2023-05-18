let SlideBtnDiv =document.getElementById("SlideBtnDiv");
let SlideDisplay=document.getElementById("SlideDisplay");
let LeftBtn=document.getElementById("LeftBtn");
let RightBtn=document.getElementById("RightBtn");


let LeftHrefValue = LeftBtn.getAttribute("href");
let RightHrefValue = RightBtn.getAttribute("href");


RightBtn.addEventListener("click",()=>{
    const currentSlide= Number(SlideDisplay.innerText);
    if(currentSlide===3){
        SlideDisplay.innerText=1;
        RightBtn.setAttribute("href", `#item${SlideDisplay.innerText}`)
        return;
    }
 SlideDisplay.innerText=currentSlide+1
    RightBtn.setAttribute("href", `#item${SlideDisplay.innerText}`)
});

LeftBtn.addEventListener("click",()=>{
    const currentSlide= Number(SlideDisplay.innerText);
    if(currentSlide===1){
        SlideDisplay.innerText=3
        LeftBtn.setAttribute("href", `#item${SlideDisplay.innerText}`)
        return;
    }
   const AddedValue= SlideDisplay.innerText=currentSlide-1
   LeftBtn.setAttribute("href", `#item${SlideDisplay.innerText}`)
})

