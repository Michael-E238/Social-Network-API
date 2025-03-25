import type { Request, Response } from 'express';
import User from '../models/User';

class UserController {
  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err: any) {
      res.status(500).json(err);
    }
  }

  async getSingleUser(req: Request, res: Response) {
    try {
      const user = await User.findOne({ _id: req.params.userId });
      res.json(user);
    } catch (err: any) {
      res.status(404).json(err);
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err: any) {
      res.status(500).json(err);
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      res.json(user);
    } catch (err: any) {
      res.status(500).json(err);
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });
      res.json(user);
    } catch (err: any) {
      res.status(404).json(err);
    }
  }
}

export default UserController;