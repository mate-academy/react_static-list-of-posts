import { Comment } from "../types/Types";

type Comments = {
  comments: Comment[];
};

export const CommentInfo: React.FC<Comments> = ({ comments }) => {
  return (
    <>
      {
        comments.map((comment) =>
          <div key={comment.id} className="PostList__comment-info">
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
            <span>{comment.email}</span>
          </div>
        )
      }
    </>
  );
};
