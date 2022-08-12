import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import { Posts } from '../../types/Posts';

type Props = {
  todo: Posts;
};

const commentNo = <b>No comments yet</b>;

export const PostInfo: React.FC<Props> = ({ todo }) => (
  <>
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {todo.title}
        </h3>

        {' Posted by  '}

        {todo.user && (
          <UserInfo user={todo.user} />
        )}

      </div>

      <p className="PostInfo__body">
        {todo.body}
      </p>

      {todo.comments.length !== 0
        ? <CommentList comments={todo.comments} />
        : (
          <>
            <hr />
            {commentNo}
          </>
        )}
    </div>
  </>
);
