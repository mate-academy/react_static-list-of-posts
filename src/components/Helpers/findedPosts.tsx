import postsFromServer from '../../api/posts';
import usersFromServer from '../../api/users';
import commentsFromServer from '../../api/comments';
import { Comments } from '../../Types/Comments';
import { Post } from '../../Types/Post';
import { User } from '../../Types/User';

const getUser = (userId: number): User | null => {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
};

const getComment = (postId: number): Comments[] => {
  const foundComment = commentsFromServer.filter(comment => (
    comment.postId === postId));

  return foundComment;
};

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComment(post.id),
}));
