import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class ValidateAdminMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization || '';
    if (!token) throw new UnauthorizedException('Token is not provided.');

    jwt.verify(token, process.env.JWT_SECRET, {}, (err, decoded) => {
      if (err) throw new UnauthorizedException('Provided token is wrong.');
      if (decoded.type !== 'admin')
        throw new UnauthorizedException('User is not allowed.');

      next();
    });
  }
}
