import Router, { Express } from 'express';
import { usersRouter } from '../ressources/users/users.router';

export const router: Express = Router();

router.use('/users', usersRouter);
