import comments from './comments';

import { Comment } from '../types/Comment';

type GetComments = (postId: number) => Comment[];

export const getComments: GetComments = (postId) => (
  comments.filter(comment => comment.postId === postId)
);
