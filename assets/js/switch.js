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

/* toggle switch */
const toggleSwitch = document.querySelector('.switch')
const indicators = document.querySelectorAll('.indicator')
const labelAttributes = document.querySelectorAll('.label-attribute')
toggleSwitch.addEventListener('change', () => {
	console.log(event.target.checked);
	[...indicators, ...labelAttributes].forEach(el => {
		el.classList.toggle('--inactive');
	})
})



