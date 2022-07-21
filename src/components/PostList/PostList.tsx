import { PreparePost } from '../../types/PreparePost';

import { PostInfo } from '../PostInfo';

type Props = {
  posts: PreparePost[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <>
    {posts.map((post => (
      <PostInfo
        key={post.id}
        post={post}
      />
    )))}
  </>
);
