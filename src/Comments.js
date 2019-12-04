import React from 'react';
import PropTypes from 'prop-types';

const Comments = ({ comments }) => (
  <section className="post__comments">
    <h2 className="post__comments--title title">Comments:</h2>
    {' '}
    {comments.map(comment => (
      <React.Fragment key={comment.id}>
        <section className="post__comments--body text">
          {comment.body}
        </section>
        <section className="post__comments--author author">
          {` Name: ${comment.name}`}
          <br />
          {`E-mail: ${comment.email}`}
        </section>
        <br />
      </React.Fragment>
    ))}
  </section>
);

Comments.propTypes = { comments: PropTypes.arrayOf(PropTypes.object) };
Comments.defaultProps = { comments: [] };
export default Comments;
