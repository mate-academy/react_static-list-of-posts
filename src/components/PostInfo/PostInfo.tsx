import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = (props) => {
  const {
    post: {
      title,
      body,
      user,
      comments,
    },
  } = props;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>
        {' Posted by  '}
        {user && <UserInfo user={user} />}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      {comments.length
        ? <CommentList comments={comments} />
        : <b>No comments yet</b>}
    </div>
  );
};
