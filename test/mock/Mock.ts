import {Response, Request, NextFunction} from 'express';

export const mockNext = jest.fn() as NextFunction;

export const mockRequest = (data: any): Request => {
    return {
        ...data
    };
};

export const mockResponse = () => {
    const res = {} as Response;
    res.get = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};
