import classNames from 'classnames';
import { Comment, CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  postComments: Comment []
};

export const CommentList: React.FC<Props> = ({ postComments }) => (
  <div className="comments">
    {postComments.map(item => (
      <div
        key={item.id}
        className={classNames('comment',
          {
            comment_green: (item.id % 2),
            comment_blue: (!(item.id % 2)),
          })}
      >
        <CommentInfo thisComment={item} />
      </div>
    ))}
  </div>
);
