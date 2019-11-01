import React from 'react';

const Notecard = props =>
    (
        <div className="jumbotron">
            <div>{props.children}</div>
        </div>
    );


export default Notecard;