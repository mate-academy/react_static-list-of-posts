import { Post } from '../../../types/types';
import UserInfo from '../../UserInfo/UserInfo';
import CommentList from '../../CommentList/CommentList';

import './PostInfo.scss';
import comments from '../../../api/comments';

type Props = {
  postInfo: Post
};

const PostInfo: React.FC<Props> = ({ postInfo }) => {
  return (
    <>
      <h2 className="post-info__title">
        {postInfo.title}
      </h2>
      <p className="post-info__body">
        {postInfo.body}
      </p>
      <div className="post-info__userInfo">
        {postInfo.user && <UserInfo userInfo={postInfo.user} />}
      </div>
      <div>
        { comments.length
          ? <CommentList commentList={postInfo.comment} />
          : 'Set comment'}
      </div>
    </>
  );
};

export default PostInfo;
