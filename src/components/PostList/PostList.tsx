import './PostList.scss';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  postList: Post[];
};

export const PostList: React.FC<Props> = ({ postList }) => (
  <ul>
    {postList.map((post) => {
      const {
        title,
        body,
        user,
        comments,
        id,
      } = post;

      return (
        <li className="PostList__item" key={id}>
          <PostInfo
            title={title}
            body={body}
            user={user}
            comments={comments}
          />
        </li>
      );
    })}
  </ul>
);
