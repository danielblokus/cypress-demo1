describe('Call an API', () => {
        it('should return response status HTTP 200', () => {
        	const url = 'https://showcase.api.linx.twenty57.net/UnixTime/fromunix?timestamp=';
            cy.request({
                method: 'GET',
                url: url + '1549892280'
            })
                .should((response) => {
                	expect(response.status).to.eq(200)
                });
    });
});