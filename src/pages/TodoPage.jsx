import CreateTodo from "../todo/CreateTodo";

const TodoPage = () => {
    return (
      <div className="container" style={{ backgroundColor: "#f0f0f1" }}>
        
        <div className="row">
          <div className="col-12">
            <div className="card-header">
              <h4>Todo My App</h4>
            </div>
                    <div className="card-body">
                        <CreateTodo />
            </div>
          </div>
        </div>
      </div>
    );
};

export default TodoPage;