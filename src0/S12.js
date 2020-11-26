import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


import S121 from './S121';

const RENDER = () => {

    React.useEffect(() => console.log('S12'));

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', padding: 10, backgroundColor: 'purple' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>S12</Text>

            <S121 />
        </View>
    );
}

export default RENDER;