import { PostInfo } from '../PostInfo/PostInfo';
import { Posts } from '../../types/Posts';

type Props = {
  todos: Posts[]
};

export const PostList: React.FC<Props> = ({ todos }) => (
  <>
    <div className="PostList">
      {todos.map(todo => (
        <PostInfo todo={todo} key={todo.id} />
      ))}
    </div>
  </>
);
