import React from 'react';
import { withRouter } from 'react-router-dom';

const AboutComponent = (prop) => {
    console.log(prop)
    return (
        <React.Fragment>
            <h1>This is About page.</h1>
        </React.Fragment>
    )
}

export default withRouter(AboutComponent);