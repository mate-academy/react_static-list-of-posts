import { PreparedPost } from '../../types/types';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  preparedPosts: PreparedPost[];
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <>
    {preparedPosts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </>
);
