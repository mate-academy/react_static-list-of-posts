import { PrepPost } from '../types';
import { PostInfo } from '../PostInfo/PostInfo';

export type Props = {
  prepPosts: PrepPost[];
};

export const PostList: React.FC<Props> = ({ prepPosts }) => {
  return (
    <div>
      {prepPosts.map(prepPost => <PostInfo prepPost={prepPost} />)}
    </div>
  );
};
