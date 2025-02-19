const nextButton = document.querySelectorAll('.button-next');
const backButton = document.querySelectorAll('.button-back');

nextButton.forEach(el => {
	el.addEventListener('click', () => {
		switchVisibility(true)
	})
})

backButton.forEach(el => {
	el.addEventListener('click', () => {
		switchVisibility(false)
	})
})

function switchVisibility(next) {
	const visibleSection = document.querySelector('section.active-section');
	const nextSection = next === true ? visibleSection.nextElementSibling : visibleSection.previousElementSibling;
	if (nextSection) {
		visibleSection.classList.remove('active-section');
		nextSection.classList.add('active-section');
	}
}



