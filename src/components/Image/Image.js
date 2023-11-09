// import React from 'react';
import { useState } from 'react';
import images from '~/assets/img';

const Image = ({ src, alt, className, fallBack: customerFallBack = images.noImage, ...props }) => {
    const [_fallBack, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(customerFallBack);
    };

    return <img className={className} {...props} src={_fallBack || src} alt={alt} onError={handleError} />;
};

export default Image;
