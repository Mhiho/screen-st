import { Router } from 'express';
import {
  getUsers,
  addUser,
  getUser,
  activateUser,
  deactivateUser,
} from './users-controller';

export const usersRouter = Router();

usersRouter.route('/').get(getUsers);
usersRouter.route(':name').get(getUser);
usersRouter.route('/add').post(addUser);

usersRouter.route('/subscription-activated').patch(activateUser);
usersRouter.route('/subscription-cancelled').patch(deactivateUser);
usersRouter.route('/subscription-inactivated').patch(deactivateUser);
