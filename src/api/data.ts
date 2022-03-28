import {
  AllPost,
  Comment,
  Post,
  User,
} from '../types';
import commentsFromServer from './comments';
import postsFromServer from './posts';
import usersFromServer from './users';

function createPosts(
  posts: Post[],
  users: User[],
  comments: Comment[],
): AllPost[] {
  return posts.map((post) => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter((comment) => comment.postId === post.id),
  }));
}

export const preparedPosts = createPosts(
  postsFromServer,
  usersFromServer,
  commentsFromServer,
);
