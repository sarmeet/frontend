import React from 'react';
import ReactDOM from 'react-dom';


import Navigation from './common/navigation/navigation'
import Footer from './common/footer/footer';


export default class Base extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Navigation />
                {this.props.children}
                <Footer />
            </div>

        )
    }
}
