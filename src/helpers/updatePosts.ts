import postsFromServer from '../api/posts';

import { Post } from '../types/Post';

import { getUser } from './getUser';
import { getComments } from './getComments';

export const posts: Post[] = postsFromServer.map(post => (
  {
    ...post,
    user: getUser(post.userId),
    comments: getComments(post.id),
  }
));
