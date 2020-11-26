import React from 'react';

import ThemeContextProvider from './ThemeContext/Provider';
import TestContextProvider from './TestContext/Provider';


export default props => (
    <TestContextProvider>
        <ThemeContextProvider>
            {props.children}
        </ThemeContextProvider>
    </TestContextProvider>
);