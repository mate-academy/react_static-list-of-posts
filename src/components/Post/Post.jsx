import React from 'react';
import { postType } from '../../typesValidation';
import { User } from '../User';
import { CommentList } from '../CommentList';

import './post.scss';

export const Post = ({ title, body, user, comments }) => (
  <>
    <User {...user} />

    <div className="container">
      <div className="title">
        {title}
      </div>
      <div className="body">
        {body}
      </div>
    </div>

    <div>
      <CommentList disscus={comments} />
    </div>
  </>
);

Post.propTypes = postType.isRequired;
