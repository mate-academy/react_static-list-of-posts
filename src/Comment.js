import PropTypes from 'prop-types';
import React from 'react';

const Comment = ({ comment: { name, body, email, id } }) => (
  <div className="comment">
    <dt>
      {`Comment ${id}: ${body}`}
    </dt>
    <dd className="description">
      {`Name: ${name}`}
      <br />
      {`Email: ${email}`}
    </dd>
  </div>
);

Comment.propTypes
  = { comment: PropTypes.oneOfType([PropTypes.object]).isRequired };

export default Comment;
