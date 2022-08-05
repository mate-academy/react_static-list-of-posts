import { Comments } from '../../types/comments';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comments[] | null,
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments?.length
      ? comments.map(el => <CommentInfo comment={el} key={el.id} />)
      : (
        <>
          <hr />

          <b>No comments yet</b>

        </>
      )}
  </div>
);
