import React from 'react';
import { render } from 'react-dom';

import Topbar from './components/topbar';
import Content from './components/content';

class Portfolio extends React.Component {
    render() {
        return (
            <div>
                <Topbar />
                <Content />
                <footer>Built with React & Bluma CSS.</footer>
            </div>
        )
    }
}

render(<Portfolio />, document.querySelector('#container'));
