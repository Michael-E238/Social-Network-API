import mongoose from 'mongoose';
import User from '../models/User';
import Thought from '../models/Thought';

async function seed() {
  await mongoose.connect('mongodb://localhost/social-network-api');

  await User.deleteMany({});

  const users = await User.insertMany([
    {
      username: 'JohnDoe',
      email: 'john.doe@example.com',
    },
    {
      username: 'JaneDoe',
      email: 'jane.doe@example.com',
    },
  ]);

  await Thought.deleteMany({});

  const thoughts = await Thought.insertMany([
    {
      thoughtText: 'Hello, world!',
      username: users[0].username,
      reactions: [],
    },
    {
      thoughtText: 'Hi, everyone!',
      username: users[1].username,
      reactions: [],
    },
  ]);

  console.log('Database seeded successfully!');
  await mongoose.disconnect();
}

seed();