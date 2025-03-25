import type { Request, Response } from 'express';
import Thought from '../models/Thought';

class ThoughtController {
  async getAllThoughts(req: Request, res: Response) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err: any) {
      res.status(500).json(err);
    }
  }

  async getSingleThought(req: Request<{ thoughtId: string }>, res: Response) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });
      if (!thought) {
        res.status(404).json({ message: 'Thought not found' });
      } else {
        res.json(thought);
      }
    } catch (err: any) {
      res.status(500).json(err);
    }
  }

  async createThought(req: Request, res: Response) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err: any) {
      res.status(500).json(err);
    }
  }

  async updateThought(req: Request<{ thoughtId: string }>, res: Response) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      if (!thought) {
        res.status(404).json({ message: 'Thought not found' });
      } else {
        res.json(thought);
      }
    } catch (err: any) {
      res.status(500).json(err);
    }
  }

  async deleteThought(req: Request<{ thoughtId: string }>, res: Response) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
      if (!thought) {
        res.status(404).json({ message: 'Thought not found' });
      } else {
        res.json(thought);
      }
    } catch (err: any) {
      res.status(500).json(err);
    }
  }
}

export default ThoughtController;