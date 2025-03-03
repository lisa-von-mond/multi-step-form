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

// HELPER FUNCTION TO CONVERT PRICE INTEGER AND YEARLY/MONTHLY INFORMATION TO STRING EG '12$/mo'
function writePrice(int, isYearly) {
	return `${int.toString()}$/${isYearly === true? 'yr' : 'mo'}`
}


// FILL FINAL OVERVIEW WITH RIGHT DATA
const overviewButton = document.querySelector('#button-to-overview')
overviewButton.addEventListener('click', fillOverview)

function fillOverview() {

	// upper part - name of plan, price of plan and interval
	const selectedPlan = document.querySelector('.choose-plan__form input[type=radio]:checked').getAttribute('value')
	const isYearly = document.querySelector('.choose-plan__form input[type=checkbox]').checked

	const planNameEl = document.querySelector('.overview__plan span:nth-child(1)')
	const planPriceEl = document.querySelector('.overview__plan .price-info')

	let finalPrice = 0

	const planPrice = planData.find(el => el.name === selectedPlan)[isYearly === true ? 'yearlyPrice' : 'monthlyPrice']
	finalPrice = planPrice
	planNameEl.textContent = `${selectedPlan} (${isYearly === true ? 'yearly' : 'monthly'})`
	planPriceEl.textContent = writePrice(planPrice, isYearly)

	// change visibility of extras data in final summary
	const extrasFormInputs = document.querySelectorAll('.choose-extras__form input')
	extrasFormInputs.forEach(el => {
		const isChecked = el.checked
		const wrapper = document.querySelector(`[data-slug="${el.getAttribute('value')}"].overview__extra`);
		const extrasPrice = extrasData.find(x => x.slug === el.getAttribute('value'))[isYearly === true ? 'yearlyPrice' : 'monthlyPrice']
		if (isChecked) {
			wrapper.classList.add('active')
			finalPrice = finalPrice + extrasPrice
		} else {
			wrapper.classList.remove('active')
		}
	})

	// total line with final price
	const summaryEl = document.querySelector('.overview__total span:nth-child(1)')
	const finalPriceEl = document.querySelector('.overview__total span.price-info')
	summaryEl.textContent = `Total (${isYearly === true ? 'per year' : 'per month'})`
	finalPriceEl.textContent = writePrice(finalPrice, isYearly)
}

// FILL ALL PRICE INFO WITH DATA DEPENDENT ON IF INTERVAL IS MONTHLY OR YEARLY

// function that will fill all elements
function fillPriceElements(isYearly) {
	const planInputs = document.querySelectorAll('.choose-plan__label')
	const extrasInputs = document.querySelectorAll('.choose-extras__label')
	const extrasEl = document.querySelectorAll('.overview__extra')

	function fill(el) {
		el.forEach(el => {
			const slug = el.dataset.slug
			const priceEl = el.querySelector('.price-info')
			const price = allData.find(el => el.slug === slug)[isYearly === true ? 'yearlyPrice' : 'monthlyPrice']
			priceEl.textContent = `+${writePrice(price, isYearly)}`
		})
	}

	fill(planInputs);
	fill(extrasInputs);
	fill(extrasEl)
}

// call function once initially
fillPriceElements(false)

// call function whem toggle is switched
const isYearlySwitch = document.querySelector('.switch')
isYearlySwitch.addEventListener('click', function() {
	const isYearly = event.target.checked
	fillPriceElements(isYearly)
})
