import React from 'react';

export class User extends React.Component {

    render() {
        return (<div className="row">
            <p>{this.props.username}</p>
        </div>)
    }
}
