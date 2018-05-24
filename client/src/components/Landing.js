import React,  {Component} from 'react';
import axios from 'axios';


class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {tasks: null};
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
      axios.get('api/list').then(
        result => {
          this.setState({tasks: [...result.data]}, ()=>{
            console.log(this.state)
          })
        }
      )
    }
  

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('A task was submitted: ' + this.state.value);
      event.preventDefault();
    }



    handleClick() {
      console.log('click')
    }

    insertToDo() {

    }

     render() {
       return (
         <div>
           <h2>
              Welcome to Blacklist
           </h2>
           <p>
             Below are your task.
           </p>  
           <form onSubmit={this.handleSubmit}>
           <label>
          Task:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
          </form>
             { this.state.tasks &&
                this.state.tasks.map(task => {
                  return <p onClick={this.handleClick.bind(this)} key={task.id}>{task.id} {task.task}</p>
                })
             }
         </div>  
       )
     }
}

export default Landing