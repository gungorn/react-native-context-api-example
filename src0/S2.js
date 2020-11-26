import React from 'react';
import { View, Text } from 'react-native';


const RENDER = () => {

    React.useEffect(() => console.log('S2'));

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', padding: 10, backgroundColor: 'yellow' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>S2</Text>
        </View>
    );
}

export default RENDER;