import { useRef } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../redux/state/todoSlice";

const CreateTodo = () => {
  const dispatch = useDispatch();
  const TaskInput = useRef();

  const handleAddTodo = () => {
    const newTodo = TaskInput.current.value.trim();
    if (newTodo !== "") {
      dispatch(AddTodo(newTodo));
      TaskInput.current.value = ""; // Clear the input field after adding a todo
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10">
          <input
            type="text"
            ref={TaskInput}
            placeholder="Create new todo"
            className="form-control"
          />
        </div>

        <div className="col-md-2">
          <button onClick={handleAddTodo} className="btn btn-success btn-lg">
            Add TODO
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;
