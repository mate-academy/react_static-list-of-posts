import { PostInfo } from '../PostInfo';
import { Data } from '../../types/Data';

type Props = {
  data:Data[];
};

export const PostList: React.FC<Props> = ({ data }) => (
  <div className="PostList">
    { data.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
