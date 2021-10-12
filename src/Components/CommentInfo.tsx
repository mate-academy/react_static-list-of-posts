import React from 'react';
import { CommentInfoProps } from './Types/CommentTypes';

export const CommentInfo: React.FC<CommentInfoProps> = ({ comments }) => (
  <>
    <table>
      <thead className="comments-head">
        <tr>
          <td className="comments-head">Name</td>
          <td className="comments-head">body of comment</td>
          <td className="comments-head">email</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="comments">{comments.map(
            comment => <p className="comment-info">
              {comment.name}</p>
          )}
          </td>
          <td className="comments body">{comments.map(
            comment => <p className="comment-info">
              {comment.body}</p>
          )}
          </td>
          <td className="comments email">{comments.map(
            comment => <p className="comment-info">
              {comment.email}</p>
          )}
          </td>
        </tr>
      </tbody>
    </table>
  </>
);
