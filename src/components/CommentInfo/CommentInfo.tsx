import './CommentInfo.scss';

type Props = {
  name: string,
  email: string,
  text: string,
};

export const CommentInfo: React.FC<Props> = ({ name, email, text }) => (
  <div className="comment_info">
    <span className="comment_info__name">
      {name}
    </span>
    <span className="comment_info__email">
      {email}
    </span>
    <div className="comment_info__text">
      {text}
    </div>
  </div>
);
