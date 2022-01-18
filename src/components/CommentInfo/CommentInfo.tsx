import './CommentInfo.scss';

type Props = {
  comment: CommentInterface,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="commentInfo">
    <h3 className="commentInfo__name">{comment.name}</h3>
    <p className="commentInfo__body">{comment.body}</p>
    <span className="commentInfo__mail">{comment.email}</span>
  </div>
);
