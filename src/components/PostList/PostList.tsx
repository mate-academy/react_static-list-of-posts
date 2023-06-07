import { FullPostData } from '../../types/FullPostData';
import { PostInfo } from '../PostInfo';

interface PostListProps {
  posts: FullPostData[];
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="PostList box has-background-light is-rounded">
      {posts.map(post => (
        <PostInfo post={post} key={post.id} />
      ))}
    </div>
  );
};
