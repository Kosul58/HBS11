// Booking function here

// Get references to the input elements

const inputElement1 = document.getElementById('input1');
const checkinElement = document.getElementById('checkin');
const checkoutElement = document.getElementById('checkout');

// Get a reference to the "Next" button
const nextButton = document.getElementById('b11');

// Add a click event listener to the "Next" button
nextButton.addEventListener('click', function () {
    // Get the values of the input elements
    const inputValue1 = inputElement1.textContent.trim();
    const checkinValue = checkinElement.value.trim();
    const checkoutValue = checkoutElement.value.trim();

    // Check if any of the input values are empty or not provided
    if (inputValue1 =="Select Hotel" || !checkinValue || !checkoutValue) {
        alert('Please provide values for all the inputs.');
    } else {
      document.getElementById("a2").style.display = "flex";
      document.getElementById("a1").style.display = "none";
      document.getElementById("c2").classList.toggle("active");
      document.getElementById("line1").style.display = "block";
    }
});



const inputElement21 = document.getElementById('input2');
const inputElement23 = document.getElementById('input3');
const inputElement24 = document.getElementById('input4');
const inputElement2 = document.getElementById('numberInput');

const nextButton2 = document.getElementById('b22');

nextButton2.addEventListener('click', function () {
  const inputValue11 = inputElement21.textContent.trim();
  const inputValue13 = inputElement23.textContent.trim();
    const inputValue2 = inputElement2.value.trim();
      if (!inputValue2  || inputValue11=="Room Category" || inputValue13=="Room Type") {
        alert('Please provide values for all the inputs.');
      } else {
        document.getElementById("a3").style.display = "flex";
        document.getElementById("a2").style.display = "none";
        document.getElementById("c3").classList.toggle("active");
        document.getElementById("line2").style.display = "block";  
      }
});




//fetchprice
document.getElementById('b22').addEventListener('click', async () => {
  const category = document.getElementById('input2').textContent.trim();
  const type = document.getElementById('input3').textContent.trim();
  const hotelname = document.getElementById('input1').textContent.trim();
  const roomcategory = document.getElementById('input2').textContent.trim();
  const roomtype = document.getElementById('input3').textContent.trim();

  const roomcount = document.getElementById('numberInput').value;
  try {
      const response = await fetch(`/api/getPrice?category=${category}&type=${type}&hname=${hotelname}&acategory=${roomcategory}&atype=${roomtype}&count=${roomcount}`);
      if (!response.ok) {
      }
      const data = await response.json();
      const price = data.price;
      const jsonData=data.jsonData;
      if(jsonData =="1"){
        alert('Room Unavailable')
        document.getElementById('pricehi').style.display="none";
        document.getElementById('b33').style.display="none";
      }
      else{
        totalprice(price)
        document.getElementById('pricehi').style.display="block";
        document.getElementById('b33').style.display="flex";
      }
  } catch (error) {
      console.error('Error:', error);
  }
});

function totalprice(price){
    const adultCountSpan = document.querySelector('.num');
    const childCountSpan = document.querySelector('.num1');

    const adultCount = parseInt(adultCountSpan.textContent, 10);
    const childCount = parseInt(childCountSpan.textContent, 10);

    const tp = adultCount + childCount;

    const checkinDateStr = document.getElementById('checkin').value;
    const checkoutDateStr = document.getElementById('checkout').value;

    const checkinDate = new Date(checkinDateStr);
    const checkoutDate = new Date(checkoutDateStr);

    const timeDifference = checkoutDate - checkinDate;
    const totaldays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    const numberInput = document.getElementById('numberInput');

    const numberOfRooms = parseInt(numberInput.value, 10);

    const totalprice = numberOfRooms * totaldays * price - (childCount * 300);

    const priceContainer = document.getElementById('priceContainer');
    priceContainer.textContent = `${totalprice}`;
}

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

const optionMenu2 = document.querySelector(".select-menu2"),
       selectBtn2 = optionMenu2.querySelector(".select-btn2"),
       options2 = optionMenu2.querySelectorAll(".option2"),
       sBtn_text2 = optionMenu2.querySelector(".sBtn-text2");

selectBtn2.addEventListener("click", () => optionMenu2.classList.toggle("active"));       

options2.forEach(option2 =>{
    option2.addEventListener("click", ()=>{
        let selectedOption = option2.querySelector(".option2-text2").innerText;
        sBtn_text2.innerText = selectedOption;

        optionMenu2.classList.remove("active");
    });
});

const optionMenu3 = document.querySelector(".select-menu3"),
       selectBtn3 = optionMenu3.querySelector(".select-btn3"),
       options3 = optionMenu3.querySelectorAll(".option3"),
       sBtn_text3 = optionMenu3.querySelector(".sBtn-text3");

selectBtn3.addEventListener("click", () => optionMenu3.classList.toggle("active"));       

options3.forEach(option3 =>{
    option3.addEventListener("click", ()=>{
        let selectedOption = option3.querySelector(".option3-text3").innerText;
        sBtn_text3.innerText = selectedOption;

        optionMenu3.classList.remove("active");
    });
});


document.getElementById('pz4').addEventListener('click',() =>{
  document.getElementById('oxo3').style.display='flex'
  document.getElementById('oxo4').style.display='flex'
  document.getElementById('oxo5').style.display='flex'
  document.getElementById('oxo1').style.display='none'
  document.getElementById('oxo2').style.display='none'
})

document.getElementById('pz1').addEventListener('click',() =>{
  document.getElementById('oxo3').style.display='none'
  document.getElementById('oxo4').style.display='none'
  document.getElementById('oxo5').style.display='none'
  document.getElementById('oxo1').style.display='flex'
  document.getElementById('oxo2').style.display='flex'
})

document.getElementById('pz2').addEventListener('click',() =>{
  document.getElementById('oxo3').style.display='none'
  document.getElementById('oxo4').style.display='none'
  document.getElementById('oxo5').style.display='none'
  document.getElementById('oxo1').style.display='flex'
  document.getElementById('oxo2').style.display='flex'
})

document.getElementById('pz3').addEventListener('click',() =>{
  document.getElementById('oxo3').style.display='none'
  document.getElementById('oxo4').style.display='none'
  document.getElementById('oxo5').style.display='none'
  document.getElementById('oxo1').style.display='flex'
  document.getElementById('oxo2').style.display='flex'
})



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



