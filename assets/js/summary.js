const planData = [
	{
		name: 'Arcade',
		monthlyPrice: '$9/mo',
		yearlyPrice: '$90/yr',
	},
	{
		name: 'Advanced',
		monthlyPrice: '$12/mo',
		yearlyPrice: '$120/yr',
	},
	{
		name: 'Pro',
		monthlyPrice: '$15/mo',
		yearlyPrice: '$150/yr',
	},

]

const overviewBox = document.querySelector('.overview__box')

function fillElements(planName, isYearly, planPrice) {
	const overviewPlan = document.querySelector('.overview__plan')
	const planNameEl = overviewPlan.querySelector('span:nth-child(1)')
	const planPriceEl = overviewPlan.querySelector('span:nth-child(2)')
	planNameEl.textContent = `${planName} (${isYearly === true ? 'yearly' : 'monthly'})`
	planPriceEl.textContent = planPrice
}

// fill final summary with right data
const planForm = document.querySelector('.choose-plan__form')
planForm.addEventListener('change', () => {
	const selectedPlan = planForm.querySelector('input[type=radio]:checked').getAttribute('value')
	const isYearly = planForm.querySelector('input[type=checkbox]').checked
	const price = planData.find(el => el.name === selectedPlan)[isYearly === true ? 'yearlyPrice' : 'monthlyPrice']
	fillElements(selectedPlan, isYearly, price)
})


// change visibility of extras data in final summary
const extrasFormInput = document.querySelectorAll('.choose-extras__form input')

extrasFormInput.forEach(el => {
	el.addEventListener('change', () => {
		const isChecked = el.checked
		const wrapper = document.querySelector(`[data-extra="${el.getAttribute('value')}"]`);
		if (isChecked) {
			wrapper.classList.add('active')
		} else {
			wrapper.classList.remove('active')
		}
	})
})
