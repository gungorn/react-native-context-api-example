import React from 'react';
import { View, Text } from 'react-native';

import CONTEXT1 from './CONTEXT1';

const RENDER = () => {

    React.useEffect(() => console.log('S121'));

    const { data, setData } = React.useContext(CONTEXT1); //hook ile kullanım

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', padding: 10, backgroundColor: 'gray' }}>
            <Text onPress={() => setData(new Date().getTime())} style={{ fontWeight: 'bold', fontSize: 20 }}>S121 {data}</Text>
        </View>
    );

    return ( //hook olmadan kullanım
        <CONTEXT1.Consumer>
            {x => (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', padding: 10, backgroundColor: 'gray' }}>
                    <Text onPress={() => x.setData(new Date().getTime())} style={{ fontWeight: 'bold', fontSize: 20 }}>S121 {x.data}</Text>
                </View>
            )}
        </CONTEXT1.Consumer>
    );
}

export default RENDER;