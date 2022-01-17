import { PostInfo } from '../PostInfo';

import './PostList.scss';

type Props = {
  preparedPosts: Post[];
};

export const PostList:React.FC<Props> = ({ preparedPosts }) => (
  <ul className="Post">
    {preparedPosts.map(post => (
      <li className="Post__item" key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
