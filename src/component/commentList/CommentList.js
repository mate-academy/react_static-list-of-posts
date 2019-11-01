import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../comment/Comment';
import { generatorAvatar } from '../generatorAvatar';

function CommentList({ comment }) {
  return (
    <section className="ui comments">
      <article className="comment">
        <div className="avatar">
          <img src={generatorAvatar()} alt="avatar" />
        </div>
        <div className="content">
          <div>
            <p className="text">
              <Comment body={comment.body} email={comment.email} />
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}

CommentList.propTypes = {
  comment: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  })).isRequired,
};

export default CommentList;
