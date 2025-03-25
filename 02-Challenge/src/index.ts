import express from 'express';
import userRoutes from './routes/userRoutes';
import thoughtRoutes from './routes/thoughtRoutes';
import reactionRoutes from './routes/reactionRoutes';

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);
app.use('/api/thoughts/:thoughtId/reactions', reactionRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});