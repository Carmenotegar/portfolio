//En JS he qeurido hacer un efecto con el menu hamburguesa, cuando pinche en el menu se habran las secciones, usando isActive



//Cuando hago click en el header-svg
// header-nav se aplica el isActive

const headerSvg = document.querySelector('.Header-svg')
const headerNav = document.querySelector('.Header-nav')
console.log (headerSvg , headerNav)

headerSvg.addEventListener('click', ()=>{
    headerNav.classList.toggle('isActive')
})

