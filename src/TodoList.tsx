import { useSelector } from "react-redux";
import Todo from "./Todo";
import { RootState } from "./store"; // Importing RootState type for state

const TodoList: React.FC = () => {
  // Define type for todos based on your state structure
  const todos = useSelector((state: RootState) => state.todo.todos);

  return (
    <ul className="list-group mt-4">
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} title={todo.title} />
      ))}
    </ul>
  );
};

export default TodoList;