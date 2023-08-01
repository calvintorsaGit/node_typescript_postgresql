import {login, registerUser} from "../../src/controllers/AuthController"
import {User} from "../../src/Model/User";

const {mockResponse, mockRequest, mockNext} = require('../mock/Mock')

jest.mock('../../src/Model/User', () => ({
    findOne: jest.fn(),
}));

describe('AuthController', () => {

    it('should return 200 and user object', () => {
        const req = mockRequest({body: {email: "test@gmail.com", password: "12345"}});
        const res = mockResponse();

        login(req, res, mockNext);

        expect(res.status).toBeCalledWith(400);
    })

})
