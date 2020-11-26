import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


const RENDER = () => {

    React.useEffect(() => console.log('S11'));

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', padding: 10, backgroundColor: 'orange' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>S11</Text>
        </View>
    );
}

export default RENDER;