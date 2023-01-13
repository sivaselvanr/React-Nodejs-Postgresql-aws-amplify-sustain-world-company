import React from 'react';
import img from '../working.png';
import img2 from '../hard.png';
import axios from 'axios';
import './style.css'
class InputTask extends React.Component
{
    state = {
        task : ''
    }
    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value});
        console.log(e.target.value);
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        if(this.state.task!='')
        {
            axios.post('http://localhost:5000/task',{name: this.state.task})
            .then(res=>{
                console.log(res);
                this.setState({task:''});
            });
            window.location = '/';
        }
    }
    render()
    {
        return(
            <div className="row text-center">
                <div className="col-md-4">
                    <form onSubmit={(e)=>this.handleSubmit(e)}>
                        <input className="form-control mt-5 ml-5" placeholder="Your Task" name="task" onChange={(e)=>this.handleChange(e)} value={this.state.task} style={{width:"350px"}}/>
                        <button type="submit" className="btn btn-primary mt-3" style={{width:"350px",padding:"10px",}}>ADD TASK</button>
                        <img src={img2} style={{width:"400px",height:"260px",marginLeft:"80px"}}/>
                    </form>
                </div>
                <div className="col-md-8">
                    <img src={img} style={{width:"800px",height:"400px"}}/>
                </div>
                
            </div>
        );
    }
}
export default InputTask;