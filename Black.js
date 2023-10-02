const btnLeft= document.querySelector(".left-btn");
const btnRight= document.querySelector(".right-btn");
const tabMenu= document.querySelector(".tab-menu");
const IconVisibility=()=>{
    let scrollLeftValue= Math.ceil(tabMenu.scrollLeft);
    //console.log(scrollLeftValue);
    btnRight.style.display=scrollableWidth>scrollLeftValue ?"block":"none";
    btnLeft.style.display=scrollLeftValue>0 ?"block":"none";
}
btnRight.addEventListener("click", ()=>
{
tabMenu.scrollLeft +=100;
IconVisibility();
});
btnLeft.addEventListener("click", ()=>
{
tabMenu.scrollLeft -=100;
});
windows.onload=function(){
btnRight.style.display= tabMenu.scrollWidth > tabMenu.clientWidth ||tabMenu.scrollWidth >= window.innerWidth ? "block" :"none";
btnLeft.style.display= tabMenu.scrollWidth >= window.innerWidth ? "" :"none"; 
}
window.onresize =function(){
    btnRight.style.display= tabMenu.scrollWidth > tabMenu.clientWidth ||tabMenu.scrollWidth >= window.innerWidth ? "block" :"none";
    btnLeft.style.display= tabMenu.scrollWidth >= window.innerWidth ? "" :"none"; 
let scrollLeftValue= Math.round(tabMenu.scrollLeft);
btnLeft.style.display = scrollLeftValue>0?"block": "none";
}
let activeDrag=false;

tabMenu.addEventListener("mousemove",(drag) =>{
    if(!activeDrag) return;
    tabMenu.scrollLeft-= drag.movementX;
    IconVisibility();
    tabMenu.classList.add("dragging");
});
document.addEventListener("mouseuo", () => {
    activeDrag =false;
    tabMenu.classList.remove("dragging");
})
tabMenu.addEventListener("mousedown",() =>{
   activeDrag=true;
});

const tabs = document.querySelectorAll(".tab");
const tabBtns = document.querySelectorAll(".tab-btn");

const tab_Nav =function(tabBtnClick){
   tabBtns.forEach((tabBtn)=>{
    tabBtn.classList.remove("active");
   });
   tabs.forEach((tab)=>{
tab.classList.remove("active");
   });

    tabBtns[tabBtnClick].classList.add("active");
    tabs[tabBtnClick].classList.add("active");
}
tabBtns.forEach((tabBtn, i) => {
    tabBtn.addEventListener("click", () => {
        tab_Nav(i);
    });
   
});