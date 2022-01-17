import './PostInfo.scss';
import { CommentInfo } from '../CommentInfo/CommetInfo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  preparedPosts: Post[]
};

export const PostInfo: React.FC<Props> = ({ preparedPosts }) => (
  <ul className="post-list">
    {preparedPosts.map(post => (
      <li key={post.id} className="post-list__item">
        <div className="ui message">
          {post.user && (
            <UserInfo user={post.user} />
          )}
          <div className="header">
            {post.title}
          </div>
          <div>
            <p>{post.body}</p>
            <CommentInfo comments={post.comments} />
          </div>
        </div>
      </li>
    ))}
  </ul>
);
