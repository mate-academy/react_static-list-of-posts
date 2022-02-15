import { Post } from '../../post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const { title, body, user } = post;

  return (
    <div className="info">
      <div className="info__items">
        <div className="info__items-frame">
          <div>
            <h2>{title}</h2>
            <h2>{body}</h2>
            {user && <p><UserInfo user={user} /></p>}
          </div>
        </div>
        <CommentList comments={post.comments} />
      </div>
    </div>
  );
};
