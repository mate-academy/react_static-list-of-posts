import React from 'react';

import PropTypes from 'prop-types';

import User from './User';
import CommentList from './CommentList';

const Post = ({ question }) => (
  <div className="post-item">

    <div className="question-block">
      <User user={question.user} key={question.user.id} />
      <div className="question">
        <h3>
          <p>Question:</p>
          {question.title}
        </h3>
        <article>{question.body}</article>
      </div>
    </div>

    <div className="comments">
      <h3>Answers:</h3>
      <div className="comment-item">
        <hr />
        <CommentList comments={question.comments} />
        <hr />
      </div>
    </div>

  </div>
);

Post.propTypes = {
  question: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    userId: PropTypes.number,
    user: PropTypes.object,
  }).isRequired,
};

export default Post;
