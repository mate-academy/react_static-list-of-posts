import { Post } from '../../types';
import './PostList.scss';
import { PostInfo } from '../PostInfo/PostInfo';

export type Props = {
  postItems: Post[];
};
export const PostList: React.FC<Props> = ({ postItems }) => (
  <ul className="postList">
    {postItems.map(postItem => (
      <li className="postList__item" key={postItem.id}>
        <PostInfo item={postItem} />
      </li>
    ))}
  </ul>
);
