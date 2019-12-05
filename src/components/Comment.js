import PropTypes from 'prop-types';
import React from 'react';

const Comment = ({ comment: { name, body, email, id } }) => (
  <div className="comment_card">
    <dd className="ui center aligned olive header">
      {name}
      <br />
    </dd>
    <dt>
      {`Comment ${id}: ${body}`}
    </dt>
    <h5 className="ui right aligned header">
      {email}
    </h5>
  </div>

);

Comment.propTypes
  = { comment: PropTypes.oneOfType([PropTypes.object]).isRequired };

export default Comment;
