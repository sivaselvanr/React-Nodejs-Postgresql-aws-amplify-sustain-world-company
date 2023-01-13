import React from 'react';
import Axios from 'axios';
import EditTask from './edittask';
class ListTask extends React.Component
{
    state = {
        tasks:[]
    }
    gettasks = ()=>{
        try{
            Axios.get('http://localhost:5000/task')
            .then(res=>{
                this.setState({tasks:res.data});
                console.log(this.state.tasks);
            })
        }
        catch(err)
        {
            console.log(err);
        }
    }
    componentDidMount = ()=>{
        this.gettasks();
    }
    deleteTask = (e)=>{
        try{
            Axios.delete(`http://localhost:5000/task/${e}`)
        .then(res=>{
            console.log(res);
         });
         this.setState({tasks:this.state.tasks.filter(task=> task.todo_id!=e)}); 

        }
        catch(err)
        {
            console.log(err);
        }
    }
    render()
    {
        return(
            <div>
                <table className="table mt-5 text-center borderless">
                    <thead>
                        <tr>
                            <th>TASK</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tasks.map(task=>(
                                <tr key={task.todo_id}>
                                    <td>{task.name}</td>
                                    <td><EditTask task={task}/></td>
                                    <td><button class="btn btn-danger delete" onClick={()=>this.deleteTask(task.todo_id)}>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default ListTask;