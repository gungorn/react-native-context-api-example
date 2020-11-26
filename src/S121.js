import React from 'react';
import { View, Text } from 'react-native';

const RENDER = () => {
    React.useEffect(() => console.log('S121'));

    const ThemeContext = React.useContext(require('./CONTEXTS/Context').ThemeContext);
    const TestContext = React.useContext(require('./CONTEXTS/Context').TestContext);

    console.log('ThemeContext', ThemeContext);
    console.log('TestContext', TestContext);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', padding: 10, backgroundColor: 'gray' }}>
            <Text onPress={() => ThemeContext.setBlue()} style={{ fontWeight: 'bold', fontSize: 20 }}>S121 Theme {ThemeContext.color}</Text>
            <Text onPress={() => ThemeContext.setBlue()} style={{ fontWeight: 'bold', fontSize: 20 }}>S121 Test {ThemeContext.color}</Text>
        </View>
    );
}

export default RENDER;