import { URL, fixturesPath } from '../../constants'

describe('check for fonts', () => {
	beforeEach( () => {
		cy.visit(URL.base)
		cy.readFile(`${fixturesPath}/homePageContent.json`).then( json => {
      const { pageTitle } = json
      cy.title().should('eq', pageTitle)
    })
	})

	it('Gotham SSm A","Gotham SSm B",Verdana,SansSerif should be used', () => {
		cy.readFile(`${fixturesPath}/homePageContent.json`).then( json => {
			cy.get('h1')
				.should('be.visible')
				.should('have.css', 'font-family')
				.and('match', /Gotham/)
    })
	})

	it('rgb(0,59,126) should be used as h1 color ', () => {
		cy.readFile(`${fixturesPath}/homePageContent.json`).then( json => {
			cy.get('h1')
				.should('be.visible')
				.should('have.css', 'color')
				.and('eq', 'rgb(0, 59, 126)')
    })
	})

})