/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Agregar clase show-menu a nav menu
       nav.classList.toggle('show-menu')
       // Agregar show-icon para mostrar y ocultar el icono del menú
       toggle.classList.toggle('show-icon')
   })
}

/*=============== Hide Header On Scroll ===============*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-8rem";
  }
  prevScrollpos = currentScrollPos;
}

showMenu('nav-toggle','nav-menu')

/*=============== SHOW DROPDOWN MENU ===============*/
const dropdownItems = document.querySelectorAll('.dropdown__item')

// 1. Selecionar cada dropdown item
dropdownItems.forEach((item) =>{
    const dropdownButton = item.querySelector('.dropdown__button') 

    // 2. Selecionar cada click del botón
    dropdownButton.addEventListener('click', () =>{
        // 7. Seleccionar la clase show-dropdown actual
        const showDropdown = document.querySelector('.show-dropdown')
        
        // 5. Llamar a la funcion toggleItem
        toggleItem(item)

        // 8. Remover la clase show-dropdown de otros items
        if(showDropdown && showDropdown!== item){
            toggleItem(showDropdown)
        }
    })
})

// 3. Crear una función para mostrar el dropdown
const toggleItem = (item) =>{
    // 3.1. Selecionar cada dropdown content
    const dropdownContainer = item.querySelector('.dropdown__container')

    // 6. Si el mismo item contiene la clase show-dropdown, remover
    if(item.classList.contains('show-dropdown')){
        dropdownContainer.removeAttribute('style')
        item.classList.remove('show-dropdown')
    } else{
        // 4. Agregar el height maximo al dropdown content y agregar la clase show-dropdown
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
        item.classList.add('show-dropdown')
    }
}

/*=============== DELETE DROPDOWN STYLES ===============*/
const mediaQuery = matchMedia('(min-width: 1118px)'),
      dropdownContainer = document.querySelectorAll('.dropdown__container')

// Función para eliminar estilos desplegables en modo móvil cuando el navegador cambia de tamaño
const removeStyle = () =>{
    // Validar si la media query llega a 1118px
    if(mediaQuery.matches){
        // Removemos el estilo de height de dropdown container
        dropdownContainer.forEach((e) =>{
            e.removeAttribute('style')
        })

        // Removemos la clase show-dropdown de dropdown item
        dropdownItems.forEach((e) =>{
            e.classList.remove('show-dropdown')
        })
    }
}


// Swiper function here

var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2200,
      disableOnInteraction: false,
    },
});


// Login function here

document.getElementById("loginBtn").addEventListener("click", function() {
    document.getElementById("modalContainer").style.display = "block";
  });
  
  document.querySelector(".closelogin").addEventListener("click", function() {
    document.getElementById("modalContainer").style.display = "none";
  });
  
  var oginPopup = document.getElementById("modalContainer");
  
  
  window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    oginPopup.style.top = scrollTop + "px";
});

// Signup function here

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

