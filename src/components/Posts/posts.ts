import { Post } from '../../types/Post';
import { User } from '../../types/User';

import postsFromServer from '../../api/posts';
import usersFromServer from '../../api/users';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
}));
