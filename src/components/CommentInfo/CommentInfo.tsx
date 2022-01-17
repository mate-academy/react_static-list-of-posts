import './CommentInfo.scss';

type Props = {
  comment: PostComment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <span className="comment__name">{comment.name}</span>
    <p className="comment__body">{comment.body}</p>
    <p className="comment__email">{comment.email}</p>
  </>
);
