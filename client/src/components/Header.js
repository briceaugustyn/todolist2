import React,  {Component} from 'react';
import axios from 'axios';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {auth: null};
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
                case null:
                return 'Still Deciding'
                case false:
                return <li><a href="/auth/google">Login With Google</a></li>
                case true:
                return <li><a href="/api/logout">Logout</a></li>
                default:
                return 'Home '
            }
       }


   render() {
       return(
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">
                    Blacklist
                    </a>
                    <ul className="right">
                    {this.renderContent()}
                    </ul>   
                </div>   
            </nav>
        </div> 
       )   
   }
}

export default Header 