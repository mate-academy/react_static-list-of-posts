import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/index';
import './PostList.scss';

type Props = {
  preparedArray: Post[];
};

export const PostList: React.FC<Props> = ({ preparedArray }) => {
  return (
    <ul className="list">
      {preparedArray.map(post => (
        <li
          key={post.id}
          className="list__item"
        >
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  );
};
