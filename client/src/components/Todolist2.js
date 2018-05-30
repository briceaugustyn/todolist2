import React, { Component } from "react";
import TodoItems from "./TodoItems";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


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
        align: 'center',
        padding: '0 30px',
      },
      input: {
        margin: theme.spacing.unit,
        underline: {display: 'none'},
      },
  });

class Todolist extends Component {




    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }

        this._inputElement.value = "";
        //console.log("addItem");
        console.log(this.state.items);

        e.preventDefault();
    }

    deleteItem(key) {
        console.log("Key in deleteItem: " + key);
        console.log("Items at delete: " + this.state.items);
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key)
            
        });

        this.setState({
            items: filteredItems
        })
    }

    render() {
        const { classes } = this.props;
        return (
            // <div className="todoListMain">
            //     <div className="header">
            //         <form onSubmit={this.addItem}>
            //             <input ref={(a) => this._inputElement = a}
            //                 placeholder="enter task yo">
            //             </input>
            //             <button type="submit">add</button>
            //         </form>
            //         <TodoItems entries={this.state.items}
            //             delete={this.deleteItem} />
<div className="todoListMain">

<Grid container spacing={12}>
<Grid item xs></Grid>
<Grid item xs>
<Typography variant="title" color="white" wrap align="center">Enter the full name of the Task you want to retrieve:</Typography>
<br />
<form className={classes.container} onSubmit={this.addItem} noValidate autoComplete="off">
<Input
    ref={(a) => this._inputElement = a}
    id="search"
    className={classes.input}
    inputProps={{
      'aria-label': 'Description',
    }}
    underlineStyle={{display: 'none'}}
/>             
<br />   
<Button type="submit" fullwidth className="center" onSubmit={this.addItem} variant="raised" color="primary" align='center' className={classes.button}>Find List!</Button>
</form>
    <TodoItems entries={this.state.items}
        delete={this.deleteItem} />
</Grid>
<Grid xs>
    </Grid>
    </Grid>


                </div>

            // </div>
        );
    }
}

Todolist.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Todolist);

