import type { Request, Response } from 'express';
import Thought from '../models/Thought';

class ReactionController {
  async createReaction(req: Request, res: Response) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $push: { reactions: req.body } },
        { new: true }
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

  async deleteReaction(req: Request, res: Response) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
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
}

export default ReactionController;