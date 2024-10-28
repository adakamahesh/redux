import { useState } from "react";
import { editTodo, deleteTodo } from "./action";
import { useDispatch } from "react-redux";

// Define props type
interface TodoProps {
  id: number;
  title: string;
}

const Todo: React.FC<TodoProps> = ({ id, title }) => {
  // Define state with types
  const [editing, setEditing] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>(title);
  
  const dispatch = useDispatch();

  // Handle editing of a todo item
  const handleTodo = () => {
    if (newTitle.trim()) {
      dispatch(editTodo({ id, title: newTitle }));  // Dispatch edit action
      setEditing(false);  // Exit editing mode
    }
  };

  // Handle deletion of a todo item
  const handleDelete = () => {
    dispatch(deleteTodo(id));  // Dispatch delete action
  };

  return (
    <div>
      {editing ? (
        <div className="form-group">
          <input
            className="form-control"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            type="text"
          />
          <button className="btn btn-secondary" onClick={handleTodo}>
            Save
          </button>
        </div>
      ) : (
        <li className="list-group-item">
          <p>{title}</p>
          <div className="action">
            <button
              className="btn btn-warning"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={handleDelete}
            >
              Del
            </button>
          </div>
        </li>
      )}
    </div>
  );
};

export default Todo;