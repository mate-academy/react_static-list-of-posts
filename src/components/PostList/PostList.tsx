import { Post } from '../../types/PropTypes';
import { PostInfo } from '../PostInfo';

type Props = {
  postsList: Post[];
};

export const PostList: React.FC<Props> = ({ postsList }) => (
  <ul className="postlist">
    {postsList.map((post) => (
      <li key={post.id} className="postlist__item">
        <PostInfo postItem={post} />
      </li>
    ))}
  </ul>
);
