import postsFromServer from './posts';
import usersFromServer from './users';
import commentsFromServer from './comments';

import { Post } from '../Types/Post';
import { User } from '../Types/User';
import { Comment } from '../Types/Comment';
import { FormattedPost } from '../Types/FormattedPost';

const postList: Post[] = postsFromServer;
const userList: User[] = usersFromServer;
const commentList: Comment[] = commentsFromServer;

export const formattedPosts: FormattedPost[] = [...postList].map(post => {
  const res = { ...post };

  return {
    ...res,
    comments: commentList.filter(comment => comment.postId === post.id),
    user: userList.find(user => user.id === post.userId),
  };
});
