import React,  {Component} from 'react';
import axios from 'axios';







class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {tasks: null};
    this.state = {value: ''};
    this.state = {complete: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);

  }


  


  componentDidMount() {
      axios.get('api/list').then(
        (result) => {
          this.setState({tasks: [...result.data].filter((element) => {return element.complete === 0})})
          this.setState({complete: [...result.data].filter((element) => {return element.complete === 1})})
          console.log(this.state)
        }
        )
  }
  

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      //alert('A task was submitted: ' + this.state.value);
      axios.post('/api/list/item', {
        item: this.state.value
      }).then(() => {
        axios.get('api/list').then(
          result => {
            this.setState({tasks: [...result.data].filter((element) => {return element.complete === 0})})
          }
        )
      })
      event.target.value = ''
      this.setState({value: event.target.value});
    }

    handleClick(e) {
      console.log("value click")
      console.log(e)
      
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));

      var id = e.target.value
      axios.put('/api/list/complete',{
        taskId: id
      }).then((result) => {
        console.log(result)
        axios.get('api/list').then(
          (result) => {
            this.setState({complete: [...result.data].filter((element) => {return element.complete === 1})})
            this.setState({tasks: [...result.data].filter((element) => {return element.complete === 0})})
            console.log(this.state.complete)
          }
        )
      })
      //console.log(e.target.value);
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

             
          


  <button type="button">
  Complete Task Graph
  onPress={() => this.props.navigation.navigate('/complete')}
      </button>

         </div>  
       )
     }
}



export default Landing

//             <button type="button">Complete Task Graph</button>