import { PostInfo } from '../PostInfo/PostInfo';

import './PostList.scss';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="postList">
    {posts.map(post => (
      <li className="postList__item" key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
