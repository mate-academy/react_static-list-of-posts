import { Posts } from '../../types/Posts';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Posts
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    user,
    body,
    comments,
  } = post;

  return (
    <>
      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">
            {title}
          </h3>
          {' Posted by  '}
          {user && (<UserInfo user={user} />)}
          <br />
          <br />
          <p className="PostInfo__body">
            {body}
          </p>
        </div>
        <hr />
        <div className="CommentList">
          {comments.length
            ? <CommentList comments={comments} />
            : 'No comments yet'}
        </div>
      </div>
    </>
  );
};
