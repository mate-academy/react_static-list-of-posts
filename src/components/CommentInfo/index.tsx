import './style.scss';

type Props = {
  name: string;
  body: string;
  email: string;
};

export const CommentInfo: React.FC<Props> = ({ name, body, email }) => (
  <div className="Comment">
    <p data-cy="comment-name" className="Comment__title">{name}</p>
    <p data-cy="comment-body" className="Comment__content">{body}</p>
    <p data-cy="comment-email" className="Comment__email">{email}</p>
  </div>
);
