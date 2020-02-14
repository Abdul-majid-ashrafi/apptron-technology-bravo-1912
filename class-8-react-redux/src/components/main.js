import React from 'react';

export class Main extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div>
                <button onClick={() => this.props.changeUserName('Majid Ashraf')}>Click and change</button>
            </div>
        )
    }
}

