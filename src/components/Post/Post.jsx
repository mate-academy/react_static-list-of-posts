import React from 'react';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { TypePost } from '../../types';

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
            <CommentList comments={post.comments} />
          </div>
        </div>
      </div>
    </div>
  </>
);

Post.propTypes = {
  post: TypePost.isRequired,
};
