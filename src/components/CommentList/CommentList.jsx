import React from 'react';
import PropTypes from 'prop-types';

import Comment from '../Comment/Comment';

function CommentList({ list }) {
  return (
    <div className="post__comments">
      <p className="post__counter">
        {`Comments: ${list.length}`}
      </p>
      {list.map(comment => (
        <div key={comment.id} className="comment">
          <Comment
            name={comment.name}
            email={comment.email}
            body={comment.body}
          />
        </div>
      ))}
    </div>
  );
}

CommentList.propTypes = {
  list: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default CommentList;
