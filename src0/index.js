import React from 'react';
import { View, Text } from 'react-native';

import S0 from './S0';
import S1 from './S1';
import S2 from './S2';
import S3 from './S3';

import CONTEXT1 from './CONTEXT1';


const RENDER = () => {
    const [data, setData] = React.useState('default'); //bu state'e, provider içerisinde her yerden erişilebilir

    const value = {
        data,
        setData: (x) => setData(x || 'test')
    }
    React.useEffect(() => setTimeout(() => setData('ABC'), 2000), []);
    React.useEffect(() => console.log('index'));

    return (
        <CONTEXT1.Provider value={value}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: 'red' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>INDEX</Text>

                <S0 />
                <S1 />
                <S2 />
            </View>
        </CONTEXT1.Provider>
    );
}

export default RENDER;