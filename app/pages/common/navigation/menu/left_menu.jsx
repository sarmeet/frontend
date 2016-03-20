// react imports
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexLink, Link } from "react-router";

// material-ui imports
import IconButton from '../../../../../node_modules/material-ui/lib/icon-button';
import LeftNav from '../../../../../node_modules/material-ui/lib/left-nav';
import MenuItem from '../../../../../node_modules/material-ui/lib/menus/menu-item';
import Menu from '../../../../../node_modules/material-ui/lib/svg-icons/navigation/menu';


export default class Left_Menu extends React.Component {
    constructor() {
        super();
        this.state = {open: false};
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    handleClose() {
        this.setState({open: false});
    }


    // creates a render icon that creates a menu when clicked.
    render() {
        return (

            <div>

                <IconButton tooltip="Menu" onTouchTap={this.handleToggle.bind(this)}>
                    <Menu color="white"/>
                </IconButton>


                <LeftNav
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={open => this.setState({open})}
                >
                    <MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item</MenuItem>
                    <MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item 2</MenuItem>
                </LeftNav>

            </div>




        )
    }


}