import { PostInfo } from './PostInfo';

type Props = {
  posts: Post[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div>
    {posts.map(post => <PostInfo key={post.id} {...post} />)}
  </div>
);
