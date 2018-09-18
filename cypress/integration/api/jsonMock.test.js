it('should return an userid and id', () => {
	cy.request('GET', 'https://jsonplaceholder.typicode.com/todos/1')
		.then( resp => {
			const { status, body } = resp
			expect(status).to.eq(200)
			expect(body).to.be.an('object')
			expect(body).to.have.all.keys('userId', 'id', 'title', 'completed')
		})
})
