const urlMap = {
	google: {
		base: 'https://www.google.ro/',
		docs: 'https://docs.google.com/',
		sheets: 'https://www.google.com/sheets/about/'
	},
	metro: {
		base: 'https://www.metrosystems.ro/'
	}
}

export const URL = urlMap[Cypress.env('environment')]

export const fixturesPath = 'cypress/fixtures'
