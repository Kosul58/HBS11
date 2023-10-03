document.getElementById("admnc").addEventListener("click", function() {
    document.getElementById("x1").style.display = "flex";
    document.getElementById("x2").style.display = "none";
    document.getElementById("x3").style.display = "none";
    document.getElementById("x4").style.display = "none";
    document.getElementById("x5").style.display = "none";
    });


    document.getElementById("viewm").addEventListener("click", function() {
    document.getElementById("x1").style.display = "none";
    document.getElementById("x2").style.display = "flex";
    document.getElementById("x3").style.display = "none";
    document.getElementById("x4").style.display = "none";
    document.getElementById("x5").style.display = "none";
    });

    document.getElementById("blockm").addEventListener("click", function() {
    document.getElementById("x1").style.display = "none";
    document.getElementById("x2").style.display = "none";
    document.getElementById("x3").style.display = "flex";
    document.getElementById("x4").style.display = "none";
    document.getElementById("x5").style.display = "none";
    });

    document.getElementById("sendm").addEventListener("click", function() {
    document.getElementById("x1").style.display = "none";
    document.getElementById("x2").style.display = "none";
    document.getElementById("x3").style.display = "none";
    document.getElementById("x4").style.display = "flex";
    document.getElementById("x5").style.display = "none";
    });

    document.getElementById("X5X").addEventListener("click", function() {
    document.getElementById("x1").style.display = "none";
    document.getElementById("x2").style.display = "none";
    document.getElementById("x3").style.display = "none";
    document.getElementById("x4").style.display = "none";
    document.getElementById("x5").style.display = "flex";
    });