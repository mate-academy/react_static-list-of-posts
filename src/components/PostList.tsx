import { Post } from '../types/Post';

import { PostInfo } from './postInfo/PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div>
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
