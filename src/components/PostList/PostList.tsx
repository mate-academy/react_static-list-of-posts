import { PostInfo } from '../PostInfo/PostInfo';

import './PostList.scss';

interface Props {
  preparedPosts: PostWithUser[];
}

export const PostList:React.FC<Props> = ({ preparedPosts }) => (
  <ul className="Post">
    {preparedPosts.map(post => (
      <li className="Post__item" key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
