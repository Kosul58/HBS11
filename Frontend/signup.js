document.getElementById("signupBtn").addEventListener("click", function() {
    document.getElementById("modalContainer2").style.display = "block";
});
  
document.querySelector(".closesignup").addEventListener("click", function() {
    document.getElementById("modalContainer2").style.display = "none";
});
  
var loginPopup = document.getElementById("modalContainer2");
  
window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    loginPopup.style.top = scrollTop + "px";
});

  