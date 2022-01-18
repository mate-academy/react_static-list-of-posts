type Props = {
  comment: PostComment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <p className="title is-6">{comment.name}</p>
    <p>{comment.body}</p>
    <a href="mailto:">{comment.email}</a>
  </>
);
