import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentsList = ({ commentsData }) => (
  <article className="comments">
    <dl>
      <Comment commentsData={commentsData} />
    </dl>
  </article>
);

CommentsList.propTypes
= { commentsData: PropTypes.oneOfType([PropTypes.object]).isRequired };

export default CommentsList;
