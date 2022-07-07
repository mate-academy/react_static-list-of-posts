import { Post, User, Comment } from '../interfaces/interfaces';
import posts from '../api/posts';
import comments from '../api/comments';
import users from '../api/users';

const mergeTodosUsers = (
  postsFromServer: Post[],
  userList: User[],
  commentsList: Comment[],
) => {
  return postsFromServer.map(post => ({
    ...post,
    user: userList.find(user => user.id === post.userId),
    comment: commentsList.find(comment => comment.postId === post.userId),
  }));
};

export const preparedPosts = mergeTodosUsers(posts, users, comments);
