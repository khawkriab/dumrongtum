import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
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
import { observer } from "mobx-react"
import User from './mobx/user'
import _NavbarHeadAdmin from './Components/Navbar/NavbarHeadAdmin';
import NavbarHeadAdmin from './Components/Navbar/NavbarHeadAdmin';
import NavbarLeftAdmin from './Components/Navbar/NavbarLeftAdmin';
import Loader from './Components/Load/Loader';

@observer
class AppAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            role: false,
            menuOpen: true,
            loading: true,
            openDrop: false,
        }
    }
    // ------------------------------------------------------------------------------------------------------------------
    componentDidMount = () => {
        if (!User.role) {
            this.props.history.push("/login")
        }
        // setTimeout(() => {
        this.setState({ loading: false })
        // }, 500)
    }
    // ------------------------------------------------------------------------------------------------------------------
    dropNoti = () => {
        this.setState({ openDrop: !this.state.openDrop })
    }
    // ------------------------------------------------------------------------------------------------------------------
    render() {
        const { openDrop } = this.state
        return (
            this.state.loading ? <Loader /> :
                <div className="App">
                    <div className="setCenter -admin" >
                        <NavbarLeftAdmin />
                        <div className='panel-right' >
                            <NavbarHeadAdmin
                                userRole={this.state.role}
                                dropNoti={this.dropNoti}
                                openDrop={openDrop}
                            />
                            {/* <div className='panel-content' > */}
                            {
                                this.props.children
                            }
                            {/* </div> */}
                        </div>
                    </div>
                </div>
        );
    }

}

export default withRouter(AppAdmin);
