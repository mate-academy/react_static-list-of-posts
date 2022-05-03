import React from 'react';
import { Comment, User } from '../../Types';
import UserInfo from '../UserInfo/UserInfo';
import CommentList from '../CommentList/CommentList';

type Props = {
  title: string;
  body: string;
  comments: Comment[];
  users: User | null;
};

const PostInfo: React.FC<Props> = ({
  title,
  body,
  comments,
  users,
}) => {
  return (
    <div>
      <h3>Post Info</h3>
      <ul className="ul_styles_reset">
        <li data-cy="post-title">
          <span className="span_style">Title :</span>
          {title}
        </li>
        <li data-cy="post-body">
          <span className="span_style">Body :</span>
          {body}
        </li>
      </ul>

      {
        users
          ? <UserInfo name={users.name} email={users.email} /> : null
      }

      <CommentList
        commentsData={comments}
      />

    </div>
  );
};

export default PostInfo;
