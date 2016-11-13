import React from 'react';
import { render } from 'react-dom';

class Portfolio extends React.Component {
    render() {
        return <p>Hello world!</p>
    }
}

render(<Portfolio />, document.querySelector('#container'));
