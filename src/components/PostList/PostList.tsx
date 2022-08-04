import { Posts } from '../../types/Posts';
import { PostInfo } from '../PostInfo';

type Props = {
  postList: Posts[]
};

export const PostList: React.FC<Props> = ({ postList }) => (
  <div className="PostList">
    {postList.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
