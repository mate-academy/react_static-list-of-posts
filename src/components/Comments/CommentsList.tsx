import React from 'react';
import { CommentType } from '../../types/CommentType';
import './CommentsList.scss';
import avatar from '../../images/avatar.png';

interface Props {
  comments: CommentType[];
}

const CommentsList: React.FC<Props> = ({ comments }) => {
  return (
    <div className="CommentsList">
      {comments.map(comment => {
        return (
          <div key={comment.id} className="CommentsList__comment">
            <div className="CommentsList__avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="CommentsList__block">
              <div className="CommentList__user">
                <h3>{comment.name}</h3>
              </div>
              <div className="CommentsList__body">
                <p>{comment.body}</p>
              </div>
              <div className="CommentsList__email">
                <p>{comment.email}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsList;
