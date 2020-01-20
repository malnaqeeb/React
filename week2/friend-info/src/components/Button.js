import React from 'react';

const Button = ({btnProps}) => {
    return (
        <div>
            <button onClick={btnProps}>Get Friend</button>
        </div>
    );
};

export default Button;