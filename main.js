const hoverDiv = document.querySelectorAll('.hover-effect');

hoverDiv.forEach(div => {

  const effectShadow = document.createElement('div');
  effectShadow.classList.add('effect-shadow');

  div.appendChild(effectShadow);

  div.addEventListener('mousemove', function (e) {
    const x = e.clientX - div.getBoundingClientRect().left;
    const y = e.clientY - div.getBoundingClientRect().top;
    effectShadow.style.left = `${x}px`;
    effectShadow.style.top = `${y}px`;
    effectShadow.style.opacity = '1';
  });

  div.addEventListener('mouseleave', function () {
    effectShadow.style.opacity = '0';
  });
  
  div.addEventListener('mouseenter', function () {
    effectShadow.style.opacity = '1';
  });
});

function showMenu() {
  const menu = document.querySelector('#nav-mobile');
  console.log(menu.style.display)

  if (menu.style.display == 'none' || menu.style.display == '') {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}

const navMobile = document.getElementById('nav-mobile');
const toggleNav = document.getElementById('toggle-nav');

function toggleMenu() {
  if (navMobile.classList.contains('show')) {
    navMobile.style.transform = 'translateX(100%)';

    setTimeout(() => {
      navMobile.style.display = 'none';
      navMobile.classList.remove('show');
    }, 500);
  } else {
    navMobile.style.display = 'flex';
    setTimeout(() => {
      navMobile.classList.add('show');
      navMobile.style.transform = 'translateX(0)';
    }, 10);
  }
}

document.querySelector('.menu').addEventListener('click', toggleMenu);

document.querySelectorAll('#nav-mobile a').forEach(a => {
  a.addEventListener('click', toggleMenu);
});

document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('nav');
  const navbarHeight = navbar.offsetHeight;

  function adjustScrollPosition() {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight + 2;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  }

  window.addEventListener('hashchange', adjustScrollPosition);

  if (window.location.hash) {
    setTimeout(adjustScrollPosition, 0);
  }
});
