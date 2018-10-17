import React from 'react';
import {Text, View} from 'react-native';

class LostAndFoundScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>This is the page to get back the username and password.</Text>
            </View>
        );
    }
}

module.exports = LostAndFoundScreen;