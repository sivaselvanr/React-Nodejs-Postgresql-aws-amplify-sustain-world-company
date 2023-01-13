import React from 'react';
import axios from 'axios';
class EditTask extends React.Component
{
    state = {
        task_id: '',
        task_name: this.props.task.task_name
    }
    handleChange = (e)=>{
        this.setState({task_name:e.target.value});
    }
    handleUpdate = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:5000/task/${this.state.task_id}`,{name:this.state.task_name})
        .then(res=>{
            console.log(res);
        });
        window.location = '/';
    }
    render()
    {
        if(this.state.task_id == '')
        {
            this.setState({task_id:this.props.task.todo_id,task_name:this.props.task.name});
        }
        return(
            <div class="container">

  <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target={`#id${this.props.task.todo_id}`} style={{fontSize:"18px"}}>Update</button>

  
  <div class="modal fade" id={`id${this.props.task.todo_id}`} role="dialog">
    <div class="modal-dialog">
    
      
      <div class="modal-content">
        <div class="modal-header">
         <h4 class="modal-title" style={{color:"black"}}>Update the Task</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          
        </div>
        <div class="modal-body">
          <input className="form-control" name="task" value={this.state.task_name} onChange={(e=>this.handleChange(e))} style={{width:"200px"}}/>
        </div>
        <div class="modal-footer">
          <button className="btn btn-danger" style={{backgroundColor:"orange",backgroundImage:"none"}} onClick={(e)=>this.handleUpdate(e)}>Update</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal" style={{backgroundColor:"red",backgroundImage:"none",color:'white'}}>Close</button>
        </div>
      </div>
      
    </div>
  </div>
  
</div>
        );
    }
}
export default EditTask;