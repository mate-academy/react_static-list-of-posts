import { Post } from '../../types';
import { UserItem } from '../UserItem/UserItem';
import { CommentsList } from '../CommentsList/CommentsList';
import './PostList.scss';

export type Props = {
  postItems: Post[];
};
export const PostList: React.FC<Props> = ({ postItems }) => (
  <ul className="postList">
    {postItems.map(postItem => (
      <li className="postList__item" key={postItem.id}>
        <div className="post">
          <div className="post__content">
            <h3 className="post__title">{postItem.title}</h3>
            <div className="post__body">
              {postItem.body}
            </div>
            <div className="post__userInfo">
              <UserItem userItem={postItem.user} />
            </div>
          </div>
          <div className="post__commentList">
            <h4>Comments:</h4>
            <CommentsList commentsItems={postItem.comments} />
          </div>
        </div>
      </li>
    ))}
  </ul>
);
