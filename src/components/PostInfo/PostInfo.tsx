import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import { Post } from '../../react-app-env';

export const PostInfo:React.FC<Post> = ({
  title,
  body,
  user,
  comments,
}) => (
  <div>
    <h1>
      {title}
    </h1>
    <p>
      {body}
    </p>
    {user && (
      <div className="div">
        <UserInfo
          name={user.name}
          email={user.email}
        />
      </div>
    )}

    <span>Comments:</span>
    <CommentList comments={comments} />
  </div>
);
