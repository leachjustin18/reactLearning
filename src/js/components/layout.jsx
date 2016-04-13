/**
 * Created by Justin.Leach on 4/12/2016.
 */
import React from 'react';

import Footer from './Footer.jsx';
import Header from './Header.jsx';
export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
           title: 'Welcomes my love'
        };
    }
    changeTitle(title) {
        this.setState({title});
    }
    render() {
        return (
            <section>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
                <Footer/>
            </section>
        )
    }
}
