import { PostInfo } from '../PostInfo';
import { FormattedPost } from '../../Types/FormattedPost';

type Props = {
  postList: FormattedPost[];
};

export const PostList: React.FC<Props> = ({ postList }) => (
  <>
    <div className="PostList">
      {postList.map((post) => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  </>
);
