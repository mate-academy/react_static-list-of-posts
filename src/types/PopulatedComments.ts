import { Comment } from './Comment';
import { Post } from './Post';
import { User } from './User';

export type PopulatedComments = Post & {
  user: User;
  comments: Comment[];
};
