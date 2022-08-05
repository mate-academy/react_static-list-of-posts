import { Posts } from '../../types/posts';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Posts[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(el => <PostInfo post={el} key={el.id} />)}
  </div>
);
