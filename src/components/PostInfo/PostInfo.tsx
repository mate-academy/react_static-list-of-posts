import { PreparedPost } from '../../types/PreparedPost';
import CommentList from '../CommentList/CommentList';
import UserInfo from '../UserInfo/UserInfo';

import './PostInfo.scss';

type Props = {
  preparedPost: PreparedPost;
};

const PostInfo: React.FC<Props> = ({ preparedPost }) => (
  <>
    <h2 className="post-title">{preparedPost.title}</h2>
    <p className="post-body">{preparedPost.body}</p>
    <UserInfo user={preparedPost.user} />
    <CommentList comments={preparedPost.comments} />
  </>
);

export default PostInfo;
