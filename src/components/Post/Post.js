import React, { useState } from 'react';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { PostShape } from '../shapes/PostShape';

import './Post.scss';

export const Post = ({ title, body, user, row, postComments }) => {
  const [isCommentShown, setisCommentShown] = useState(false);

  return (
    <li
      className="Post"
      style={{
        gridColumn: isCommentShown && '1/4',
        gridRow: isCommentShown && `${row}/${row + 1}`,
      }}
    >
      <div className="Post__content">
        <div>
          <h2 className="Post__title">{title}</h2>
          <p className="Post__text">{body}</p>
        </div>
        <div className="Post__user">
          <User {...user} />
          <button
            type="button"
            className="Post__btn"
            onClick={() => setisCommentShown(!isCommentShown)}
          >
            {
              isCommentShown
                ? 'hide comments'
                : 'read comments'
            }
          </button>
        </div>
      </div>
      <CommentList comments={postComments} hasShownComments={isCommentShown} />
    </li>
  );
};

Post.propTypes = PostShape;
