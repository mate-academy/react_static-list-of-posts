import './CommentInfo.scss';

type Props = {
  comment: PostComment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment">
    <p className="comment__name">{comment.name}</p>
    <p className="comment__body">{comment.body}</p>
    <p className="comment__email">{comment.email}</p>
  </div>
);
