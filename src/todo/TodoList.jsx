import { useSelector } from "react-redux";
import todoDelete from "./todoDelete";
import todoEdit from "./todoEdit";

const TodoList = () => {
  const todoItem = useSelector((state) => state.todo.value);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10">
          <table className="table styled-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Task Name</th>
                <th>Edit</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {todoItem.map((item, i) => {
                return (
                  <tr key={i.tostring}>
                    <td>{i + 1}</td>
                    <td>{item}</td>
                    <td>
                      <button
                        onClick={() => {
                          todoEdit(i,item);
                        }}
                        className="btn btn-success"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          todoDelete(i);
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
