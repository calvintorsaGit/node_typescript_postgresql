const {mockResponse, mockRequest, mockNext} = require('../mock/Mock')

const auth = require('../../src/middlewares/auth');

jest.mock('jsonwebtoken', () => ({
    ...jest.requireActual('jsonwebtoken'),
    verify: jest.fn().mockReturnValue('token')
}));

describe('auth middleware', () => {

    it('should return failed if token not exist', () => {
        const req = mockRequest({header: jest.fn(() => '')});
        const res = mockResponse();

        auth(req, res, mockNext);

        expect(res.send)
            .toHaveBeenCalledWith({message: "A token is required for authentication"});
        expect(res.status).toHaveBeenCalledWith(403);
    })

})
