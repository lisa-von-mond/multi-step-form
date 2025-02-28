const planData = [
	{
		name: 'Arcade',
		monthlyPrice: 9,
		yearlyPrice: 0,
	},
	{
		name: 'Advanced',
		monthlyPrice: 12,
		yearlyPrice: 120,
	},
	{
		name: 'Pro',
		monthlyPrice: 15,
		yearlyPrice: 150,
	},
]

const extrasData = [
	{
		name: 'Online Service',
		slug: 'service',
		monthlyPrice: 1,
		yearlyPrice: 10,
	},
	{
		name: 'Larger storage',
		slug: 'storage',
		monthlyPrice: 2,
		yearlyPrice: 20,
	},
	{
		name: 'Customizable profile',
		slug: 'profile',
		monthlyPrice: 2,
		yearlyPrice: 20,
	},
]

const overviewBox = document.querySelector('.overview__box')

function fillElements(planName, isYearly, planPrice) {
	const overviewPlan = document.querySelector('.overview__plan')
	const planNameEl = overviewPlan.querySelector('span:nth-child(1)')
	const planPriceEl = overviewPlan.querySelector('span:nth-child(2)')
	planNameEl.textContent = `${planName} (${isYearly === true ? 'yearly' : 'monthly'})`
	planPriceEl.textContent = `${planPrice}$/${isYearly === true ? 'yr' : 'mo'}`
}

// function that will fill the price info dependent on if plan is yearly or monthly.
function fillStaticElements(isYearly) {
	const extrasEl = document.querySelectorAll('.overview__extra')
	extrasEl.forEach(el => {
		const extraSlug = el.dataset.extra
		const extraPriceEl = el.querySelector('span:nth-child(2)')
		const extrasPrice = extrasData.find(el => el.slug === extraSlug)[isYearly === true ? 'yearlyPrice' : 'monthlyPrice']
		extraPriceEl.textContent = extrasPrice.toString()
	})
}

// fill final summary with right data
const planForm = document.querySelector('.choose-plan__form')
planForm.addEventListener('change', () => {
	const selectedPlan = planForm.querySelector('input[type=radio]:checked').getAttribute('value')
	const isYearly = planForm.querySelector('input[type=checkbox]').checked
	const price = planData.find(el => el.name === selectedPlan)[isYearly === true ? 'yearlyPrice' : 'monthlyPrice']
	fillElements(selectedPlan, isYearly, price)
	fillStaticElements(isYearly)
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
