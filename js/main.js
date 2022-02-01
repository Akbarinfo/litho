let usersbtn = document.getElementById('id-menu');
let xbtn = document.getElementById('id-x');
let usersbox = document.getElementById('id-menubox');


usersbtn.addEventListener('click', function() {
  usersbox.classList.add('open');
});

xbtn.addEventListener('click', function() {
  usersbox.classList.remove('open');
});



window.onscroll = () => {scrollNavbar()};

scrollNavbar = () => {
    // Target elements
    const navBar = document.getElementById("id-header");
    const li = document.getElementsByClassName('go-header');


  if (document.body.scrollTop > 100) {
    navBar.classList.add("header-white");
    logo[0].classList.add('go-header');


      // Change the color of links on scroll
    for (let i = 0; i < li.length; i++) {
        const element = li[i];
        element.classList.add('header-nav__items');
    }

  } else {
    navBar.classList.remove("header-white");
    logo[0].classList.remove('go-header');



    // Change the color of links back to default
    for (let i = 0; i < li.length; i++) {
        const element = li[i];
        element.classList.remove('header-nav__items');
    }
  }
}