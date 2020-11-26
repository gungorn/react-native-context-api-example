import React from 'react';

import ContextProvider from './CONTEXTS/Provider';

import S0 from './S0';
import S1 from './S1';
import S2 from './S2';
import S3 from './S3';

const RENDER = () => {

    React.useEffect(() => console.log('index'));

    return (
        <ContextProvider>
            <S0 />
            <S1 />
            <S3 />
        </ContextProvider>
    );
}

export default RENDER;