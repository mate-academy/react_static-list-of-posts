import React from 'react';
import './PostList.scss';
import { PostInfo } from '../PostInfo/PostInfo';
import { PreparedPost } from '../../react-app-env';

type Props = {
  preparedPosts: PreparedPost[],
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <div className="accordion" id="accordionExample">
    {preparedPosts.map((post: PreparedPost) => (
      <div key={post.id} className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {`Post #${post.id}`}
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <PostInfo post={post} />
          </div>
        </div>
      </div>
    ))}
  </div>
);
