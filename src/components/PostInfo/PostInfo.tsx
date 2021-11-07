import { PreparedPost } from '../../types/PreparedPost';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

type Props = {
  postInfo: PreparedPost;
};

export const PostInfo: React.FC<Props> = ({ postInfo }) => (
  <div className="Post">
    <h2 className="Post__title">
      {`Post #${postInfo.id}: ${postInfo.title}`}
    </h2>
    <div className="Post__text">
      {postInfo.body}
    </div>
    {postInfo.user && (
      <div>
        <div className="Post__creds">
          <UserInfo user={postInfo.user} />
        </div>
        <CommentList postComments={postInfo.comments} />
      </div>
    )}
  </div>
);
