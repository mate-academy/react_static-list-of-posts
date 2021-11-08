export interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

type Props = {
  thisComment: Comment
};

export const CommentInfo: React.FC<Props> = ({ thisComment }) => (
  <>
    <h4 className="comment__name">
      {thisComment.name}
    </h4>
    <p className="comment__email">
      {thisComment.email}
    </p>
    <p className="comment__body">
      {thisComment.body}
    </p>
  </>
);
