import CreateTodo from "../todo/CreateTodo";
import TodoList from "../todo/TodoList";

const TodoPage = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card-header">
              <h1 className="text-center text-uppercase font-weight-bold">
                Todo App
              </h1>
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