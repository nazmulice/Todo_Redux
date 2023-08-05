
const CreateTodo = () => {
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-10">
                  <input type="text" placeholder="Create todo" className="form-control" />  
            </div>
                
            <div className="col-md-2">
                    <button className="btn btn-success">Add TODO</button>
            </div>
        </div>
      </div>
    );
};

export default CreateTodo;