import { Post } from './types/Post';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

export const posts: Post[] = postsFromServer.map(post => {
  const user = usersFromServer.find(u => u.id === post.userId);
  const comments = commentsFromServer.filter(comment => (
    comment.postId === post.id));

  return {
    ...post,
    user,
    comments,
  };
});
