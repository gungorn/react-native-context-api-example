import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import S11 from './S11';
import S12 from './S12';

const RENDER = () => {

    React.useEffect(() => console.log('S1'));

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', padding: 10, backgroundColor: 'green' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>S1</Text>

            <S11 />
            <S12 />
        </View>
    );
}

export default RENDER;