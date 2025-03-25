import express, { Router } from 'express';
import ReactionController from '../controllers/ReactionController';

const reactionController = new ReactionController();
const reactionRoutes: Router = express.Router();

reactionRoutes.route('/:thoughtId/reactions')
 .post(reactionController.createReaction);

reactionRoutes.route('/:thoughtId/reactions/:reactionId')
 .delete(reactionController.deleteReaction);

export default reactionRoutes;