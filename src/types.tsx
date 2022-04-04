import users from './api/users';
import comments from './api/comments';

export type Post = {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User,
  comments: Comment[] | null,
};

export type Comment = typeof comments[0];

export type User = typeof users[0] | null;
