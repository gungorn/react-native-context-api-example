import React from 'react';
import { View, Text } from 'react-native';

import CONTEXT1 from './CONTEXT1';

const RENDER = () => {

    React.useEffect(() => console.log('S0'));

    return (
        <CONTEXT1.Consumer>
            {x => (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', padding: 10, backgroundColor: 'blue' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>S0 {x.data}</Text>
                </View>
            )}
        </CONTEXT1.Consumer>
    );
}

export default RENDER;