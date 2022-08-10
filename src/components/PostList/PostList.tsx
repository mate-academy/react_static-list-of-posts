import { FullPost } from '../../types/fullpost';
import { PostInfo } from '../PostInfo';

type Postlist = {
  postlist: FullPost[],
};

export const PostList: React.FC<Postlist> = ({ postlist }) => (
  <>
    {postlist.map((post: FullPost) => (
      <div key={post.id} className="PostList">
        <PostInfo post={post} />
      </div>
    ))}
  </>
);
