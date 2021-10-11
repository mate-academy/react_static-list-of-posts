import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <>
    {posts.map(post => (
      <div className="post" key={post.id}>
        <h2>PostList:</h2>
        <PostInfo post={post} />
      </div>
    ))}
  </>
);
