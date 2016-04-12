/**
 * Created by Justin.Leach on 4/12/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
  render() {
      return (
          <h1>it worksing !</h1>
      );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);