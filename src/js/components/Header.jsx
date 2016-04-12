/**
 * Created by Justin.Leach on 4/12/2016.
 */
import React from 'react';

import Title from './Header/Title.jsx';

export default class Header extends React.Component {


    render() {
        return (
            <header>
                <Title title={this.props.title}/>
            </header>
        )
    }
}
