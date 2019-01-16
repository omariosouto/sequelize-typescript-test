import { expect, request } from '../../config'

describe.only('# /clients', () => {
    it('should create an user', () => {
        request()
            .get('/clients')
            .end((err, res) => {
                console.log('request', res.body)
                expect(2).to.be.equal(2)
            })
    })
})
