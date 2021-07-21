import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({ post }) => (
  <>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <div className="card">
          <div className="card-body">
            <div className="card">
              <div className="card-header">
                {post.title}
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>{post.body}</p>
                  <footer className="blockquote-footer">
                    <User user={post.user} />
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>

          <div className="card">
            <CommentList comment={post.comment} />
          </div>
        </div>
      </div>
    </div>
  </>
);

Post.propTypes = {
  post: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      user: PropTypes.object.isRequired,
      comment: PropTypes.object.isRequired,
    }),
  ).isRequired,
};
