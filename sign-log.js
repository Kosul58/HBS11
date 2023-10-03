document.getElementById("sign").addEventListener("click", function() {
    document.getElementById("modalContainer").style.display = "none";
    document.getElementById("modalContainer2").style.display = "block";
  }
);

document.getElementById("log").addEventListener("click", function() {
    document.getElementById("modalContainer2").style.display = "none";
    document.getElementById("modalContainer").style.display = "block";
  }
);
  
document.querySelector(".closelogin").addEventListener("click", function() {
    document.getElementById("modalContainer1").style.display = "none";
  }
);


document.querySelector(".closesignup").addEventListener("click", function() {
    document.getElementById("modalContainer2").style.display = "none";
  }
);


  var loginPopup = document.getElementById("modalContainer2");
   
  window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    loginPopup.style.top = scrollTop + "px";
  });

  var oginPopup = document.getElementById("modalContainer");

  window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    oginPopup.style.top = scrollTop + "px";
  });

  document.getElementById("loginBtn").addEventListener("click", function() {
    document.getElementById("modalContainer2").style.display = "none";
  }
  );

  document.getElementById("signupBtn").addEventListener("click", function() {
    document.getElementById("modalContainer").style.display = "none";
  }
  );

//room image script
document.getElementById("bax11").addEventListener("click", function() {
  document.getElementById("img22").style.display = "none";
  document.getElementById("img21").style.display = "block";
});

document.getElementById("bax22").addEventListener("click", function() {
  document.getElementById("img21").style.display = "none";
  document.getElementById("img22").style.display = "block";
});

document.getElementById("bax22").addEventListener("click", function() {
  document.getElementById("img32").style.display = "none";
  document.getElementById("img31").style.display = "block";
});

document.getElementById("bax11").addEventListener("click", function() {
  document.getElementById("img31").style.display = "none";
  document.getElementById("img32").style.display = "block";
});

document.getElementById("img31").addEventListener("click", function() {
  document.getElementById("img22").style.display = "none";
  document.getElementById("img21").style.display = "block";
});

document.getElementById("img32").addEventListener("click", function() {
  document.getElementById("img21").style.display = "none";
  document.getElementById("img22").style.display = "block";
});

document.getElementById("img31").addEventListener("click", function() {
  document.getElementById("img31").style.display = "none";
  document.getElementById("img32").style.display = "block";
});

document.getElementById("img32").addEventListener("click", function() {
  document.getElementById("img32").style.display = "none";
  document.getElementById("img31").style.display = "block";
});
