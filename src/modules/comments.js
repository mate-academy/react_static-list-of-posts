import React from 'react';
import PropTypes from 'prop-types';

const Comments = props => (
  <>
    {props.cmnt.map(comment => (
      <div className="comment">
        {comment.body}
        <div className="cmntAuthor">
          <div className="author">
            {comment.name}
          </div>
          <div className="author">
            {comment.email}
          </div>
        </div>
      </div>
    ))}
  </>
);

Comments.propTypes = {
  cmnt: PropTypes.object.isRequired,
};

export default Comments;
