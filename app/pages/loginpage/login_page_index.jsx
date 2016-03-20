// imports
import React from 'react';
import ReactDOM from 'react-dom';

// css imports
import "../../css/flexboxgrid.css"
import "../../css/base.css"

// component imports
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';


// custom components

import Forgot_Password from "./forgot_password/forgot_password";


export default class Login_page extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (


            <div className="row center-lg center-md center-sm center-xs ">
                <div className="col-xs-12
                col-sm-8
                col-md-6
                col-lg-4 padded-5px">
                    <Paper zDepth={2}>

                        <div className="padded-5px">
                            <TextField
                                hintText="John Smith"
                                floatingLabelText="UserName"
                            />

                            <br />

                            <TextField
                                hintText="Password"
                                floatingLabelText="Password"
                                type="password"
                            />

                            <br />
                            <div className="padded-5px">
                                <RaisedButton label="Login" primary={true}/> <br />
                            </div>

                            <div className="padded-5px">
                                <Forgot_Password />

                            </div>
                        </div>
                    </Paper>

                </div>
            </div>


        )
    }
}