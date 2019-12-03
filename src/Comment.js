import PropTypes from 'prop-types';
import React from 'react';

const Comment = ({ comment: { name, body, email, id } }) => (
  <>
    <dt>
      {`Comment ${id}: ${body}`}
    </dt>
    <dd className="description user-info">
      {`Name: ${name}`}
      <br />
      {`Email: ${email}`}
    </dd>
  </>
);

Comment.propTypes
  = { comment: PropTypes.oneOfType([PropTypes.object]).isRequired };

export default Comment;
