import React,  {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
    
  },
  input: {
    display: 'none',
  },
  h1: {
    color: 'white',
  }
});






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


    
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);


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
      console.log("value click")
      console.log(e)
      
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));

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
      const { classes } = this.props;
       return (
         
         
         <div>
           <Typography variant="display2" align="center" color="white">
           Start your To Do List here:
           </Typography>
           
           <form onSubmit={this.handleSubmit}>
           <TextField
          id="full-width"
          align="center"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Enter task here"
          fullWidth
          margin="normal"
          value={this.state.value} 
          onChange={this.handleChange}
          />
          <TextField
          id="full-width"
          align="center"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Enter name here"
          fullWidth
          margin="normal"
          value={this.state.value} 
          onChange={this.handleChange}
         />

           <label>
          Task:

          
         
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChange2} />
          </label>
          <input type="submit" value="Submit" />
          </form>
          <div><Button variant="raised" color="primary" right="20" left="auto" alignItems="right" type="submit" value="Submit" className={classes.button}>Submit</Button></div>

             { this.state.tasks &&
                this.state.tasks.map(task => { 
                  return <p key={task.id}>{task.task} <button value={task.id} onClick={this.handleClick.bind(this)}>Complete Task</button></p>
                })
             }
          <Typography variant="display1"  color="white">Completed Tasks: </Typography>
     
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


Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Landing)



//export default Landing

//             <button type="button">Complete Task Graph</button>
]
