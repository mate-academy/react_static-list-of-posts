import React from 'react';

import PropTypes from 'prop-types';

import User from './User';
import Comment from './Comment';

const Post = props => (
  <div className="post-item">
    <div className="question-block">
      <User user={props.question.user} />
      <div className="question">
        <h3>
          <p>
            <u> Question: </u>
          </p>
          {props.question.post.title}
        </h3>
        <article>
          {props.question.post.body}
        </article>
      </div>
    </div>

    <div className="comments">
      <h3>
        <u> Answers:</u>
      </h3>
      <div className="comment-item">
        <hr />
        {props.question.comments.map(comment => (
          <Comment comment={comment} />
        ))}
        <hr />
      </div>
    </div>
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    userId: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
};

export default Post;
