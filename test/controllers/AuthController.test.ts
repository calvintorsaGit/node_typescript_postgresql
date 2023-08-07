import {login} from "../../src/controllers/AuthController"
import {expect, jest} from '@jest/globals';

const User = require("../../src/Model/User");
const db = require("../../src/config/db")
const {mockResponse, mockRequest, mockNext} = require('../mock/Mock')
const mSequelize = {};

jest.mock('../../src/config/db', () => {
    return {sequelize: mSequelize};
});

describe('AuthController', () => {

    it('should return 200 if password not exist', () => {
        const req = mockRequest({body: {email: "test@gmail.com", password: "12345"}});
        const res = mockResponse();

        login(req, res, mockNext);

        expect(res.status).toBeCalledWith(400);
    })

})
