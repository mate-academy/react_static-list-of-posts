import { PreparedPost } from '../../types/types';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  preparedPosts: PreparedPost[];
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <div className="App">
    {preparedPosts.map(post => (
      <PostInfo post={post} />
    ))}
  </div>
);
