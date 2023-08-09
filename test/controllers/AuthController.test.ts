import {login} from "../../src/controllers/AuthController"
import User from "../../src/Model/User";
import {jest} from '@jest/globals';

const {mockResponse, mockRequest, mockNext} = require('../mock/Mock')

jest.mock("../../src/utils/generateToken",
    () => () => "");

describe('AuthController', () => {

    it('should return 200 if password exist and equal', () => {
        const req = mockRequest({body: {email: "test@gmail.com", password: "12345"}});
        const res = mockResponse();

        jest.spyOn(User, 'findOne')
            .mockResolvedValue(Promise.resolve({password: "12345"}));

        login(req, res);
        expect(res.status).toHaveBeenCalledWith(200);

    })


    it('should return 400 if password exist and NOT equal', () => {
        const req = mockRequest({body: {email: "test@gmail.com", password: "1234"}});
        const res = mockResponse();

        jest.spyOn(User, 'findOne')
            .mockReturnValue(Promise.resolve({password: "12345"}))
        login(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
    })

})
