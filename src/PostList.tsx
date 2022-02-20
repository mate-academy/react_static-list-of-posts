import { PostInfo } from './PostInfo';
import { Post } from './Type';

type Props = {
  posts: Post[]
};

export const PostList: React.FC<Props> = ({ posts = [] }) => (
  <ul>
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </ul>
);
