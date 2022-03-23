import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';

import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="Post">
    <ul className="Post__list">
      {posts.map(post => (
        <li className="Post__item" key={post.id}>
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  </div>
);
