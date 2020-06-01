import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button
     className={`${inverted ? 'iverted':''}${isGoogleSignIn ? 'google-sign-in':''} custom-button`}
     {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;