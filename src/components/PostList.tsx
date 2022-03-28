import { Post } from '../types/Post';
import { PostInfo } from './PostInfo';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

type Props = {
  listOfPosts: Post[]
};

export const PostList: React.FC<Props> = ({ listOfPosts }) => (
  <ol>
    {listOfPosts.map((itemPost) => (
      <li key={itemPost.id}>

        <PostInfo
          title={itemPost.title}
          body={itemPost.body}
        />

        {itemPost.user && itemPost.user
          ? (
            <UserInfo
              email={itemPost.user.email}
              name={itemPost.user.name}
            />
          )
          : (
            <p>
              No user info
            </p>
          )}
        <ul>
          <h3>Comments:</h3>
          {itemPost.comment && itemPost.comment
            ? (
              itemPost.comment.map((itemComment) => (
                <li key={itemComment.id}>
                  <CommentList comment={itemComment} />
                </li>
              ))
            )
            : (
              <p>
                No comments
              </p>
            )}
        </ul>
      </li>
    ))}
  </ol>
);
