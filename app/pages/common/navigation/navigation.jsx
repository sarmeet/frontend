import React from 'react';
import ReactDOM from 'react-dom';
import { IndexLink, Link } from "react-router";
import AppBar from '../../../../node_modules/material-ui/lib/app-bar';



import Left_Menu from './menu/left_menu';
import Right_Menu from './menu/right_menu'

export default class Navigation extends React.Component {
    constructor() {
        super();
        this.state = {
            company_name: 'Name'
        };
    }

    render() {

        const AppBarExampleIcon = () => (
            <AppBar
                title= {this.state.company_name}
                iconElementLeft={ <Left_Menu />}
                iconElementRight={<Right_Menu />}
            />
        );

        return (

        <div>
            <AppBarExampleIcon />
        </div>

        )
    }
}