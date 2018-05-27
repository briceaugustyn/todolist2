import React,  {Component} from 'react';
import axios from 'axios';


class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {tasks: null};
    this.state = {value: ''};
    this.state = {complete: ''};
    this.state = {name: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  componentDidMount() {
      axios.get('api/list').then(
        (result) => {
          this.setState({tasks: [...result.data].filter((element) => {return element.complete === 0 && element.task_group === this.state.name})})
          this.setState({complete: [...result.data].filter((element) => {return element.complete === 1 && element.task_group === this.state.name})})
          //console.log(result.data[0].task_group)
          //console.log(this.state.name)
        }
        )
  }
  

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleChange2(event) {
      this.setState({name: event.target.value});
      //console.log(this.state.name)
    }

    handleSubmit(event) {
      axios.post('/api/list/item', {
        item: this.state.value,
        name: this.state.name
      }).then(() => {
        axios.get('api/list').then(
          result => {
            this.setState({tasks: [...result.data].filter((element) => {return element.complete === 0 && element.task_group === this.state.name})})
            this.setState({complete: [...result.data].filter((element) => {return element.complete === 1 && element.task_group === this.state.name})})
          }
        )
      })
      event.target.value = ''
      //event.target.name = ''
      this.setState({value: event.target.value});
      //this.setState({name: event.target.name});
    }

    handleClick(e) {
      var id = e.target.value
      axios.put('/api/list/complete',{
        taskId: id,
        taskName: this.state.name
      }).then((result) => {
        console.log(result)
        axios.get('api/list').then(
          (result) => {
            this.setState({complete: [...result.data].filter((element) => {return element.complete === 1 && element.task_group === this.state.name})})
            this.setState({tasks: [...result.data].filter((element) => {return element.complete === 0 && element.task_group === this.state.name})})
            console.log(result)
          }
        )
      })
    }

     render() {
       return (
         <div>
           <h2>
              Welcome to Blacklist
           </h2>
           <p>
             Below you can create your task.
           </p>  
           <form onSubmit={this.handleSubmit}>
           <label>
          Task:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChange2} />
          </label>
          <input type="submit" value="Submit" />
          </form>
             { this.state.tasks &&
                this.state.tasks.map(task => { 
                  return <p key={task.id}>{task.task} <button value={task.id} onClick={this.handleClick.bind(this)}>Complete Task</button></p>
                })
             }
          <p>Completed Task's</p>
          { this.state.complete &&
                this.state.complete.map(task => { 
                  return <p key={task.id}>{task.task}</p>
                })
             }
         </div>  
       )
     }
}

export default Landing