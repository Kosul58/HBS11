// Booking function here
document.getElementById("b11").addEventListener("click", function() {
    document.getElementById("a2").style.display = "flex";
    document.getElementById("a1").style.display = "none";
    document.getElementById("c2").classList.toggle("active");
    document.getElementById("line1").style.display = "block";
});

document.getElementById("b22").addEventListener("click", function() {
    document.getElementById("a3").style.display = "flex";
    document.getElementById("a2").style.display = "none";
    document.getElementById("c3").classList.toggle("active");
    document.getElementById("line2").style.display = "block";
});

document.getElementById("b3").addEventListener("click", function() {
    document.getElementById("a2").style.display = "flex";
    document.getElementById("a3").style.display = "none";
    document.getElementById("c3").classList.remove("active");
    document.getElementById("line2").style.display = "none";
});

document.getElementById("b2").addEventListener("click", function() {
    document.getElementById("a1").style.display = "flex";
    document.getElementById("a2").style.display = "none";
    document.getElementById("c2").classList.remove("active");
    document.getElementById("line1").style.display = "none";
});


/*Select Function Here */
const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    });
});


/*Counter Function Here */
const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
num = document.querySelector(".num");
let a = 1;

plus.addEventListener("click", ()=>{
        a++;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
});

minus.addEventListener("click", ()=>{
if(a > 1){
     a--;
     a = (a < 10) ? "0" + a : a;
     num.innerText = a;
    }
});

const plus1 = document.querySelector(".plus1"),
minus1 = document.querySelector(".minus1"),
num1 = document.querySelector(".num1");
let b = 1;

plus1.addEventListener("click", ()=>{
        b++;
        b = (b < 10) ? "0" + b : b;
        num1.innerText = b;
});

minus1.addEventListener("click", ()=>{
if(b > 1){
     b--;
     b = (b < 10) ? "0" + b : b;
     num1.innerText = b;
    }
});

num2 = document.querySelector(".num22");
let c=1;

/*Calendar Function Here */

var currentDate = new Date();
var formattedDate = currentDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD
document.getElementById("checkin").min = formattedDate;
document.getElementById("checkout").min = formattedDate;



function updateCheckoutMinDate() {
    var checkinDate = new Date(document.getElementById("checkin").value);
    var minCheckoutDate = checkinDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD
    document.getElementById("checkout").min = minCheckoutDate;
}

document.getElementById("checkout").min = maxCheckoutDate;

function calculateDays() {
    var checkinDate = new Date(document.getElementById("checkin").value);
    var checkoutDate = new Date(document.getElementById("checkout").value);

    // Calculate the difference in milliseconds
    var timeDiff = Math.abs(checkoutDate - checkinDate);

    // Convert milliseconds to days
    var numberOfDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

}


/*Roomscontainer Function Here */
function generateContainers() {
    var numberInput = parseInt(document.getElementById("numberInput").value);
    var containerTemplate = document.getElementById("containerTemplate");
    var containerWrapper = document.getElementById("containerWrapper");
    var uniqueIdCounter = 1; 

    containerWrapper.innerHTML = "";
  
    for (var i = 1; i <= numberInput; i++) {
      var containerClone = containerTemplate.content.cloneNode(true);
      var selectMenu = containerClone.querySelector(".select-menu2");
      var selectMenu2 = containerClone.querySelector(".s21");
      var selectMenu3 = containerClone.querySelector(".sm");
      // Assign a unique ID to the select-menu element
      var uniqueId = "11" + uniqueIdCounter;
      var uniqueId2 = "22" + uniqueIdCounter;
      var uniqueId3 = "33" + uniqueIdCounter;

      selectMenu.id = uniqueId;
      selectMenu2.id = uniqueId2;
      selectMenu3.id = uniqueId3;
 
      uniqueIdCounter++;
      containerClone.querySelector(".num22").textContent = i;
      containerWrapper.appendChild(containerClone);
    }

    var optionMenus = document.querySelectorAll(".select-menu2");
  
    optionMenus.forEach(function(optionMenu) {
      var selectBtn = optionMenu.querySelector(".select-btn2");
      var options = optionMenu.querySelectorAll(".options2 li");
      var sBtn_text = optionMenu.querySelector(".sBtn-text2");
  
      selectBtn.addEventListener("click", function() {
        optionMenu.classList.toggle("active");
        });

        options.forEach(function(option) {
            option.addEventListener("click", function() {
              var selectedOption = option.querySelector(".option-text1").innerText;
              sBtn_text.innerText = selectedOption;
              optionMenu.classList.remove("active");
              for(var j=1 ;j <= numberInput ;j++){
                if(selectedOption == "Meeting"){
                    document.getElementById("33" + j).style.display="block";
                    document.getElementById("22" + j).style.display="none";
                }else{
                    document.getElementById("33" + j).style.display="none";
                    document.getElementById("22" + j).style.display="block";
                }
              }
            });
          });
      
      
    });

    var optionMenus3 = document.querySelectorAll(".select-menu3");
  
    optionMenus3.forEach(function(optionMenu3) {
      var selectBtn3 = optionMenu3.querySelector(".select-btn3");
      var options3 = optionMenu3.querySelectorAll(".options3 li");
      var sBtn_text3 = optionMenu3.querySelector(".sBtn-text3");
  
      selectBtn3.addEventListener("click", function() {
        optionMenu3.classList.toggle("active");
        });

        options3.forEach(function(option) {
            option.addEventListener("click", function() {
              var selectedOption = option.querySelector(".option-text3").innerText;
              sBtn_text3.innerText = selectedOption;
              optionMenu3.classList.remove("active");
            });
          });
    });
}
  

var selectedOption2 = option.querySelector(".option-text1").innerText;