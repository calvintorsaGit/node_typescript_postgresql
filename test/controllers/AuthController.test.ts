import {login} from "../../src/controllers/AuthController"

const {User} = require("../../src/Model/User");
const {mockResponse, mockRequest, mockNext} = require('../mock/Mock')

jest.mock('../../src/Model/User', () => ({
    findOne: jest.fn().mockReturnValue({password: 12345})
}));

describe('AuthController', () => {

    it('should return 400 if password not exist', () => {
        const req = mockRequest({body: {email: "test@gmail.com", password: "12345"}});
        const res = mockResponse();

        login(req, res, mockNext);

        expect(res.status).toBeCalledWith(400);
    })

})
