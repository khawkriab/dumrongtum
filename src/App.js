import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import NavbarTop from './Components/Navbar/NavbarTop'
import NavbarHead from './Components/Navbar/NavbarHead';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Asset/css/style.css'
import './Asset/css/adminstyle.css'
import './Asset/css/reportstyle.css'
import './Asset/css/mainstyle.css'
import './Asset/css/tablestyle.css'
import './Asset/css/radiorate.css'
import './Asset/css/btnStyle.css'
import './Asset/scss/accordionStyle.css'
import './Asset/css/componentStyle.css'
import NavbarFooter from './Components/Navbar/NavbarFooter';
import { observer } from "mobx-react"
import User from './mobx/user'
import Chat from './Components/Chat/Chat';
import Message from './mobx/message'
import { messaging } from "./init-fcm";


@observer
class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      role: false,
      menuOpen: true,
    }
  }
  // ------------------------------------------------------------------------------------------------------------------
  componentDidMount = async () => {
    messaging.requestPermission()
    .then(async function() {
      const token = await messaging.getToken();
      console.log(token)
    })
    .catch(function(err) {
      console.log("Unable to get permission to notify.", err);
    });
    navigator.serviceWorker.addEventListener("message", (message) => console.log(message));

    if (!User.role) {
      this.props.history.push("/login")
    }
  }
  // ------------------------------------------------------------------------------------------------------------------
  menuNav = () => {
    this.setState({ menuOpen: !this.state.menuOpen })
  }
  // ------------------------------------------------------------------------------------------------------------------


  render() {

    return (<React.Fragment>
      {/* <div className={`App ${Message.showChat ? ' slide' : ''}`} > */}
      <div className="App" >
        <div className="setCenter" >
          <header className='NavHeader' >
            <NavbarHead userRole={this.state.role} menuNav={this.menuNav} menuOpen={this.state.menuOpen} />
            <NavbarTop userRole={this.state.role} />
          </header>
          {
            this.props.children
          }
        </div>

        <NavbarFooter />
      </div>
      {
        Message.showChat ? <Chat />
          : null
      }
    </React.Fragment>
    );
  }
}



export default withRouter(App);


