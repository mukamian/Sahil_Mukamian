const sliderContainer = document.querySelector('.slider-container div')
const slideRight = document.querySelector('.right-slide');
const sections = slideRight.querySelectorAll('div');
const menuList = document.querySelectorAll('.hnav li')
const toggles = document.querySelectorAll('.project-toggle')

slideRight.addEventListener('scroll', checkBoxes)

console.log(toggles)
console.log(sections)
function checkBoxes(){
  var current = "";
  sections.forEach(section => {
  	const sectionTop = section.getBoundingClientRect().top;
  	const triggerBottom = (window.innerHeight / 2)
    console.log(`This is the Trigger Value ${triggerBottom}`)
    if (triggerBottom > sectionTop) {
      current = section.getAttribute("id"); 
      
  }
  });
  console.log(current)
  if(current!=null){
	  menuList.forEach((menuL) => {

		menuL.classList.remove("active");
	    if (menuL.classList.contains(current)) {

	      menuL.classList.add("active");
	    }
	  });
	}

};


menuList.forEach(menu => {
    menu.addEventListener('click', () => {
        removeActiveClasses()
        menu.classList.add('active')
        menu.classList.remove('hover')
     })
})

function removeActiveClasses() {
    menuList.forEach(menu => {
        menu.classList.remove('active')
    })
}
menuList.forEach(menu => {

		menu.addEventListener('mouseenter', () => menu.classList.add('hover'))
		menu.addEventListener('mouseleave', () => menu.classList.remove('hover'))}
)

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
      toggle.parentNode.classList.toggle('active')
  })
})