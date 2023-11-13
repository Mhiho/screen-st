import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from 'express';
import { User } from '../../models/user.model';
import { validSubscriptionTokens } from '../../mocks/tokens';

interface IUser {
  name?: string;
  subscribtion: false;
  createdAt: Date;
  updatedAt: Date;
}

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find();
  res.send(users);
};

export const getUser = async (req: Request, res: Response) => {
  return await User.find({ name: req.params.name });
};

export const addUser = async (req: Request, res: Response) => {
  const user = await req.body;
  await User.create(user);
  res.send(user);
};

export const activateUser = async (req: Request, res: Response) => {
  const { token, name } = await req.body;
  validSubscriptionTokens.includes(token) &&
    (await User.updateOne({ name: name }, { $set: { subscription: true } }));
  const user = await User.find({ name });
  res.send(user);
};

export const deactivateUser = async (req: Request, res: Response) => {
  const { token, name } = await req.body;
  validSubscriptionTokens.includes(token) &&
    (await User.updateOne({ name: name }, { $set: { subscription: false } }));
  const user = await User.find({ name });
  res.send(user);
};
