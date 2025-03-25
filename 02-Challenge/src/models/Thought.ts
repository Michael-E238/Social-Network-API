import mongoose, { Schema, model, Document } from'mongoose';
import User from './User';

export interface IThought extends Document {
  thoughtText: string;
  createdAt: Date;
  username: string;
  reactions: any[];
}

export interface IReaction extends Document {
  reactionId: any;
  reactionBody: string;
  username: string;
  createdAt: Date;
}

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp: any) => new Date(timestamp).toLocaleString(),
  },
});

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp: any) => new Date(timestamp).toLocaleString(),
  },
  username: {
    type: String,
    required: true,
    ref: 'User',
  },
  reactions: [reactionSchema],
});

thoughtSchema.virtual('reactionCount').get(function (this: any) {
  return this.reactions.length;
});

const Thought = model<IThought>('Thought', thoughtSchema);

export default Thought;