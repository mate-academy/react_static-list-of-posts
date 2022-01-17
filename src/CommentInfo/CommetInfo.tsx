import './CommentInfo.scss';

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

type Props = {
  comments: Comment[] | null;
};
export const CommentInfo: React.FC<Props> = ({ comments }) => (
  <div className="ui comments">
    <h3 className="ui dividing header">Comments</h3>
    <ul className="comment-list">
      {comments && (comments.map(comment => (
        <li key={comment.id} className="comment-list__item">
          <div className="comment">
            <div className="content">
              <div className="author">{comment.email}</div>
              <div className="metadata">
                <span className="date">{comment.name}</span>
              </div>
              <div className="text">
                {comment.body}
              </div>
              <div className="ui labeled button">
                <div className="ui blue button">
                  <i className="heart icon" />
                  {' '}
                  Like
                </div>
                <div className="ui basic blue left pointing label">
                  {getRandomInt(100)}
                </div>
              </div>
            </div>
          </div>
        </li>

      )))}
    </ul>
  </div>
);
