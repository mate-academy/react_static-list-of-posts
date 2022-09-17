import { AllPosts } from '../../Types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: AllPosts[];
};

export const PostList:React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
