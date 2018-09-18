import { URL, fixturesPath } from '../../constants'

describe('Front page testis', () => {
	beforeEach( () => {
		cy.visit(URL.base)
		cy.readFile(`${fixturesPath}/homePageContent.json`).then( json => {
      const { pageTitle } = json
      cy.title().should('eq', pageTitle)
    })
	})

	it('should type searched word', () => {
		cy.readFile(`${fixturesPath}/search.json`).then( json => {
      const { text } = json
			cy.get('#searchInputTrigger').should('be.visible').click()
			cy.get('#pageSearch').should('be.visible').and('have.class', 'active')
			cy.get('#pageSearch').find('input').first().type(text).should('have.value', text)
			cy.get('#pageSearch').find('input').first().type('{enter}')
			cy.url().should('include', `/search?q=${text}`)
			cy.get('.ajax-content').should('be.visible')
			cy.get('.ajax-content').find('.label-info').should('have.text', text)
    })
	})

})
