import { Comment } from '../../types/comment';
import { Post } from '../../types/post';
import { User } from '../../types/user';

import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[];
  users: User[];
  comments: Comment[];
};

export const PostList: React.FC<Props> = ({ posts, users, comments }) => (
  <>
    {posts.map((post => (
      <PostInfo
        key={post.id}
        post={post}
        user={users.find(({ id }) => id === post.userId) || {
          id: 0,
          name: 'unfound',
          username: 'unfound',
          email: 'unfound',
        }}
        comments={comments}
      />
    )))}
  </>
);
