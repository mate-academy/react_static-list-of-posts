import { FullPost } from '../../types/FullPost';
import { CommentsList } from '../CommentsList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  fullPost: FullPost;
};

export const PostInfo: React.FC<Props> = ({ fullPost }) => (
  <div className="post">
    <h1 className="post__title">
      {`${fullPost.title}`}
    </h1>

    <p className="post__body">
      {fullPost.body}
    </p>
    <span className="post__comments">
      {fullPost.user && <UserInfo user={fullPost.user} />}
      <h4 className="post__comments--title">Comments:</h4>
      <CommentsList comentsList={fullPost.comments} />
    </span>
  </div>
);
