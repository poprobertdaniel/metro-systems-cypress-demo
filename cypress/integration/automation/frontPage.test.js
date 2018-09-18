import { URL, fixturesPath } from '../../constants'

describe('Front page testis', () => {
	beforeEach( () => {
		console.log(URL)
		cy.visit(URL.base)
		cy.readFile(`${fixturesPath}/homePageContent.json`).then( json => {
      const { pageTitle } = json
      cy.title().should('eq', pageTitle)
    })
	})

	it('Should check for title', () => {
		cy.readFile(`${fixturesPath}/homePageContent.json`).then( json => {
      const { title } = json
			cy.get('h1').should('be.visible').contains(title)
    })
	})

	it('Should check for subtitle', () => {
		cy.readFile(`${fixturesPath}/homePageContent.json`).then( json => {
      const { subtitle } = json
			cy.get('.lead').should('be.visible').contains(subtitle)
    })
	})

	it('Should check for text button', () => {
		cy.readFile(`${fixturesPath}/homePageContent.json`).then( json => {
      const { button } = json
			cy.get('.more').should('be.visible').contains(button)
    })
	})
})