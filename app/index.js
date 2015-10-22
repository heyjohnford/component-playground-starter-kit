'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';
import Button from './components/button';

import buttonExample from 'raw!./examples/button.txt';

class Index extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'Component Playground Starter';
    }

    render() {
        return (
            <div className="component-documentation">
                <Playground codeText={buttonExample} scope={{React: React, Button: Button}} />
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('app'));
