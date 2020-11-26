import React from 'react';
import { View, Text } from 'react-native';

const RENDER = () => {
    React.useEffect(() => console.log('S0'));

    const ThemeContext = React.useContext(require('./CONTEXTS/Context').ThemeContext);
    const TestContext = React.useContext(require('./CONTEXTS/Context').TestContext);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', padding: 10, backgroundColor: 'blue' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>S0 Theme {ThemeContext.color}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>S0 Test {TestContext.data}</Text>
        </View>
    );
}

export default RENDER;