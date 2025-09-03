import rawPosts from '../api/posts';
import rawUsers from '../api/users';
import rawComments from '../api/comments';

import { Post, User, Comment } from '../types';

export function preparePosts(): Post[] {
  return rawPosts.map(post => ({
    ...post,
    user: rawUsers.find((u: User) => u.id === post.userId)!,
    comments: rawComments.filter((c: Comment) => c.postId === post.id),
  }));
}
