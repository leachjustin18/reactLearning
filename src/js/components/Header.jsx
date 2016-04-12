/**
 * Created by Justin.Leach on 4/12/2016.
 */
import React from 'react';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.name = 'Justin Leach';
    }

    render() {
        return (
            <h1>Hi, my name is {this.name}!</h1>
        )
    }
}
