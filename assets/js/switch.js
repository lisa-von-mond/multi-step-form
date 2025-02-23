const nextButton = document.querySelectorAll('.button-next');
const backButton = document.querySelectorAll('.button-back');

/* button functions - WIP */
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

/* visibility switch function */

function switchVisibility(next) {
	const visibleSection = document.querySelector('section.active-section');
	const currentIndicator = document.querySelector('.sidebar .active-section')
	const nextSection = next === true ? visibleSection.nextElementSibling : visibleSection.previousElementSibling;
	const nextIndicator = next === true ? currentIndicator.nextElementSibling : currentIndicator.previousElementSibling;
	if (nextSection) {
		if (nextIndicator) {
			[visibleSection, currentIndicator, nextSection, nextIndicator].forEach(el => {
				el.classList.toggle('active-section');
			})
		} else {
			[visibleSection, nextSection].forEach(el => {
				el.classList.toggle('active-section');
			})
		}
	}
}

/* toggle switch on choose-plan section */
const toggleSwitch = document.querySelector('.switch')
const indicators = document.querySelectorAll('.indicator')
const labelAttributes = document.querySelectorAll('.label-attribute')
toggleSwitch.addEventListener('change', () => {
	console.log(event.target.checked);
	[...indicators, ...labelAttributes].forEach(el => {
		el.classList.toggle('--inactive');
	})
})



