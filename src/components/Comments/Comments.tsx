import React from 'react';
import classNames from 'classnames';
import './Comments.scss';
import { Comment } from '../../types/Comment';

type Props = {
  comments: Comment[];
};

export const Comments: React.FC<Props> = (({ comments }) => (
  <div className="item__comments comments">
    <h2 className="comments__title">Comments</h2>
    <div className="comments__comments-list list">
      {comments.map(({
        name,
        email,
        id,
        body,
      }) => (
        <div className={classNames(
          'comment-post',
          { 'comment-post--odd': id % 2 !== 0 },
        )}
        >
          <div className="post__user user">
            <div className="user__image image" />
            <div className="user__info">
              <p className="user__info--name">
                {name}
              </p>
              <p className="user__info--email">{email}</p>
            </div>
          </div>
          <p className="comments__post--body">
            {body}
          </p>
        </div>
      ))}
    </div>
  </div>
));
