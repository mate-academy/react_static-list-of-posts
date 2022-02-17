import { Comment } from '../../types';
import './CommentsList.scss';

export type Props = {
  commentsItems: Comment[];
};
export const CommentsList: React.FC<Props> = ({ commentsItems }) => (
  <ul className="commentList">
    {commentsItems.map(commentsItem => (
      <li className="commentList__item" key={commentsItem.id}>
        <div className="commentList__userInfo">
          <div className="commentList__userName">
            Name:
            {' '}
            {commentsItem.name}
          </div>
          <div className="commentList__userEmail">
            Email:
            {' '}
            {commentsItem.email}
          </div>
        </div>
        <div className="commentList__userBody">{commentsItem.body}</div>
      </li>
    ))}
  </ul>
);
