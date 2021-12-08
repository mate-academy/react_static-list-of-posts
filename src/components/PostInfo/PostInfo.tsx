import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';
import { Post } from '../../types/Post';

type Props = Omit<Post, 'id'>;

export const PostInfo: React.FC<Props> = ({
  title, body, user, comments,
}) => (
  <article className="post">
    <div className="post__author">
      {user && <UserInfo {...user} />}
    </div>

    <div className="post__main">
      <h2 className="post__title">{title}</h2>
      <p className="post__text">{body}</p>

      <div className="post__comments">
        <CommentList comments={comments} />
      </div>
    </div>
  </article>
);
