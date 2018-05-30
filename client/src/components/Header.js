import React,  {Component} from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
//import './Header.css';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {auth: false};
      }
     
       componentDidMount() {
         axios.get('/api/current_user').then(
             (result) => {
                console.log(result.data)
                 if (result.data) {
                     console.log('Logged in')
                     this.setState({auth: true})
                 } else {
                    console.log('Not logged in')
                    this.setState({auth: false})
                 }
             }
         )
       }

       renderContent() {
            switch (this.state.auth) {
                // case null:
                // return 'Still Deciding'
                case false:
                return <Typography variant="subheading"> <li><a href="/auth/google" >Login With Google</a></li> </Typography>
                case true:
                return <Typography variant="subheading"> <li><a href="/api/logout">Logout</a></li> </Typography>
                default:
                return 'Home '
            }
       }

       

   render() {
       return(
                <div>
                    <ul>
                    {this.renderContent()}
                    </ul>   
                </div>   
       )   
   }
}

export default Header 