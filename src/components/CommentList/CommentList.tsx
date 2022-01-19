import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommetInfo';

type Props = {
  commentaries: Commentary[];
};

export const CommentList: React.FC<Props> = ({ commentaries }) => (
  <div className="ui comments">
    <h3 className="ui dividing header">Comments</h3>
    {commentaries.length > 0 && (
      <ul className="comment-list">
        {commentaries.map(commentary => (
          <li key={commentary.id} className="comment-list__item">
            <CommentInfo commentary={commentary} />
          </li>
        ))}
      </ul>
    )}
  </div>
);
