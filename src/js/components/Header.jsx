/**
 * Created by Justin.Leach on 4/12/2016.
 */
import React from 'react';

import Title from './Header/Title.jsx';

export default class Header extends React.Component {
    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    render() {
        return (
            <header>
                <Title title={this.props.title}/>
                <input value={this.props.title} onChange={this.handleChange.bind(this)} type="text"/>
            </header>
        )
    }
}
