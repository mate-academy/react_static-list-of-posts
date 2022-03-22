import posts from '../api/posts';
import comments from '../api/comments';
import users from '../api/users';

import { Comment } from '../types/Comment';
import { Post } from '../types/Post';

export const getPreparedPosts = (): Post[] => {
  const getCommentsWithPostId = (postId: number): Comment[] => {
    return comments.filter(comment => comment.postId === postId);
  };

  return posts.map(post => {
    const untypedUser = users[post.userId - 1];

    return {
      id: post.id,
      title: post.title,
      body: post.body,
      user: {
        id: untypedUser.id,
        userName: untypedUser.username,
        fullName: untypedUser.name,
        email: untypedUser.email,
      },
      comments: getCommentsWithPostId(post.id),
    };
  });
};
