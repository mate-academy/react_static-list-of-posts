import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => <PostInfo post={post} key={post.id} />)}
  </div>
);
