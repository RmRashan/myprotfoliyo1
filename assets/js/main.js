

var sowMenu = (toggleId, navId) => {
    var toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    
    if (toggle && nav) {
        toggle.addEventListener('click', () => { nav.classList.toggle('show') });
        
    }
}

sowMenu('nav-toggle', 'nav-menu')

// Active & Remove Active
var navLink = document.querySelectorAll('.nav-link')
navLink.forEach(n => n.classList.remove('active'))


function linkAction() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    var navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))