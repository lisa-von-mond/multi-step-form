window.location.hash = 'enter-data';

const nextButton = document.querySelectorAll('.button-next');
const backButton = document.querySelectorAll('.button-back');

/* button functions - WIP */
nextButton.forEach(el => {
	el.addEventListener('click', () => {
		switchVisibilityByPage(true)
	})
})

backButton.forEach(el => {
	el.addEventListener('click', () => {
		switchVisibilityByPage(false)
	})
})

/* visibility switch function */

function switchThis(visibleSection, currentIndicator, nextSection, nextIndicator) {
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
		const hash = nextSection.getAttribute('id');
		console.log(hash);
		window.location.hash = hash;
	}
}

function switchVisibilityByPage(next) {
	const visibleSection = document.querySelector('section.active-section');
	const currentIndicator = document.querySelector('.sidebar .active-section')
	const nextSection = next === true ? visibleSection.nextElementSibling : visibleSection.previousElementSibling;
	const nextIndicator = next === true ? currentIndicator.nextElementSibling : currentIndicator.previousElementSibling;
	switchThis(visibleSection, currentIndicator, nextSection, nextIndicator);

}

function switchVisibilityById(id) {
	const visibleSection = document.querySelector('section.active-section');
	const currentIndicator = document.querySelector('.sidebar .active-section')
	const nextSection = document.querySelector(`#${id}`);
	const nextIndicator = document.querySelector(`#indicator-${id}`);
	switchThis(visibleSection, currentIndicator, nextSection, nextIndicator);
}

const linkButton = document.querySelector('#link-button');
linkButton.addEventListener('click', () => {
	switchVisibilityById('choose-plan');
})

/* toggle switch on choose-plan section */
const toggleSwitch = document.querySelector('.switch')
const indicators = document.querySelectorAll('.indicator')
const labelAttributes = document.querySelectorAll('.label-attribute')
toggleSwitch.addEventListener('change', () => {
	[...indicators, ...labelAttributes].forEach(el => {
		el.classList.toggle('--inactive');
	})
})
