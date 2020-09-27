import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ route, navigation }) {

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>{route.params.title} - {route.params.rating} stars</Text>
            <Text>Developer: {route.params.developer}</Text>
            <Text style={globalStyles.paragraph}>"{route.params.body}"</Text>
            <Text>- {route.params.critic}</Text>
        </View>
    );
}
