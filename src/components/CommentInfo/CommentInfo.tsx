import { Comment } from '../../types/Comment';
import './CommentInfo.scss';

type Props = {
  commentInfo: Comment;
};

export const CommentInfo: React.FC<Props> = ({ commentInfo }) => (
  <div>
    <div className="User">
      User
      <span className="User__name">{` ${commentInfo.name} `}</span>
      commented:
    </div>
    <div className="Comments__text">
      {commentInfo.body}
    </div>
    <div className="Comments__contacts">
      {'Contacts: '}
      <a className="Link" href={`mailto: ${commentInfo.email}`}>
        {commentInfo.email}
      </a>
    </div>
  </div>
);
