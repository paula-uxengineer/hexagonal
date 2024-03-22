import { Request, Response, NextFunction } from 'express';

export const corsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); //allow access from any origin, this avoids access problems from the front-end with another localhost, change the * for the route from front-end
  res.setHeader(
    /**
     * Indicates which header type CORS allows:
     *
     * Origin: used to indicate the origin of the request.
     * X-Requested-With: this header is used to identify whether a request is AJAX.
     * Content-Type: this header indicates the content type of the request
     * Accept: this header indicates the types of content that the client will accept.
     */
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods', //allow to use this methodds
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  if (req.method === 'OPTIONS') {
    // manage preflight for CORS make sure to use CORS when the methods are get, post, put, delete. this add another layer of security
    res.sendStatus(200);
  } else {
    next();
  }
};
