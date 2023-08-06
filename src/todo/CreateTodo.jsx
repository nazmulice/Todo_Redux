import { useDispatch } from "react-redux";
import { AddTodo } from "../redux/state/todoSlice";
import { useRef } from "react";

const CreateTodo = () => {

  const dispatch = useDispatch();
  const TaskInput = useRef();
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <input
              type="text" ref={TaskInput}
              placeholder="Create todo"
              className="form-control"
            />
          </div>

          <div className="col-md-2">
            <button
              onClick={()=>dispatch(AddTodo(TaskInput.current.value))}
               className="btn btn-success"
            >
              Add TODO
            </button>
          </div>
        </div>
      </div>
    );
};

export default CreateTodo;