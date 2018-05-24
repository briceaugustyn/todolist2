import React,  {Component} from 'react';
import axios from 'axios';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {tasks: null};
  }

  componentDidMount() {
      axios.get('api/list').then(
        result => {
          // var array = result
          // console.log(array)
          // array.forEach(element => {
          //   return <p> {element} </p>
          // });
          this.setState({tasks: [...result.data]}, ()=>{
            console.log(this.state)
          })
        }
      )
    }

    handleClick() {
      console.log('click')
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