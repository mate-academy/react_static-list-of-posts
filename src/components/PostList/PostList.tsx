import { FullPostData } from '../../types/FullPostData';
import { PostInfo } from '../PostInfo';

interface Props {
  posts: FullPostData[];
}

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="PostList box has-background-light is-rounded">
      {posts.map(post => (
        <PostInfo post={post} key={post.id} />
      ))}
    </div>
  );
};
