import './CommentInfo.scss';

type Props = {
  comment: PostComment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <h4 className="comment__name">{comment.name}</h4>
    <p>{comment.body}</p>
    <span className="comment__email">{comment.email}</span>
  </>
);
