/**
 * Created by Justin.Leach on 4/12/2016.
 */
import React from 'react';

import Footer from './Footer.jsx';
import Header from './Header.jsx';
export default class Layout extends React.Component {
    render() {
        const title = 'Welcome Justin J';
        return (
            <section>
                <Header title={title}/>
                <Footer/>
            </section>
        )
    }
}
