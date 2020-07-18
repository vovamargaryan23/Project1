navSlide = () =>{
	var burger = document.querySelector('.burger');
	var nav = document.querySelector('.navbar');

	burger.addEventListener('click',()=>{
		nav.classList.toggle('active');
	})
}
navSlide();