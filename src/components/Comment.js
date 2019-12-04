import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment: { name, email, body } }) => (
  <section className="comment">
    <h3 className="comment__title">
      {name}
    </h3>

    <section className="comment__main-part">
      <p>
        {email}
      </p>

      <p className="comment__body">
        {body}
      </p>
    </section>
  </section>
);

Comment.propTypes = { comment: PropTypes.shape.isRequired };

export default Comment;
