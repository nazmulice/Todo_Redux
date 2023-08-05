import CreateTodo from "../todo/CreateTodo";
import TodoList from "../todo/TodoList";

const TodoPage = () => {
    return (
      <div className="container">
        
        <div className="row">
          <div className="col-12">
            <div className="card-header">
              <h4>Todo My App</h4>
            </div>
              <div className="card-body">
              <CreateTodo />
              <TodoList />
             </div>
          </div>
        </div>
      </div>
    );
};

export default TodoPage;