import React from 'react';

import { CommentTypes } from './PropTypes/CommentTypes';

export const Comment = ({ name, body, email, id, postId }) => (
  <div
    className="
      comments__comment
      card
    "
    style={{ background: '#e9c46a' }}
  >
    <div className="card-header p-1">
      <h2 className="mb-0">
        <button
          className="
            btn
            btn-sm
            btn-link
            btn-block
            text-left
          "
          style={{
            color: '#e76f51',
            fontSize: 12,
          }}
          type="button"
          data-toggle="collapse"
          data-target={`#comment-${id}`}
        >
          By
          <span className="text-monospace">{` ${email}`}</span>
        </button>
      </h2>
    </div>

    <div
      id={`comment-${id}`}
      className="collapse"
      data-parent={`#post-${postId}`}
    >
      <div className="card-body">
        <div className="text-uppercase h6">
          {name}
        </div>

        {body}
      </div>
    </div>
  </div>
);

Comment.propTypes = CommentTypes;
