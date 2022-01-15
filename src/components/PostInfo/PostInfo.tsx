import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo:React.FC<Post> = ({
  title,
  body,
  user,
  comments,
}) => (
  <div className="card has-background-primary-light">
    {user && (<UserInfo {...user} />)}
    <header className="card-header">
      <h2 className="title is-3 card-title">{title}</h2>
    </header>

    <section className="card-content">
      <p className="subtitle is-5">{body}</p>
    </section>

    <footer className="card-footer">
      <CommentList comments={comments} />
    </footer>
  </div>
);
