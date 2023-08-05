
const TodoList = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-10">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Task Name</th>
                                <th>Edit</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Redux</td>
                                <td><button className="btn btn-success">Edit</button></td>
                                <td><button className="btn btn-danger">Remove</button></td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TodoList;