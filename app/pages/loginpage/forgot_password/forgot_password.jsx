// imports
import React from 'react';
import ReactDOM from 'react-dom';

// css imports
import "../../../css/flexboxgrid.css"
import "../../../css/base.css"

// component imports
import Dialog from 'material-ui/lib/dialog';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';


export default class Forgot_Password extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    handleOpen() {
        this.setState({open: true});
    };

    handleClose() {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                secondary={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
        ];

        return (
            <div>
                <RaisedButton label="Forgot Password ? " secondary={true} onTouchTap={this.handleOpen.bind(this)}/>
                <Dialog
                    title="Forgot password ?"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >

                    Please enter your Email registered with the account <br />

                    <TextField
                        hintText="hi@me.com"
                        floatingLabelText="E-mail Address"
                    />

                    <br />

                    Please enter your Phone Number associated with the account <br />
                    <TextField
                        hintText="123.456.7890"
                        floatingLabelText="Phone Number"
                    />

                </Dialog>
            </div>
        );
    }
}