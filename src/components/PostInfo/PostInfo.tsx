import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = (props) => {
  const {
    user,
    title,
    body,
    comments,
  } = props.post;

  return (
    <div className="post-info">
      <p className="post-info__title">
        {`Post Title: ${title}`}
      </p>
      <p className="post-info__body">
        {`Post: ${body}`}
      </p>
      {user && <UserInfo user={user} />}
      <CommentList comments={comments} />
    </div>
  );
};
