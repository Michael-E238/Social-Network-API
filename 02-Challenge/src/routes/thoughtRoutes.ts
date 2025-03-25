import express, { Router } from 'express';
import ThoughtController from '../controllers/ThoughtController';

const thoughtController = new ThoughtController();
const thoughtRoutes: Router = express.Router();

thoughtRoutes.route('/')
 .get(thoughtController.getAllThoughts)
 .post(thoughtController.createThought);

thoughtRoutes.route('/:thoughtId')
 .get(thoughtController.getSingleThought)
 .put(thoughtController.updateThought)
 .delete(thoughtController.deleteThought);

export default thoughtRoutes;