import mongoose, { Connection } from'mongoose';

mongoose.connect('mongodb://localhost/social-network-api')
 .then(() => {
    console.log('Connected to MongoDB');
  })
 .catch((err: any) => {
    console.error(err);
  });

const db: Connection = mongoose.connection;

db.on('error', (err: any) => {
  console.error(err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

export default mongoose;