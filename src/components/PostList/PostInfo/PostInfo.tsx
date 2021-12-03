import { Post } from '../../../types/types';
import UserInfo from '../../UserInfo/UserInfo';
import CommentList from '../../CommentList/CommentList';

import './PostInfo.scss';

type Props = {
  postInfo: Post
};

const PostInfo: React.FC<Props> = ({ postInfo }) => {
  const {
    title,
    body,
    user,
    comment,
  } = postInfo;

  return (
    <>
      <h2 className="post-info__title">
        {title}
      </h2>
      <p className="post-info__body">
        {body}
      </p>
      <div className="post-info__userInfo">
        {user && <UserInfo userInfo={user} />}
      </div>
      <div>
        { comment.length
          ? <CommentList commentList={comment} />
          : 'Set comment'}
      </div>
    </>
  );
};

export default PostInfo;
