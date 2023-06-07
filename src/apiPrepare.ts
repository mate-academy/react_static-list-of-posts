import { Comment } from './types/Comment';
import { FullPostData } from './types/FullPostData';
import { Post } from './types/Post';
import { User } from './types/User';

interface PreparePostData {
  users: User[];
  posts: Post[];
  comments: Comment[];
}

export const prepareApiData = (
  args: PreparePostData,
): FullPostData[] => {
  const { users, posts, comments } = args;

  return posts.map(post => {
    const postUser = users.find(checkUser => post.userId === checkUser.id);

    const postComments = comments.filter(comment => (
      comment.postId === post.id
    ));

    return {
      ...post,
      user: postUser,
      comments: postComments,
    };
  });
};
