import React from 'react';
import PropTypes from 'prop-types';

import { User } from './User';
import { CommentList } from './CommentList';

export const Post = post => (
  <>
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>

    <div className="user">
      <User {...post.user} />
    </div>

    <div>
      <h2 className="comm">COMMENTS</h2>
      <div className="comments">
        {post.comments.map(comment => (
          <div key={comment.id} className="comment">
            <CommentList {...comment} />
          </div>
        ))}
      </div>
    </div>
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comment: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
