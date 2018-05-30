import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  });

class TodoItems extends Component {
    state = {
        checked: [0],
      };
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item) {
        return <li onClick={() => this.delete(item.key)}
            key={item.key}>{item.text}</li>
    }

    delete(key) {
        this.props.delete(key);
    }
    handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
    
        this.setState({
          checked: newChecked,
        });
      };
    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        const { classes } = this.props;

        return (
            <div className={classes.root}>
            <List className="theList">
              {[].map(value => (
                <ListItem
                  key={value}
                  role={undefined}
                  dense
                  button
                  onClick={this.handleToggle(value)}
                  className={classes.listItem}
                >
                  <Checkbox
                    checked={this.state.checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                  />
                  <ListItemText primary={listItems} />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </div>
            );
        }
    }
        TodoItems.propTypes = {
            classes: PropTypes.object.isRequired,
        };
    
    
    export default withStyles(styles)(TodoItems);
//             <ul className="theList">
//                 {listItems}
//             </ul>
//         );
//     }
// }

// export default TodoItems;