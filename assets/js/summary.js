const planData = [
	{
		name: 'Arcade',
		slug: 'arcade',
		monthlyPrice: 9,
		yearlyPrice: 90,
	},
	{
		name: 'Advanced',
		slug: 'advanced',
		monthlyPrice: 12,
		yearlyPrice: 120,
	},
	{
		name: 'Pro',
		slug: 'pro',
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

const allData = [...planData, ...extrasData]

// helper function to convert price integer to info string
function writePrice(int, isYearly) {
	return `${int.toString()}$/${isYearly === true? 'yr' : 'mo'}`
}

// fill final summary with right data
const planForm = document.querySelector('.choose-plan__form')
planForm.addEventListener('change', () => {
	const selectedPlan = planForm.querySelector('input[type=radio]:checked').getAttribute('value')
	const isYearly = planForm.querySelector('input[type=checkbox]').checked
	const price = planData.find(el => el.name === selectedPlan)[isYearly === true ? 'yearlyPrice' : 'monthlyPrice']
	fillSummary(selectedPlan, isYearly, price)
	fillPriceElements(isYearly)
})

// filling summary: upper part - name og plan, price of plan and interval - as well as total price (WIP)
function fillSummary(planName, isYearly, planPrice) {
	const overviewPlan = document.querySelector('.overview__plan')
	const planNameEl = overviewPlan.querySelector('span:nth-child(1)')
	const planPriceEl = overviewPlan.querySelector('span:nth-child(2)')
	planNameEl.textContent = `${planName} (${isYearly === true ? 'yearly' : 'monthly'})`
	planPriceEl.textContent = `${planPrice}$/${isYearly === true ? 'yr' : 'mo'}`
}

// change visibility of extras data in final summary

const extrasFormInput = document.querySelectorAll('.choose-extras__form input')
extrasFormInput.forEach(el => {
	el.addEventListener('change', () => {
		const isChecked = el.checked
		const wrapper = document.querySelector(`[data-slug="${el.getAttribute('value')}"].overview__extra`);
		console.log(wrapper)
		if (isChecked) {
			wrapper.classList.add('active')
		} else {
			wrapper.classList.remove('active')
		}
	})
})


// function that will fill the price info dependent on if plan is yearly or monthly.
function fillPriceElements(isYearly) {
	const planInputs = document.querySelectorAll('.choose-plan__label')
	const extrasInputs = document.querySelectorAll('.choose-extras__label')
	const extrasEl = document.querySelectorAll('.overview__extra')

	function fill(el) {
		el.forEach(el => {
			const slug = el.dataset.slug
			const priceEl = el.querySelector('.price-info')
			const price = allData.find(el => el.slug === slug)[isYearly === true ? 'yearlyPrice' : 'monthlyPrice']
			priceEl.textContent = writePrice(price, isYearly)
		})
	}

	fill(planInputs);
	fill(extrasInputs);
	fill(extrasEl)
}






