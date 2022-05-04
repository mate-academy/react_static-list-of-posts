import { Post } from '../../types/post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo:React.FC<Post> = ({
  title,
  body,
  user,
  comments,
}) => (
  <div className="card">
    {user && (<UserInfo {...user} />)}
    <header className="card__header">
      <h2 className="card__title">{title}</h2>
    </header>

    <section className="card__content">
      <p className="card__subtitle">{body}</p>
    </section>
    <footer className="card__footer">
      <CommentList comments={comments} />
    </footer>
  </div>
);
