import './CommentInfo.scss';

type Props = {
  comments: Comment[];
};

export const CommentInfo: React.FC<Props> = (props) => {
  const { comments } = props;

  return (
    <ul className="comment">
      {comments.map(comment => (
        <li className="comment__item" key={comment.id}>
          <p className="comment__item-name">{comment.name}</p>
          <p className="comment__item-body">{comment.body}</p>
          <p className="comment__item-email">{comment.email}</p>
        </li>
      ))}
    </ul>
  );
};
