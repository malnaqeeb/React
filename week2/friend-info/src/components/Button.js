import React from 'react';

const Button = ({getFriend}) => {
    return (
        <div>
            <button onClick={getFriend}>Get Friend</button>
        </div>
    );
};

export default Button;